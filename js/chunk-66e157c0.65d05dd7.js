(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66e157c0"],{2387:function(a,t,n){},4391:function(a,t,n){"use strict";n.r(t);var s=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"calender"},[n("vx-card",[n("div",{staticClass:"md:flex mb-5"},[n("div",{staticClass:"lg:w-1/6 mt-4 md:mt-0"},[n("datepicker",{attrs:{"data-vv-validate-on":"blur",placeholder:"-- Pilih Bulan --",minimumView:"month",maximumView:"month",format:"MMM yyyy"},model:{value:a.date,callback:function(t){a.date=t},expression:"date"}})],1),n("div",{staticClass:"lg:w-1/6 mt-4 md:mt-0 md:ml-4"},[n("vs-button",{attrs:{radius:"",color:"primary",icon:"search"},on:{click:function(t){return a.loadDataHistoryPesanan()}}})],1)]),n("FullCalendar",{ref:"calendar",attrs:{options:a.calendarOptions}}),n("vs-popup",{staticClass:"holamundo",attrs:{title:"Detail History Pesanan",active:a.modaldetailHistoryPesanan},on:{"update:active":function(t){a.modaldetailHistoryPesanan=t}}},[n("div",{staticClass:"grid grid-cols-3 gap-4 mb-4"},[n("div",{staticClass:"col-span-1"},[n("small",{staticClass:"font-bold"},[a._v("Nama")])]),n("div",{staticClass:"col-span-2"},[n("h6",[a._v(": "+a._s(a.formdetailHistory.nama))])])]),n("div",{staticClass:"grid grid-cols-3 gap-4 mb-4"},[n("div",{staticClass:"col-span-1"},[n("small",{staticClass:"font-bold"},[a._v("Jenis")])]),n("div",{staticClass:"col-span-2"},[n("h6",[a._v(": "+a._s(a.formdetailHistory.tipe))])])]),n("div",{staticClass:"grid grid-cols-3 gap-4 mb-4"},[n("div",{staticClass:"col-span-1"},[n("small",{staticClass:"font-bold"},[a._v("WhatsApp")])]),n("div",{staticClass:"col-span-2"},[n("h6",[a._v(": "+a._s(a.formdetailHistory.wa))])])]),n("div",{staticClass:"grid grid-cols-3 gap-4 mb-4"},[n("div",{staticClass:"col-span-1"},[n("small",{staticClass:"font-bold"},[a._v("Tanggal Pesan")])]),n("div",{staticClass:"col-span-2"},[n("h6",[a._v(": "+a._s(a.formdetailHistory.tanggal_pesan))])])]),n("div",{staticClass:"grid grid-cols-3 gap-4 mb-4"},[n("div",{staticClass:"col-span-1"},[n("small",{staticClass:"font-bold"},[a._v("Tanggal Ambil")])]),n("div",{staticClass:"col-span-2"},[n("h6",[a._v(": "+a._s(a.formdetailHistory.tanggal_ambil))])])]),n("div",{staticClass:"grid grid-cols-3 gap-4 mb-4"},[n("div",{staticClass:"col-span-1"},[n("small",{staticClass:"font-bold"},[a._v("Total")])]),n("div",{staticClass:"col-span-2"},[n("h6",[a._v(": Rp"+a._s(a.currency(a.formdetailHistory.total)))])])])])],1)],1)},e=[],i=(n("6b54"),n("a481"),n("f576"),n("fa33")),l=n("7516"),o=n("3cdb"),r=n("4505"),c=n("3cd6"),d={data:function(){return{modaldetailHistoryPesanan:!1,date:"",data:[{menu:"FRUIT TEA ALL VARIANT 230ML",qty:"2",harga:0,total:0},{menu:"PKT DADA JUMBO + NASI",qty:"1",harga:19e3,total:19e3},{menu:"PKT P ATAS JUMBO + NASI",qty:"1",harga:17e3,total:17e3},{menu:"SAMBAL GEPREK MB 20 GR",qty:"1",harga:3500,total:3500}],history:[],calendarOptions:{plugins:[o["a"],r["a"]],initialView:"dayGridMonth",locale:c["a"],dateClick:this.handleDateClick,eventClick:this.handleEventClick,initialDate:new Date,events:[]},formdetailHistory:{nama:"",tipe:"",wa:"",tanggal_pesan:"",tanggal_ambil:"",total:""}}},components:{Datepicker:i["a"],FullCalendar:l["a"]},mounted:function(){this.date=this.dateNow()},methods:{handleDateClick:function(a){alert("date click! "+a.dateStr)},dateNow:function(){var a=new Date,t=a.getFullYear(),n=String(a.getMonth()+1).padStart(2,"0"),s=String(a.getDate()).padStart(2,"0"),e=String(a.getHours()).padStart(2,"0"),i=String(a.getMinutes()).padStart(2,"0"),l=String(a.getSeconds()).padStart(2,"0");return"".concat(s,"-").concat(n,"-").concat(t," ").concat(e,":").concat(i,":").concat(l)},loadDataHistoryPesanan:function(){var a=this,t=new Date(this.date),n=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),e=String(t.getDate()).padStart(2,"0");this.$vs.loading(),this.$http.get("pos/pesanan/getData/"+"".concat(n,"-").concat(s)).then((function(t){a.history=t.data.message,a.$refs.calendar.getApi().gotoDate("".concat(n,"-").concat(s,"-").concat(e)),a.calendarOptions.events=a.transformDataForCalendar(a.history)})).catch((function(t){a.$vs.loading.close(),a.$swal.fire("Gagal !",t.response.data.message,"error")})).finally((function(){a.$vs.loading.close()}))},transformDataForCalendar:function(a){var t=this;return a.map((function(a){return{nama:a.nama,wa:a.wa,tipe:a.tipe,tanggal_pesan:a.tanggal_pesan,tanggal_ambil:a.tanggal_ambil,total:a.total,title:"".concat(a.nama," - ").concat(a.tipe),start:a.tanggal_pesan,end:t.formatEndDate(a.tanggal_ambil)}}))},formaDate:function(a){var t=new Date(a),n=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),e=String(t.getDate()).padStart(2,"0");return"".concat(n,"-").concat(s,"-").concat(e)},formatEndDate:function(a){var t=new Date(a),n=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),e=String(t.getDate()+1).padStart(2,"0");return"".concat(n,"-").concat(s,"-").concat(e)},handleEventClick:function(a){this.modaldetailHistoryPesanan=!0,this.formdetailHistory.nama=a.event.extendedProps.nama,this.formdetailHistory.tipe=a.event.extendedProps.tipe,this.formdetailHistory.wa=a.event.extendedProps.wa,this.formdetailHistory.tanggal_pesan=a.event.extendedProps.tanggal_pesan,this.formdetailHistory.tanggal_ambil=a.event.extendedProps.tanggal_ambil,this.formdetailHistory.total=a.event.extendedProps.total},currency:function(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}},g=d,m=(n("f657"),n("2877")),p=Object(m["a"])(g,s,e,!1,null,null,null);t["default"]=p.exports},f657:function(a,t,n){"use strict";var s=n("2387"),e=n.n(s);e.a}}]);
//# sourceMappingURL=chunk-66e157c0.65d05dd7.js.map