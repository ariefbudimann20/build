(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c83f3912"],{"614c":function(t,a,i){"use strict";var s=i("80cd"),l=i.n(s);l.a},"80cd":function(t,a,i){},c0e9:function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{attrs:{id:"app"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"panel panel-sm"},[t._m(0),i("div",{staticClass:"panel-body"},[i("div",{staticClass:"form-group"},[i("label",{staticClass:"control-label col-sm-3 text-right",attrs:{for:"csv_file"}},[t._v("CSV file to import")]),i("div",{staticClass:"col-sm-9"},[i("input",{staticClass:"form-control",attrs:{type:"file",id:"csv_file",name:"csv_file"},on:{change:function(a){return t.loadCSV(a)}}})])]),t._m(1)])])]),i("vs-button",{attrs:{color:"primary"},on:{click:t.print}},[t._v("Print")]),i("div",{staticClass:"wrapper-print",attrs:{id:"printMe"}},t._l(t.parse_csv,(function(a,s){return i("div",{key:s,staticClass:"invoice",staticStyle:{"margin-bottom":"50px"}},[t._m(2,!0),i("div",{staticClass:"grid grid-cols-6 gap-4 my-1"},[i("div",{staticClass:"col-start-1 col-end-3"},[i("div",{staticClass:"flex"},[i("div",{staticClass:"flex-initial text-gray-700 ml-2 mr-2"},[t._v(" NAMA ")]),i("div",{staticClass:"flex-initial text-gray-700 ml-2 mr-2"},[t._v(" : ")]),i("div",{staticClass:"flex-initial text-gray-700 ml-2 mr-2"},[t._v(" "+t._s(a.name)+" ")])]),i("div",{staticClass:"flex bg-gray-200"},[i("div",{staticClass:"flex-initial text-gray-700 mt-2 mb-2 ml-2",staticStyle:{"margin-right":"29px"}},[t._v(" NIK ")]),i("div",{staticClass:"flex-initial text-gray-700 m-2"},[t._v(" : ")]),i("div",{staticClass:"flex-initial text-gray-700 m-2"},[t._v(" "+t._s(a.nik)+" ")])])]),i("div",{staticClass:"col-end-8 col-span-3"},[i("div",{staticClass:"flex bg-gray-200"},[i("div",{staticClass:"flex-initial text-gray-700 ml-2 mr-2"},[t._v(" JABATAN ")]),i("div",{staticClass:"flex-initial text-gray-700 ml-2 mr-2"},[t._v(" : ")]),i("div",{staticClass:"flex-initial text-gray-700 ml-2 mr-2"},[t._v(" "+t._s(a.jabatan)+" ")])]),i("div",{staticClass:"flex bg-gray-200"},[i("div",{staticClass:"flex-initial text-gray-700 mt-2 mb-2 ml-2",staticStyle:{"margin-right":"21px"}},[t._v(" BULAN ")]),i("div",{staticClass:"flex-initial text-gray-700 m-2"},[t._v(" : ")]),i("div",{staticClass:"flex-initial text-gray-700 m-2"},[t._v(" "+t._s(a.bulan)+" ")])])])]),t._m(3,!0),i("div",{staticClass:"grid grid-cols-6 gap-4 mt-3"},[i("div",{staticClass:"col-start-1 col-end-4"},[i("div",{staticClass:"flex bg-gray-200"},[i("div",{staticClass:"flex-initial text-gray-700 mb-2 ml-2",staticStyle:{"margin-right":"42px"}},[t._v(" GAJI POKOK ")]),i("div",{staticClass:"flex-initial text-gray-700 ml-1 mr-1"},[t._v(" : ")]),i("div",{staticClass:"flex-initial text-gray-700 ml-2 mr-2"},[t._v(" "+t._s(" - "===a.gapok?a.gapok:"Rp."+a.gapok)+" ")])]),i("div",{staticClass:"flex bg-gray-200"},[i("div",{staticClass:"flex-initial text-gray-700 mb-2 ml-2 mr-6"},[t._v(" TUNJ. MAKAN ")]),i("div",{staticClass:"flex-initial text-gray-700 ml-2 mr-2"},[t._v(" : ")]),i("div",{staticClass:"flex-initial text-gray-700 ml-2 mr-2"},[t._v(" "+t._s(" - "===a.tnj_makan?a.tnj_makan:"Rp."+a.tnj_makan)+" ")])]),i("div",{staticClass:"flex bg-gray-200"},[i("div",{staticClass:"flex-initial text-gray-700 mb-2 ml-2",staticStyle:{"margin-right":"7px"}},[t._v(" TUNJ. KEAHLIAN ")]),i("div",{staticClass:"flex-initial text-gray-700 ml-2 mr-2"},[t._v(" : ")]),i("div",{staticClass:"flex-initial text-gray-700 ml-2 mr-2"},[t._v(" "+t._s(" - "===a.tnj_keahlian?a.tnj_keahlian:"Rp."+a.tnj_keahlian)+" ")])]),i("div",{staticClass:"flex bg-gray-200"},[i("div",{staticClass:"flex-initial text-gray-700 mb-2 ml-2",staticStyle:{"margin-right":"66px"}},[t._v(" LEMBUR ")]),i("div",{staticClass:"flex-initial text-gray-700 ml-2 mr-2"},[t._v(" : ")]),i("div",{staticClass:"flex-initial text-gray-700 ml-2 mr-2"},[t._v(" "+t._s(" - "===a.lembur?a.lembur:"Rp."+a.lembur)+" ")])]),i("div",{staticClass:"flex bg-gray-200"},[i("div",{staticClass:"flex-initial text-gray-700 mb-2 ml-2",staticStyle:{"margin-right":"81px"}},[t._v(" RAPEL ")]),i("div",{staticClass:"flex-initial text-gray-700 ml-2 mr-2"},[t._v(" : ")]),i("div",{staticClass:"flex-initial text-gray-700 ml-2 mr-2"},[t._v(" "+t._s(" - "===a.rapel?a.rapel:"Rp."+a.rapel)+" "),i("hr",{staticClass:"my-2",staticStyle:{border:"solid 1px black"}}),i("h6",{staticClass:"font-bold"},[t._v("Rp. "+t._s(a.total_pendpatan))])])])]),i("div",{staticClass:"col-end-8 col-span-3"},[i("div",{staticClass:"flex bg-gray-200"},[i("div",{staticClass:"flex-initial text-gray-700 mb-2 ml-2",staticStyle:{"margin-right":"39px"}},[t._v(" JAMSOSTEK ")]),i("div",{staticClass:"flex-initial text-gray-700 ml-2 mr-2"},[t._v(" : ")]),i("div",{staticClass:"flex-initial text-gray-700 ml-2 mr-2"},[t._v(" "+t._s(" - "===a.jamsostek?a.jamsostek:"Rp."+a.jamsostek)+" ")])]),i("div",{staticClass:"flex bg-gray-200"},[i("div",{staticClass:"flex-initial text-gray-700 mb-2 ml-2",staticStyle:{"margin-right":"4px"}},[t._v(" BPJS KESEHATAN ")]),i("div",{staticClass:"flex-initial text-gray-700 ml-2 mr-2"},[t._v(" : ")]),i("div",{staticClass:"flex-initial text-gray-700 ml-2 mr-2"},[t._v(" "+t._s(" - "===a.bpjs?a.bpjs:"Rp."+a.bpjs)+" ")])]),i("div",{staticClass:"flex bg-gray-200"},[i("div",{staticClass:"flex-initial text-gray-700 mb-2 ml-2",staticStyle:{"margin-right":"73px"}},[t._v(" PPH 21 ")]),i("div",{staticClass:"flex-initial text-gray-700 ml-2 mr-2"},[t._v(" : ")]),i("div",{staticClass:"flex-initial text-gray-700 ml-2 mr-2"},[t._v(" "+t._s(" - "===a.pph_21?a.pph_21:"Rp."+a.pph_21)+" ")])]),i("div",{staticClass:"flex bg-gray-200"},[i("div",{staticClass:"flex-initial text-gray-700 mb-2 ml-2",staticStyle:{"margin-right":"110px"}},[t._v(" JP ")]),i("div",{staticClass:"flex-initial text-gray-700 ml-2 mr-2"},[t._v(" : ")]),i("div",{staticClass:"flex-initial text-gray-700 ml-2 mr-2"},[t._v(" "+t._s(" - "===a.jp?a.jp:"Rp."+a.jp)+" "),i("hr",{staticClass:"my-2",staticStyle:{border:"solid 1px black"}}),i("h6",{staticClass:"font-bold"},[t._v("Rp. "+t._s(a.total_pengeluaran))])])])]),i("div",{staticClass:"col-start-2 col-span-4 mx-auto mb-3"},[i("div",{staticClass:"flex bg-gray-200"},[t._m(4,!0),t._m(5,!0),i("div",{staticClass:"flex-initial text-gray-700 text-center m-2"},[i("h6",{staticClass:"font-bold"},[t._v("Rp. "+t._s(a.take_home_pay))])])]),i("hr",{staticClass:"-mt-1",staticStyle:{border:"solid 1px black"}})])])])})),0)],1)])},l=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"panel-heading"},[i("h4",[t._v("CSV Import")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"col-sm-offset-3 col-sm-9"},[i("div",{staticClass:"checkbox-inline"},[i("label",{attrs:{for:"header_rows"}},[i("input",{attrs:{type:"checkbox",id:"header_rows"}}),t._v(" File contains header row?")])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"flex"},[i("div",{staticClass:"flex-initial text-gray-700 ml-2 mt-2 mb-2"},[i("h6",{staticClass:"font-bold"},[t._v("PT Selahonje Jaya Makmur")]),i("h6",{staticClass:"font-bold"},[t._v("Ruko Symphoni Blok HX 2 No.1")]),i("h6",{staticClass:"font-bold"},[t._v("Kota Harapan Indah, Bekasi")])]),i("div",{staticClass:"flex-1 text-gray-700 text-center px-4 py-2"},[i("h6",{staticClass:"font-bold"},[t._v("SLIP GAJI")])]),i("div",{staticClass:"flex-1 text-gray-700 text-center px-4 m-2"},[i("img",{staticStyle:{width:"100px"},attrs:{src:"logo_perusahaan.png",alt:"Logo"}})])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"grid grid-cols-6 gap-4"},[i("div",{staticClass:"col-start-1 col-end-3"},[i("div",{staticClass:"flex"},[i("div",{staticClass:"flex-initial text-gray-700 ml-2 mr-2 mt-2"},[t._v(" PENDAPATAN ")])])]),i("div",{staticClass:"col-end-8 col-span-3"},[i("div",{staticClass:"flex"},[i("div",{staticClass:"flex-initial text-gray-700 ml-2 mr-2 mt-2"},[t._v(" POTONGAN ")])])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"flex-initial text-gray-700 text-center m-2"},[i("h6",{staticClass:"font-bold"},[t._v("TAKE HOME PAY")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"flex-initial text-gray-700 text-center m-2"},[i("h6",{staticClass:"font-bold"},[t._v(":")])])}],e=(i("7f7f"),i("28a5"),{data:function(){return{parse_header:[],parse_csv:[]}},methods:{print:function(){this.$htmlToPaper("printMe")},csvJSON:function(t){for(var a=t.split("\n"),i=[],s=a[0].split(";"),l=s[1],e=0;e<a.length;e++)if(a[e].length>0&&a[e].charAt(0)>0){var r=a[e].split(";"),n=r[1],c=r[2],v=r[3],m=r[4],d=r[5],o=r[6],x=r[7],g=r[8],_=r[9],f=r[10],p=r[11],C=r[12],y=r[13],b=r[14],h=r[15],u={bulan:l,name:n,nik:c,jabatan:v,gapok:m,tnj_makan:d,tnj_keahlian:o,lembur:x,rapel:g,total_pendpatan:_,jamsostek:f,bpjs:p,pph_21:C,jp:y,total_pengeluaran:b,take_home_pay:h};i.push(u)}return i},loadCSV:function(t){var a=this;if(window.FileReader){var i=new FileReader;i.readAsText(t.target.files[0]),i.onload=function(t){var i=t.target.result;a.parse_csv=a.csvJSON(i)},i.onerror=function(t){"NotReadableError"==t.target.error.name&&alert("Canno't read file !")}}else alert("FileReader are not supported in this browser.")}}}),r=e,n=(i("614c"),i("2877")),c=Object(n["a"])(r,s,l,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-c83f3912.8675c6fa.js.map