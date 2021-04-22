(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40a062b5"],{3816:function(t,e,s){"use strict";s("a5ba")},"5d2a":function(t,e,s){"use strict";s("e247")},"78a7":function(t,e,s){"use strict";s("eb62")},"9d01":function(t,e,s){},a5ba:function(t,e,s){},e247:function(t,e,s){},eb62:function(t,e,s){},ec29:function(t,e,s){},ff53:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("fieldset",{staticClass:"mt-4 pa-4"},[t._m(0),s("v-card",{staticClass:"transparent mt-0",attrs:{flat:""}},[s("table",{attrs:{width:"100%"}},[s("tbody",[s("tr",[s("td",{staticClass:"d-none d-md-flex",attrs:{width:"160"}},[t._v(" Residential/commercial ")]),s("td",{attrs:{width:"*",colspan:"2"}},[s("SwitchValues",{staticClass:"mb-8",attrs:{label:"Residential/commercial",value:t.customerType,states:["residential","commercial"],"hide-details":""},on:{"update:value":function(e){t.customerType=e}}})],1)]),t.customerType?s("tr",[s("td",{staticClass:"d-none d-md-flex"},[t._v("Company name")]),s("td",{attrs:{colspan:"2"}},[s("v-text-field",{attrs:{label:"Company name",rules:[t.rules.required],outlined:"",dense:"","hide-details":""},model:{value:t.customer.commercial.companyName,callback:function(e){t.$set(t.customer.commercial,"companyName",e)},expression:"customer.commercial.companyName"}})],1)]):t._e(),t.customerType?s("tr",[s("td",{staticClass:"d-none d-md-flex"},[t._v("Company ABN")]),s("td",{attrs:{colspan:"2"}},[s("v-text-field",{attrs:{label:"Company ABN",rules:[t.rules.required,t.rules.abn],outlined:"",dense:"","hide-details":""},model:{value:t.customer.commercial.companyAbn,callback:function(e){t.$set(t.customer.commercial,"companyAbn",e)},expression:"customer.commercial.companyAbn"}})],1)]):t._e(),s("tr",[s("td",{staticClass:"d-none d-md-flex"}),s("td",[t._v("Apartment number")]),s("td",[t._v("Building address")])]),t.customer?s("tr",[s("td",{staticClass:"d-none d-md-flex"},[t._v("Address")]),s("td",{attrs:{width:"160"}},[s("v-text-field",{attrs:{label:"apt",outlined:"",dense:"","hide-details":""},on:{input:t.changeUniqueCode},model:{value:t.customer.apartmentNumber,callback:function(e){t.$set(t.customer,"apartmentNumber",e)},expression:"customer.apartmentNumber"}})],1),s("td",[s("v-select",{attrs:{items:t.buildings,"hide-details":"",outlined:"",dense:"",label:"address","menu-props":{bottom:!0,offsetY:!0}},on:{input:t.updateBuildingId},model:{value:t.customer.address,callback:function(e){t.$set(t.customer,"address",e)},expression:"customer.address"}})],1)]):t._e(),t._l(t.customerDetailsSchema,(function(e,i){return s("tr",{key:i},[s("td",{staticClass:"d-none d-md-flex"},[t._v(t._s(e.title))]),s("td",{attrs:{colspan:"2"}},[t.textField(e)?s("v-text-field",{attrs:{label:e.title,rules:[e.required?t.rules.required:function(t){return!0},t.rule(e)],outlined:"",dense:"","hide-details":""},on:{input:function(s){return t.update(i,e.value)}},model:{value:e.value,callback:function(s){t.$set(e,"value",s)},expression:"prop.value"}}):t._e(),"mobile"===e.type?s("v-text-field",{attrs:{prefix:"+61",rules:[e.required&&!t.customerDetailsSchema.phoneWork.value?t.rules.required:function(t){return!0},t.rules.mobile],label:"mobile phone number",outlined:"",dense:"","hide-details":""},on:{input:function(s){return t.update(i,e.value)}},model:{value:e.value,callback:function(s){t.$set(e,"value",s)},expression:"prop.value"}}):t._e()],1)])})),s("tr",{staticStyle:{height:"48px"}}),s("tr",{staticStyle:{"margin-top":"48px!important"}},[s("td",{staticClass:"d-none d-md-flex"}),s("td",{staticClass:"text-right",attrs:{colspan:"2"}},[s("v-spacer"),s("v-btn",{staticClass:"mr-2",attrs:{outlined:"",color:"buttons"},on:{click:t.assignNewService}},[t._v("Assign new service")]),s("v-btn",{staticClass:"buttons",attrs:{dark:""},on:{click:t.saveCustomerDetails}},[t._v("Update/save details")])],1)])],2)])])],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("legend",{staticClass:"ml-4"},[s("h5",[t._v("Customer details")])])}],n=(s("99af"),s("b64b"),s("2909")),o=s("f61f"),r=s("ce96"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-switch",{attrs:{inset:"",hint:t.states[0]+"/"+t.states[1],"persistent-hint":"",label:""+(t.localValue?t.states[1]:t.states[0])},model:{value:t.localValue,callback:function(e){t.localValue=e},expression:"localValue"}})},u=[],c={name:"SwitchValues",props:["label","value","states"],computed:{localValue:{get:function(){return this.value},set:function(t){this.$emit("update:value",t)}}},mounted:function(){console.log(this.states)}},d=c,m=s("2877"),h=s("6544"),p=s.n(h),f=(s("0481"),s("4069"),s("5530")),v=(s("ec29"),s("9d01"),s("4de4"),s("45fc"),s("d3b7"),s("25f0"),s("c37a")),g=s("5607"),b=s("a026"),C=b["a"].extend({name:"rippleable",directives:{ripple:g["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),_=s("8547"),y=s("58df");function w(t){t.preventDefault()}var A=Object(y["a"])(v["a"],C,_["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,s=this.internalValue;return this.isMultiple?!!Array.isArray(s)&&s.some((function(s){return t.valueComparator(s,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,s):Boolean(s):this.valueComparator(s,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=v["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:w},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:w},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,s=this.internalValue;if(this.isMultiple){Array.isArray(s)||(s=[]);var i=s.length;s=s.filter((function(s){return!t.valueComparator(s,e)})),s.length===i&&s.push(e)}else s=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(s,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(s,e)?null:e:!s;this.validate(!0,s),this.internalValue=s,this.hasColor=s}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),x=(s("4160"),s("159b"),s("80d2")),$=function(t){var e=t.touchstartX,s=t.touchendX,i=t.touchstartY,a=t.touchendY,n=.5,o=16;t.offsetX=s-e,t.offsetY=a-i,Math.abs(t.offsetY)<n*Math.abs(t.offsetX)&&(t.left&&s<e-o&&t.left(t),t.right&&s>e+o&&t.right(t)),Math.abs(t.offsetX)<n*Math.abs(t.offsetY)&&(t.up&&a<i-o&&t.up(t),t.down&&a>i+o&&t.down(t))};function S(t,e){var s=t.changedTouches[0];e.touchstartX=s.clientX,e.touchstartY=s.clientY,e.start&&e.start(Object.assign(t,e))}function V(t,e){var s=t.changedTouches[0];e.touchendX=s.clientX,e.touchendY=s.clientY,e.end&&e.end(Object.assign(t,e)),$(e)}function O(t,e){var s=t.changedTouches[0];e.touchmoveX=s.clientX,e.touchmoveY=s.clientY,e.move&&e.move(Object.assign(t,e))}function j(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return S(t,e)},touchend:function(t){return V(t,e)},touchmove:function(t){return O(t,e)}}}function B(t,e,s){var i=e.value,a=i.parent?t.parentElement:t,n=i.options||{passive:!0};if(a){var o=j(e.value);a._touchHandlers=Object(a._touchHandlers),a._touchHandlers[s.context._uid]=o,Object(x["x"])(o).forEach((function(t){a.addEventListener(t,o[t],n)}))}}function k(t,e,s){var i=e.value.parent?t.parentElement:t;if(i&&i._touchHandlers){var a=i._touchHandlers[s.context._uid];Object(x["x"])(a).forEach((function(t){i.removeEventListener(t,a[t])})),delete i._touchHandlers[s.context._uid]}}var E={inserted:B,unbind:k},I=E,D=s("0789"),T=s("490a"),N=A.extend({name:"v-switch",directives:{Touch:I},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(f["a"])(Object(f["a"])({},v["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(f["a"])(Object(f["a"])({},this.attrs),this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(f["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(f["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(D["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(T["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===x["w"].left&&this.isActive||t.keyCode===x["w"].right&&!this.isActive)&&this.onChange()}}}),Y=Object(m["a"])(d,l,u,!1,null,null,null),X=Y.exports;p()(Y,{VSwitch:N});var R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{attrs:{flat:""}},[s("v-card-text",[s("v-select",{attrs:{items:t.available,label:t.label},model:{value:t.localValue,callback:function(e){t.localValue=e},expression:"localValue"}})],1)],1)},L=[],F={name:"Selector",props:["label","value","available"],computed:{localvalue:{get:function(){return this.value},set:function(t){this.$emit("update:value",t)}}}},q=F,P=s("b0af"),M=s("99d9"),H=s("b974"),U=Object(m["a"])(q,R,L,!1,null,null,null);U.exports;p()(U,{VCard:P["a"],VCardText:M["b"],VSelect:H["a"]});var G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{attrs:{flat:""}},[s("v-card-text",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.localAddress,expression:"localAddress"}],staticClass:"input-field",style:{borderColor:t.borderColor},attrs:{id:"autocompleteAddress",placeholder:"Address"},domProps:{value:t.localAddress},on:{input:function(e){e.target.composing||(t.localAddress=e.target.value)}}}),s("v-card-text",[t.address?s("p",{staticStyle:{color:"#09b"}},[t._v(t._s(t.address))]):t._e(),t.message?s("p",{staticStyle:{color:"#f50"}},[t._v(t._s(t.message))]):t._e()])],1)],1)},z=[],K=(s("7db0"),s("d81d"),s("b0c0"),s("96cf"),s("1da1")),J=s("ade3"),W={name:"Address",props:["address"],data:function(){return{borderColor:"#bbb",message:"",map:null}},computed:{localAddress:{get:function(){return this.address},set:function(t){this.$emit("update:address",t)}}},methods:{initAutocomplete:function(){var t=0;return new Promise((function e(s,i){30===t++&&i(new Error("Error accessing Google maps API")),window.google&&document.getElementById("autocompleteAddress")?s({inputElement:document.getElementById("autocompleteAddress"),Autocomplete:window.google.maps.places.Autocomplete}):setTimeout((function(){return e(s,i)}),100)}))},getAddressComponents:function(t){var e=this;if(!t.geometry)return this.borderColor="#900",this.message="Invalid address",{street:"",locality:"",admin1:"",admin2:"",postCode:""};this.message="",this.$emit("update:address",t.formatted_address),this.$emit("update:coordinates",[t.geometry.location.lng(),t.geometry.location.lat()]);var s=[{name:"subnumber",value:"subpremise"},{name:"number",value:"street_number"},{name:"street",value:"route"},{name:"city",value:"locality"},{name:"state",value:"administrative_area_level_1"},{name:"admin",value:"administrative_area_level_2"},{name:"postCode",value:"postal_code"}].map((function(s){return Object(J["a"])({},s.name,e.getInfo(s.value,t.address_components))}));this.$emit("update:properties",Object.assign.apply(Object,[{}].concat(Object(n["a"])(s))))},getInfo:function(t,e){var s=e.find((function(e){return e.types[0]===t}));return s?s.short_name:""},initAddressInputField:function(){var t=this;return Object(K["a"])(regeneratorRuntime.mark((function e(){var s,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.initAutocomplete();case 3:s=e.sent,i=s.inputElement,a=s.Autocomplete,e.next=12;break;case 8:return e.prev=8,e.t0=e["catch"](0),console.warn(e.t0),e.abrupt("return");case 12:t.autocomplete=new a(i,{componentRestrictions:{country:"au"}}),t.autocomplete.addListener("place_changed",(function(t){var e=this.autocomplete.getPlace();this.getAddressComponents(e);var s=e.geometry.location;this.$emit("update:coordinates",[s.lng(),s.lat()])}));case 14:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},mounted:function(){setTimeout(this.initAddressInputField.bind(this),1e3)}},Q=W,Z=(s("3816"),Object(m["a"])(Q,G,z,!1,null,null,null));Z.exports;p()(Z,{VCard:P["a"],VCardText:M["b"]});var tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{attrs:{flat:""}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.localAddress,expression:"localAddress"}],staticClass:"input-field",style:{borderColor:t.borderColor},attrs:{id:"autocompleteAddress",placeholder:"Address"},domProps:{value:t.localAddress},on:{input:function(e){e.target.composing||(t.localAddress=e.target.value)}}})])},et=[],st={name:"InputWithAutocomplete",props:["address","properties"],data:function(){return{borderColor:"#bbb",message:""}},computed:{localAddress:{get:function(){return this.address},set:function(t){this.$emit("update:address",t)}}},methods:{initAutocomplete:function(){var t=0;return new Promise((function e(s,i){30===t++&&i(new Error("Error accessing Google maps API")),window.google&&document.getElementById("autocompleteAddress")?s({inputElement:document.getElementById("autocompleteAddress"),Autocomplete:window.google.maps.places.Autocomplete}):setTimeout((function(){return e(s,i)}),100)}))},getAddressComponents:function(t){var e=this;if(!t.geometry)return this.borderColor="#900",this.message="Invalid address",{street:"",locality:"",admin1:"",admin2:"",postCode:""};this.message="",this.$emit("update:address",t.formatted_address),this.$emit("update:coordinates",[t.geometry.location.lng(),t.geometry.location.lat()]);var s=[{name:"subnumber",value:"subpremise"},{name:"number",value:"street_number"},{name:"street",value:"route"},{name:"city",value:"locality"},{name:"state",value:"administrative_area_level_1"},{name:"admin",value:"administrative_area_level_2"},{name:"postCode",value:"postal_code"}].map((function(s){return Object(J["a"])({},s.name,e.getInfo(s.value,t.address_components))}));this.$emit("update:properties",Object.assign.apply(Object,[{}].concat(Object(n["a"])(s))))},getInfo:function(t,e){var s=e.find((function(e){return e.types[0]===t}));return s?s.short_name:""},initAddressInputField:function(){var t=this;return Object(K["a"])(regeneratorRuntime.mark((function e(){var s,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.initAutocomplete();case 3:s=e.sent,i=s.inputElement,a=s.Autocomplete,e.next=12;break;case 8:return e.prev=8,e.t0=e["catch"](0),console.warn(e.t0),e.abrupt("return");case 12:t.autocomplete=new a(i,{componentRestrictions:{country:"au"}}),t.autocomplete.addListener("place_changed",function(t){var e=this.autocomplete.getPlace();this.getAddressComponents(e),this.$emit("update:address",this.localAddress);var s=this.getAddressComponents(e);this.$emit("update:properties",s)}.bind(t));case 14:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},mounted:function(){setTimeout(this.initAddressInputField.bind(this),1e3)}},it=st,at=(s("78a7"),Object(m["a"])(it,tt,et,!1,null,null,null));at.exports;p()(at,{VCard:P["a"]});s("4613");var nt=o["c"].customerDetails,ot=o["c"].commercial,rt={name:"EditCustomerDetails",components:{SwitchValues:X},props:{initialCustomer:Object},data:function(){return{customer:null,customerDetailsSchema:nt,buildingData:null,commercialSchema:ot,rules:o["h"],buildings:[],customerType:null}},watch:{customerType:{handler:function(t,e){!t||this.customer.commercial&&Object.keys(this.customer.commercial)||(this.customer.commercial=this.commercialSchema)}},customer:{deep:!0,immediate:!0,handler:function(t){console.log("CUSTOMER:\n",t)}}},methods:{changeUniqueCode:function(){this.createCustomerCode()},update:function(t,e){this.customer[t]=e},createBuildingCode:function(t){return Object(r["a"])(t)},createCustomerCode:function(t){return"".concat(Object(r["a"])(t),".").concat(this.customer.apartmentNumber)},updateBuildingId:function(){console.log(this.customer.address),this.__getBuildingByAddress(this.customer.address)},getBuildingDetails:function(t){console.log("BUILDING DETAILS:\n",t),console.log("BUILDING ADDRESS: ",t.address),this.customer.buildingId=t._id,this.customer.postCode=t.addressComponents.postCode,this.customer.uniqueCode="".concat(Object(r["a"])(t.addressComponents),".").concat(this.customer.apartmentNumber||0),this.customerDetailsSchema.uniqueCode.value=this.customer.uniqueCode},rowHeight:function(t){return"textarea"===t.type?160:60},textField:function(t){return Object(r["c"])(t.type)},rule:function(t){return this.rules[t.type]},createSchema:function(){for(var t in this.customer.commercial&&Object.keys(this.customer.commercial).length>0&&(this.customerType=!0,this.commercialSchema.companyName.value=this.customer.commercial.companyName,this.commercialSchema.companyAbn.value=this.customer.commercial.companyAbn),this.customerDetailsSchema=o["c"].customerDetails,this.customerDetailsSchema)this.customerDetailsSchema[t].value=this.customer[t]},getCustomerData:function(t){this.customer=t.result,this.createSchema();var e=t.result.buildingId;e&&this.__getBuildingById(e)},getBuildings:function(t){var e;(e=this.buildings).push.apply(e,Object(n["a"])(t))},assignNewService:function(){},saveCustomerDetails:function(){this.customerType||(this.customer.commercial={}),console.log(this.customer),this.customer._id?this.__putCustomer(this.customer._id,this.customer):this.__postCustomer(this.customer)},close:function(){this.$parent.$emit("update:initialCustomer",this.customer)}},beforeDestroy:function(){this.$root.$off("building-data-received",this.getBuildingDetails),this.$root.$off("lit-buildings-list",this.getBuildings),this.$root.$off("footprint-buildings-list",this.getBuildings),this.$root.$off("customer-updated",this.close)},mounted:function(){this.customer=this.initialCustomer,this.buildings=[this.customer.address],this.createSchema(),console.log(this.customer.address),this.customer.buildingId&&this.__getBuildingById(this.customer.buildingId),this.$root.$on("building-data-received",this.getBuildingDetails),this.$root.$on("lit-buildings-list",this.getBuildings),this.$root.$on("footprint-buildings-list",this.getBuildings),this.$root.$on("customer-updated",this.close),this.__getLitBuildings(),this.__getFootprintBuildings()}},lt=rt,ut=(s("5d2a"),s("8336")),ct=s("2fa4"),dt=s("8654"),mt=Object(m["a"])(lt,i,a,!1,null,"55b9f2dd",null);e["default"]=mt.exports;p()(mt,{VBtn:ut["a"],VCard:P["a"],VSelect:H["a"],VSpacer:ct["a"],VTextField:dt["a"]})}}]);
//# sourceMappingURL=chunk-40a062b5.3661c1af.js.map