(function(t){function e(e){for(var i,a,l=e[0],o=e[1],c=e[2],h=0,f=[];h<l.length;h++)a=l[h],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,l=1;l<n.length;l++){var o=n[l];0!==s[o]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={app:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/resume/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Home")],1)},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"info"},[n("h1",{staticClass:"name"},[t._v(t._s(t.name))]),n("p",[t._v("\n      电话: "),n("strong",{staticClass:"tel"},[t._v(t._s(t.tel))]),t._v("\n      邮件: "),n("strong",{staticClass:"email"},[t._v(t._s(t.email))])])]),n("div",{staticClass:"contact"},[n("h4",[t._v("个人链接")]),n("hr"),n("div",{staticClass:"blogs"},[t._v("\n      个人主页: "),n("strong",[n("a",{attrs:{href:t.website,target:"_blank"}},[t._v(t._s(t.website))]),t._v("（很酷的个人页）")])]),n("div",{staticClass:"links"},[t._v("\n      Github: "),n("strong",[n("a",{attrs:{href:t.github,target:"_blank"}},[t._v(t._s(t.github))]),t._v("（3.5k+ Stars）")])]),n("div",{staticClass:"links"},[t._v("\n      知乎: "),n("strong",[n("a",{attrs:{href:t.zhihu,target:"_blank"}},[t._v(t._s(t.zhihu))]),t._v("（1.6k+ 关注）")])]),n("div",{staticClass:"links"},[t._v("\n      Medium: "),n("strong",[n("a",{attrs:{href:t.medium,target:"_blank"}},[t._v(t._s(t.medium))]),t._v("（20+ 英文博客）")])])]),n("div",{staticClass:"edu"},[n("h4",[t._v("教育背景")]),n("hr"),n("List",{attrs:{source:t.edus}})],1),n("div",{staticClass:"skills"},[n("h4",[t._v("技能清单")]),n("hr"),n("Skills",{attrs:{skills:t.skills}})],1),t.works?n("div",{staticClass:"interns"},[n("h4",[t._v("工作经历")]),n("hr"),n("List",{attrs:{source:t.works}})],1):t._e(),n("div",{staticClass:"projects"},[n("h4",[t._v("个人项目")]),n("hr"),n("List",{attrs:{source:t.projects}})],1)])},l=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.source,(function(e){return n("li",[n("div",{staticClass:"item"},[n("span",{staticClass:"left"},[t._v("\n                "+t._s(e.left)+"\n                "),n("small",[e.link?n("a",{staticClass:"link",attrs:{href:e.link,target:"_blank"}},[t._v(" ("+t._s(e.link)+")")]):t._e()])]),n("span",{staticClass:"right"},[t._v(t._s(e.right))])]),n("ul",t._l(e.children,(function(e){return n("li",[n("p",{staticClass:"children-item"},[n("span",{staticClass:"left"},[n("span",{domProps:{innerHTML:t._s(t.renderLeft(e.left))}}),e.link?n("a",{staticClass:"link",attrs:{href:e.link,target:"_blank"}},[n("strong",[t._v("（"+t._s(e.link)+"）")])]):t._e()]),n("span",{staticClass:"right"},[t._v(t._s(e.right))])])])})),0)])})),0)},c=[],u=(n("a481"),{name:"Edu",props:{source:{type:Array,required:!0}},methods:{renderLeft:function(t){return t.replace(/\*([\w.\s&()\/+,，、-]+)\*/g,"<strong>$1</strong>")}}}),h=u,f=(n("9b01"),n("2877")),p=Object(f["a"])(h,o,c,!1,null,"0979b36a",null),d=p.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("strong",[t._v("技术：")]),t._v(t._s(t.skills.techs.join(", "))+"\n    ")]),n("li",[n("strong",[t._v("测试 & 部署：")]),t._v(t._s(t.skills.tests.join(", "))+"\n    ")])])},_=[],v={name:"Skills",props:{skills:{type:Object,required:!0}}},m=v,b=Object(f["a"])(m,g,_,!1,null,"8861f24c",null),k=b.exports,y={name:"严海翔",tel:"15602564425",email:"haixiang6123@gmail.com",github:"https://github.com/haixiangyan",medium:"https://medium.com/@haixiang6123",website:"https://yanhaixiang.com",zhihu:"https://www.zhihu.com/people/haixiangyan",edus:[{left:"加州大学尔湾分校",right:"美国加州",children:[{left:"专业：Master of Networked System，GPA: 3.3 / 4.0",right:"2018年9月 - 2020年3月"}]},{left:"东北大学",right:"中国沈阳",children:[{left:"专业：软件工程本科，GPA：3.6 / 5.0",right:"2014年10月 - 2018年6月"}]}],skills:{techs:["React.js","Vue.js","HTML5","JavaScript","TypeScript","ES6","CSS3","SCSS","Node.js"],tests:["Cypress","Jest","React Testing Library"]},works:[{left:"腾讯@智能平台",link:"",right:"2021年11月 - 至今",children:[{left:"在腾讯智能平台负责智能客服系统开发，为中小企业客户提供智能客服机器人能力，利用技术提升企业客服沟通效率"},{left:"使用 *React* + *Redux* + *Ant Design* 技术栈开发智能机器人平台、质检平台、客服H5、小程序以及企微侧边栏应用"},{left:"使用 *qiankun* 重构老平台，一方面团队能持续用新技术更新和重构，一方面保证团队随时可以接入新需求，实现项目增量更新"},{left:"使用 *qiankun* 对接和融合多方平台，能够让单一客服机器人平台接入数智人平台、新行业平台，大大增强老项目的可扩展能力"},{left:"帮助项目构建一条完备的流水线，实现多环境发布、环境隔离、项目回滚、质量红线和代码质量告警，同时接入页面告警以及埋点上报，从而加强项目工程化建设"}]},{left:"腾讯@在线教育",link:"",right:"2020年7月 - 2021年11月",children:[{left:"在腾讯开心鼠部门负责微信社群运营系统开发，包含桌面PC端以及企业微信侧边栏应用，服务于 5000+ 运营老师，利用技术降低人力成本和提高运营效率"},{left:"使用 *React* + *Redux* + *Ant Design* 技术栈开发企业微信侧边栏和业务管理后台，并参与前端中台开发，使用 *Nest.js* 开发企微转发服务以及前端所需公共服务"},{left:"根据业务需要封装一套侧边栏开发 SDK 工具以及上手模板，并输出《侧边栏开发指南》，方便其它部门上手和接入"},{left:"调研并深入了解 *single-spa* 和 *qiankun* 微前端框架，在企微侧边栏落地微前端技术，利用 *qiankun* 管理多个应用"},{left:"在前端处设置缓存层，通过并行 *Promise*，以及 *Suspense + Lazy Component* 的方法优化网页加载速度"}]},{left:"大疆创新（美国 Palo Alto）",link:"",right:"2019年06月",children:[{left:"负责开发 LAANC（Low-Altitude Authorization and Notification）无人机空中飞行范围控制系统，使用 *Vue.js* + *Vuex* + *Vue Router* 编写开发"},{left:"使用开源地图库 *MapBox*，并在业务场景中优化开源库中的圆型区域选取问题"}]},{left:"Data Brix（美国 Irvine）",link:"",right:"2019年04月",children:[{left:"使用 *React.js* + *Redux* + *Ant Design* 单独开发一套 OJ（Online Judge）系统，负责网页搭建以及管理页面开发"}]}],projects:[{left:"知识输出",right:"2020年 - 至今",children:[{left:"《造轮子文章系列》（Star: 1.5k+）",link:"https://github.yanhaixiang.com/make-wheels/"},{left:"《Jest 实践指南》（Star: 500+）",link:"https://github.yanhaixiang.com/jest-tutorial/"},{left:"《Linter 上手指南》（Star: 150+）",link:"https://github.yanhaixiang.com/linter-tutorial/"},{left:"《企业微信侧边栏开发指南》&开发模板",link:"https://github.com/wecom-sidebar"}]},{left:"守望先锋 UI 库（Star: 420+）",link:"https://github.yanhaixiang.com/overwatch-ui-doc/#/",right:"2019年02月",children:[{left:"本项目是基于 *Vue.js* 并模仿守望先锋 UI 开发的一套 UI 组件库"},{left:"使用 CSS 预处理器 *Sass* 定制组件的样式，并定义不同 Mixins 来封装样式以提高样式的重用度"},{left:"使用 *Chai，Sinon，Mocha* 对组件进行单元测试，并结合 *Travis CI，Karma* 进行自动化测试"}]},{left:"代码高亮插件（Star: 110+, 用户量：1k+）",link:"https://github.com/haixiangyan/codeblock-beautifier",right:"2019年01月",children:[{left:"一个用于高亮博客文章代码块的 *Chrome* 插件，支持 Medium，知乎，简书，StackOverflow 等大部分博客网站"},{left:"通过 *Highlight.js* 自动检测代码所使用的语言，支持 80 多种代码主题以及 20 多种编程语言"}]},{left:"吉他谱编辑器（Star: 100+）",link:"https://github.yanhaixiang.com/guitar-tabs-editor/#/",right:"2018年05月",children:[{left:"基于 *React.js* 开发的吉他谱在线编辑器，吉他谱作者可以通过编写类 Markdown 格式的文本来创作吉他谱"}]}]},C={name:"Home",data:function(){return y},components:{List:d,Skills:k}},S=C,j=(n("93c6"),Object(f["a"])(S,a,l,!1,null,"c1b3c036",null)),x=j.exports,w={name:"app",data:function(){return{indent:"20px"}},components:{Home:x}},O=w,L=(n("5c0b"),Object(f["a"])(O,s,r,!1,null,null,null)),M=L.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(M)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("e332")},"93c6":function(t,e,n){"use strict";n("a2f4")},"9b01":function(t,e,n){"use strict";n("f61e")},a2f4:function(t,e,n){},e332:function(t,e,n){},f61e:function(t,e,n){}});
//# sourceMappingURL=app.11c432bf.js.map