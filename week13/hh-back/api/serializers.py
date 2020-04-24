from rest_framework import serializers

from api.models import Company, Vacancy


class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        company = Company.objects.create(name=validated_data.get('name'))
        return company

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance


class CompanySerializer2(serializers.ModelSerializer):
    # name = serializers.CharField(max_length=200)

    class Meta:
        model = Company
        fields = ('id', 'name',)


class VacancySerializer(serializers.ModelSerializer):
    # Nested Serializers
    # company = companySerializer2(read_only=True)
    company_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Vacancy
        fields = ('id', 'name', 'price', 'description', 'company_id',)


class CompanyWithVacanciesSerializer(serializers.ModelSerializer):
    # Vacancys = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    # Vacancys = serializers.StringRelatedField(many=True, read_only=True)
    Vacancies = VacancySerializer(many=True, read_only=True)

    class Meta:
        model = Company
        fields = ('id', 'name', 'Vacancys')
