"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{584:function(e,t,n){n.d(t,{TP:function(){return f},V0:function(){return g},XT:function(){return p},tx:function(){return d},yA:function(){return i},zv:function(){return v}});var r=n(861),c=n(757),a=n.n(c),u=n(294),o="https://api.themoviedb.org/3",s="ab57a424e6032b04c57d16cb953b0f53",i="https://image.tmdb.org/t/p/w500";function p(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function e(){var t,n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(o,"/trending/all/day?language=en-US&api_key=").concat(s),e.prev=1,e.next=4,fetch(t);case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(o,"/movie/").concat(t,"?language=en-US&api_key=").concat(s),e.prev=1,e.next=4,u.Z.get(n);case 4:if(200===(r=e.sent).status){e.next=7;break}throw new Error("Error fetching credits movies!");case 7:return e.abrupt("return",r.data);case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}var v=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(o,"/movie/").concat(t,"/credits?language=en-US&api_key=").concat(s),e.prev=1,e.next=4,u.Z.get(n);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(o,"/movie/").concat(t,"/reviews?language=en-US&api_key=").concat(s),e.prev=1,e.next=4,u.Z.get(n);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(o,"/search/movie?language=en-US&query=").concat(t,"&api_key=").concat(s),e.prev=1,e.next=4,u.Z.get(n);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},186:function(e,t,n){n.r(t);var r=n(861),c=n(439),a=n(757),u=n.n(a),o=n(791),s=n(689),i=n(584),p=n(344),l=n(184);t.default=function(){var e=(0,o.useState)([]),t=(0,c.Z)(e,2),n=t[0],a=t[1],f=(0,s.UO)().movieId,h=(0,o.useState)(!0),v=(0,c.Z)(h,2),d=v[0],g=v[1];return(0,o.useEffect)((function(){function e(){return(e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.prev=1,e.next=4,(0,i.tx)(f);case 4:t=e.sent,a(t.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error("Error fetching movie credits:",e.t0);case 11:return e.prev=11,g(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[f]),(0,l.jsx)(l.Fragment,{children:d?(0,l.jsx)(p.Z,{}):n.length>0?(0,l.jsx)("ul",{children:n.map((function(e){return(0,l.jsxs)("li",{children:[(0,l.jsx)("p",{children:(0,l.jsx)("b",{children:e.author})}),(0,l.jsx)("p",{children:e.content})]},e.id)}))}):(0,l.jsx)("p",{children:"Sorry, we don't have any reviews for this movie"})})}}}]);
//# sourceMappingURL=186.baf8aa8b.chunk.js.map