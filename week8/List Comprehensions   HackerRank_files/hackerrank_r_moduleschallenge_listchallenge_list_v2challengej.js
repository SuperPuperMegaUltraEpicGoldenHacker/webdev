(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"6l/H":function(e,t,a){},ACly:function(e,t,a){"use strict";a("2Spj"),a("bWfx"),a("f3/d");var n=a("lwsE"),c=a.n(n),i=a("W8MJ"),s=a.n(i),l=a("a1gu"),r=a.n(l),m=a("Nsbk"),o=a.n(m),d=a("PJYZ"),u=a.n(d),b=a("7W2i"),p=a.n(b),f=a("lSNA"),k=a.n(f),v=a("cDcd"),g=a.n(v),h=a("17x9"),E=a.n(h),N=a("2VWb"),C=a("TSYQ"),S=a.n(C),y=a("EfbJ"),w=a("ZaSc"),x=a("eOGF");a("6l/H");Object(x.Q)(["feedback/feedback.*.svg"]);var F=[{text:"Awesome, tell us more!",rating:1,icon:"like",title:"Like it"},{text:"Tell us more",rating:2,icon:"cantsay",title:"Maybe"},{text:"Tell us what went wrong",rating:3,icon:"no",title:"No"}],T=function(e){var t=e.selected,a=(e.clickHandler,e.title),n=e.icon,c=e.assetPath;return g.a.createElement("li",{className:S()("rating",{selected:t},n),onClick:function(){e.clickHandler(e.idxVal)}},g.a.createElement("div",{className:"feedback-img"},g.a.createElement("span",{className:"overlay"}),g.a.createElement("img",{src:c("feedback/feedback-".concat(n,".svg")),className:"feedback-icon"})),g.a.createElement("div",{className:"feedback-title"},a))},R=function(e){function t(e){var a;return c()(this,t),a=r()(this,o()(t).call(this,e)),k()(u()(a),"state",void 0),k()(u()(a),"updateSelection",(function(e){a.setState({selectedRating:e},(function(){a.submitForm()}))})),k()(u()(a),"updateComment",(function(e){a.setState({comment:e.target.value})})),k()(u()(a),"submitForm",(function(e){e&&a.setState({submitting:!0});var t=a.state,n=t.selectedRating,c=t.comment,i=a.props,s=i.postUrl,l=i.onSubmit,r=i.featureId,m=i.appUtil.location.pathname;Object(w.g)({url:s,data:{rating:n+1,description:c,path:m},loadingMessage:!1,success:function(){e&&(a.setState({submitted:!0}),l&&l(r))},error:function(){a.setState({submitting:!1})}})})),k()(u()(a),"renderFeedbackContainer",(function(){var e=a.props,t=e.className,n=e.theme,c=a.state.submitted;return g.a.createElement("div",{className:S()("feedback-modal",t,n)},c?a.renderThanks():a.renderFeedBack())})),a.state={selectedRating:"",comment:"",submitted:!1,submitting:!1},a}return p()(t,e),s()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.featureId,a=e.onSeen;a&&a(t)}},{key:"renderFeedBack",value:function(){var e=this,t=this.props,a=t.appUtil.assetPath,n=t.title,c=t.name,i=t.desc,s=t.onClose,l=t.theme,r=this.state,m=r.selectedRating,o=r.comment,d=(r.submitted,r.submitting),u="theme-m"===l?"ui-btn ui-btn-primary":S()("btn btn-primary btn-flat",{disabled:d}),b="theme-m"===l?"ui-icon-cross":"icon-cancel-small";return g.a.createElement("div",null,g.a.createElement("div",{className:"cancel-icon",onClick:s},g.a.createElement("i",{className:b})),g.a.createElement("div",{className:"banner-img"},g.a.createElement("img",{src:a("feedback/feedback-banner-".concat(c,".svg")),className:"feedback-banner"})),g.a.createElement("h1",{className:"feedback-main-title mdT mdB"},n),i&&g.a.createElement("div",{className:"msT msB feedback-description-light"},i),g.a.createElement("div",{className:"ratings"},g.a.createElement("ul",null,F.map((function(t,n){return g.a.createElement(T,{onClick:e.updateSelection,title:t.title,className:F[m],icon:t.icon,key:n,idxVal:n,clickHandler:e.updateSelection,assetPath:a,selected:t.rating===m+1})})))),g.a.createElement("div",{className:"selected-rating"},F[m]&&F[m].text),"number"==typeof m&&g.a.createElement("div",{className:"submit-form"},g.a.createElement("div",{className:"input-area"},g.a.createElement("textarea",{className:"txt-area",placeholder:"Write a comment (optional)",onChange:this.updateComment,value:o})),g.a.createElement("button",{className:u,onClick:this.submitForm.bind(null,!0)},d?"Submitting..":"Submit")))}},{key:"renderThanks",value:function(){return g.a.createElement("div",{className:"feedback-thanks"},g.a.createElement("div",{className:"thanks-icon"},g.a.createElement("i",{className:"icon-thumbs-up"})),g.a.createElement("div",{className:"thanks-title"},"Thanks for your feedback!"))}},{key:"render",value:function(){var e=this.props,t=e.onClose,a=e.isStandalone;return g.a.createElement("div",null,a?this.renderFeedbackContainer():g.a.createElement(N.a,{open:!0,onClose:t,modalClass:"feedback-modal-wrapper"},this.renderFeedbackContainer()))}}]),t}(g.a.Component);k()(R,"defaultProps",{title:"Love our new upgrade?",name:"default"}),k()(R,"propTypes",{onClose:E.a.func,featureId:E.a.number.isRequired,postUrl:E.a.string.isRequired,theme:E.a.string}),t.a=Object(y.a)(R)}}]);
//# sourceMappingURL=https://preview.hackerrank.com/fcore-assets/sourcemaps/hackerrank_r_modules~challenge_list~challenge_list_v2~challenge~jobs~profile_v2~interview~singletest~library~teams-d144914c11.js.map