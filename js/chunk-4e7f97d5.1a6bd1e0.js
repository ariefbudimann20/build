(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e7f97d5"],{4281:function(t,e,a){"use strict";var s=a("ec8b"),i=a.n(s);i.a},ec8b:function(t,e,a){},f8e8:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"1"},[a("vx-card",{staticClass:"mb-base"},[a("div",{staticClass:"md:flex"},[a("div",{staticClass:"lg:w-1/5 mt-4 md:mt-0"},[a("v-select",{attrs:{"data-vv-validate-on":"blur",placeholder:"-- Pilih --",options:t.pilihanA},on:{input:t.updatePilihan},model:{value:t.pilihanASelected,callback:function(e){t.pilihanASelected=e},expression:"pilihanASelected"}})],1),a("div",{staticClass:"lg:w-2/5 mt-4 md:mt-0 md:ml-4"},[a("v-select",{attrs:{"data-vv-validate-on":"blur",placeholder:"-- Pilih --",label:"nama",options:t.pilihanB},model:{value:t.pilihanBSelected,callback:function(e){t.pilihanBSelected=e},expression:"pilihanBSelected"}})],1),a("div",{staticClass:"lg:w-1/4 mt-4 md:mt-0 md:ml-4"},[a("datepicker",{attrs:{"data-vv-validate-on":"blur",placeholder:"-- Bulan --",minimumView:"month",maximumView:"year",format:"MMMM yyyy"},model:{value:t.monthSelected,callback:function(e){t.monthSelected=e},expression:"monthSelected"}})],1),a("div",{staticClass:"w-10 mt-4 md:mt-0 md:ml-4"},[a("vs-button",{staticStyle:{display:"inline","margin-right":"30px"},attrs:{disabled:!t.validateForm,radius:"",color:"primary",icon:"search"},on:{click:t.loadDataServer}})],1)])]),a("vx-card",{directives:[{name:"show",rawName:"v-show",value:t.cardShow,expression:"cardShow"}],staticClass:"mb-base"},[a("vs-button",{staticClass:"float-right mb-2 px-3 pt-1 pb-0",attrs:{size:"small",color:"grey"},on:{click:t.printThis}},[a("feather-icon",{attrs:{icon:"CopyIcon"}})],1),a("div",{ref:"printcontent",staticClass:"p-2"},[a("h5",[t._v(t._s(t.title))]),a("div",{staticClass:"w-full"},[a("vs-table",{attrs:{data:t.sales},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.data;return t._l(s,(function(e,i){return a("vs-tr",{key:i,attrs:{state:""==s[i].periode?"primary":null,data:e}},[a("vs-td",{style:""==s[i].periode?"padding: 0px; border: 0px; border-bottom: 1px solid #DDDDDD;":"border: 0px; border-bottom: 1px solid #DDDDDD;",attrs:{data:s[i].periode}},[t._v(" "+t._s(s[i].periode)+" ")]),a("vs-td",{staticClass:"text-center",style:""==s[i].periode?"padding: 0px; border: 0px; border-bottom: 1px solid #DDDDDD;":"border: 0px; border-bottom: 1px solid #DDDDDD;",attrs:{data:s[i].now_omset}},[a("span",[t._v(t._s(s[i].now_omset.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")))]),a("br"),a("small",{staticClass:"text-grey"},[t._v(t._s(s[i].now_not))])]),a("vs-td",{staticClass:"text-center",style:""==s[i].periode?"padding: 0px; border: 0px; border-bottom: 1px solid #DDDDDD;":"border: 0px; border-bottom: 1px solid #DDDDDD;",attrs:{data:s[i].past_omset}},[a("span",[t._v(t._s(s[i].past_omset.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")))]),t._v(" "),a("br"),a("small",{staticClass:"text-grey"},[t._v(t._s(s[i].past_not))])]),a("vs-td",{staticClass:"text-center",style:""==s[i].periode?"padding: 0px; border: 0px; border-bottom: 1px solid #DDDDDD;":"border: 0px; border-bottom: 1px solid #DDDDDD;",attrs:{data:s[i].growth}},[parseInt(s[i].now_omset)>parseInt(s[i].past_omset)?a("div",{staticClass:"mt-3"},[a("span",[t._v(t._s(s[i].growth))]),a("br"),a("feather-icon",{staticClass:"text-success",attrs:{size:"14",icon:"TrendingUpIcon"}})],1):parseInt(s[i].past_omset)>parseInt(s[i].now_omset)?a("div",{staticClass:"mt-3"},[a("span",[t._v(t._s(s[i].growth))]),a("br"),a("feather-icon",{staticClass:"text-danger",attrs:{size:"14",icon:"TrendingDownIcon"}})],1):parseInt(s[i].now_omset)==parseInt(s[i].past_omset)?a("div",{staticClass:"mt-3"},[a("span",[t._v(t._s(s[i].growth))])]):a("div")])],1)}))}}])},[a("template",{slot:"thead"},[a("vs-th",{staticClass:"bg-primary text-white",staticStyle:{border:"0px solid #DDDDDD"}},[t._v(" PERIODE ")]),a("vs-th",{staticClass:"bg-primary text-white date",staticStyle:{border:"0px solid #DDDDDD"},attrs:{"sort-key":"bln_ini"}},[t._v(" "+t._s(t.titleColumnTableNow)+" ")]),a("vs-th",{staticClass:"bg-primary text-white date",staticStyle:{border:"0px solid #DDDDDD"},attrs:{"sort-key":"bln_lalu"}},[t._v(" "+t._s(t.titleColumnTableLast)+" ")]),a("vs-th",{staticClass:"bg-primary text-white",staticStyle:{border:"0px solid #DDDDDD"},attrs:{"sort-key":"growth",width:"100px"}},[t._v(" GROWTH ")])],1)],2)],1)])],1)],1)},i=[],o=(a("96cf"),a("3b8d")),l=a("fa33"),n=a("c0e9d"),r=a.n(n),d=a("d227"),c=a("c1df"),p=a.n(c),h={data:function(){return{pilihanA:["Region","Wilayah","Area","Cabang","Toko"],pilihanASelected:null,pilihanB:[],pilihanBSelected:null,monthSelected:null,title:"",titleColumnTableNow:"",titleColumnTableLast:"",sales:[],cardShow:!1}},components:{Datepicker:l["a"]},computed:{validateForm:function(){return!this.errors.any()&&null!=this.pilihanBSelected&&null!=this.monthSelected}},methods:{loadDataServer:function(){var t=this;this.cardShow=!1,this.title="TREND SALES "+this.pilihanBSelected.nama+" - "+p()(this.monthSelected).locale("id").format("MMMM YYYY").toUpperCase(),this.titleColumnTableNow=p()(this.monthSelected).locale("id").format("MMMM").toUpperCase(),this.titleColumnTableLast=p()(this.monthSelected).subtract(1,"months").locale("id").format("MMMM").toUpperCase(),this.$vs.loading();var e={kode:this.pilihanBSelected.kode,bulan:btoa(p()(this.monthSelected).format("YYYY-MM"))};this.$http.post("/pos/sales/getSalesCompareLastMonth",e).then((function(e){t.$vs.loading.close(),"SUKSES"==e.data.status&&(t.cardShow=!0,t.sales=e.data.message)})).catch((function(e){t.$vs.loading.close()}))},updatePilihan:function(t){var e=this;this.$vs.loading(),this.$http.get("toko/"+t).then((function(t){"OK"==t.data.status&&(e.pilihanB=t.data.message)})).catch((function(t){})),setTimeout((function(){e.$vs.loading.close()}),1e3)},printThis:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,a,s,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$refs.printcontent,a={type:"dataURL"},t.next=4,r()(e,a);case 4:s=t.sent,Object(d["a"])(s.toDataURL("image/png")).then((function(){i.$swal.fire({title:"Success",text:"Gambar berhasil di copy..",icon:"success",timer:1500})})).catch((function(t){}));case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},m=h,u=(a("4281"),a("2877")),D=Object(u["a"])(m,s,i,!1,null,"835a996c",null);e["default"]=D.exports}}]);
//# sourceMappingURL=chunk-4e7f97d5.1a6bd1e0.js.map