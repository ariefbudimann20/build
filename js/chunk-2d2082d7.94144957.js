(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2082d7"],{a44b:function(n,t,o){"use strict";o.r(t);var i=function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",[o("gmap-map",{ref:"baseMap",staticStyle:{width:"100%",height:"500px"},attrs:{center:n.center,zoom:10.75,options:n.mapOptions},on:{click:n.getLatLong}},[n._l(n.markers,(function(t,i){return o("gmap-marker",{key:i,attrs:{position:t.position,title:t.title,option:n.MarkerOptions,icon:n.publicPath+"marker/favicon.ico"},on:{click:function(o){return n.toggleInfoWindow(t,i)}}})})),o("gmap-info-window",{attrs:{options:n.infoOptions,position:n.infoWindowPos,opened:n.infoWinOpen},on:{closeclick:function(t){n.infoWinOpen=!1}}},[o("div",{domProps:{innerHTML:n._s(n.infoContent)}})])],2)],1)},e=[],a=(o("7f7f"),{data:function(){return{publicPath:"/main/",mapStartLocation:{lat:24.9004057,lng:67.1926178},coordinates:null,center:{lat:-6.2379957,lng:107.0782953},mapOptions:{fullscreenControl:!1,zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,disableDefaultUi:!1},map:null,infoContent:"",infoWindowPos:{lat:0,lng:0},infoWinOpen:!1,currentMidx:null,fullscreenControl:!1,infoOptions:{pixelOffset:{width:0,height:-35}},MarkerOptions:{zIndex:999999,opacity:.2},markers:[{name:"SEGER PEJUANG",title:"SEGER PEJUANG",location:"location 1",position:{lat:-6.1827041,lng:106.9861642}},{name:"SEGERRR THB",title:"SEGERRR THB",location:"location 2",position:{lat:-6.1769756,lng:106.9958617}},{name:"SEGERRR TJ.PRIOK",title:"SEGERRR TJ.PRIOK",location:"location 3",position:{lat:-6.1173661,lng:106.8808052}},{name:"SEGERRR HARAPAN JAYA",title:"SEGERRR HARAPAN JAYA",location:"location 3",position:{lat:-6.2136376,lng:106.983019}}]}},methods:{updateCoordinates:function(n){var t=n.latLng.lat(),o=n.latLng.lng();alert("You clicked the map at "+t+","+o)},getLatLong:function(n){var t=n.latLng.lat().toFixed(4),o=n.latLng.lng().toFixed(4);this.$swal.fire({title:"<h3><strong>Apakah Anda Yakin ?</strong></h3>",html:'<span class="text-center">Ingin Melihat Traffic Di Titik LatLong <br><strong>'+t+" , "+o+"</strong> Yang Anda Klik</span>",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Ya"}).then((function(n){n.value&&window.open("https://www.google.com/maps/place/"+t+","+o+"/@"+t+","+o+",17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d"+t+"!4d"+o+"!5m1!1e1","_blank")}))},toggleInfoWindow:function(n,t){this.infoWindowPos=n.position,this.infoContent=this.getInfoWindowContent(n),this.currentMidx==t?this.infoWinOpen=!this.infoWinOpen:(this.infoWinOpen=!0,this.currentMidx=t)},getInfoWindowContent:function(n){return'<div class="">\n          <div>\n            <div>\n              <div class="m-2"><span style="font-weight: bold;">Name Store: </span>\n                '.concat(n.name,'\n              </div>\n            </div>\n            <div class="m-2"><span style="font-weight: bold;">Location:  </span>\n              ').concat(n.location,"\n              <br>\n            </div>\n          </div>\n        </div>")}}}),l=a,s=o("2877"),r=Object(s["a"])(l,i,e,!1,null,null,null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d2082d7.94144957.js.map