webpackJsonp([1],{"/3AW":function(t,e){},"2jnm":function(t,e){},"4FGb":function(t,e){},"4ml/":function(t,e){},"8QWR":function(t,e){},AR2o:function(t,e){},BhP5:function(t,e){},GdEX:function(t,e){},HYfC:function(t,e){},IFTc:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},s,!1,function(t){n("4FGb")},null,null).exports,a=n("/ocq"),l={data:function(){return{list:[],bg:n("RKQN")}},methods:{enter:function(){this.$router.push("/album")}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg animated fadeIn",style:{backgroundImage:"url("+this.bg+")"}},[e("el-row",{staticClass:"b_button"},[e("el-button",{attrs:{round:""},on:{click:this.enter}},[this._v("点击进入")])],1)],1)},staticRenderFns:[]};var c=n("VU/8")(l,r,!1,function(t){n("HYfC")},"data-v-4a90067e",null).exports,u=n("bOdI"),d=n.n(u),f={data:function(){return d()({list:[],headerFixed:!1,offsetHeight:""},"offsetHeight","")},mounted:function(){this.$nextTick(function(){var t=this.$refs.TapTap;this.offsetTop=t.offsetTop,this.offsetHeight=t.offsetHeight,console.log("offsetTop:"+this.offsetTop+","+this.offsetHeight)}),window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{activeTap:function(t){this.$store.state.indexTap=t},handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.headerFixed=t>this.$store.state.fixheight}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.headerFixed?n("div",{staticClass:"tap_tap fix_top"},[n("div",{class:{active_tap:1==t.$store.state.indexTap},on:{click:function(e){return t.activeTap(1)}}},[t._v("照片直播")]),t._v(" "),n("div",{class:{active_tap:2==t.$store.state.indexTap},on:{click:function(e){return t.activeTap(2)}}},[t._v("时间轴")]),t._v(" "),n("div",{class:{active_tap:3==t.$store.state.indexTap},on:{click:function(e){return t.activeTap(3)}}},[t._v("热门")])]):t._e(),t._v(" "),n("div",{ref:"TapTap",staticClass:"tap_tap"},[n("div",{class:{active_tap:1==t.$store.state.indexTap},on:{click:function(e){return t.activeTap(1)}}},[t._v("照片直播")]),t._v(" "),n("div",{class:{active_tap:2==t.$store.state.indexTap},on:{click:function(e){return t.activeTap(2)}}},[t._v("时间轴")]),t._v(" "),n("div",{class:{active_tap:3==t.$store.state.indexTap},on:{click:function(e){return t.activeTap(3)}}},[t._v("热门")])])])},staticRenderFns:[]};var p=n("VU/8")(f,h,!1,function(t){n("Ovl7")},"data-v-24bcb009",null).exports,m=(n("e0XP"),n("mw3O")),v=n.n(m),g=n("mtWM"),_={props:["imgData"],name:"hello",data:function(){return{}},mounted:function(){this.$previewRefresh()},methods:{handleClose:function(){console.log("close event")},islikes:function(t){var e=this,n={id:t};g.post(this.$store.state.url+"/api/addlike",v.a.stringify(n),{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}).then(function(t){g.get(e.$store.state.url+"/api/getAll").then(function(t){console.log(t),e.$emit("setlikes",t.data.msg)})})},reload:function(){}}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{position:"relative"}},t._l(t.imgData,function(e,i){return t.imgData&&t.imgData.length&&t.imgData.length>0?n("div",{staticClass:"imgtap"},[n("div",{staticClass:"buttonclick",staticStyle:{position:"relative"}},[n("el-button",{staticClass:"rightbtn",attrs:{round:""},on:{click:function(n){return n.stopPropagation(),n.preventDefault(),t.islikes(e.id)}}},[n("div",{staticStyle:{width:"3.75rem"}},[n("font-awesome-icon",{staticStyle:{color:"red"},attrs:{icon:"heart"}}),t._v("\n           "+t._s(e.likes)+"   \n        ")],1)]),t._v(" "),n("img",{staticClass:"animated fadeIn",attrs:{alt:"",width:"100%",src:e.url,preview:"1","preview-text":e.txt}})],1),t._v(" "),n("p",[t._v(t._s(e.txt))]),t._v(" "),n("div")]):t._e()}),0)},staticRenderFns:[]};var T=n("VU/8")(_,x,!1,function(t){n("IFTc")},"data-v-493aadef",null).exports,$=(n("mtWM"),{render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{position:"relative"}},[n("light-timeline",{attrs:{items:t.imgData},scopedSlots:t._u([{key:"tag",fn:function(e){var n=e.item;return[t._v("\n      "+t._s(n.datetime)+"\n    ")]}},{key:"content",fn:function(e){var i=e.item;return[n("img",{staticClass:"animated fadeIn",attrs:{alt:"",width:"100%",src:i.url,preview:"2","preview-text":i.txt}}),t._v(" "),n("p",{staticClass:"txt"},[t._v(t._s(i.txt))])]}}])}),t._v(" "),n("div")],1)},staticRenderFns:[]});var w=n("VU/8")({props:["imgData"],data:function(){return{}},mounted:function(){},methods:{handleClose:function(){}}},$,!1,function(t){n("BhP5")},"data-v-a9865650",null).exports,b={props:["imgData"],name:"hello",data:function(){return{imgWidth:""}},mounted:function(){this.$nextTick(function(){})},methods:{handleClose:function(){console.log("close event")}}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"imgcontent"},this._l(this.imgData,function(t,n){return e("div",{staticClass:"imgarea"},[e("img",{staticClass:"animated fadeIn",style:{width:0==n?"100%":1==n?"66.65%":2==n?"33.35%":3==n?"33.35%":"33.33%"},attrs:{src:t.url,preview:"3","preview-text":t.txt}})])}),0)])},staticRenderFns:[]};var k=n("VU/8")(b,C,!1,function(t){n("/3AW")},"data-v-c70b1766",null).exports,S=n("MdTC"),y=n.n(S),F=(n("GdEX"),{name:"MeScrollVue",data:function(){return{mescroll:null,lastScrollTop:0,lastBounce:null}},props:{up:Object,down:Object},mounted:function(){this.mescroll=new y.a(this.$refs.mescroll,{up:this.up,down:this.down}),this.$emit("init",this.mescroll)},methods:{beforeRouteEnter:function(){var t=this;this.mescroll&&(this.lastScrollTop&&(this.mescroll.setScrollTop(this.lastScrollTop),setTimeout(function(){t.mescroll.setTopBtnFadeDuration(0)},16)),null!=this.lastBounce&&this.mescroll.setBounce(this.lastBounce))},beforeRouteLeave:function(){this.mescroll&&(this.lastScrollTop=this.mescroll.getScrollTop(),this.mescroll.hideTopBtn(0),this.lastBounce=this.mescroll.optUp.isBounce,this.mescroll.setBounce(!0))}}}),R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"mescroll",staticClass:"mescroll"},[e("div",[this._t("default")],2)])},staticRenderFns:[]};var I=n("VU/8")(F,R,!1,function(t){n("8QWR")},null,null).exports,E=n("mtWM"),V={data:function(){return{usernum:0,list:[],imgdata:[{url:"",txt:"礼赞共和国  智慧新生活    礼赞共和国  智慧新生活",datetime:"2019-08-12 24:24:24",likes:"0",id:0}],dialogVisible:!1}},created:function(){this.reload(),this.onlinenum(),this.reloadNum()},mounted:function(){this.$nextTick(function(){this.$store.state.fixheight+=this.$refs.toptitle.offsetHeight,console.log(this.$store.state.fixheight),this.$store.state.fixheight+=this.$refs.toptext.offsetHeight,console.log(this.$store.state.fixheight)})},components:{Taptap:p,Imggroup3:k,Imggroup2:w,Imggroup1:T,MescrollVue:I},methods:{cb:function(t,e){},scroll:function(t,e,n){console.log(t)},onloadimg:function(){this.$store.state.fixheight+=this.$refs.topImg.offsetHeight,console.log(this.$store.state.fixheight)},message:function(){this.dialogVisible=!0},reload:function(){var t=this;E.get(this.$store.state.url+"/api/getAll").then(function(e){console.log(e),t.imgdata=e.data.msg}).catch(function(t){console.log(t)}).finally(function(){})},setlikes:function(t){this.imgdata=t},onlinenum:function(){E.get(this.$store.state.url+"/api/addusernum").then(function(t){}).catch(function(t){console.log(t)})},reloadNum:function(){var t=this;E.get(this.$store.state.url+"/api/getusernum").then(function(e){console.log(e),t.usernum=e.data.msg[0].onlinenum}).catch(function(t){console.log(t)})}}},H={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"overFlow"},[i("el-dialog",{attrs:{visible:t.dialogVisible,width:"80%",top:"11vh"},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("img",{attrs:{src:n("YNxU"),width:"100%",alt:""}})]),t._v(" "),i("div",[i("img",{ref:"topImg",attrs:{src:n("hSo9"),alt:"",width:"100%"},on:{load:t.onloadimg}}),t._v(" "),i("div",{ref:"toptitle"},[i("h3",{staticClass:"title"},[t._v("礼赞共和国 智慧新生活")])]),t._v(" "),i("div",{ref:"toptext",staticClass:"inline-text"},[i("div",{staticStyle:{"text-align":"left"}},[i("span",{staticStyle:{color:"red"}},[t._v(t._s(t.usernum))]),t._v(" "),i("span",[t._v(" 次照片浏览")])]),t._v(" "),i("div",{staticStyle:{"text-align":"right"},on:{click:t.message}},[i("span",[t._v("活动详情")])])]),t._v(" "),i("Taptap"),t._v(" "),1==t.$store.state.indexTap?i("Imggroup1",{attrs:{"img-data":t.imgdata},on:{setlikes:t.setlikes}}):t._e(),t._v(" "),2==t.$store.state.indexTap?i("Imggroup2",{attrs:{"img-data":t.imgdata}}):t._e(),t._v(" "),3==t.$store.state.indexTap?i("Imggroup3",{attrs:{"img-data":t.imgdata}}):t._e()],1)],1)},staticRenderFns:[]};var O=n("VU/8")(V,H,!1,function(t){n("AR2o")},"data-v-7367c034",null).exports;i.default.use(a.a);var U=new a.a({routes:[{path:"/",name:"Hompage",component:c},{path:"/album",name:"Album",component:O}]}),A=n("NYxO");i.default.use(A.a);var B=new A.a.Store({state:{indexTap:"1",fixheight:0,url:"http://yun.neweasco.com:3001"},mutations:{showpage:function(){}}}),D=(n("oPmM"),n("AXdl"),n("Loyc")),W=n.n(D),M=n("Fd2+"),N=(n("4ml/"),n("zL8q")),j=n.n(N),P=(n("tvR6"),n("hLg7"),n("fzln"),n("2jnm"),n("OCIE"),n("C/JF")),Y=n("fhbW"),L=n("1e6/"),X=n("YXZ/"),G=n.n(X),Q=n("ibnl"),q=n.n(Q);n("tOCg"),n("mtWM");P.c.add(Y.a),i.default.component("font-awesome-icon",L.a),i.default.use(G.a),i.default.use(M.a),i.default.use(j.a),i.default.use(W.a),i.default.config.productionTip=!1,i.default.use(q.a),new i.default({el:"#app",router:U,store:B,components:{App:o},template:"<App/>"})},OCIE:function(t,e){},Ovl7:function(t,e){},RKQN:function(t,e,n){t.exports=n.p+"static/img/bgimg.e28897b.jpg"},YNxU:function(t,e,n){t.exports=n.p+"static/img/bill.753770c.jpg"},e0XP:function(t,e){},hSo9:function(t,e,n){t.exports=n.p+"static/img/top.ed3e3f8.jpg"},oPmM:function(t,e){},tOCg:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6526defa21accc213912.js.map