(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d67a3"],{"735f":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("vx-card",{staticClass:"mb-base"},[e("div",{staticClass:"md:flex my-4"},[e("div",{staticClass:"lg:w-1/6 mt-4 md:mt-0 md:ml-6"},[e("v-select",{attrs:{"data-vv-validate-on":"blur",placeholder:"-- Pilih --",options:t.pilihanA},on:{input:t.updatePilihan},model:{value:t.pilihanASelected,callback:function(a){t.pilihanASelected=a},expression:"pilihanASelected"}})],1),e("div",{staticClass:"lg:w-1/2 mt-4 md:mt-0 md:ml-6"},[e("v-select",{attrs:{"data-vv-validate-on":"blur",placeholder:"-- Pilih --",label:"nama",options:t.pilihanB},model:{value:t.pilihanBSelected,callback:function(a){t.pilihanBSelected=a},expression:"pilihanBSelected"}})],1),e("div",{staticClass:"lg:w-1/6 mt-4 md:mt-0 md:ml-6"},[e("datepicker",{attrs:{"data-vv-validate-on":"blur",placeholder:"-- Tanggal Awal --",minimumView:"day",maximumView:"month",format:"dd MMM yyyy"},model:{value:t.selectedStart,callback:function(a){t.selectedStart=a},expression:"selectedStart"}})],1),e("div",{staticClass:"lg:w-1/6 mt-4 md:mt-0 md:ml-6"},[e("datepicker",{attrs:{"data-vv-validate-on":"blur",placeholder:"-- Tanggal Akhir --",minimumView:"day",maximumView:"month",format:"dd MMM yyyy"},model:{value:t.selectedEnd,callback:function(a){t.selectedEnd=a},expression:"selectedEnd"}})],1),e("div",{staticClass:"mt-4 md:mt-0 md:ml-6"},[e("vs-button",{staticStyle:{display:"inline","margin-right":"30px"},attrs:{disabled:!t.validateForm,radius:"",color:"primary",icon:"search"},on:{click:t.loadDataServer}})],1)])]),e("vx-card",[e("table",{staticClass:"w-full table table-responsive"},[e("thead",[e("tr",[e("th",{staticClass:"bg-primary text-white text-center p-2"},[t._v("TOKO")]),e("th",{staticClass:"bg-primary text-white text-center"},[t._v("JUMLAH HARI")]),e("th",{staticClass:"bg-primary text-white text-center"},[t._v("AKSI")])])]),e("tbody",t._l(t.table,(function(a){return e("tr",{key:a.id,staticClass:"text-center"},[e("td",{staticClass:"text-center"},[t._v(t._s(a.toko))]),e("td",{staticClass:"text-center"},[t._v(t._s(a.hari))]),e("td",[e("vs-button",{staticClass:"mx-auto my-2",attrs:{type:"border",color:"primary",icon:"search"},on:{click:t.detailLaporan}})],1)])})),0)])]),e("vs-popup",{staticClass:"holamundo",attrs:{fullscreen:"",title:"Monitoring Data Omset",active:t.detail},on:{"update:active":function(a){t.detail=a}}},[e("table",{staticClass:"w-full table table-responsive"},[e("thead",[e("tr",[e("th",{staticClass:"bg-primary text-white text-center p-2"},[t._v("TANGGAL")]),e("th",{staticClass:"bg-primary text-white text-center"},[t._v("COCOK")]),e("th",{staticClass:"bg-primary text-white text-center"},[t._v("KETERANGAN")])])]),e("tbody",t._l(t.tableDetail,(function(a){return e("tr",{key:a.id,staticClass:"text-center"},[e("td",{staticClass:"text-center"},[t._v(t._s(a.tgl))]),e("td",[e("div",{staticClass:"centerx"},["Y"==a.cocok?e("vs-chip",{staticClass:"my-2",attrs:{color:"success"}},[t._v("Cocok")]):e("vs-chip",{attrs:{color:"danger"}},[t._v("Tidak Cocok")])],1)]),e("td",{staticClass:"text-center"},[t._v(t._s(a.keterangan))])])})),0)])])],1)},l=[],s=e("fa33"),n={data:function(){return{detail:!1,table:[],tableDetail:[],pilihanA:["Region","Wilayah","Area","Cabang","Toko"],pilihanASelected:null,pilihanB:[],pilihanBSelected:null,selectedStart:null,selectedEnd:null,selectedMonth:new Date}},components:{Datepicker:s["a"]},computed:{validateForm:function(){return!this.errors.any()&&null!=this.pilihanBSelected&&null!=this.selectedStart&&null!=this.selectedEnd}},methods:{updatePilihan:function(t){var a=this;this.$vs.loading(),this.$http.get("toko/"+t).then((function(t){"OK"==t.data.status&&(a.pilihanB=t.data.message)})).catch((function(t){})),setTimeout((function(){a.$vs.loading.close()}),1e3)},loadDataServer:function(){var t=this;this.$vs.loading();var a={kode:this.pilihanBSelected.kode,nama:this.pilihanBSelected.nama,tgl_awal:btoa(this.selectedStart),tgl_akhir:btoa(this.selectedEnd)};this.$http.post("/pos/toko/monitoringDataOmset",a).then((function(a){"SUKSES"==a.data.status?t.table=a.data.message:t.$swal.fire("Gagal !",a.data.message,"error")})).catch((function(t){})).finally((function(){t.$vs.loading.close()}))},detailLaporan:function(){var t=this;this.detail=!0,this.$vs.loading();var a={kode:this.pilihanBSelected.kode,nama:this.pilihanBSelected.nama,tgl_awal:btoa(this.selectedStart),tgl_akhir:btoa(this.selectedEnd)};this.$http.post("/pos/toko/monitoringDataOmsetDetail",a).then((function(a){"SUKSES"==a.data.status?t.tableDetail=a.data.message:t.$swal.fire("Gagal !",a.data.message,"error")})).catch((function(t){})).finally((function(){t.$vs.loading.close()}))}}},c=n,d=e("2877"),o=Object(d["a"])(c,i,l,!1,null,null,null);a["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0d67a3.fdd30a1b.js.map