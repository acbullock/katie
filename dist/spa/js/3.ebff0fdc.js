(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"713b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),a("q-toolbar-title",[e._v("Katie App")]),a("div",[e._v("AK43")])],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[e._v("Essential Links")]),e._l(e.essentialLinks,(function(t){return a("EssentialLink",e._b({key:t.title},"EssentialLink",t,!1))}))],2)],1),a("q-page-container",[a("router-view")],1)],1)},i=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-item",{attrs:{clickable:"",tag:"a",href:e.link}},[e.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:e.icon}})],1):e._e(),a("q-item-section",[a("q-item-label",[e._v(e._s(e.title))]),a("q-item-label",{attrs:{caption:""}},[e._v(e._s(e.caption))])],1)],1)},r=[],o={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},s=o,c=a("2877"),p=a("66e5"),u=a("4074"),b=a("0016"),d=a("0170"),f=a("eebe"),m=a.n(f),v=Object(c["a"])(s,l,r,!1,null,null,null),w=v.exports;m()(v,"components",{QItem:p["a"],QItemSection:u["a"],QIcon:b["a"],QItemLabel:d["a"]});const k=[{title:"Overview",caption:"Books",icon:"dashboard",link:"/#/overview"},{title:"Bought Item",caption:"Log a purchase",icon:"fiber_new",link:"/#/bought"},{title:"Sold Item",caption:"Log a sale",icon:"attach_money",link:"/#/sold"}];var q={name:"MainLayout",components:{EssentialLink:w},data(){return{leftDrawerOpen:!1,essentialLinks:k}}},_=q,L=a("4d5a"),g=a("e359"),h=a("65c6"),Q=a("9c40"),y=a("6ac5"),O=a("9404"),D=a("1c1c"),E=a("09e3"),I=Object(c["a"])(_,n,i,!1,null,null,null);t["default"]=I.exports;m()(I,"components",{QLayout:L["a"],QHeader:g["a"],QToolbar:h["a"],QBtn:Q["a"],QToolbarTitle:y["a"],QDrawer:O["a"],QList:D["a"],QItemLabel:d["a"],QPageContainer:E["a"]})}}]);