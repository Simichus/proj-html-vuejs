(function(e){function t(t){for(var s,r,o=t[0],c=t[1],l=t[2],A=0,d=[];A<o.length;A++)r=o[A],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],s=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(s=!1)}s&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var s={},a={app:0},i=[];function r(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=s,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0562":function(e,t){e.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCACgAKADASIAAhEBAxEB/8QAHAABAAEFAQEAAAAAAAAAAAAAAAYBBAUHCAMC/8QAMBAAAQMCBAUEAQMFAQAAAAAAAAECAwQFBhEhYRMUMUFxEiMzUYEHIsEyQoKRobH/xAAaAQEAAgMBAAAAAAAAAAAAAAAABAUBAwYC/8QAJBEAAgICAgICAgMAAAAAAAAAAAECBAMREiIhQTFhcaEykbH/2gAMAwEAAhEDEQA/AJQADmShAAAAAAAAAAAAAAAAAAAAAABVEz0QyZCJnohsbBWFeV4dfco/f0dFE5Pj3Xfbt56MFYV5Xh19yj9/R0UTk+Pdd9u3npOi0q1dd5k+vX13mc/AAqivAAAAAAABLKnBFxZRRT00kU73NRzo0XJU8dlNkMcp74rej3GEp/xR9UuHKerwZJXUjllrUVXu7elG9Won/d9CIk0wBXS2+7SWysY6NtR0Y9FRWvRP5T+DB4rta2q9TwtblC5eJF9ele341Q25YJ44zivp/k25IpwUor6ZhwARiOAAAACqJnohkyETPRDY2CsK8rw6+5R+/o6KJyfHuu+3bz0YKwryvDr7lH7+joonJ8e677dvPSdFpVq67zJ9evrvMAAsScc/AA5koQAAAelPDJUTMhgYr5XqjWtamaqop4ZKiZkMDFfK9Ua1rUzVVJZcbTFhq1QzrWSR3tXepiRrmiIvVMvrfuuhtx43LcvSNkIOSb9Iwd2sdwtS51kDkjXpI39zPGfZfJOsEXSavw7LSxPbztK30s9eqOT+3PbsYy047crOBeadJWLossaJn/k3ov4/0SCyUFolr23KxzsYqorZIo1/a5F+29Wr0+vBOrwip8sUvHteyXhjHlyxv8oxVPiW03V7Ib3TcrVRO/a9dUY5F7OTVuv3oen6jwU1TZoK1srFkY5EjVHIvEavVE+/swP6iWvkrulVG3KKqzcv0j+/++pFVcqtRqqqtbmqJnon2a8ueUeWKa39njJllHljkj5ABAIYAKomeiGTIRM9ENjYKwryvDr7lH7+joonJ8e677dvPRgrCvK8OvuUfv6Oiicnx7rvt289J0WlWrrvMn16+u8wACxJwAABz8ADmShBVEVdETNeuhQkmBrpRW65OSvhb6Zk9CTO19Gy7L9/we8cVKSTej3BKUtN6JB+nFNQLSTTQPR1yRFRyPT+hF6ZJ9b/AILCDDVyul9qZr69Y4I3ZyS55I9OyM+ky79vJ7Yjsc9jq23ixOVsDV9TmN1Rid9O7f8AzwZykrqfGFhmpkldT1KtRJGNXVq/e7SxjBNLFNeV69MmxinrHJeV/TIHimot9Xc2ss9OjIo2pH6mdJF7ZJ/zcxjXVNvq19Ky09RGuS5KrXNX6J1arPS4Upn3O9OZJVIqthjZqme32u/ZCGXq5zXa4SVVQjGq7JEa1NGp2TPv5ImaDj2k9SfpEbLFx7S8N+j5udzrLlKyStndK9jUa3PJET8FkAR223tmltt7YAKomeiABEz0Q2NgrCvK8OvuUfv6Oiicnx7rvt289GCsK8rw6+5R+/o6KJyfHuu+3bz0nRaVauu8yfXr67zAALEnAAAAAAHPwAOZKEnGC7HZrtb38w58lYjs3t9StVidssuqbmQq8G2JJljSukglyz9CytXJPvJUzIBb62e31cdTSSKyVi5oqdFTuip3Q2K11Bje05OyguEKeVjX7T7apYYHjyQ48VyX7JuJwnHjxW/9M3YLXJbaRadazm6VEyYj2Jm1PrPPVNiGYptL8N18V1tMqQxuflw80T0qvZE7t27EWrqWrtFdJTz+uGZvdqqiOTsqfaHhPUz1Hp480svpTJvEcq5JtroectmLjw46a+PPweZ5048eOmv0XV7u1TeKtZ6p3TRjG5+lqbfyY8AhSk5Pb+SK229sAFUTPRAAiZ6IbGwVhXleHX3KP39HRROT491327eejBWFeV4dfco/f0dFE5Pj3Xfbt56TotKtXXeZPr19d5gAFiTgAAAAAAAADn4AHMlCC5t9bPb6uOppJFZKxc0VOip3RU7oWwMptPaMptPaL+93apvFYtRVOTRPS1jdEYhYACUnJ7fyG23tgAqiZ6IAETPRDY2CsK8rw6+5R+/o6KJyfHuu+3bz0YKwryvDr7lH7+joonJ8e677dvPSdFpVq67zJ9evrvMAAsScAAAAAAAAAAAAc/AA5koQAAAAVRM9EMmQiZ6IbGwVhXleHX3KP39HRROT491327eejBWFeV4dfco/f0dFE5Pj3Xfbt56TotKtXXeZPr19d5gAFiTgAAAAAAAAAAAAAADn4AHMlCACqJnohkyETPRDY2CsK8rw6+5R+/o6KJyfHuu+3bz0YKwryvDr7lH7+joonJ8e677dvPSdFpVq67zJ9evrvMAAsScAAAAAAAAAAAAAAAAAAc/AFUTPRDmiiCJnohsbBWFeV4dfco/f0dFE5Pj3Xfbt56MFYV5Xh19yj9/R0UTk+Pdd9u3npOi0q1dd5k+vX13mAAWJOAAAAAAAAAAAAAAAAAAAAAOf0TPRDY2CsK8rw6+5R+/o6KJyfHuu+3bz0YKwryvDr7lH7+joonJ8e677dvPSdFdVq67zINevrvMAAsScAAAAAAAAAAAAAAAAAAAAAAAAf//Z"},"1b61":function(e,t,n){},"1bab":function(e,t,n){"use strict";n("7564")},"2cd8":function(e,t,n){},3991:function(e,t,n){"use strict";n("7ba4")},"3bea":function(e,t,n){},"3cf8":function(e,t,n){e.exports=n.p+"img/courses-passplus-400x399.b7f07a30.jpg"},"4b4e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("Main")],1)},i=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("HeaderTop"),n("HeaderJumbo")],1)},o=[],c=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-top"},[n("div",{staticClass:"container d-flex justify-content-between align-items-center py-3"},[n("h3",[e._v("We have a 95% Succesful Pass rate!")]),n("h3",[n("i",{staticClass:"fas fa-phone me-2"}),n("span",{staticClass:"me-2"},[e._v("Give us a call to book your tuition!")]),n("span",{staticClass:"phone-number"},[e._v("1-800-555-555")])])])])}],u={name:"HeaderTop"},A=u,d=(n("bc85"),n("2877")),f=Object(d["a"])(A,c,l,!1,null,"71c9e124",null),m=f.exports,p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"header-jumbo"}},[s("div",{staticClass:"jumbo-nav py-3"},[s("div",{staticClass:"container d-flex justify-content-between align-items-center"},[s("img",{attrs:{src:n("c01a"),alt:""}}),s("div",{staticClass:"d-flex justify-content-between align-items-center"},[s("Navbar",{attrs:{"navbar-voices":e.navbarVoices}}),s("Button",{attrs:{text:"Book Now"}})],1)]),e._m(0)]),e._m(1)])},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"info-boxes"}},[n("div",{staticClass:"info-box my-2 d-flex flex-column justify-content-center align-items-center"},[n("i",{staticClass:"fab fa-atlassian"}),n("div",[e._v("Demos")])]),n("div",{staticClass:"info-box my-2 d-flex flex-column justify-content-center align-items-center"},[n("div",{staticClass:"sale fs-4"},[n("span",[e._v("$")]),e._v("39")]),n("div",[e._v("On Sale")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container jumbo-text d-flex flex-column justify-content-center"},[n("h1",[e._v("Drive with Avada")]),n("h2",{staticClass:"h3"},[e._v("We offer the finest driving tuition money can buy")])])}],b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"d-flex align-items-center"},[n("ul",{staticClass:"d-flex align-items-center mb-0"},e._l(e.navbarVoices,(function(t,s){return n("li",{key:s,staticClass:"mx-3 d-flex align-items-center"},[n("a",{staticClass:"py-2 fs-5",attrs:{href:"#"}},[e._v(e._s(t.name))]),t.new?n("span",{staticClass:"ms-2"},[e._v("New")]):e._e()])})),0)])},h=[],C={name:"Navbar",props:["navbarVoices"]},y=C,g=(n("8f30"),Object(d["a"])(y,b,h,!1,null,"7bfb222a",null)),j=g.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"fs-5",attrs:{href:"#"}},[e._v(e._s(e.text))])},_=[],w={name:"Button",props:["text"]},K=w,E=(n("69e0"),Object(d["a"])(K,x,_,!1,null,"405a9f22",null)),J=E.exports,P={name:"HeaderJumbo",components:{Navbar:j,Button:J},data:function(){return{navbarVoices:[{name:"Home",new:!1},{name:"About",new:!1},{name:"Prices",new:!1},{name:"Courses",new:!0},{name:"Location",new:!1},{name:"Blog",new:!1}]}}},B=P,q=(n("bda4"),Object(d["a"])(B,p,v,!1,null,"0a9978f7",null)),O=q.exports,T={name:"Header",components:{HeaderTop:m,HeaderJumbo:O}},V=T,R=Object(d["a"])(V,r,o,!1,null,null,null),F=R.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("div",{staticClass:"container"},[n("div",{staticClass:"row py-5"},[n("div",{staticClass:"col-6 py-3"},[n("GetBehindTheWheel")],1),n("div",{staticClass:"col-6 position-relative"},[n("Callback")],1)])]),e._m(0),n("Courses")],1)},H=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"py-5",attrs:{id:"start-learning"}},[n("div",{staticClass:"container d-flex justify-content-between align-items-center py-5"},[n("div",[n("h2",[e._v("Start Learning to Drive Today")]),n("h3",{staticClass:"h6"},[e._v("Give us a call to schedule your first driving lesson")])]),n("div",{staticClass:"h3"},[n("i",{staticClass:"fas fa-phone me-4"}),e._v("1-800-555-555")])])])}],Y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},k=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"get-behind-the-wheel"}},[n("h1",{staticClass:"mb-4"},[e._v("Get Behind The Wheel")]),n("h2",{staticClass:"mb-4 h4"},[e._v("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam quibusdam temporibus laboriosam et maxime eos dolore odio quisquam, sed architecto, rem debitis! Ipsa animi doloribus quisquam. Quidem distinctio nulla quaerat.")]),n("p",[e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil atque unde aliquid nobis doloremque perferendis quia laboriosam a eligendi similique esse facilis debitis cupiditate magni omnis, ab officiis ipsa ducimus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo asperiores odio repellendus, repudiandae temporibus molestias amet optio eum quia fuga, est alias in magnam nulla? Dolorum quasi perferendis laboriosam veritatis!")])])}],M={name:"GetBehindTheWheel"},Q=M,X=(n("3991"),Object(d["a"])(Q,Y,k,!1,null,"5dc1b55d",null)),I=X.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex flex-column justify-content-center align-items-center px-5 pb-5",attrs:{id:"callback"}},[n("h1",{staticClass:"my-5"},[e._v("First Lesson Free!")]),n("h2",{staticClass:"h6 my-3"},[e._v("When you make a book booking whit us your first lesson is included free!")]),n("form",{staticClass:"d-flex flex-column justify-content-center align-items-center"},[n("input",{attrs:{type:"text",name:"name",id:"name",placeholder:"Your name*"}}),n("input",{attrs:{type:"mail",name:"mail",id:"mail",placeholder:"Email*"}}),n("input",{attrs:{type:"number",name:"phone",id:"phone",placeholder:"Telephone"}}),n("input",{attrs:{type:"text",name:"location",id:"location",placeholder:"Location"}}),n("Button",{attrs:{text:"Request a Callback"}})],1)])},Z=[],D={name:"Callback",components:{Button:J}},G=D,z=(n("d7a5"),Object(d["a"])(G,U,Z,!1,null,"0ff128b6",null)),W=z.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"courses"}},[n("div",{staticClass:"container py-5 position-relative courses-list d-flex justify-content-between align-items-center"},[n("CoursesCard"),e._l(e.courses,(function(e){return n("Course",{key:e.title,attrs:{course:e}})}))],2)])},L=[],$=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"px-2 py-5",attrs:{id:"courses-card"}},[s("img",{attrs:{src:n("0562"),alt:""}}),s("h1",{staticClass:"py-4"},[e._v("Courses")]),s("p",{staticClass:"pb-3"},[e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis enim non laboriosam vitae nesciunt. Vitae, obcaecati consequuntur necessitatibus eius fugit nihil repellat ipsum sequi magni maxime ad et libero natus.")]),s("Button",{attrs:{text:"Course information"}})],1)},ee=[],te={name:"CoursesCard",components:{Button:J}},ne=te,se=(n("5b1c"),Object(d["a"])(ne,$,ee,!1,null,"a199e9ca",null)),ae=se.exports,ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"course text-center px-3 pt-3"},[n("img",{attrs:{src:e.course.imgPath,alt:""}}),n("h1",{staticClass:"fs-4 my-3"},[e._v(e._s(e.course.title))]),n("button",{staticClass:"learn-more"},[e._v("Learn more")])])},re=[],oe={name:"Course",props:["course"]},ce=oe,le=(n("1bab"),Object(d["a"])(ce,ie,re,!1,null,"554be964",null)),ue=le.exports,Ae={name:"Courses",components:{CoursesCard:ae,Course:ue},data:function(){return{courses:[{imgPath:n("3cf8"),title:"Pass Plus"},{imgPath:n("ccd8"),title:"Intensive Course"},{imgPath:n("cdab"),title:"Istructors"}]}}},de=Ae,fe=(n("a38a"),Object(d["a"])(de,N,L,!1,null,"507bcd46",null)),me=fe.exports,pe={name:"Main",components:{GetBehindTheWheel:I,Callback:W,Courses:me}},ve=pe,be=(n("b9d4"),Object(d["a"])(ve,S,H,!1,null,"f1851f8a",null)),he=be.exports,Ce={name:"App",components:{Header:F,Main:he}},ye=Ce,ge=(n("5c0b"),Object(d["a"])(ye,a,i,!1,null,null,null)),je=ge.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(je)}}).$mount("#app")},5933:function(e,t,n){},5947:function(e,t,n){},"5b1c":function(e,t,n){"use strict";n("4b4e")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"69e0":function(e,t,n){"use strict";n("d591")},7564:function(e,t,n){},"77a7":function(e,t,n){},"7ba4":function(e,t,n){},"8f30":function(e,t,n){"use strict";n("3bea")},"9c0c":function(e,t,n){},a38a:function(e,t,n){"use strict";n("1b61")},b9d4:function(e,t,n){"use strict";n("77a7")},bc85:function(e,t,n){"use strict";n("2cd8")},bda4:function(e,t,n){"use strict";n("5933")},c01a:function(e,t,n){e.exports=n.p+"img/avada-drivers-logo-2x-300x58.98b495ef.png"},ccd8:function(e,t,n){e.exports=n.p+"img/course-intensive-400x399.74555374.jpg"},cdab:function(e,t,n){e.exports=n.p+"img/courses-instructor-400x400.315fb666.jpg"},d591:function(e,t,n){},d7a5:function(e,t,n){"use strict";n("5947")}});
//# sourceMappingURL=app.25ba3f87.js.map