(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-141bc8cd"],{"167a":function(t,a,i){},"386b":function(t,a,i){var s=i("5ca1"),e=i("79e5"),n=i("be13"),o=/"/g,r=function(t,a,i,s){var e=String(n(t)),r="<"+a;return""!==i&&(r+=" "+i+'="'+String(s).replace(o,"&quot;")+'"'),r+">"+e+"</"+a+">"};t.exports=function(t,a){var i={};i[t]=a(r),s(s.P+s.F*e((function(){var a=""[t]('"');return a!==a.toLowerCase()||a.split('"').length>3})),"String",i)}},b54a:function(t,a,i){"use strict";i("386b")("link",(function(t){return function(a){return t(this,"a","href",a)}}))},bce7:function(t,a,i){"use strict";var s=i("167a"),e=i.n(s);e.a},f472:function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("vx-card",[i("vs-table",{attrs:{stripe:"",search:"",pagination:"","max-items":"10",data:t.informasi},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.data;return t._l(s,(function(a){return i("vs-tr",{key:a.kode},[i("vs-td",{attrs:{data:a.img}},[i("img",{staticClass:"img-view",attrs:{src:a.img,alt:"img-informasi"}})]),i("vs-td",{attrs:{data:a.caption}},[t._v(" "+t._s(a.caption)+" ")]),i("vs-td",{attrs:{data:a.link}},[t._v(" "+t._s(a.link)+" ")]),i("vs-td",{staticClass:"text-center",attrs:{data:a.aksi}},[i("vx-tooltip",{staticStyle:{display:"inline"},attrs:{text:"Ubah Informasi"}},[i("vs-button",{staticClass:"mr-1",staticStyle:{display:"inline"},attrs:{color:"warning",type:"filled",size:"small",icon:"create"},on:{click:function(i){return t.editData(a.kode,a.caption,a.link,a.img)}}})],1)],1)],1)}))}}])},[i("template",{staticClass:"mb-5",slot:"header"},[i("h1",{staticClass:"mr-2"},[t._v("Data Informasi")]),i("vx-tooltip",{staticStyle:{display:"inline"},attrs:{text:"Tambah Informasi"}},[i("vs-button",{attrs:{radius:"",icon:"create",color:"success",type:"flat",size:"large"},on:{click:t.btnAddInformasi}})],1)],1),i("template",{slot:"thead"},[i("vs-th",{staticClass:"bg-primary text-white",attrs:{"sort-key":"img"}},[t._v(" Foto ")]),i("vs-th",{staticClass:"bg-primary text-white",attrs:{"sort-key":"caption"}},[t._v(" Caption ")]),i("vs-th",{staticClass:"bg-primary text-white",attrs:{"sort-key":"link"}},[t._v(" Link ")]),i("vs-th",{staticClass:"bg-primary text-white text-center",attrs:{"sort-key":"aksi",width:"80px"}},[i("p",{staticClass:"w-full"},[t._v("Aksi")])])],1)],2)],1),i("vs-popup",{staticClass:"holamundo",attrs:{title:"Tambah Informasi",active:t.addNew},on:{"update:active":function(a){t.addNew=a}}},[i("div",{staticClass:"vx-row mb-6"},[i("div",{staticClass:"vx-col w-full"},[i("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"Caption",name:"form.caption","data-vv-validate-on":"blur"},model:{value:t.form.caption,callback:function(a){t.$set(t.form,"caption",a)},expression:"form.caption"}})],1)]),i("div",{staticClass:"vx-row mb-6"},[i("div",{staticClass:"vx-col w-full"},[i("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"Link",name:"form.link","data-vv-validate-on":"blur"},model:{value:t.form.link,callback:function(a){t.$set(t.form,"link",a)},expression:"form.link"}})],1)]),i("div",{staticClass:"vx-row mb-6"},[i("div",{staticClass:"vx-col w-full"},[i("small",{staticClass:"ml-1"},[t._v("Foto")]),i("br"),i("img",{staticClass:"img-default my-2",attrs:{src:t.form.img}}),i("vs-input",{attrs:{type:"file",accept:"image/*"},on:{change:t.handleImage}})],1)]),i("div",{staticClass:"vx-row"},[i("div",{staticClass:"vx-col w-full text-right"},[i("vs-button",{staticClass:"mr-3 mb-2",attrs:{color:"success",disabled:!t.validateFormAdd},on:{click:function(a){return t.addData()}}},[t._v("Simpan")])],1)])]),i("vs-popup",{staticClass:"holamundo",attrs:{title:"Edit Informasi",active:t.Edit},on:{"update:active":function(a){t.Edit=a}}},[i("div",{staticClass:"vx-row mb-6"},[i("div",{staticClass:"vx-col w-full"},[i("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"Caption",name:"form.caption","data-vv-validate-on":"blur"},model:{value:t.form.caption,callback:function(a){t.$set(t.form,"caption",a)},expression:"form.caption"}})],1)]),i("div",{staticClass:"vx-row mb-6"},[i("div",{staticClass:"vx-col w-full"},[i("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:"Link",name:"form.link","data-vv-validate-on":"blur"},model:{value:t.form.link,callback:function(a){t.$set(t.form,"link",a)},expression:"form.link"}})],1)]),i("div",{staticClass:"vx-row mb-6"},[i("div",{staticClass:"vx-col w-full"},[i("small",{staticClass:"ml-1"},[t._v("Foto")]),i("br"),i("img",{staticClass:"img-default my-2",attrs:{src:t.form.img}}),i("vs-input",{attrs:{type:"file",accept:"image/*"},on:{change:t.handleImage}})],1)]),i("div",{staticClass:"vx-row"},[i("div",{staticClass:"vx-col w-full text-right"},[i("vs-button",{staticClass:"mr-3 mb-2",attrs:{color:"success",disabled:!t.validateFormEdit},on:{click:function(a){return t.updateData(t.form.kode)}}},[t._v("Simpan")])],1)])])],1)},e=[],n=(i("b54a"),{data:function(){return{publicPath:"/",addNew:!1,Edit:!1,informasi:[],selectedDate:new Date,form:{kode:"",caption:"",link:"",img:null}}},computed:{validateFormAdd:function(){return!this.errors.any()&&""!=this.form.caption&&""!=this.form.link},validateFormEdit:function(){return!this.errors.any()&&""!=this.form.caption&&""!=this.form.link}},created:function(){this.loadData()},methods:{loadData:function(){var t=this;this.$vs.loading(),this.$http.get("agen/web/informasi").then((function(a){t.informasi=a.data.message})).catch((function(a){t.$vs.loading.close(),t.$swal.fire("Gagal !",a.response.data.message,"error")})).finally((function(){t.$vs.loading.close()}))},btnAddInformasi:function(){this.addNew=!0,this.form.caption="",this.form.link="",this.form.img=null},handleImage:function(t){var a=t.target.files[0];this.createBase64Image(a)},createBase64Image:function(t){var a=this,i=new FileReader;i.onload=function(t){a.form.img=t.target.result},i.readAsDataURL(t)},addData:function(){var t=this;this.$vs.loading();var a={caption:this.form.caption,link:this.form.link,img:this.form.img};this.$http.post("agen/web/informasi/create",a).then((function(a){t.$vs.loading(),"SUKSES"==a.data.status?(t.form.caption="",t.form.link="",t.form.img=null,t.addNew=!1,t.$swal.fire({title:"Success",text:a.data.message,icon:"success"}).then((function(){t.loadData()}))):t.$swal.fire("Gagal !",a.data.message,"error")})).catch((function(a){t.$vs.loading.close(),t.$swal.fire("Gagal !",a.response.data.message,"error")})).finally((function(){t.$vs.loading.close()}))},editData:function(t,a,i,s){this.Edit=!0,this.form.kode=t,this.form.caption=a,this.form.link=i,this.form.img=s},updateData:function(t){var a=this;this.$vs.loading();var i={kode:t,caption:this.form.caption,link:this.form.link,img:this.form.img};this.$http.post("agen/web/informasi/update",i).then((function(t){"SUKSES"==t.data.status?(a.form.kode="",a.form.caption="",a.form.link="",a.form.img=null,a.Edit=!1,a.$swal.fire({title:"Success",text:t.data.message,icon:"success"}).then((function(){a.loadData()}))):a.$swal.fire("Gagal !",t.data.message,"error")})).catch((function(t){a.$vs.loading.close(),a.$swal.fire("Gagal !",t.response.data.message,"error")})).finally((function(){a.$vs.loading.close()}))}}}),o=n,r=(i("bce7"),i("2877")),l=Object(r["a"])(o,s,e,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-141bc8cd.46221363.js.map