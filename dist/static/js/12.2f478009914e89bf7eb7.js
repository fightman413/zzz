webpackJsonp([12],{"1P3D":function(e,t){},BU6L:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("C7Kb"),n=a("rVsN"),r=a.n(n),s={musicCreate:function(e){var t=e.PostContent;return t.songs_name&&t.singer?t.MusicCode?axios.post(REQUEST_URL.musicCreate,REQUEST_URL.handleParams(e)).then(function(e){return r.a.resolve(e.data.PostContent)}):r.a.reject({Msg:"请输入参数权限码",type:"local"}):r.a.reject({Msg:"请输入参数名称",type:"local"})},MusicUpdate:function(e){var t=e.PostContent;return t.songs_name&&t.singer?t.MusicCode?axios.post(REQUEST_URL.MusicUpdate,REQUEST_URL.handleParams(e)).then(function(e){return r.a.resolve(e.data.PostContent)}):r.a.reject({Msg:"请输入参数权限码",type:"local"}):r.a.reject({Msg:"请输入参数名称",type:"local"})},paramsDetailGetSingle:function(e){return axios.post(REQUEST_URL.paramsDetailGetSingle,REQUEST_URL.handleParams(e)).then(function(e){return r.a.resolve(e.data.PostContent)})},musicDelete:function(e){return axios.post(REQUEST_URL.musicDelete,REQUEST_URL.handleParams(e)).then(function(e){return r.a.resolve(e.data.PostContent)})},musicGetList:function(e){return axios.post(REQUEST_URL.musicGetList,REQUEST_URL.handleParams(e)).then(function(e){return r.a.resolve(e.data.PostContent)})}},l=function(e){return e||{MusicCode:"",songs_name:"",singer:"",songs_id:"",MusicParentParamID:"",MusicParentParamCode:"",MusicParentParam:"",song_file_url:"",song_image_url:"",uploadStatus:null,uploadList:[],ShowOnIndex:!1,edit:!1}},i={name:"addMusic",components:{SubNavigationFrame:o.a},data:function(){return{breadcrumbs:[{title:this.$route.query.paramsName}],paramsModal:!1,tableData:[],createModal:l(),columns:[{title:"序号",type:"index",width:120},{title:"歌名",key:"songs_name"},{title:"歌手",key:"singer"},{title:"操作",align:"center",render:this.toolColumnRender}],createDetailRules:{songs_name:[{required:!0,message:"请输入歌名"}],singer:[{required:!0,message:"请输入歌手"}],MusicCode:[{required:!0,message:"请输入权限码"}]},filter:{songs_name:this.songs_name,singer:this.singer},uploadUrl:REQUEST_URL.MusicFiles,uploadUrl1:REQUEST_URL.MusicImage,flag:0}},mounted:function(){this.$store.commit("showAdminMenu",!0),this.paramsShowHandler()},methods:{resetFormHandler:function(){this.createModal=l(),this.popModal=!0},handleBeforeUploadNum:function(e,t){return e?e.$props.maxSize&&t.size/1024>e.$props.maxSize?(this.handleError({Msg:"文件体积过大，无法上传",State:-1},t,this.createModal.uploadList),!1):(this.createModal.uploadStatus=this.$Message.loading({content:"正在上传文档，请稍等...",duration:0}),void(this.createModal.uploadList.length&&this.$refs.uploadFileRef.clearFiles())):(this.handleError({Msg:"无法获取上传组件",State:-1},t,this.createModal.uploadList),!1)},handleSuccess:function(e,t,a){if(console.log(t),1!=e.State)return this.handleError(e,t,a),a.splice(a.length-1,1);if(this.createModal.uploadStatus(),this.createModal.uploadStatus=null,1!=e.State)return this.handleError(e,t,a),a.splice(a.length-1,1);var o=this.createModal;1==this.flag?(console.log("mp3"),o.song_file_url=t.response.PostContent.Address):(console.log("fdf"),o.song_image_url=t.response.PostContent.Address)},handleFormatError:function(e,t){this.createModal.uploadStatus(),this.createModal.uploadStatus=null,this.$Message.warning("文件格式错误，请重新上传")},handleError:function(e,t,a){this.createModal.uploadStatus(),this.createModal.uploadStatus=null,this.$Message.warning(e&&e.Msg||"文件上传失败")},handleMaxSize:function(e){this.createModal.uploadStatus(),this.createModal.uploadStatus=null,this.$Message.warning("超出文件大小限制，文档不能超过 15M")},toolColumnRender:function(e,t){var a=this;return e("div",[e("Button",{props:{type:"text"},domProps:{innerText:"编辑"},on:{click:function(e){a.createModal=l({songs_name:t.row.songs_name,singer:t.row.singer,MusicCode:t.row.MusicCode,MusicParentParam:t.row.detailParentParam,MusicParentParamID:a.$route.query.id,MusicParentParamCode:a.$route.query.Code,edit:!0,songs_id:t.row.songs_id}),a.paramsModal=!0,e.stopPropagation(),e.stopPropagation()}}}),e("Button",{props:{type:"text"},domProps:{innerText:"删除"},on:{click:function(e){a.deleteDetailHandler(t.row.songs_id),e.stopPropagation()}}})])},paramsShowHandler:function(){var e=this,t=objectCopy(this.filter);for(var a in t)t[a]||delete t[a];s.MusicGetList({PostContent:{filter:t}}).then(function(t){e.tableData=t,console.log(e.tableData)}).catch(function(t){e.$Message.error(t)})},addDetailHandler:function(){var e=this;s.MusicCreate({PostContent:this.createModal}).then(function(t){console.log(e.createModal),e.paramsModal=!1,e.paramsShowHandler()}).catch(function(t){console.log("ww111"),e.$Message.error(t)})},updateDetailHandler:function(){var e=this;s.MusicUpdate({PostContent:this.createModal}).then(function(t){e.paramsModal=!1,e.paramsShowHandler()}).catch(function(t){e.$Message.error(t)})},deleteDetailHandler:function(e){var t=this;if(!e)return this.$Message.warning("参数ID为空，无法删除！！！");this.$Modal.confirm({title:"操作确认",icon:"warning",content:"是否删除此参数",okText:"确定",showCancel:!0,loading:!0,onOk:function(){s.musicDelete({PostContent:{songs_id:e}}).then(function(e){t.$Message.success("成功删除参数！！！"),t.$Modal.remove(),t.paramsShowHandler()}).catch(function(e){t.$Modal.remove(),t.$Message.error(e)})}})}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("sub-navigation-frame",{attrs:{title:e.$route.query.paramsName,breadcrumb:e.breadcrumbs}},[a("div",{style:{textAlign:"right",marginTop:"-2.5rem"},attrs:{slot:"navigation"},slot:"navigation"},[a("Button",{on:{click:function(t){return e.$router.push({name:"Index"})}}},[e._v("返回主站")]),e._v(" "),a("Button",{on:{click:function(t){return e.$router.go(-1)}}},[e._v("返回")])],1),e._v(" "),a("div",{staticClass:"sub-page-container",style:{"margin-top":".5rem","padding-top":"1rem"},attrs:{slot:"content"},slot:"content"},[a("Row",[a("Col",{attrs:{span:"8"}},[a("div",{style:{marginBottom:".7rem"}},[a("Button",{attrs:{type:"primary"},on:{click:function(t){e.paramsModal=!0}}},[a("Icon",{attrs:{type:"md-add"}}),e._v("添加音乐")],1)],1)])],1),e._v(" "),a("Table",{attrs:{columns:e.columns,data:e.tableData}}),e._v(" "),a("Modal",{attrs:{title:"编辑"+e.$route.query.paramsName,width:"600"},on:{"on-visible-change":function(t){return e.$refs.createForm.resetFields()}},model:{value:e.paramsModal,callback:function(t){e.paramsModal=t},expression:"paramsModal"}},[a("div",[a("Form",{ref:"createForm",attrs:{model:e.createModal,rules:e.createDetailRules}},[a("Row",[a("Col",{attrs:{span:"24"}},[a("FormItem",{staticClass:"item-box",attrs:{label:"歌曲名称：",prop:"songs_name"}},[a("Input",{attrs:{placeholder:"请输入歌名"},model:{value:e.createModal.songs_name,callback:function(t){e.$set(e.createModal,"songs_name",t)},expression:"createModal.songs_name"}})],1)],1),e._v(" "),a("Col",{attrs:{span:"24"}},[a("FormItem",{staticClass:"item-box",attrs:{label:"歌手：",prop:"singer"}},[a("Input",{attrs:{placeholder:"请输入歌手"},model:{value:e.createModal.singer,callback:function(t){e.$set(e.createModal,"singer",t)},expression:"createModal.singer"}})],1)],1),e._v(" "),a("Col",{attrs:{span:"24"}},[a("FormItem",{staticClass:"item-box",attrs:{label:"歌曲："}},[a("Upload",{ref:"uploadmusic",style:{display:"inline-block"},attrs:{action:e.uploadUrl,format:["mp3"],"max-size":1e5,"before-upload":function(t){return e.handleBeforeUploadNum(e.$refs.uploadmusic,t)},"on-success":e.handleSuccess,"on-format-error":e.handleFormatError,"on-error":e.handleError,"on-exceeded-size":e.handleMaxSize,"show-upload-list":!0,paste:""}},[a("Button",{attrs:{icon:"ios-cloud-upload-outline"},on:{click:function(t){e.flag=1}}},[e._v("上传歌曲")])],1)],1)],1),e._v(" "),a("Col",{attrs:{span:"24"}},[a("FormItem",{staticClass:"item-box",attrs:{label:"配图：",prop:"ContractTemplateName"}},[a("Upload",{ref:"uploadimage",style:{display:"inline-block"},attrs:{action:e.uploadUrl1,format:["jpg","png","jpeg","mp3"],"max-size":1e5,"before-upload":function(t){return e.handleBeforeUploadNum(e.$refs.uploadimage,t)},"on-success":e.handleSuccess,"on-format-error":e.handleFormatError,"on-error":e.handleError,"on-exceeded-size":e.handleMaxSize,"show-upload-list":!0,paste:""}},[a("Button",{attrs:{icon:"ios-cloud-upload-outline"},on:{click:function(t){e.flag=0}}},[e._v("上传配图")])],1)],1)],1),e._v(" "),a("Col",{attrs:{span:"24"}},[a("FormItem",{staticClass:"item-box",attrs:{label:"权限码：",prop:"MusicCode"}},[a("Input",{attrs:{placeholder:"请输入权限码"},model:{value:e.createModal.MusicCode,callback:function(t){e.$set(e.createModal,"MusicCode",t)},expression:"createModal.MusicCode"}})],1)],1)],1)],1)],1),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"primary"},on:{click:function(t){e.createModal.edit?e.updateDetailHandler():e.addDetailHandler()}}},[e._v("确定")]),e._v(" "),a("Button",{on:{click:function(t){e.paramsModal=!1}}},[e._v("取消")])],1)])],1)])},staticRenderFns:[]};var u=a("C7Lr")(i,c,!1,function(e){a("1P3D")},"data-v-3000c098",null);t.default=u.exports}});
//# sourceMappingURL=12.2f478009914e89bf7eb7.js.map