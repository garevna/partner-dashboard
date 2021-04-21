(()=>{"use strict";var t,e={403:(t,e,s)=>{s.d(e,{q1:()=>o,hB:()=>u,sh:()=>i,ho:()=>r,_j:()=>n,Ch:()=>l});const{buildingsController:a}=s(534),n={host:a.setBuildingsHostURL,key:a.setBuildingsApiKey,init:a.storeBuildings,list:a.getBuildingsList,search:a.searchBuilding,getById:a.getBuildingDataById,getByAddress:a.getBuildingDataByAddress,put:a.putBuildingData,post:a.postBuildingData},r=function(){let t="https://dgtek-staging.herokuapp.com";return function(e){if(!e)return t;t=e}}(),o=function(){let t="";return function(e){if(!e)return t;t=e}}(),i=["lit","footprint","build","soon","other","current"],l={lit:"LIT",footprint:"Footprint",build:"BuildCommenced",soon:"ComingSoon",other:"Other"},u={status:"Footprint",estimatedServiceDeliveryTime:"",coordinates:[0,0],address:"",addressComponents:{number:"",street:"",streetType:"",city:"",state:"",postCode:"",cadastralIdentifier:""},footprint:!1,distanceFromFootprint:0,owner:{corporationName:"",contactPerson:"",corporationPhoneWork:"",corporationPhoneMobile:"",corporationEmailPrimary:"",corporationEmailAlternative:""},management:{managerName:"",managerPhoneWork:"",phoneWork:"",phoneMobile:"",emailPrimary:"",emailAlternative:""},buildingName:"",buildingType:"dwelling=,type=,category=,field=",customerInstallApprovalRequired:!0,inductionRequired:!0,difficultyLevel:{leadInInstallation:0,backboneInstallation:0,customerInstallation:0},infrastructure:{type:"",leadIn:{planned:!1,installed:!1},backbone:{planned:!1,installed:!1},customerAccessCabling:{planned:!1,installed:!1},gPOinMDF:{exist:!1,planned:!1,installed:!1},uPSinMDF:{planned:!1,installed:!1},gPOinRisers:{exist:!1,planned:!1,installed:!1},uPSinRisers:{planned:!1,installed:!1}},files:{design:"",laanInspect:"",laanInstall:"",scope:"",photos:[],approoval:""},numberOfLevels:0,numberOfDwellings:0,avgFloorHeight:0,levels:[{plannedRouter:!1,plannedSplicingBox:!1,plannedSplitter:!1,plannedOFTU:!1,plannedRack:!1,installedRouter:!1,installedSplicingBox:!1,installedSplitter:!1,installedOFTU:!1,installedRack:!1,routerId:""}]}},534:(t,e,s)=>{s.r(e),s.d(e,{buildingsController:()=>g});var a=s(403);const n=()=>new Promise((t=>Object.assign(indexedDB.open("buildings"),{onupgradeneeded:t=>{for(const e of a.sh)t.target.result.createObjectStore(e);return t.target.result},onsuccess:e=>t({status:200,result:e.target.result}),onerror:e=>t({status:700,result:null})}))),r=async(t,e,s)=>new Promise((a=>{n().then((n=>{const{status:r,result:o}=n;if(200!==r)return void a({status:r,result:"Open local DB error"});const i=o.transaction([t],"readwrite").objectStore(t);Object.assign(i.put(s,e),{onsuccess:()=>a({status:200,result:s}),onerror:()=>a({status:708,result:`Local DB saving data error: ${e}`})})}))})),o=(t,e)=>new Promise((s=>{n().then((a=>{const{status:n,result:r}=a;if(200!==n)return void s({status:n,result:null});const o=r.transaction([t]).objectStore(t);Object.assign(o.get(e),{onsuccess:a=>s({status:a.target.result?200:404,result:a.target.result?a.target.result:`The data ${e} not found in db store ${t}`}),onerror:t=>s({status:704,result:t.target.error})})}))})),i=t=>new Promise((e=>{n().then((s=>{const{status:a,result:n}=s;if(200!==a)return void e({status:a,result:null});const r=n.transaction([t],"readwrite").objectStore(t);Object.assign(r.clear(),{onsuccess:t=>e({status:200,result:null}),onerror:s=>e({status:704,result:`Cleaning ${t}: operation failed`})})}))})),l=async t=>{if(!navigator.onLine)return{status:0,result:"Offline mode: Data has not been saved. Try later"};const[e,s]=["getById",t],n=await fetch(`${(0,a.ho)()}/building/${t}`);if(200!==n.status)return{status:n.status,action:e,key:s,result:`Error reading building ${t} data`};const o=(await n.json()).data;return await r("current","data",o),{status:n.status,action:e,store:o.status,key:s,result:o}},u=async t=>{if(!navigator.onLine)return{status:0,result:"Offline mode"};const e="store",s=await fetch(`${(0,a.ho)()}/building`);if(200!==s.status)return{status:s.status,result:"Error reading data from server"};const n=(await s.json()).data;for(const t in a.Ch){const{status:s,result:o}=await i(t),l=n.filter((e=>e.status===a.Ch[t]));for(const s of l){const{address:a,...n}=s,{status:o,result:i}=await r(t,c(a),n);200!==o&&self.postMessage({status:o,action:e,store:t,result:a})}}return{status:200,action:e,result:"Success"}},d=async t=>{const[e,s]=["search",t];for(const n in a.Ch){const{status:a,result:r}=await o(n,t);if(200===a)return{status:a,action:e,store:n,key:s,result:r}}return{status:404,action:e,store,key:s,result:`Building ${t} not found`}},c=function(t){const e=t.indexOf(", Australia");return(-1!==e?t.slice(0,e-t.length):t).toLocaleUpperCase()},g=new class{setBuildingsHostURL(t){self.postMessage((0,a.ho)(t.data))}setBuildingsApiKey(t){self.postMessage((0,a.q1)(t.data))}async storeBuildings(){self.postMessage(await u())}async getBuildingsList(t){self.postMessage(await(async t=>{const[e,s]=["list",t];if(-1===Object.keys(a.Ch).indexOf(t))return{status:422,action:e,store:s,result:`Invalid request: type ${t} not found`};const{status:r,result:o}=await(i=t,new Promise((t=>{n().then((e=>{const{status:s,result:a}=e;if(200!==s)return void t({status:s,result:null});self.postMessage({status:300,action:"storeName",result:i});const n=a.transaction([i]).objectStore(i);Object.assign(n.getAllKeys(),{onsuccess:e=>t({status:e.target.result?200:404,result:e.target.result?e.target.result:`No one key found in db store ${i}`}),onerror:e=>t({status:704,result:e.target.error})})}))})));var i;return{status:r,store:s,action:e,result:o}})(t.key))}async searchBuilding(t){self.postMessage(await d(t.key))}async getBuildingDataById(t){self.postMessage(await l(t.key))}async getBuildingDataByAddress(t){self.postMessage(await(async t=>{const[e,s]=["getByAddress",t],a=await d(t);if(200!==a.status)return{status:a.status,action:e,key:s,result};const{status:n,store:r,result:o}=await l(a.result._id);return{status:n,action:e,store:a.store,key:s,result:o}})(t.key))}async putBuildingData(t){self.postMessage(await async function(t,e){const s=await l(t);return 200!==s.status?s:(Object.assign(s.result,{...e}),self.postMessage({status:300,store:"test",key:t,result:s.result}),navigator.onLine?(await(await fetch(`${(0,a.ho)()}/building/${t}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:(0,a.q1)()},body:JSON.stringify(s.result)})).json(),await l(t),{status:s.status,result:200===s.status?s.result:"Operation failed"}):{status:0,result:"Offline mode: Data has not been saved. Try later"})}(t.key,t.data))}async postBuildingData(t){self.postMessage(await(async t=>{if(!navigator.onLine)return{status:0,result:"Offline mode: Data has not been saved. Try later"};const e=Object.assign(a.hB,t),s=await fetch(`${(0,a.ho)()}/building`,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:(0,a.q1)()},body:JSON.stringify(e)}),n=(await s.json()).data;if(200===s.status){self.postMessage({status:300,action:"post",key:"new building id",result:n}),await u();const{result:t}=await l(n);return{status:200,action:"post",key:n,result:t}}return{status:s.status,action:"post",result:"Operation failed"}})(t.data))}}}},s={};function a(t){var n=s[t];if(void 0!==n)return n.exports;var r=s[t]={exports:{}};return e[t](r,r.exports,a),r.exports}a.d=(t,e)=>{for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(0,(t=a(403)).ho)("https://dgtek.herokuapp.com"),(0,t.q1)("rAxKIAyY9j3Aq0OZ4TnGHCibU9G6oZZP8NaMOlKeJV9U2qjOKu0xOOQwjw3JzKaewN4DmzQ97aEsUh1XyAsQboJqQpbFpgK0JQkt"),self.onmessage=e=>{const{action:s}=e.data;if(!t._j[s]||"function"!=typeof t._j[s])return self.postMessage({status:422,action:s,result:"Invalid request"});t._j[s](e.data)}})();