webpackJsonp([1],{"+gz6":function(t,e){},"7Otq":function(t,e,s){t.exports=s.p+"static/img/logo.1b345f4.png"},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("img",{attrs:{src:s("7Otq")}}),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var r=s("VU/8")({name:"App"},a,!1,function(t){s("+gz6")},null,null).exports,o=s("/ocq"),i=s("VU/8")(null,null,!1,null,null,null).exports,u={data:function(){return{user:{userid:"",password:""}}},methods:{login:function(t){this.$http.post("/api/users/login",{user:this.user}).then(function(t){alert(t.data.message)},function(t){alert("Login failed! please check your id or password")}).catch(function(t){alert(t)})}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input_row"},[s("label",{attrs:{for:"userid"}},[t._v("아이디")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.userid,expression:"user.userid"}],attrs:{type:"text",id:"id"},domProps:{value:t.user.userid},on:{input:function(e){e.target.composing||t.$set(t.user,"userid",e.target.value)}}}),t._v(" "),s("div",{staticClass:"input_row"},[s("label",{attrs:{for:"password"}},[t._v("비밀번호")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",id:"password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),t._v(" "),s("div",[s("router-link",{staticClass:"link",attrs:{to:{name:"webtoonindexpage",params:{id:t.webtoon.id}}}},[t._v("로그인")]),t._v(" "),s("a",{attrs:{href:"/signUp"}},[t._v("가입하기")])],1)])])},staticRenderFns:[]},p=s("VU/8")(u,l,!1,null,null,null).exports,d={data:function(){return{user:{userid:"",name:"",password:""}}},methods:{signUp:function(t){var e=this;this.$http.post("/api/users/signup",{user:this.user}).then(function(t){1==t.data.success&&(alert(t.data.message),e.$router.push("/login")),0==t.data.success&&alert(t.data.message)})}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",[s("div",{staticClass:"input_row"},[s("label",{attrs:{for:"id"}},[t._v("아이디")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.userid,expression:"user.userid"}],attrs:{type:"text",id:"userid"},domProps:{value:t.user.userid},on:{input:function(e){e.target.composing||t.$set(t.user,"userid",e.target.value)}}}),t._v(" "),s("div",{staticClass:"input_row"},[s("label",{attrs:{for:"name"}},[t._v("이름")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],attrs:{type:"text",id:"name"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}}),t._v(" "),s("div",{staticClass:"input_row"},[s("label",{attrs:{for:"password"}},[t._v("비밀번호")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",id:"password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),t._v(" "),s("div",[s("button",{on:{click:t.signUp}},[t._v("가입하기")])])])])])},staticRenderFns:[]},v=s("VU/8")(d,c,!1,null,null,null).exports,m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrap"},[s("h1",[t._v("웹툰목록")]),t._v(" "),s("div",[s("div",{staticClass:"webtoons"},[s("div",{staticClass:"row"},t._l(t.webtoons,function(e){return s("div",{key:e,staticClass:"cell"},[s("router-link",{attrs:{to:{name:"webtoonshowpage",params:{id:e.id}}}},[s("img",{staticClass:"poster",attrs:{src:e.poster}})]),t._v(" "),s("div",{staticClass:"detail"},[s("strong",{staticClass:"tit"},[t._v(t._s(e.webtoon_title))]),t._v(" "),s("router-link",{staticClass:"link",attrs:{to:{name:"webtoonshowpage",params:{id:e.id}}}},[t._v("자세히보기")])],1)],1)}),0)])])])},staticRenderFns:[]};var _=s("VU/8")({created:function(){var t=this;this.$http.get("/api/webtoon").then(function(e){t.webtoons=e.data})},data:function(){return{webtoons:[]}}},m,!1,function(t){s("pdna")},null,null).exports,w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detail"},[s("h1",[t._v(t._s(t.webtoon.webtoon_title))]),t._v(" "),s("img",{staticClass:"poster",attrs:{src:t.webtoon.poster}}),t._v(" "),s("section",[s("h2",[t._v("웹툰정보")]),t._v(" "),s("dl",{staticClass:"info"},[s("dt",[t._v("작가 :"+t._s(t.webtoon.pen_name))]),t._v(" "),s("dt",[t._v("연재처 :"+t._s(t.webtoon.platform_name))]),t._v(" "),s("dt",[t._v("링크 :"+t._s(t.webtoon.webtoon_link))])])]),t._v(" "),s("router-link",{staticClass:"link",attrs:{to:{name:"webtoonindexpage",params:{id:t.webtoon.id}}}},[t._v("돌아가기")])],1)},staticRenderFns:[]},g=s("VU/8")({created:function(){var t=this,e=this.$route.params.id;this.$http.get("/api/webtoon/"+e).then(function(e){t.webtoon=e.data[0]})},data:function(){return{webtoon:{}}}},w,!1,null,null,null).exports;n.a.use(o.a);var f=new o.a({mode:"history",routes:[{path:"/mainpage",name:"mainpage",component:i},{path:"/login",name:"login",component:p},{path:"/signup",name:"signup",component:v},{path:"/webtoon",name:"webtoonindexpage",component:_},{path:"/webtoon/:id",name:"webtoonshowpage",component:g}]}),h=s("mtWM"),b=s.n(h);n.a.config.productionTip=!1,n.a.prototype.$http=b.a,new n.a({el:"#app",router:f,components:{App:r},template:"<App/>"})},pdna:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5f8dcff034a00d1f6f1d.js.map