webpackJsonp([1],{"+wJU":function(t,e){},"9n10":function(t,e){},AnwC:function(t,e){},H68s:function(t,e){},I6tx:function(t,e){},Jo3i:function(t,e){},KIGo:function(t,e){},M6Sr:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},s=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},n,!1,null,null,null);e.default=s.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Detail"}},[e("router-view")],1)],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},s,!1,function(t){i("+wJU")},null,null).exports,r=i("/ocq"),o=i("Dd8w"),c=i.n(o),l=i("NYxO"),d={name:"HomeHeader",computed:c()({},Object(l.c)(["city"]))},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("router-link",{attrs:{to:"/City"}},[e("div",{staticClass:"header-right"},[this._v("\n            "+this._s(this.city)+"\n            "),e("span",{staticClass:"iconfont arrow-icon"},[this._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont back-icon"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n        输入城市/景点/游玩主题\n    ")])}]};var h=i("VU/8")(d,u,!1,function(t){i("hyPj")},"data-v-1987a7d2",null).exports,f={name:"HomeSwiper",props:{list:{type:Array,default:function(){return{list:[]}}}},data:function(){return{swiperOption:{pagination:".swiper-pagination",autoplay:5e3,loop:!0}}},computed:{showSwiper:function(){return this.list.length}}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[this.showSwiper?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl,alt:""}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var m=i("VU/8")(f,p,!1,function(t){i("OgtG")},"data-v-776aa9d2",null).exports,v={name:"HoneIcons",props:{list:{type:Array,default:function(){return{list:[]}}}},data:function(){return{swiperOption:{autoplay:!1}}},computed:{iconsPages:function(){var t=[];return this.list.forEach(function(e,i){var n=Math.floor(i/8);t[n]||(t[n]=[]),t[n].push(e)}),t}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{attrs:{options:t.swiperOption}},t._l(t.iconsPages,function(e,n){return i("swiper-slide",{key:n},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("p",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])}),0)}),1)],1)},staticRenderFns:[]};var C=i("VU/8")(v,_,!1,function(t){i("PFvs")},"data-v-7aaa492a",null).exports,y={name:"HomeRecommend",props:{list:{type:Array,default:function(){return{list:[]}}}},data:function(){return{}}},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("热销推荐")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}}),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"item-btn"},[t._v("查看详情")])])])}),1)])},staticRenderFns:[]};var g=i("VU/8")(y,w,!1,function(t){i("xEVW")},"data-v-183933d4",null).exports,b={name:"HomeWeekend",props:{list:{type:Array,default:function(){return{list:[]}}}},data:function(){return{}}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("周末去哪儿")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}),0)])},staticRenderFns:[]};var I=i("VU/8")(b,k,!1,function(t){i("H68s")},"data-v-013f7b2d",null).exports,x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"footer"},[e("p",{staticClass:"footerDesc"},[this._v(this._s(this.footerCopy))]),this._v(" "),e("p",{staticClass:"footerDesc"},[this._v("一个旅游网站")])])])},staticRenderFns:[]};var $=i("VU/8")({name:"CommonFooter",data:function(){return{footerCopy:"© 2019 Joe 版权所有 | ICP备000000"}}},x,!1,function(t){i("vmF/")},"data-v-19bb74a5",null).exports,S=i("mtWM"),F=i.n(S),E={name:"callbackTop",data:function(){return{show:!1}},methods:{callbackTop:function(){document.documentElement.scrollTop=0},divShow:function(){var t=document.documentElement.scrollTop;this.show=t>300}},mounted:function(){window.addEventListener("scroll",this.divShow)},beforeDestroy:function(){window.removeEventListener("scroll",this.divShow)}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"callbackTop",on:{click:this.callbackTop}},[e("div",{staticClass:"triangle"})])},staticRenderFns:[]};var U=i("VU/8")(E,T,!1,function(t){i("bgzn")},"data-v-4923efb8",null).exports,P={name:"Home",components:{HomeHeader:h,HomeSwiper:m,HomeIcons:C,HomeRecommend:g,HomeWeekend:I,HomeFooter:$,CallbackTop:U},data:function(){return{lastCity:"",swiperList:[],iconList:[],recommendList:[],weekendList:[]}},computed:c()({},Object(l.c)(["city"])),methods:{getHomeInfo:function(){F.a.get("/api/index.json?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}}},mounted:function(){this.getHomeInfo(),this.lastCity=this.city},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())}},O={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header"),t._v(" "),i("home-swiper",{attrs:{list:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{list:t.iconList}}),t._v(" "),i("home-recommend",{attrs:{list:t.recommendList}}),t._v(" "),i("home-weekend",{attrs:{list:t.weekendList}}),t._v(" "),i("home-footer"),t._v(" "),i("callback-top")],1)},staticRenderFns:[]};var N=i("VU/8")(P,O,!1,function(t){i("AnwC")},"data-v-20172da7",null).exports,R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-back"},[this._v("")])]),this._v("\n  城市选择\n")],1)},staticRenderFns:[]};var V=i("VU/8")({name:"CityHeader"},R,!1,function(t){i("i6VO")},"data-v-888528ec",null).exports,H=i("GQaK"),A={name:"CitySearch",props:{cities:{type:Object,default:function(){return{cities:""}}}},data:function(){return{keyword:"",list:[],timer:null}},computed:{hasData:function(){return!this.list.length}},methods:c()({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(l.b)(["changeCity"])),watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyword?this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i)});t.list=e},100):this.list=[]}},mounted:function(){this.scroll=new H.a(this.$refs.search,{click:!0})}},D={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"请输入城市名或拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[i("ul",[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"search-btn border-bottom",on:{click:function(i){return t.handleCityClick(e.name)}}},[t._v("\n        "+t._s(e.name)+"\n      ")])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasData,expression:"hasData"}],staticClass:"search-btn border-bottom"},[t._v("\n        没有找到匹配数据\n      ")])],2)])])},staticRenderFns:[]};var L=i("VU/8")(A,D,!1,function(t){i("z9bu")},"data-v-075eaafc",null).exports,G={name:"CityList",props:{hotCities:{type:Array,default:function(){return{hotCities:[]}}},cities:{type:Object,default:function(){return{cities:""}}},alphabetFlag:{type:String,default:function(){return{alphabetFlag:""}}}},computed:c()({},Object(l.c)({currentCity:"city"})),methods:c()({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(l.b)(["changeCity"])),watch:{alphabetFlag:function(){if(this.alphabetFlag){var t=this.$refs[this.alphabetFlag][0];this.scroll.scrollToElement(t)}}},mounted:function(){this.scroll=new H.a(this.$refs.wrapper,{mouseWheel:!0,click:!0,tap:!0})}},j={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"btn-list"},[i("div",{staticClass:"btn-wrapper"},[i("div",{staticClass:"btn"},[t._v(t._s(this.currentCity))])])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"btn-list"},t._l(t.hotCities,function(e){return i("div",{key:e.id,staticClass:"btn-wrapper",on:{click:function(i){return t.handleCityClick(e.name)}}},[i("div",{staticClass:"btn"},[t._v(t._s(e.name))])])}),0)]),t._v(" "),t._l(t.cities,function(e,n){return i("div",{key:n,ref:n,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(n))]),t._v(" "),i("div",{staticClass:"item-list"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"item border-bottom",on:{click:function(i){return t.handleCityClick(e.name)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])}),0)])})],2)])},staticRenderFns:[]};var M=i("VU/8")(G,j,!1,function(t){i("Rpo7")},"data-v-7b06432a",null).exports,z={name:"CityAlphabet",props:{cities:{type:Object,default:function(){return{cities:""}}}},data:function(){return{touchStart:!1,startY:0,timer:null}},updated:function(){this.startY=this.$refs.A[0].offsetTop},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},methods:{handleBtn:function(t){this.$emit("change",t.target.innerText)},handleStart:function(){this.touchStart=!0},handleMove:function(t){var e=this;this.touchStart&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var i=t.touches[0].clientY-79,n=Math.floor((i-e.startY)/20);n>=0&&n<e.letters.length&&e.$emit("change",e.letters[n])},15))},handleEnd:function(){this.touchStart=!1}}},Y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.letters,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{click:t.handleBtn,touchstart:t.handleStart,touchmove:t.handleMove,touchend:t.handleEnd}},[t._v("\n    "+t._s(e)+"\n  ")])}),0)},staticRenderFns:[]};var B={name:"City",components:{CityHeader:V,CitySearch:L,CityList:M,CityAlphabet:i("VU/8")(z,Y,!1,function(t){i("gp6+")},"data-v-daf42f2e",null).exports},data:function(){return{cities:{},hotCities:[],alphabetFlag:""}},methods:{getCityInfo:function(){F.a.get("/api/city.json").then(this.handleGetCityInfoSucc)},handleGetCityInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.cities=e.cities,this.hotCities=e.hotCities}},handleAlphabet:function(t){this.alphabetFlag=t}},mounted:function(){this.getCityInfo()}},W={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{cities:t.cities,hotCities:t.hotCities,alphabetFlag:t.alphabetFlag}}),t._v(" "),i("city-alphabet",{attrs:{cities:t.cities},on:{change:t.handleAlphabet}})],1)},staticRenderFns:[]};var J=i("VU/8")(B,W,!1,function(t){i("Jo3i")},"data-v-1afa799e",null).exports,K={name:"CommonGallery",props:{imgs:{type:Array,default:function(){return[]}}},data:function(){return{swiperOptions:{pagination:".swiper-pagination",paginationType:"fraction",observer:!0,observeParents:!0}}},methods:{handleGalleryClick:function(){this.$emit("close")}}},X={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.handleGalleryClick}},[e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOptions}},[this._l(this.imgs,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"gallery-img",attrs:{src:t,alt:""}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var q=i("VU/8")(K,X,!1,function(t){i("iZNo")},"data-v-337f9230",null).exports,Z={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var Q=i("VU/8")({name:"commonAnimate"},Z,!1,function(t){i("KIGo")},"data-v-c3233856",null).exports,tt={name:"DetailBanner",props:{fromName:{type:String,default:function(){return{fromName:""}}},bannerImg:{type:Array,default:function(){return{bannerImg:[]}}},galleryImg:{type:Array,default:function(){return{galleryImg:[]}}}},data:function(){return{showGallery:!1,imgs:[],swiperOptions:{autoplay:5e3,observer:!0,observeParents:!0}}},methods:{handleBannerClick:function(){this.showGallery=!0},handleCloseGallery:function(){this.showGallery=!1}},components:{CommonGallery:q,CommonAnimate:Q}},et={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.handleBannerClick}},[i("swiper",{attrs:{options:t.swiperOptions}},t._l(t.bannerImg,function(t){return i("swiper-slide",{key:t.id},[i("img",{staticClass:"banner-img",attrs:{src:t.ImgUrl,alt:""}})])}),1),t._v(" "),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-title"},[t._v("\n        "+t._s(t.fromName)+"\n      ")]),t._v(" "),t._m(0)])],1),t._v(" "),i("common-animate",[i("common-gallery",{directives:[{name:"show",rawName:"v-show",value:t.showGallery,expression:"showGallery"}],attrs:{imgs:t.galleryImg},on:{close:t.handleCloseGallery}})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-number"},[e("span",{staticClass:"iconfont banner-icon"},[this._v("")]),this._v("\n        7\n      ")])}]};var it=i("VU/8")(tt,et,!1,function(t){i("pPGY")},"data-v-3b50f0b9",null).exports,nt={name:"DetailHeader",data:function(){return{showAbs:!0,opacityStyle:{opacity:0}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;if(t>60){var e=t/140;e=e>1?1:e,this.opacityStyle={opacity:e},this.showAbs=!1}else this.showAbs=!0}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}},st={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:this.showAbs,expression:"showAbs"}],staticClass:"header-abs",attrs:{tag:"div",to:"/"}},[e("div",{staticClass:"iconfont header-abs-back"},[this._v("")])]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:this.opacityStyle},[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-fixed-back"},[this._v("")])]),this._v("\n    景点详情\n  ")],1)],1)},staticRenderFns:[]};var at=i("VU/8")(nt,st,!1,function(t){i("acYF")},"data-v-2e422805",null).exports,rt={name:"DetailList",props:{detailInfo:{type:Object,default:function(){return{detailInfo:{}}}}}},ot={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"header-title"},[i("img",{staticClass:"header-BgImg",attrs:{src:t.detailInfo.priceImg,alt:""}}),t._v(" "),i("div",{staticClass:"header-wrapper"},[i("span",{staticClass:"header-price"},[i("span",[t._v("￥")]),t._v(t._s(t.detailInfo.price)),i("em",[t._v("/人起")])]),t._v(" "),i("span",{staticClass:"header-priceSave"},[t._v(t._s(t.detailInfo.priceSave)+"分")]),t._v(" "),i("span",{staticClass:"header-people"},[t._v(t._s(t.detailInfo.people)+"人出游")])])]),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"content-title"},[t._v(t._s(t.detailInfo.sightName))]),t._v(" "),i("div",{staticClass:"content-info"},[t._v(t._s(t.detailInfo.sightInfo))]),t._v(" "),i("div",{staticClass:"content-list"},t._l(t.detailInfo.signtTag,function(e,n){return i("i",{key:n,staticClass:"border"},[t._v("\n        "+t._s(e)+"\n      ")])}),0)]),t._v(" "),i("div",{staticClass:"sellPoint"},[i("div",{staticClass:"sellPointTitle"},[i("i",{staticClass:"sellPointIcon"}),t._v("\n      "+t._s(t.detailInfo.sellPointTitle)+"\n    ")]),t._v(" "),i("ul",{staticClass:"sellPointWrapper"},t._l(t.detailInfo.sellPoint,function(e,n){return i("li",{key:n,staticClass:"sellPointText"},[i("h3",[t._v(t._s(e.sellPointName))]),t._v(" "),i("div",[t._v(t._s(e.sellPointInfo))])])}),0)]),t._v(" "),i("div",{staticClass:"cost"},[i("div",{staticClass:"sellPointTitle"},[i("i",{staticClass:"sellPointIcon"}),t._v("\n      "+t._s(t.detailInfo.cost)+"\n    ")]),t._v(" "),t._l(t.detailInfo.costDescription,function(e,n){return i("div",{key:n,staticClass:"costDescription"},[i("h3",{staticClass:"costTitle"},[t._v(t._s(e.costTitle))]),t._v(" "),i("table",{staticClass:"costInfo"},t._l(e.costInfo,function(e,n){return i("tr",{key:n},[i("th",{staticClass:"costInfoName"},[t._v(t._s(e.costInfoName))]),t._v(" "),i("td",{staticClass:"costInfoContent"},[t._v(t._s(e.costInfoContent))])])}),0)])})],2)])},staticRenderFns:[]};var ct=i("VU/8")(rt,ot,!1,function(t){i("VXPb")},"data-v-37460cd0",null).exports,lt={name:"DetailRecommend",props:{recommend:{type:Object,detfault:function(){return{recommend:{}}}}}},dt={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"recommend"},[i("div",{staticClass:"sellPointTitle"},[i("i",{staticClass:"sellPointIcon"}),t._v("\n      "+t._s(t.recommend.recommendTitle)+"\n    ")]),t._v(" "),i("ul",{staticClass:"recommendWarpper"},t._l(t.recommend.recommendContent,function(e){return i("router-link",{key:e.id,staticClass:"recommendContent",attrs:{tag:"li",to:"/detail/"+e.id}},[i("div",{staticClass:"recommendImg"},[i("img",{attrs:{src:e.recommendContentUrl,alt:""}})]),t._v(" "),i("h3",[t._v(t._s(e.recommendContentTil))]),t._v(" "),i("p",[i("em",[t._v("￥")]),t._v(t._s(e.recommendContentPrice)),i("i",[t._v("起")])])])}),1)])])},staticRenderFns:[]};var ut={name:"Detail",components:{DetailBanner:it,DetailHeader:at,DetailList:ct,DetailRecommend:i("VU/8")(lt,dt,!1,function(t){i("I6tx")},"data-v-09028572",null).exports,CommonFooter:$,CallbackTop:U},data:function(){return{fromName:"",bannerImg:[],galleryImg:[],detailInfo:{},recommend:{}}},methods:{getDetailInfo:function(){F.a.get("/api/detail.json",{params:{id:this.$route.params.id}}).then(this.handleGetDataSucc)},handleGetDataSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.bannerImg=e.bannerImg,this.galleryImg=e.galleryImg,this.fromName=e.fromName,this.detailInfo=e.detailInfo,this.recommend=e.recommend}}},mounted:function(){this.getDetailInfo()}},ht={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("detail-banner",{attrs:{bannerImg:t.bannerImg,galleryImg:t.galleryImg,fromName:t.fromName}}),t._v(" "),i("detail-header"),t._v(" "),i("detail-list",{attrs:{detailInfo:t.detailInfo}}),t._v(" "),i("detail-recommend",{attrs:{recommend:t.recommend}}),t._v(" "),i("common-footer"),t._v(" "),i("callback-top")],1)},staticRenderFns:[]};var ft=i("VU/8")(ut,ht,!1,function(t){i("Uz7M")},"data-v-cb628eb2",null).exports;n.a.use(r.a);var pt=new r.a({routes:[{path:"/",name:"Home",component:N},{path:"/City",name:"City",component:J},{path:"/detail/:id",name:"Detail",component:ft}],scrollBehavior:function(t,e,i){return i||{x:0,y:0}}}),mt="合肥";try{localStorage.city&&(mt=localStorage.city)}catch(t){}var vt={city:mt},_t={changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}};n.a.use(l.a);var Ct=new l.a.Store({state:vt,mutations:_t,getters:{doubleCity:function(t){return t.city+"示"}}}),yt=(i("9n10"),i("M6Sr"),i("v5o6")),wt=i.n(yt),gt=(i("TzC8"),i("F3EI")),bt=i.n(gt);i("v2ns"),i("j1ja");n.a.config.productionTip=!1,wt.a.attach(document.body),n.a.use(bt.a),new n.a({el:"#app",router:pt,store:Ct,components:{App:a},template:"<App/>"})},OgtG:function(t,e){},PFvs:function(t,e){},Rpo7:function(t,e){},TzC8:function(t,e){},Uz7M:function(t,e){},VXPb:function(t,e){},acYF:function(t,e){},bgzn:function(t,e){},"gp6+":function(t,e){},hyPj:function(t,e){},i6VO:function(t,e){},iZNo:function(t,e){},pPGY:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="undefined"!=typeof window;n&&(window.Swiper=i("gsqX"));var s={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&n&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&n){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var s=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(s):s()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(s,a,!1,null,null,null);e.default=r.exports},v2ns:function(t,e){},"vmF/":function(t,e){},xEVW:function(t,e){},z9bu:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.80c0ee60ac8725520da1.js.map