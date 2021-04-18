(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6356"],{7227:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[e.edit?s("v-row",{attrs:{justify:"center"}},[s("CustomerDetails",{attrs:{dialog:e.edit,customerId:e.selectedCustomerId},on:{"update:dialog":function(t){e.edit=t}}})],1):s("v-row",{attrs:{justify:"center"}},[e.ready?s("v-card",{staticClass:"transparent pb-12 px-12",attrs:{flat:""}},[s("v-card-title",[s("table",[s("tbody",[s("tr",[s("td",[s("v-select",{staticStyle:{width:"270px"},attrs:{items:e.statuses,label:"Service status",outlined:"",clearable:"",dense:"",color:"primary"},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}})],1),s("td",[s("v-select",{staticStyle:{width:"180px"},attrs:{items:e.speeds,label:"Service speed",outlined:"",clearable:"",dense:"",color:"primary"},model:{value:e.speed,callback:function(t){e.speed=t},expression:"speed"}})],1),s("td",[s("v-select",{staticStyle:{width:"140px"},attrs:{items:e.plans,label:"Plan",outlined:"",clearable:"",dense:"",color:"primary"},model:{value:e.plan,callback:function(t){e.plan=t},expression:"plan"}})],1),s("td",[s("v-select",{staticStyle:{width:"140px"},attrs:{items:e.postalCodes,label:"Post code",outlined:"",clearable:"",dense:"",color:"primary"},model:{value:e.postCode,callback:function(t){e.postCode=t},expression:"postCode"}})],1)])])])]),s("v-data-table",{attrs:{headers:e.headers,items:e.filteredItems,search:e.search},scopedSlots:e._u([{key:"item.actions",fn:function(t){var a=t.item;return[s("v-btn",{staticClass:"primary",attrs:{outlined:"",dark:""},on:{click:function(t){return e.editItem(a)}}},[e._v("Edit")])]}}],null,!1,16053965)}),s("v-text-field",{staticStyle:{display:"inline-block",width:"280px"},attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"",dense:"",outlined:"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),s("span",{staticClass:"ml-12"},[s("small",[e._v("Total selected customers: "+e._s(e.selectedCustomersNumber))])])],1):e._e()],1)],1)},r=[],n=(s("99af"),s("4de4"),s("d81d"),s("d3b7"),{name:"CustomersList",components:{CustomerDetails:function(){return Promise.all([s.e("chunk-63c79bd4"),s.e("chunk-daa3c264")]).then(s.bind(null,"d97f"))}},data:function(){return{ready:!1,edit:!1,selectedCustomerId:null,data:null,search:"",status:null,speed:null,services:[],plans:[],service:null,plan:null,postCode:null,statuses:["Active","Not connected","Awaiting for connection"],speeds:["50/50","150/150","250/250","500/500","1000/1000"],headers:[{text:"Customer name",align:"start",sortable:!1,value:"name"},{text:"Unique code",value:"uniqueCode"},{text:"Address",value:"address"},{text:"Service speed",value:"serviceSpeed"},{text:"Service status",value:"serviceStatus"},{text:"Plan",value:"plan"},{text:"Approx ETA",value:"approxETA"},{text:"Term",value:"serviceTerm"},{text:"Actions",value:"actions",sortable:!1}]}},computed:{customers:function(){if(this.data)return this.data.map((function(e){return{name:"".concat(e.firstName," ").concat(e.lastName),uniqueCode:e.uniqueCode,postCode:e.postCode,address:"".concat(e.apartmentsNumber,"/").concat(e.address),plan:e.service?e.service.serviceName:"",status:e.service?e.service.status:"",approxETA:e.approxETA,term:e.service?e.service.term:"",id:e._id}}))},postalCodes:function(){return this.customers.map((function(e){return e.postCode}))},selectedCustomersNumber:function(){return this.filteredItems.length},filteredItems:function(){var e=this;return this.status||this.speed||this.postCode||this.plan?this.customers.filter((function(t){return!e.status||t.serviceStatus===e.status})).filter((function(t){return!e.speed||t.serviceSpeed===e.speed})).filter((function(t){return!e.postCode||t.postCode===e.postCode})).filter((function(t){return!e.plan||t.plan===e.plan})):this.customers}},methods:{getData:function(e){console.log(e),this.data=e.result,this.ready=!0},getServices:function(e){this.services=e.result},editItem:function(e){console.log("SELECTED CUSTOMER:\n",e),this.selectedCustomerId=e.id,console.log("SELECTED CUSTOMER ID: ",this.selectedCustomerId),this.edit=!0}},mounted:function(){console.warn("CUSTOMERS LIST MOUNTED"),this.$root.$on("customers-list-received",this.getData),this.$root.$on("services-list-received",this.getServices),this.__getCustomers(),this.__getServices()}}),i=n,l=s("2877"),o=s("6544"),c=s.n(o),d=s("8336"),u=s("b0af"),p=s("99d9"),m=s("a523"),v=s("8fea"),f=s("0fd9"),h=s("b974"),C=s("8654"),b=Object(l["a"])(i,a,r,!1,null,"345eec8a",null);t["default"]=b.exports;c()(b,{VBtn:d["a"],VCard:u["a"],VCardTitle:p["b"],VContainer:m["a"],VDataTable:v["a"],VRow:f["a"],VSelect:h["a"],VTextField:C["a"]})}}]);
//# sourceMappingURL=chunk-2d0d6356.d295afc9.js.map