(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ddc2e"],{8385:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-col",{attrs:{col:"8",md:"8"}},[e("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.desserts,loading:t.loading,"loading-text":t.$t("common.loading"),"server-items-length":t.total,options:t.options},on:{"update:options":function(a){t.options=a}},scopedSlots:t._u([{key:"top",fn:function(){return[e("v-toolbar",{attrs:{flat:"",color:"white"}},[e("v-toolbar-title",[t._v(t._s(t.$t("manager-group-page.table-name")))]),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-spacer"),e("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(a){var o=a.on,i=a.attrs;return[e("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",i,!1),o),[t._v(t._s(t.$t("manager-group-page.add-manger-group")))])]}}]),model:{value:t.add_dialog,callback:function(a){t.add_dialog=a},expression:"add_dialog"}},[e("ValidationObserver",{ref:"ManagerGroupForm"},[e("v-form",{ref:"add_form",on:{submit:t.AddManagerGroup}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v(t._s(t.$t("manager-group-page.add-manger-group")))])]),e("v-card-text",[e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("ValidationProvider",{attrs:{name:t.$t("common.name"),rules:"required|min:3|max:20"},scopedSlots:t._u([{key:"default",fn:function(a){var o=a.errors;return[e("v-text-field",{attrs:{label:t.$t("common.name"),type:"text",required:"","error-messages":o},model:{value:t.ManagerGroupForm.name,callback:function(a){t.$set(t.ManagerGroupForm,"name",a)},expression:"ManagerGroupForm.name"}})]}}])})],1)],1)],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(a){t.add_dialog=!1}}},[t._v(t._s(t.$t("common.cancel")))]),e("v-btn",{attrs:{color:"blue darken-1",text:"",type:"submit"}},[t._v(t._s(t.$t("common.insert")))])],1)],1)],1)],1)],1)],1),e("v-dialog",{attrs:{"max-width":"500px","retain-focus":!1},model:{value:t.edit_dialog,callback:function(a){t.edit_dialog=a},expression:"edit_dialog"}},[e("ValidationObserver",{ref:"EditForm"},[e("v-form",{ref:"edit_form",on:{submit:t.EditManagerGroup}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v(t._s(t.$t("manager-group-page.edit-manger-group")))])]),e("v-card-text",[e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("ValidationProvider",{attrs:{name:t.$t("common.name"),rules:"required|min:3|max:20"},scopedSlots:t._u([{key:"default",fn:function(a){var o=a.errors;return[e("v-text-field",{attrs:{label:t.$t("common.name"),type:"text",required:"","error-messages":o},model:{value:t.EditForm.name,callback:function(a){t.$set(t.EditForm,"name",a)},expression:"EditForm.name"}})]}}])})],1)],1),e("v-row",[[e("v-treeview",{ref:"permission",attrs:{selectable:"",items:t.PermissionItems,active:t.PermissionActive,"open-all":t.open_all},scopedSlots:t._u([{key:"prepend",fn:function(a){var o=a.item;return[e("v-icon",[t._v(" "+t._s(o.icon)+" ")])]}},{key:"label",fn:function(a){var e=a.item;return[t._v(" "+t._s(t.$t("menu."+e.name))+" ")]}}]),model:{value:t.PermissionActive,callback:function(a){t.PermissionActive=a},expression:"PermissionActive"}})]],2)],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(a){t.edit_dialog=!1}}},[t._v(t._s(t.$t("common.cancel")))]),e("v-btn",{attrs:{color:"blue darken-1",text:"",type:"submit"}},[t._v(t._s(t.$t("common.update")))])],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.id",fn:function(a){var o=a.item;return[e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[e("v-icon",t._g({staticClass:"mr-2",attrs:{small:""},on:{click:function(a){return t.GetManagerGroupDetail(o.id)}}},Object.assign({},i)),[t._v(" mdi-pencil ")])]}}],null,!0)},[e("span",[t._v(t._s(t.$t("manager-group-page.edit-manger-group")))])])]}}])})],1)],1)],1)},i=[],r=(e("b0c0"),{data:function(){return{add_dialog:!1,edit_dialog:!1,loading:!0,open_all:!1,Editid:"",options:{page:1,itemsPerPage:10,sortBy:[],sortDesc:[],groupBy:[],groupDesc:[],multiSort:!1,mustSort:!1},ManagerGroupForm:{name:""},EditForm:{name:""},headers:[{text:this.$i18n.t("common.no"),align:"start",sortable:!1,value:"no"},{text:this.$i18n.t("common.name"),value:"name"},{text:this.$i18n.t("common.created_at"),value:"created_at"},{text:this.$i18n.t("common.operate"),value:"id",sortable:!1}],desserts:[],total:0,PermissionItems:[],PermissionActive:[]}},created:function(){this.GetManagerGroup(),this.GetManagerPermission()},watch:{options:{handler:function(){this.GetManagerGroup()},deep:!0},PermissionItems:function(){"undefined"!==typeof this.$refs.permission&&this.$refs.permission.updateAll(!0)}},methods:{GetManagerGroup:function(){var t=this,a=this.$common.SortHandle(this.options);this.$axios.get("/api/v1/ManagerGroup?page="+this.options.page+"&limit="+this.options.itemsPerPage+a).then((function(a){"success"==a.data.status&&(t.desserts=t.$common.DataNoHandle(a.data.data.data,t.options.page,t.options.itemsPerPage),t.total=a.data.data.total),t.loading=!1}))},AddManagerGroup:function(){var t=this;this.$refs.ManagerGroupForm.validate().then((function(a){a&&t.$axios.post("/api/v1/ManagerGroup",t.ManagerGroupForm).then((function(a){"success"==a.data.status&&(t.$common.AxiosHandle(a),t.add_dialog=!1,t.GetManagerGroup())}))}))},GetManagerGroupDetail:function(t){var a=this;this.Editid=t,"undefined"!==typeof this.$refs.edit_form&&(this.$refs.edit_form.reset(),this.$refs.EditForm.reset()),this.$axios.get("/api/v1/ManagerGroup/"+this.Editid).then((function(t){if("success"==t.data.status){var e=a.EditForm;e.name=t.data.data.info.name,a.EditForm=e,a.PermissionActive=t.data.data.permission,a.open_all=!0,a.edit_dialog=!0}}))},EditManagerGroup:function(){var t=this;this.$refs.EditForm.validate().then((function(a){a&&(t.EditForm.permission=t.PermissionActive,t.$axios.put("/api/v1/ManagerGroup/"+t.Editid,t.EditForm).then((function(a){"success"==a.data.status&&(t.$common.AxiosHandle(a),t.edit_dialog=!1,t.GetManagerGroup())})))}))},GetManagerPermission:function(){var t=this;this.$axios.get("/api/v1/Permission").then((function(a){"success"==a.data.status&&(t.PermissionItems=a.data.data)}))}}}),n=r,s=e("2877"),d=e("6544"),l=e.n(d),c=e("8336"),m=e("b0af"),u=e("99d9"),p=e("62ad"),v=e("a523"),g=e("8fea"),f=e("169a"),_=e("ce7e"),h=e("4bd4"),b=e("132d"),x=e("0fd9"),$=e("2fa4"),G=e("8654"),k=e("71d9"),M=e("2a7f"),V=e("3a2f"),P=e("eb2a"),F=Object(s["a"])(n,o,i,!1,null,null,null);a["default"]=F.exports;l()(F,{VBtn:c["a"],VCard:m["a"],VCardActions:u["a"],VCardText:u["c"],VCardTitle:u["d"],VCol:p["a"],VContainer:v["a"],VDataTable:g["a"],VDialog:f["a"],VDivider:_["a"],VForm:h["a"],VIcon:b["a"],VRow:x["a"],VSpacer:$["a"],VTextField:G["a"],VToolbar:k["a"],VToolbarTitle:M["a"],VTooltip:V["a"],VTreeview:P["a"]})}}]);
//# sourceMappingURL=chunk-2d0ddc2e.a8dfb6a8.js.map