webpackJsonp([1],{"7seb":function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("img",{attrs:{src:s("wRNL")}}),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var a=s("VU/8")({name:"App"},r,!1,function(e){s("7seb")},null,null).exports,o=s("/ocq"),i=s("VU/8")(null,null,!1,null,null,null).exports,u={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"input_row"},[s("label",{attrs:{for:"id"}},[e._v("아이디")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.userid,expression:"user.userid"}],attrs:{type:"text",id:"id"},domProps:{value:e.user.userid},on:{input:function(t){t.target.composing||e.$set(e.user,"userid",t.target.value)}}}),e._v(" "),s("div",{staticClass:"input_row"},[s("label",{attrs:{for:"password"}},[e._v("비밀번호")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{type:"password",id:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e._v(" "),s("div",[s("button",{on:{click:e.login}},[e._v("로그인")]),e._v(" "),s("a",{attrs:{href:"/signUp"}},[e._v("가입하기")])])])])},staticRenderFns:[]},p=s("VU/8")(null,u,!1,null,null,null).exports,l={data:function(){return{user:{userid:"",password:"",age:""}}},methods:{signUp:function(e){var t=this;this.$http.post("/api/users",{user:this.user}).then(function(e){1==e.data.success&&(alert(e.data.message),t.$router.push("/webtoon")),0==e.data.success&&alert(e.data.message)}).catch(function(e){alert("error")})}}},d={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"input_row"},[s("label",{attrs:{for:"id"}},[e._v("아이디")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.userid,expression:"user.userid"}],attrs:{type:"text",id:"id"},domProps:{value:e.user.userid},on:{input:function(t){t.target.composing||e.$set(e.user,"userid",t.target.value)}}}),e._v(" "),s("div",{staticClass:"input_row"},[s("label",{attrs:{for:"password"}},[e._v("패스워드")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{type:"password",id:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e._v(" "),s("div",{staticClass:"input_row"},[s("label",{attrs:{for:"age"}},[e._v("나이")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.age,expression:"user.age"}],attrs:{type:"text",id:"age"},domProps:{value:e.user.age},on:{input:function(t){t.target.composing||e.$set(e.user,"age",t.target.value)}}}),e._v(" "),s("div",[s("button",{on:{click:e.signUp}},[e._v("가입하기")])])])])])},staticRenderFns:[]},c=s("VU/8")(l,d,!1,null,null,null).exports,v={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"webtoons"},[s("h1",[e._v("웹툰 목록")]),e._v(" "),e._l(e.webtoons,function(t){return s("div",{key:t,staticClass:"webtoons"},[s("img",{staticClass:"poster",attrs:{src:t.poster}}),e._v(" "),s("div",[s("strong"),e._v(",\n      "),s("i"),e._v(" "),s("router-link",{attrs:{to:{name:"webtoonshowpage",params:{id:t.id}}}},[e._v("더보기")])],1)])})],2)},staticRenderFns:[]},m=s("VU/8")({created:function(){var e=this;this.$http.get("/api/webtoon").then(function(t){e.webtoons=t.data})},data:function(){return{webtoons:[]}}},v,!1,null,null,null).exports,w={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("상세 내용")]),this._v("\n  "+this._s(this.webtoon)+"\n")])},staticRenderFns:[]},_=s("VU/8")({created:function(){var e=this,t=this.$route.params.id;this.$http.get("/api/webtoon/"+t).then(function(t){e.webtoon=t.data})},data:function(){return{webtoon:{}}}},w,!1,null,null,null).exports;n.a.use(o.a);var g=new o.a({mode:"history",routes:[{path:"/mainpage",name:"mainpage",component:i},{path:"/login",name:"login",component:p},{path:"/signup",name:"signup",component:c},{path:"/webtoon",name:"webtoonindexpage",component:m},{path:"/webtoon/:id",name:"webtoonshowpage",component:_}]}),h=s("mtWM"),f=s.n(h);n.a.prototype.$http=f.a,n.a.config.productionTip=!1,new n.a({el:"#app",router:g,components:{App:a},template:"<App/>"})},wRNL:function(e,t,s){e.exports=s.p+"static/img/test.fdfa02d.jpg"}},["NHnr"]);
//# sourceMappingURL=app.4b89980fa95b392ef0da.js.map