webpackJsonp([0],{"8HK/":function(e,t){},C7Kb:function(e,t,n){"use strict";var o={props:{},data:function(){return{UserName:""}},computed:{pageNavShrink:function(){return this.$store.state.pageNavShrink},IsLogin:function(){return this.$store.state.IsLogin},userInfo:function(){return this.$store.state.UserInfo},userHeadImg:function(){return this.userInfo?""+REQUEST_URL.staticDownload+this.userInfo.UserHeadImg:""},showMenu:function(){return this.$store.state.showMenu}},mounted:function(){},methods:{userToolHandler:function(e){var t=this;if("userinfo"==e&&this.$router.push({name:"login"}),"register"==e&&this.$router.push({name:"register"}),"usersettings"==e&&this.$router.push({name:"userSettings"}),"logout"==e)this.$Modal.confirm({title:"操作确认",icon:"warning",content:"是否退出登录",okText:"确定",showCancel:!0,loading:!0,onOk:function(){t.$Modal.remove(),localStorage.removeItem("Token"),t.$store.state.IsLogin=!1,t.$store.state.UserInfo=null,localStorage.removeItem("UserInfo"),t.$Message.warning("你已退出登录！！！"),-1!=window.location.href.search("adminDetailPage")&&t.$router.push({name:"blogAdmin"}),-1!=window.location.href.search("userSettings")&&t.$router.push({name:"Index"})}})}}},a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content-navigation-bar",style:{left:e.showMenu?e.pageNavShrink?"3.5rem":"12rem":0,paddingLeft:e.showMenu?null:0}},[e.showMenu?n("Button",{class:{"toggle-lev-nav":!0,mirror:e.pageNavShrink},attrs:{type:"text"},on:{click:function(t){return e.$store.commit("pageNavShrink",!e.$store.state.pageNavShrink)}}},[n("Icon",{attrs:{type:"ios-list"}})],1):e._e(),e._v(" "),n("div",{staticClass:"navigation-tool"},[e._t("navigation"),e._v(" "),n("div",{staticClass:"base-tool"},[e._e(),e._v(" "),n("div",{staticClass:"drop-down-tool"},[n("Dropdown",{on:{"on-click":e.userToolHandler}},[e.userHeadImg?n("img",{attrs:{src:e.userHeadImg}}):n("div",{style:{display:"flex",alignItems:"center"}},[n("Icon",{attrs:{type:"md-contact",size:"36"}})],1),e._v(" "),n("a",{attrs:{href:"javascript:void(0)"}},[e._v("\n                         \n                            "+e._s(e.userInfo?e.userInfo.UserName:"游客")+"\n                            "),n("Icon",{attrs:{type:"md-arrow-dropdown",size:"24"}})],1),e._v(" "),n("DropdownMenu",{directives:[{name:"show",rawName:"v-show",value:e.userInfo,expression:"userInfo"}],style:{textAlign:"center"},attrs:{slot:"list"},on:{"on-click":e.userToolHandler},slot:"list"},[n("DropdownItem",{directives:[{name:"show",rawName:"v-show",value:!e.$store.state.showAdminMenu,expression:"!$store.state.showAdminMenu"}],attrs:{name:"usersettings"}},[e._v("个人信息")]),e._v(" "),n("DropdownItem",{attrs:{name:"logout"}},[e._v("退出登录")])],1),e._v(" "),n("DropdownMenu",{directives:[{name:"show",rawName:"v-show",value:!e.userInfo,expression:"!userInfo"}],style:{textAlign:"center"},attrs:{slot:"list"},on:{"on-click":e.userToolHandler},slot:"list"},[n("DropdownItem",{attrs:{name:"userinfo"}},[e._v("登录")]),e._v(" "),n("DropdownItem",{attrs:{name:"register"}},[e._v("注册")])],1)],1)],1)],1)],2)],1)},staticRenderFns:[]};var s=n("C7Lr")(o,a,!1,function(e){n("8HK/")},null,null).exports,r={props:{title:String,hiddenFooter:{type:Boolean,default:!1},notPadding:{type:Boolean,default:!1},hiddentNavigation:{type:Boolean,default:!1}},components:{ContentNavigationBar:s}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["frame-container",e.hiddenFooter&&"hidden-footer",e.notPadding&&"not-padding"],style:{paddingTop:e.hiddentNavigation?0:null}},[n("ContentNavigationBar",{directives:[{name:"show",rawName:"v-show",value:!e.hiddentNavigation,expression:"!hiddentNavigation"}]},[e._t("title",null,{slot:"title"}),e._v(" "),e._t("navigation",null,{slot:"navigation"})],2),e._v(" "),e._t("content"),e._v(" "),e.hiddenFooter?e._e():[e._t("footer",[e._m(0)])]],2)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"frame-container-footer"},[t("p",{staticClass:"label"},[this._v("copyright © 2020 yiming ")]),this._v(" "),t("p",{staticClass:"label"},[this._v("闽ICP备19022827号")])])}]};var l=n("C7Lr")(r,i,!1,function(e){n("MSP9")},null,null).exports,d={props:{breadcrumb:{type:Array,default:function(){return[]}},title:String,hiddenFooter:{type:Boolean,default:!1},hiddenBreadcrumb:{type:Boolean,default:!1},hiddentNavigation:{type:Boolean,default:!1},hiddenBreadAndTitle:{type:Boolean,default:!1},showTitle:{type:Boolean,default:!1}},components:{ContentFrame:l}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentFrame",{attrs:{"not-padding":"","hidden-footer":e.hiddenFooter,"hidden-navigation":e.hiddentNavigation}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.hiddenBreadAndTitle,expression:"!hiddenBreadAndTitle"}],staticClass:"sub-navigation-container"},[n("Breadcrumb",{directives:[{name:"show",rawName:"v-show",value:!e.hiddenBreadcrumb,expression:"!hiddenBreadcrumb"}]},[n("BreadcrumbItem",{attrs:{to:e.$store.state.showAdminMenu?"/adminDetailPage/paramsSettings":"/"}},[e._v("首页")]),e._v(" "),e._l(e.breadcrumb,function(t,o){return n("BreadcrumbItem",{key:o,attrs:{to:t.path}},[e._v(e._s(t.title))])})],2),e._v(" "),n("h2",{directives:[{name:"show",rawName:"v-show",value:!e.showTitle,expression:"!showTitle"}],staticClass:"sub-navigation-title"},[e._v(e._s(e.title))]),e._v(" "),e._t("navigation")],2),e._v(" "),n("div",{staticClass:"sub-navigation-content"},[e._t("content")],2)])])},staticRenderFns:[]};var c=n("C7Lr")(d,u,!1,function(e){n("Fh/5")},null,null);t.a=c.exports},"Fh/5":function(e,t){},MSP9:function(e,t){}});
//# sourceMappingURL=0.06f45af256c61483cebb.js.map