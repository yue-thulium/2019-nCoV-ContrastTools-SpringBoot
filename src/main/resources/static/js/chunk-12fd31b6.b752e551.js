(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12fd31b6"],{"57da":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{ref:"upload",staticClass:"outputlist_upload",attrs:{type:"file",accept:".xls,.xlsx"}})])},a=[],r=(n("a434"),n("b0c0"),n("1146")),o=n.n(r),u={data:function(){return{outputs:[]}},mounted:function(){var t=this;this.$refs.upload.addEventListener("change",(function(e){t.readExcel(e)}))},methods:{readExcel:function(t){var e=this,n=this,s=t.target.files;if(console.log(s),s.length<=0)return!1;if(!/\.(xls|xlsx)$/.test(s[0].name.toLowerCase()))return this.$Message.error("上传格式不正确，请上传xls或者xlsx格式"),!1;var a=new FileReader;a.onload=function(s){try{var a=s.target.result,r=o.a.read(a,{type:"binary"}),u=r.SheetNames[0],c=o.a.utils.sheet_to_json(r.Sheets[u]);console.log(c),n.outputs=[];for(var i=0;i<c.length;i++)n.outputs.push(c[i].__EMPTY);console.log(n.outputs);var l=n.outputs;l.splice(0,4),e.postRequest("/chick/daychick",{list:l}).then((function(t){})),e.$refs.upload.value=""}catch(t){return!1}},a.readAsBinaryString(s[0])}}},c=u,i=n("2877"),l=Object(i["a"])(c,s,a,!1,null,"202cb04e",null);e["default"]=l.exports},b0c0:function(t,e,n){var s=n("83ab"),a=n("9bf2").f,r=Function.prototype,o=r.toString,u=/^\s*function ([^ (]*)/,c="name";!s||c in r||a(r,c,{configurable:!0,get:function(){try{return o.call(this).match(u)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-12fd31b6.b752e551.js.map