(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{e9bb:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"window-height window-width row justify-center items-center"},[a("q-card",{staticStyle:{width:"80vwmax-width:1200px"},attrs:{flat:"",bordered:""}},[a("q-card-section",{staticStyle:{"background-color":"#093A3E"}},[a("q-table",{attrs:{color:"primary",title:"Summary",columns:e.summary_columns,data:[]}})],1),a("q-card-section",{staticStyle:{"background-color":"#3AAFB9"}},[a("q-table",{attrs:{color:"primary",title:e.title,columns:e.columns,data:e.data}}),a("div",{staticClass:"text"},[e._v("\n        Bought an Item?\n        "),a("a",{attrs:{href:"/#/bought"}},[e._v("Click Here.")])]),a("div",{staticClass:"text"},[e._v("\n        Sold an Item?\n        "),a("a",{attrs:{href:"/#/sold"}},[e._v("Click Here.")])])],1)],1)],1)},r=[],i=a("c973"),s=a.n(i),d={name:"Overview",data(){return{title:"Overview",summary_columns:[{name:"items_sold",label:"Items Sold",field:"items_sold",required:!0,sortable:!0,style:"width: 500px"},{name:"revenue",label:"Total Revenue",field:"revenue",required:!0,sortable:!0,style:"width: 500px"},{name:"profit",label:"Total Profit",field:"profit",required:!0,sortable:!0,style:"width: 500px"},{name:"avg_listing_duration",label:"Average Listing Duration",field:"avg_listing_duration",required:!0,sortable:!0,style:"width: 500px"}],data:[],columns:[{name:"item",label:"Item",field:"item",required:!0,sortable:!0,style:"width: 500px"},{name:"category",label:"Category",field:"category",required:!0,sortable:!0,style:"width: 500px"},{name:"purchase_price",label:"Purchase Price",field:"purchase_price",required:!0,sortable:!0,style:"width: 500px",format:e=>"$"+e},{name:"date_listed",label:"Date Listed",field:"date_listed",required:!0,sortable:!0,style:"width: 500px",format:e=>""+new Date(e).toLocaleDateString()},{name:"asking_price",label:"Asking Price",field:"asking_price",required:!0,sortable:!0,style:"width: 500px",format:e=>"$"+e},{name:"sold_date",label:"Sold Date",field:"sold_date",required:!0,sortable:!0,style:"width: 500px"},{name:"sold_price",label:"Sold Price",field:"sold_price",required:!0,sortable:!0,style:"width: 500px"},{name:"net_profit",label:"Net Profit",field:"net_profit",required:!0,sortable:!0,style:"width: 500px"},{name:"platform",label:"Platform Sold On",field:"platform",required:!0,sortable:!0,style:"width: 500px"}]}},mounted(){var e=this;return s()((function*(){const t=yield e.$axios.post("https://guarded-castle-33109.herokuapp.com/find",{collection:"items"});e.data=t.data}))()}},o=d,n=a("2877"),c=a("9989"),u=a("f09f"),m=a("a370"),p=a("eaac"),b=a("eebe"),f=a.n(b),w=Object(n["a"])(o,l,r,!1,null,null,null);t["default"]=w.exports;f()(w,"components",{QPage:c["a"],QCard:u["a"],QCardSection:m["a"],QTable:p["a"]})}}]);