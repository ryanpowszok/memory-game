(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{13:function(e,t,n){e.exports=n(25)},18:function(e,t,n){},19:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),l=n.n(c),i=(n(18),r.a.createContext({})),o=i.Provider,s=n(1),u={winner:!1,turns:0},d=function(e,t){switch(t.type){case"SET_WINNER":return Object(s.a)({},e,{winner:t.payload});case"INCREMENT_TURNS":return Object(s.a)({},e,{turns:e.turns++});default:throw new Error("Unexpected action")}},m=function(){var e=function(){var e=Object(a.useContext)(i);return{state:e[0],dispatch:e[1]}}(),t=e.state,n=e.dispatch;return{turns:t.turns,incrementTurns:function(e){n({type:"INCREMENT_TURNS",payload:e})},winner:t.winner,setWinner:function(e){n({type:"SET_WINNER",payload:e})}}},f=(n(19),function(){var e=m();return r.a.createElement("header",{className:"Header"},r.a.createElement("h1",null,"Memory Game"),e.turns>0&&r.a.createElement("div",null,e.turns," Turn",1!==e.turns&&"s"),e.winner&&r.a.createElement("h2",null,"Winner Winner Chicken Dinner"))}),b=n(2),h=n(5),p=n.n(h),v=n(10),O=n(6),E=n(7),j=n(11),w=n.n(j),y=function(e,t){return t.find((function(t){return t.id===e}))},N=function(){return new Promise((function(e,t){var n=[{label:"1"},{label:"2"},{label:"3"},{label:"4"},{label:"5"},{label:"6"},{label:"7"},{label:"8"},{label:"9"},{label:"10"},{label:"11"},{label:"12"}];e(n=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*t),a=e[t];e[t]=e[n],e[n]=a}return e}(n=(n=[].concat(Object(E.a)(n),Object(E.a)(n))).map((function(e,t){return Object(s.a)({},e,{id:w()()})}))))}))},C=(n(23),n(12)),g=n.n(C),k=(n(24),function(e){var t=e.id,n=e.index,a=e.isMatched,c=e.label,l=e.isSelected,i=e.selectCard,o=a||l,s=function(){!l&&i(t)};return r.a.createElement("div",{className:g()("Card",{"Card--flipped":o}),role:"button",tabIndex:"0",onClick:function(e){e.preventDefault(),s()},onKeyDown:function(e){13!==e.keyCode&&32!==e.keyCode||s()},"aria-label":"Card ".concat(n+1)},r.a.createElement("div",{className:"Card__inner"},r.a.createElement("div",{className:"Card__front","aria-hidden":o},"?"),r.a.createElement("div",{className:"Card__back","aria-hidden":!o},c)))}),_=800,T={selected:{},matched:{}},x=function(){var e=m(),t=Object(a.useState)([]),n=Object(O.a)(t,2),c=n[0],l=n[1],i=Object(a.useState)(T),o=Object(O.a)(i,2),u=o[0],d=o[1];Object(a.useEffect)((function(){(function(){var e=Object(v.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return r.a.createElement("main",{className:"Main"},r.a.createElement("div",{className:"Cards"},c.map((function(t,n){return r.a.createElement(k,Object.assign({},t,{key:"card_".concat(t.id),index:n,isMatched:u.matched.hasOwnProperty(t.id),selectCard:function(t){return function(t){var n=Object.keys(u.selected);if(!(n.length>1||u.selected.hasOwnProperty(t)||u.matched.hasOwnProperty(t)))if(e.incrementTurns(!0),n.length){var a=n[0];if(y(a,c).label===y(t,c).label){var r,l=Object(s.a)({},u.matched,(r={},Object(b.a)(r,a,!0),Object(b.a)(r,t,!0),r));d(Object(s.a)({},u,{matched:l,selected:T.selected})),Object.keys(l).length===c.length&&e.setWinner(!0)}else d(Object(s.a)({},u,{selected:Object(s.a)({},u.selected,Object(b.a)({},t,!0))})),setTimeout((function(){d(Object(s.a)({},u,{selected:T.selected}))}),_)}else d(Object(s.a)({},u,{selected:Object(b.a)({},t,!0)}))}(t)},isSelected:u.selected.hasOwnProperty(t.id)}))}))))},M=function(){var e=Object(a.useReducer)(d,u);return r.a.createElement("div",{className:"App"},r.a.createElement(o,{value:e},r.a.createElement(f,null),r.a.createElement(x,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.bfa44287.chunk.js.map