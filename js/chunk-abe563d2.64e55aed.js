(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-abe563d2"],{"088c":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard"},[a("vx-card",{staticClass:"mb-base"},[a("div",{staticClass:"md:flex"},[a("div",{staticClass:"lg:w-1/6 mt-4 md:mt-0 md:ml-4"},[a("v-select",{attrs:{"data-vv-validate-on":"blur",placeholder:"-- Pilih --",options:t.pilihanA},on:{input:t.updatePilihan},model:{value:t.pilihanASelected,callback:function(e){t.pilihanASelected=e},expression:"pilihanASelected"}})],1),a("div",{staticClass:"lg:w-1/3 mt-4 md:mt-0 md:ml-4"},[a("v-select",{attrs:{"data-vv-validate-on":"blur",placeholder:"-- Pilih --",label:"nama",options:t.pilihanB},model:{value:t.pilihanBSelected,callback:function(e){t.pilihanBSelected=e},expression:"pilihanBSelected"}})],1),a("div",{staticClass:"lg:w-1/4 mt-4 md:mt-0 md:ml-4"},[a("datepicker",{attrs:{"data-vv-validate-on":"blur",placeholder:"-- Tanggal Awal --",minimumView:"day",maximumView:"month",format:"dd MMM yyyy"},model:{value:t.selectedStart,callback:function(e){t.selectedStart=e},expression:"selectedStart"}})],1),a("div",{staticClass:"lg:w-1/4 mt-4 md:mt-0 md:ml-4"},[a("datepicker",{attrs:{"data-vv-validate-on":"blur",placeholder:"-- Tanggal Akhir --",minimumView:"day",maximumView:"month",format:"dd MMM yyyy"},model:{value:t.selectedEnd,callback:function(e){t.selectedEnd=e},expression:"selectedEnd"}})],1),a("div",{staticClass:"mt-4 md:mt-0 md:ml-4"},[a("div",{staticClass:"flex"},[a("div",{staticClass:"w-12"},[a("vs-button",{staticStyle:{display:"inline","margin-right":"30px"},attrs:{disabled:!t.validateForm,radius:"",color:"primary",icon:"search"},on:{click:t.loadDataServer}})],1),a("div",{staticClass:"w-12 ml-2"},[a("vs-button",{attrs:{disabled:0==t.cardShow,color:"primary",type:"border","icon-pack":"feather",icon:"icon-copy"},on:{click:t.copyImage}})],1)])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:1==t.cardShow,expression:"cardShow == true"}]},[a("div",{ref:"printcontent"},[a("br",{directives:[{name:"show",rawName:"v-show",value:1==t.themeCopyShow,expression:"themeCopyShow == true"}]}),a("div",{class:1==t.themeCopyShow?"highlight mx-3":""},[a("div",{directives:[{name:"show",rawName:"v-show",value:1==t.themeCopyShow,expression:"themeCopyShow == true"}],staticClass:"w-full"},[a("h3",{staticClass:"pl-5"},[t._v(t._s(t.themeCopy.title))])]),a("hr",{directives:[{name:"show",rawName:"v-show",value:1==t.themeCopyShow,expression:"themeCopyShow == true"}],staticClass:"mb-0",staticStyle:{"border-bottom":"1px #7367f0 solid"}}),a("div",{directives:[{name:"show",rawName:"v-show",value:1==t.themeCopyShow,expression:"themeCopyShow == true"}],staticClass:"w-full"},[a("h5",{staticClass:"pl-5"},[t._v("Periode: "+t._s(t.themeCopy.periode))])]),a("hr",{directives:[{name:"show",rawName:"v-show",value:1==t.themeCopyShow,expression:"themeCopyShow == true"}],staticClass:"mt-0",staticStyle:{"border-bottom":"1px #7367f0 solid"}}),a("div",{staticClass:"vx-row"},[a("dashboardCard",{staticClass:"w-full sm:w-1/2 md:w-1/3 lg:w-1/4 vx-col mb-base",attrs:{label:"Store",icon:"storefront",value:t.store}}),a("dashboardCard",{staticClass:"w-full sm:w-1/2 md:w-1/3 lg:w-1/4 vx-col mb-base",attrs:{label:"NoT",icon:"receipt",value:t.noT}}),a("dashboardCard",{staticClass:"w-full sm:w-1/2 md:w-1/3 lg:w-1/4 vx-col mb-base",attrs:{label:"Sales Total",icon:"shopping_cart",value:t.salesTotal}}),a("dashboardCard",{staticClass:"w-full sm:w-1/2 md:w-1/3 lg:w-1/4 vx-col mb-base",attrs:{label:"Avg NoT / Day",icon:"timeline",value:t.averageNoTDay}}),a("dashboardCard",{staticClass:"w-full sm:w-1/2 md:w-1/3 lg:w-1/4 vx-col mb-base",attrs:{label:"Avg Sales / Day",icon:"timeline",value:t.averageSalesDay}}),a("dashboardCard",{staticClass:"w-full sm:w-1/2 md:w-1/3 lg:w-1/4 vx-col mb-base",attrs:{label:"Avg Sales / Transaction",icon:"timeline",value:t.averageSalesTransaction}}),a("dashboardCard",{staticClass:"w-full sm:w-1/2 md:w-1/3 lg:w-1/4 vx-col mb-base",attrs:{label:"Avg NoT / Store / Day",icon:"timeline",value:t.averageNoTStoreDay}}),a("dashboardCard",{staticClass:"w-full sm:w-1/2 md:w-1/3 lg:w-1/4 vx-col mb-base",attrs:{label:"Avg Sales / Store / Day",icon:"timeline",value:t.averageSalesStore}})],1),a("hr",{directives:[{name:"show",rawName:"v-show",value:1==t.themeCopyShow,expression:"themeCopyShow == true"}],staticStyle:{"border-bottom":"1px  #7367f0  dashed"}}),a("div",{class:1==t.themeCopyShow?"vx-row pt-8":"vx-row pt-8 highlight"},[a("div",{staticClass:"w-full sm:w-1/2 md:w-1/3 lg:w-1/4 vx-col"},[a("vx-card",{staticClass:"mb-base"},[a("div",{staticClass:"text-center my-4"},[a("div",{staticClass:"mb-0 pt-2 text-black font-semibold",staticStyle:{"font-size":"38px"}},[t._v(t._s(t.totalPelanggan))]),a("p",{staticClass:"text-grey mb-0"},[t._v("Total Pelanggan")])])]),a("vx-card",{staticClass:"mb-base"},[a("div",{staticClass:"text-center my-4"},[a("div",{staticClass:"mb-0 pt-2 text-black font-semibold",staticStyle:{"font-size":"38px"}},[t._v(t._s(t.jmlPesanan))]),a("p",{staticClass:"text-grey mb-0"},[t._v("Jumlah Pesanan")])])])],1),a("div",{staticClass:"w-full sm:w-1/2 md:w-1/3 lg:w-1/4 vx-col"},[a("vx-card",{staticClass:"mb-base"},[a("div",{staticClass:"text-center my-5"},[a("div",{staticClass:"mb-2 pt-2 text-black font-semibold",staticStyle:{"font-size":"30px"}},[t._v(t._s(t.totalPesanan))]),a("p",{staticClass:"text-grey mb-0"},[t._v("Total Pesanan")])])]),a("vx-card",{staticClass:"mb-base"},[a("div",{staticClass:"text-center my-1"},[a("div",{staticClass:"mb-0 pt-2 text-black font-semibold",staticStyle:{"font-size":"36px"}},[t._v(t._s(t.kontribusiPesanan))]),a("p",{staticClass:"text-grey mb-0"},[t._v("Kontribusi Pesanan "),a("br"),t._v(" Terhadap Sales")])])])],1),a("div",{staticClass:"w-full lg:w-1/2 vx-col"},[a("vx-card",{staticClass:"mb-base"},[a("h6",{staticClass:"text-center"},[t._v("Komposisi Jenis Pesanan")]),a("apexchart",{ref:"updateChartPelanggan",staticClass:"my-4 mx-auto",attrs:{height:"230",type:"pie",options:t.chartOptionsPelanggan,series:t.seriesPelanggan}})],1)],1)]),a("hr",{directives:[{name:"show",rawName:"v-show",value:1==t.themeCopyShow,expression:"themeCopyShow == true"}],staticClass:"mb-0",staticStyle:{"border-bottom":"1px #7367f0 solid"}}),a("div",{directives:[{name:"show",rawName:"v-show",value:1==t.themeCopyShow,expression:"themeCopyShow == true"}],staticClass:"flex"},[a("div",{staticClass:"w-1/2"},[a("h6",{directives:[{name:"show",rawName:"v-show",value:1==t.themeCopyShow,expression:"themeCopyShow == true"}],staticClass:"pl-5"},[t._v(t._s(t.themeCopy.reqDate))])]),a("div",{staticClass:"w-1/2 text-right"},[a("h6",{directives:[{name:"show",rawName:"v-show",value:1==t.themeCopyShow,expression:"themeCopyShow == true"}],staticClass:"pr-5"},[t._v(t._s(t.themeCopy.copyDate))])])])]),a("br",{directives:[{name:"show",rawName:"v-show",value:1==t.themeCopyShow,expression:"themeCopyShow == true"}]})]),a("vx-card",{staticClass:"mb-base mt-8"},[a("apexchart",{ref:"updateCharthourlySales",attrs:{type:"area",height:"350",options:t.chartOptionshourlySales,series:t.serieshourlySales}})],1),a("vx-card",{staticClass:"mb-base"},[a("apexchart",{ref:"updateCharthourlyVoid",attrs:{type:"area",height:"350",options:t.chartOptionshourlyVoid,series:t.serieshourlyVoid}})],1),a("vx-card",{staticClass:"mb-base"},[a("apexchart",{ref:"updateChartdateVoid",attrs:{type:"area",height:"350",options:t.chartOptionsdateVoid,series:t.seriesdateVoid}})],1),a("vx-card",{staticClass:"mb-base"},[a("apexchart",{ref:"updateChart",attrs:{type:"line",height:"350",options:t.chartOptions,series:t.series}})],1),a("div",{staticClass:"flex vx-row"},[a("div",{staticClass:"w-full lg:w-1/2 vx-col mb-base"},[a("vx-card",[a("apexchart",{ref:"updateChartSession",attrs:{type:"bar",height:"359",options:t.chartOptionsSession,series:t.seriesSession}})],1)],1),a("div",{staticClass:"w-full lg:w-1/2 vx-col mb-base"},[a("vx-card",[a("div",{staticClass:"table-wrapper-scroll-y my-custom-scrollbar-sales"},[a("vs-table",{attrs:{data:t.salesmenu,search:""},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.data;return t._l(s,(function(e,r){return a("vs-tr",{key:r,attrs:{data:e}},[a("vs-td",{attrs:{data:s[r].menu_toko}},[t._v(" "+t._s(s[r].menu_toko)+" ")]),a("vs-td",{staticClass:"text-right",attrs:{data:s[r].qty}},[t._v(" "+t._s(s[r].qty.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))+" ")]),a("vs-td",{staticClass:"text-right",attrs:{data:s[r].rp}},[t._v(" "+t._s(s[r].rp.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))+" ")]),a("vs-td",{staticClass:"text-right",attrs:{data:s[r].kontribusi_sales}},[t._v(" "+t._s(s[r].kontribusi_sales)+"% ")])],1)}))}}])},[a("template",{slot:"header"},[a("vx-tooltip",{staticStyle:{display:"inline"},attrs:{text:"Export Excel"}},[a("vs-button",{staticStyle:{display:"inline"},attrs:{color:"success",type:"filled",size:"small"},on:{click:function(e){return t.tableToExcel("table","Data Sales")}}},[a("i",{staticClass:"material-icons"},[t._v("description")])])],1)],1),a("template",{slot:"thead"},[a("vs-th",{staticClass:"bg-primary text-white",attrs:{"sort-key":"menu_toko"}},[t._v(" MENU TOKO ")]),a("vs-th",{staticClass:"bg-primary text-white text-right",attrs:{"sort-key":"qty"}},[t._v(" QTY ")]),a("vs-th",{staticClass:"bg-primary text-white text-center",attrs:{"sort-key":"rp"}},[t._v(" RP ")]),a("vs-th",{staticClass:"bg-primary text-white text-center",attrs:{"sort-key":"kontribusi_sales"}},[t._v(" KONTRIBUSI SALES ")])],1)],2)],1)]),a("table",{ref:"table",attrs:{hidden:"",id:"loremTable",summary:"lorem ipsum sit amet",rules:"groups",frame:"hsides"}},[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"},attrs:{colspan:"4"}},[a("h4",[t._v(t._s(t.judul))])])]),t._m(0),t._m(1),t._m(2)]),a("tbody",t._l(t.salesmenu,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.menu_toko))]),a("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(e.qty))]),a("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(e.rp))]),a("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(e.kontribusi_sales)+"%")])])})),0)])],1)]),a("vx-card",[a("div",{staticClass:"w-full bg-primary p-1 text-center"},[a("h3",{staticClass:"text-white"},[t._v("Tracking Omzet")])]),a("div",{staticClass:"lg:w-1/3 mt-5 ml-2"},[a("h6",[a("strong",[t._v("BULAN :")]),t._v(" "+t._s(t.bulan))])]),a("div",{staticClass:"lg:w-1/3 mt-5 ml-2"},[a("h6",[a("strong",[t._v("GERAI :")]),t._v(" "+t._s(t.namagerai))])]),a("div",{staticClass:"lg:w-1/3 mt-5 ml-2 mb-3"},[a("h6",[a("strong",[t._v("TARGET GERAI :")]),t._v(" "+t._s(t.targetgerai))])]),a("div",{staticClass:"table-wrapper-scroll-y my-custom-scrollbar"},[a("vs-table",{attrs:{data:t.omzet},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.data;return t._l(s,(function(e,r){return a("vs-tr",{key:r,attrs:{state:"Sabtu"==s[r].hari||"Minggu"==s[r].hari?"primary":null,data:e}},[a("vs-td",{attrs:{data:s[r].hari}},[t._v(" "+t._s(s[r].hari)+" ")]),a("vs-td",{attrs:{data:s[r].tgl}},[t._v(" "+t._s(s[r].tgl)+" ")]),a("vs-td",{attrs:{data:s[r].notLMTD}},[t._v(" "+t._s(s[r].notLMTD.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))+" ")]),a("vs-td",{attrs:{data:s[r].notMTD}},[t._v(" "+t._s(s[r].notMTD.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))+" ")]),a("vs-td",{attrs:{data:s[r].actualLMTD}},[t._v(" "+t._s(s[r].actualLMTD.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))+" ")]),a("vs-td",{attrs:{data:s[r].actualMTD}},[t._v(" "+t._s(s[r].actualMTD.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))+" ")]),a("vs-td",{attrs:{data:s[r].cost}},[t._v(" "+t._s(s[r].cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))+" ")]),a("vs-td",{attrs:{data:s[r].gerai}},[t._v(" "+t._s(s[r].gerai)+" ")]),a("vs-td",{attrs:{data:s[r].avgstr}},[t._v(" "+t._s(s[r].avgstr.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))+" ")])],1)}))}}])},[a("template",{slot:"thead"},[a("vs-th",{staticClass:"bg-primary text-white",attrs:{"sort-key":"hari"}},[t._v(" DAY ")]),a("vs-th",{staticClass:"bg-primary text-white",attrs:{"sort-key":"tgl"}},[t._v(" DATE ")]),a("vs-th",{staticClass:"bg-primary text-white",attrs:{"sort-key":"notLMTD"}},[t._v(" NOT LM ")]),a("vs-th",{staticClass:"bg-primary text-white",attrs:{"sort-key":"notMTD"}},[t._v(" NOT NOW ")]),a("vs-th",{staticClass:"bg-primary text-white",attrs:{"sort-key":"actualLMTD"}},[t._v(" SALES LM ")]),a("vs-th",{staticClass:"bg-primary text-white",attrs:{"sort-key":"actualMTD"}},[t._v(" SALES NOW ")]),a("vs-th",{staticClass:"bg-primary text-white",attrs:{"sort-key":"cost"}},[t._v(" COST ")]),a("vs-th",{staticClass:"bg-primary text-white",attrs:{"sort-key":"gerai"}},[t._v(" STORE ")]),a("vs-th",{staticClass:"bg-primary text-white",attrs:{"sort-key":"avgstr"}},[t._v(" AVG/STR ")])],1)],2)],1)])],1)],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("Menu Toko")]),a("th",[t._v("Qty")]),a("th",[t._v("Rp")]),a("th",[t._v("Kontribusi Sales")])])}],i=a("75fc"),o=(a("96cf"),a("3b8d")),l=(a("f576"),a("6b54"),a("a481"),a("1321")),n=a.n(l),d=a("fa33"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard"},[a("vx-card",[a("div",{staticClass:"text-center"},[a("h4",{staticClass:"mb-1"},[a("span",{staticClass:"material-icons"},[t._v(t._s(t.icon))])]),a("h2",{staticClass:"mb-0"},[t._v(t._s(t.value))]),a("p",{staticClass:"text-grey mb-0"},[t._v(t._s(t.label))])])])],1)},h=[],u={props:{value:String,icon:String,label:String}},p=u,m=a("2877"),g=Object(m["a"])(p,c,h,!1,null,null,null),v=g.exports,b=a("c0e9d"),f=a.n(b),y=a("d227"),x={data:function(){return{cardShow:!1,themeCopyShow:!1,themeCopy:{title:"",periode:"",reqDate:"",copyDate:""},uri:"data:application/vnd.ms-excel;base64,",template:'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head>\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e</head><body><table>{table}</table></body></html>',base64:function(t){return window.btoa(unescape(encodeURIComponent(t)))},format:function(t,e){return t.replace(/{(\w+)}/g,(function(t,a){return e[a]}))},judul:"",store:null,noT:null,salesTotal:null,averageNoTDay:null,averageSalesDay:null,averageSalesTransaction:null,averageNoTStoreDay:null,averageSalesStore:null,cost:null,jumlah:null,produktivitas:null,kontribusiPesanan:null,jmlPesanan:null,totalPelanggan:null,totalPesanan:null,pilihanA:["Region","Wilayah","Area","Cabang","Toko"],pilihanASelected:null,pilihanB:[],pilihanBSelected:null,selectedStart:null,selectedEnd:null,selectedMonth:new Date,bulan:null,namagerai:null,targetgerai:null,omzet:[],voids:[],series:[],chartOptions:{plotOptions:{bar:{horizontal:!1,dataLabels:{position:"top"}}},chart:{height:350,type:"line"},tooltip:{y:{formatter:function(t,e){var a=e.series,s=e.seriesIndex,r=e.dataPointIndex;return a[s][r].toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},fill:{colors:[function(t){var e=t.value,a=t.w,s=t.dataPointIndex;return parseFloat(parseFloat(e)/parseFloat(a.globals.series[0][s])*100)>=100?"#008efb":"#FFBE46"}]},stroke:{width:[0,5],curve:"smooth"},title:{text:"",align:"center"},colors:["#008efb","#FFBE46"],dataLabels:{enabled:!0,enabledOnSeries:[0],formatter:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},labels:[],xaxis:{type:"string"},yaxis:[{min:0}]},seriesSession:[],chartOptionsSession:{chart:{height:350,type:"bar"},title:{text:"",align:"center"},colors:["#008efb"],dataLabels:{enabled:!0,enabledOnSeries:void 0,textAnchor:"middle",background:{enabled:!0,foreColor:"#000",padding:4,borderRadius:2,borderWidth:1,borderColor:"#fff",opacity:.9},formatter:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},tooltip:{y:{formatter:function(t,e){var a=e.series,s=e.seriesIndex,r=e.dataPointIndex;return a[s][r].toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},labels:[],xaxis:{type:"string"},yaxis:[{title:{text:"Omset"}}]},serieshourlySales:[],chartOptionshourlySales:{chart:{height:350,type:"line"},stroke:{curve:"smooth",width:[1,1]},fill:{type:"solid",opacity:[1,1]},colors:["#008efb","#EA5455"],markers:{size:0},dataLabels:{enabled:!0,formatter:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},yaxis:[{title:{text:"SALES"}},{opposite:!0,title:{text:"NOT"}}],grid:{padding:{top:0,right:30,bottom:0,left:30}},tooltip:{shared:!0,intersect:!1,y:{formatter:function(t,e){var a=e.series,s=e.seriesIndex,r=e.dataPointIndex;return a[s][r].toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}}},serieshourlyVoid:[],chartOptionshourlyVoid:{chart:{height:350,type:"line"},stroke:{curve:"smooth",width:[1,1]},fill:{type:"solid",opacity:[1,1]},colors:["#008efb","#EA5455"],markers:{size:0},dataLabels:{enabled:!0,formatter:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},yaxis:[{title:{text:"VOID"}},{opposite:!0,title:{text:"NOT"}}],grid:{padding:{top:0,right:30,bottom:0,left:30}},tooltip:{shared:!0,intersect:!1,y:{formatter:function(t,e){var a=e.series,s=e.seriesIndex,r=e.dataPointIndex;return a[s][r].toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}}},seriesdateVoid:[],chartOptionsdateVoid:{chart:{height:350,type:"line"},stroke:{curve:"smooth",width:[1,1]},fill:{type:"solid",opacity:[1,1]},colors:["#008efb","#EA5455"],markers:{size:0},dataLabels:{enabled:!0,formatter:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},yaxis:[{title:{text:"VOID"}},{opposite:!0,title:{text:"NOT"}}],grid:{padding:{top:0,right:30,bottom:0,left:30}},tooltip:{shared:!0,intersect:!1,y:{formatter:function(t,e){var a=e.series,s=e.seriesIndex,r=e.dataPointIndex;return a[s][r].toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}}},salesmenu:[],seriesPelanggan:[],chartOptionsPelanggan:{chart:{width:380,type:"pie"},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}],tooltip:{y:{formatter:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}}}}},components:{apexchart:n.a,Datepicker:d["a"],dashboardCard:v,html2canvas:f.a},computed:{validateForm:function(){return!this.errors.any()&&null!=this.pilihanBSelected&&null!=this.selectedStart&&null!=this.selectedEnd}},methods:{tableToExcel:function(t,e){t.nodeType||(t=this.$refs.table);var a={worksheet:e||"Worksheet",table:t.innerHTML};window.location.href=this.uri+this.base64(this.format(this.template,a))},copyImage:function(){var t=this;this.$vs.loading(),this.themeCopyShow=!0;var e=new Date,a=e.getFullYear(),s=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0"),i=String(e.getHours()).padStart(2,"0"),o=String(e.getMinutes()).padStart(2,"0"),l=String(e.getSeconds()).padStart(2,"0"),n=new Date(this.selectedStart),d=n.getFullYear()+"-"+String(n.getMonth()+1).padStart(2,"0")+"-"+String(n.getDate()).padStart(2,"0"),c=new Date(this.selectedEnd),h=c.getFullYear()+"-"+String(c.getMonth()+1).padStart(2,"0")+"-"+String(c.getDate()).padStart(2,"0");this.themeCopy.title=this.pilihanBSelected.nama,this.themeCopy.periode=d+" s/d "+h,this.themeCopy.copyDate="".concat(a,"-").concat(s,"-").concat(r," ").concat(i,":").concat(o,":").concat(l),1==this.themeCopyShow&&setTimeout((function(){t.captureImage()}),2e3)},captureImage:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,a,s,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$refs.printcontent,a={type:"dataURL"},t.next=4,f()(e,a);case 4:s=t.sent,Object(y["a"])(s.toDataURL("image/png")).then((function(){r.$vs.loading.close(),r.$swal.fire({title:"Success",text:"Gambar berhasil di copy..",icon:"success",timer:1500}),r.themeCopyShow=!1})).catch((function(t){r.$swal.fire({title:"Oopss !",text:t.message,icon:"error",timer:1500})}));case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),updatePilihan:function(t){var e=this;this.$vs.loading(),this.$http.get("toko/"+t).then((function(t){"OK"==t.data.status&&(e.pilihanB=t.data.message)})).catch((function(t){})),setTimeout((function(){e.$vs.loading.close()}),1e3)},loadDataServer:function(){var t=this;this.$vs.loading(),this.cardShow=!1;var e=new Date,a=e.getFullYear(),s=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0"),o=String(e.getHours()).padStart(2,"0"),l=String(e.getMinutes()).padStart(2,"0"),n=String(e.getSeconds()).padStart(2,"0");this.themeCopy.reqDate="".concat(a,"-").concat(s,"-").concat(r," ").concat(o,":").concat(l,":").concat(n);var d={kode:this.pilihanBSelected.kode,nama:this.pilihanBSelected.nama,tgl_awal:btoa(this.selectedStart),tgl_akhir:btoa(this.selectedEnd)};this.$http.post("pos/dashboardByDate",d).then((function(e){"SUKSES"==e.data.status?(t.cardShow=!0,t.$refs.updateChart.updateSeries(e.data.message.nilai.slice(0,2)),t.$refs.updateChart.updateOptions({xaxis:{categories:e.data.message.label}}),t.$refs.updateChart.updateOptions({title:{text:e.data.message.judul}}),t.$refs.updateChartSession.updateSeries(e.data.message.session),t.$refs.updateChartSession.updateOptions({xaxis:{categories:e.data.message.labelsession}}),t.$refs.updateChartSession.updateOptions({title:{text:e.data.message.judul}}),t.$refs.updateCharthourlySales.updateSeries(e.data.message.serieshourlySales),t.$refs.updateCharthourlySales.updateOptions({xaxis:{categories:e.data.message.labelhourlysales}}),t.$refs.updateCharthourlySales.updateOptions({title:{text:"Sales "+e.data.message.judul}}),t.$refs.updateCharthourlyVoid.updateSeries(e.data.message.serieshourlyVoid),t.$refs.updateCharthourlyVoid.updateOptions({xaxis:{categories:e.data.message.labelhourlyvoid}}),t.$refs.updateCharthourlyVoid.updateOptions({title:{text:"Void "+e.data.message.judul}}),t.$refs.updateChartdateVoid.updateSeries(e.data.message.seriesdateVoid),t.$refs.updateChartdateVoid.updateOptions({xaxis:{categories:e.data.message.labeldatevoid}}),t.$refs.updateChartdateVoid.updateOptions({title:{text:"Void "+e.data.message.judul}}),t.seriesPelanggan=Object(i["a"])(e.data.message.seriesPelanggan),t.$refs.updateChartPelanggan.updateOptions({labels:e.data.message.labelPelanggan}),t.store=e.data.message.board.store,t.noT=e.data.message.board.not,t.salesTotal=e.data.message.board.sales,t.averageNoTDay=e.data.message.board.avgNotDays,t.averageSalesDay=e.data.message.board.avgSalesDays,t.averageSalesTransaction=e.data.message.board.avgSalesTransaction,t.averageNoTStoreDay=e.data.message.board.avgNotStore,t.averageSalesStore=e.data.message.board.avgSalesStore,t.cost=e.data.message.board.cost,t.jumlah=e.data.message.kru.jumlah,t.produktivitas=e.data.message.kru.produktivitas,t.kontribusiPesanan=e.data.message.board2.kontribusiPesanan,t.jmlPesanan=e.data.message.board2.jmlPesanan,t.totalPelanggan=e.data.message.board2.totalPelanggan,t.totalPesanan=e.data.message.board2.totalPesanan,t.bulan=e.data.message.headomzet.bulan,t.namagerai=e.data.message.headomzet.namagerai,t.targetgerai=e.data.message.headomzet.targetgerai,t.omzet=e.data.message.omzet.map((function(t){var e=t.hari,a=t.tgl,s=t.notLMTD,r=t.notMTD,i=t.actualLMTD,o=t.actualMTD,l=t.cost,n=t.gerai,d=t.avgstr;return{hari:e,tgl:parseInt(a),notLMTD:parseFloat(s.replace(/[^0-9.-]+/g,"")),notMTD:parseFloat(r.replace(/[^0-9.-]+/g,"")),actualLMTD:parseFloat(i.replace(/[^0-9.-]+/g,"")),actualMTD:parseFloat(o.replace(/[^0-9.-]+/g,"")),cost:parseFloat(l.replace(/[^0-9.-]+/g,"")),gerai:parseInt(n),avgstr:parseFloat(d.replace(/[^0-9.-]+/g,""))}})),t.salesmenu=e.data.message.salesmenu.map((function(t){var e=t.menu_toko,a=t.qty,s=t.rp,r=t.kontribusi_sales;return{menu_toko:e,qty:parseFloat(a.replace(/[^0-9.-]+/g,"")),rp:parseFloat(s.replace(/[^0-9.-]+/g,"")),kontribusi_sales:parseFloat(r)}})),t.judul=e.data.message.judul):t.$swal.fire("Gagal !",e.data.message,"error")})).catch((function(t){})).finally((function(){t.$vs.loading.close()}))},currency:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},S=x,w=(a("e90b"),Object(m["a"])(S,s,r,!1,null,"4badd277",null));e["default"]=w.exports},"1af6":function(t,e,a){var s=a("63b6");s(s.S,"Array",{isArray:a("9003")})},"20fd":function(t,e,a){"use strict";var s=a("d9f6"),r=a("aebd");t.exports=function(t,e,a){e in t?s.f(t,e,r(0,a)):t[e]=a}},"2e08":function(t,e,a){var s=a("9def"),r=a("9744"),i=a("be13");t.exports=function(t,e,a,o){var l=String(i(t)),n=l.length,d=void 0===a?" ":String(a),c=s(e);if(c<=n||""==d)return l;var h=c-n,u=r.call(d,Math.ceil(h/d.length));return u.length>h&&(u=u.slice(0,h)),o?u+l:l+u}},"549b":function(t,e,a){"use strict";var s=a("d864"),r=a("63b6"),i=a("241e"),o=a("b0dc"),l=a("3702"),n=a("b447"),d=a("20fd"),c=a("7cd6");r(r.S+r.F*!a("4ee1")((function(t){Array.from(t)})),"Array",{from:function(t){var e,a,r,h,u=i(t),p="function"==typeof this?this:Array,m=arguments.length,g=m>1?arguments[1]:void 0,v=void 0!==g,b=0,f=c(u);if(v&&(g=s(g,m>2?arguments[2]:void 0,2)),void 0==f||p==Array&&l(f))for(e=n(u.length),a=new p(e);e>b;b++)d(a,b,v?g(u[b],b):u[b]);else for(h=f.call(u),a=new p;!(r=h.next()).done;b++)d(a,b,v?o(h,g,[r.value,b],!0):r.value);return a.length=b,a}})},"54a1":function(t,e,a){a("6c1c"),a("1654"),t.exports=a("95d5")},"75fc":function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var s=a("a745"),r=a.n(s);function i(t){if(r()(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}var o=a("774e"),l=a.n(o),n=a("c8bb"),d=a.n(n);function c(t){if(d()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return l()(t)}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(t){return i(t)||c(t)||h()}},"774e":function(t,e,a){t.exports=a("d2d5")},"95d5":function(t,e,a){var s=a("40c3"),r=a("5168")("iterator"),i=a("481b");t.exports=a("584a").isIterable=function(t){var e=Object(t);return void 0!==e[r]||"@@iterator"in e||i.hasOwnProperty(s(e))}},9744:function(t,e,a){"use strict";var s=a("4588"),r=a("be13");t.exports=function(t){var e=String(r(this)),a="",i=s(t);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(a+=e);return a}},a3c3:function(t,e,a){},a745:function(t,e,a){t.exports=a("f410")},c8bb:function(t,e,a){t.exports=a("54a1")},d2d5:function(t,e,a){a("1654"),a("549b"),t.exports=a("584a").Array.from},e90b:function(t,e,a){"use strict";var s=a("a3c3"),r=a.n(s);r.a},f410:function(t,e,a){a("1af6"),t.exports=a("584a").Array.isArray},f576:function(t,e,a){"use strict";var s=a("5ca1"),r=a("2e08"),i=a("a25f"),o=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);s(s.P+s.F*o,"String",{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0,!0)}})}}]);
//# sourceMappingURL=chunk-abe563d2.64e55aed.js.map