(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(29)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(13),i=n.n(c),o=(n(20),n(1)),u=(n(21),n(2)),s=n(5),l=n(3),f=n(4),m=n(8),h=n(6),d=function(){function e(){Object(u.a)(this,e),this.handlers=new Map}return Object(h.a)(e,[{key:"on",value:function(e,t){var n=this,r=this.getHandlers(e)||new Set;return r.add(t),this.handlers.set(e,r),function(){var r=n.getHandlers(e);r&&r.delete(t)}}},{key:"emit",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=this.getHandlers(e);a&&a.forEach((function(e){return setTimeout.apply(void 0,[e,0].concat(n))}))}},{key:"getHandlers",value:function(e){return this.handlers.get(e)}}]),e}();function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var b,v,O,j,g=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this)))._data={},e&&(n._data=e),n}return Object(f.a)(t,e),Object(h.a)(t,[{key:"data",get:function(){return this._data}}]),Object(h.a)(t,[{key:"get",value:function(e){return this._data[e]||void 0}},{key:"set",value:function(e,t){this._data=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},this._data,Object(m.a)({},e,t)),this.emit(e,t)}},{key:"reset",value:function(){var e=this,t=this.data;this._data={},Object.keys(t).forEach((function(t){return e.emit(t,void 0)}))}}]),t}(d),k=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(l.a)(t).call(this,{cellSize:7}))}return Object(f.a)(t,e),t}(g),y=a.a.createContext(null),E=function(e){var t=Object(r.useMemo)((function(){return new k}),[]);return a.a.createElement(y.Provider,Object.assign({value:t},e))},w=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).state={open:0,mark:0,predict:0},n}return Object(f.a)(t,e),Object(h.a)(t,[{key:"getStats",value:function(){return this.state}},{key:"reset",value:function(){this.state={open:0,mark:0,predict:0}}},{key:"mark",value:function(e){switch(e){case"startGame":this.state.startGame||(this.state.startGame=Date.now());break;case"stopGame":this.state.stopGame||(this.state.stopGame=Date.now());break;default:var t=this.state[e]||0;this.state[e]=t+1}this.emit("change",this.state)}}]),t}(d),C=a.a.createContext(void 0),N=function(e){var t=e.children,n=Object(r.useMemo)((function(){return new w}),[]);return a.a.createElement(C.Provider,{value:n},t)},S=(n(22),function(e){return a.a.createElement("button",Object.assign({},e,{className:"minesweeper-button ".concat(e.className)}))}),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,t=Object(r.useContext)(y),n=Object(r.useState)(t&&t.get("cellSize")||e),a=Object(o.a)(n,2),c=a[0],i=a[1];Object(r.useEffect)((function(){if(t)return t.on("cellSize",(function(t){i(t||e)}))}),[t,i,e]);var u=Object(r.useCallback)((function(e){t&&t.set("cellSize",e)}),[t]);return[c,u]},M=n(9),L=n(7),_=n.n(L),P=n(11);!function(e){e[e.OK=0]="OK",e[e.WIN=1]="WIN",e[e.LOSE=2]="LOSE"}(b||(b={})),function(e){e[e.OK=0]="OK",e[e.Err=1]="Err"}(v||(v={})),function(e){e[e.Init=0]="Init",e[e.Active=1]="Active",e[e.Win=2]="Win",e[e.Lose=3]="Lose"}(O||(O={})),function(e){e[e.Blank=0]="Blank",e[e.Marked=1]="Marked",e[e.Opened=2]="Opened",e[e.MarkOpen=3]="MarkOpen"}(j||(j={}));var A=function(){function e(t,n){Object(u.a)(this,e),this.x=t,this.y=n,this.bombs=void 0,this.mode=j.Blank,this.id=void 0,this.id="".concat(t," ").concat(n)}return Object(h.a)(e,[{key:"setMode",value:function(e){return this.mode=e,this}},{key:"applyBombs",value:function(e){return this.bombs=e,this}},{key:"update",value:function(t,n){if(t!==this.mode||n!==this.bombs){var r=new e(this.x,this.y).setMode(t);return n&&r.applyBombs(n),r}return this}}]),e}();function G(e,t,n){var r=new Set;return t.forEach((function(t){t.mode!==j.Opened&&(e[t.y][t.x]=n(t),r.has(t.y)||(e[t.y]=Array.from(e[t.y]),r.add(t.y)))})),r.size?Array.from(e):e}var D=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this))).dispatcher=e,n.level=0,n.field=[],n.loading=!1,n.state=O.Init,n}return Object(f.a)(t,e),Object(h.a)(t,[{key:"newGame",value:function(){var e=Object(P.a)(_.a.mark((function e(t){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t!==this.level?this.field=[]:this.clearField(),this.emitChangeField(),this.level=t,this.setLoading(!0),e.next=6,this.dispatcher.dispatch("new",t);case 6:if((n=e.sent)!==v.OK){e.next=11;break}return e.next=10,this.updateMap();case 10:this.setGameState(O.Active);case 11:return this.setLoading(!1),e.abrupt("return",n);case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"markCell",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=G(this.field,t,(function(e){return e.mode!==j.Opened?e.update(e.mode===j.Blank?j.Marked:j.Blank):e}));r!==this.field&&this.emitChangeField()}},{key:"close",value:function(){this.setGameState(O.Init)}},{key:"openCell",value:function(){var e=Object(P.a)(_.a.mark((function e(){var t,n,r,a,c=this,i=arguments;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(this.setLoading(!0),t=i.length,n=new Array(t),r=0;r<t;r++)n[r]=i[r];return this.markCellsAsOpening(n),e.next=5,Promise.all(n.map((function(e){return c.dispatcher.dispatch("open",e.id)}))).then((function(e){return e.find((function(e,t){switch(e.status){case b.LOSE:case b.WIN:return!0}return!1}))||e[e.length-1]})).then((function(e){switch(e.status){case b.LOSE:c.setGameState(O.Lose);break;case b.WIN:c.setGameState(O.Win),e.message&&window.localStorage.setItem("level-".concat(c.level),e.message)}return e}));case 5:return a=e.sent,e.next=8,this.updateMap();case 8:return this.setLoading(!1),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateMap",value:function(){var e=Object(P.a)(_.a.mark((function e(){var t,n,r,a,c,i,o,u,s;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setLoading(!0),e.next=3,this.dispatcher.dispatch("map");case 3:if(t=e.sent){for(n=!1,r=0;r<t.length;r++){for(a=!1,(c=this.field[r])||(c=[],this.field.push(c)),i=0;i<t[r].length;i++)o=t[r][i],c[i]?(u=c[i],s=+o,u.mode===j.Marked?isNaN(s)||(u=u.update(j.Opened,s)):u=u.update(isNaN(s)?j.Blank:j.Opened,isNaN(s)?void 0:s),u!==c[i]&&(a=!0),c[i]=u):(c.push(new A(i,r)),n=!0);a&&(this.field[r]=Array.from(c),n=!0)}this.setLoading(!1),n&&(this.field=Array.from(this.field),this.emitChangeField())}case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setLoading",value:function(e){this.loading!==e&&(this.loading=e,this.emit("loading",this.loading))}},{key:"setGameState",value:function(e){this.state!==e&&(this.state=e,this.emit("changeState",this.state))}},{key:"emitChangeField",value:function(){this.emit("changeField",this.field)}},{key:"clearField",value:function(){this.field=this.field.map((function(e){return e.map((function(e){return e.update(j.Blank)}))}))}},{key:"markCellsAsOpening",value:function(e){G(this.field,e,(function(e){return e.update(j.MarkOpen)})),this.emit("changeField",Array.from(this.field))}}]),t}(d),I=function(){return!1},B=n(14);function F(e,t){F=function(e,t){return new c(e,void 0,t)};var n=Object(B.a)(RegExp),r=RegExp.prototype,a=new WeakMap;function c(e,t,r){var c=n.call(this,e,t);return a.set(c,r||a.get(e)),c}function i(e,t){var n=a.get(t);return Object.keys(n).reduce((function(t,r){return t[r]=e[n[r]],t}),Object.create(null))}return Object(f.a)(c,n),c.prototype.exec=function(e){var t=r.exec.call(this,e);return t&&(t.groups=i(t,this)),t},c.prototype[Symbol.replace]=function(e,t){if("string"===typeof t){var n=a.get(this);return r[Symbol.replace].call(this,e,t.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+n[t]})))}if("function"===typeof t){var c=this;return r[Symbol.replace].call(this,e,(function(){var e=[];return e.push.apply(e,arguments),"object"!==typeof e[e.length-1]&&e.push(i(e,c)),t.apply(this,e)}))}return r[Symbol.replace].call(this,e,t)},F.apply(this,arguments)}var W=/^You win\. The password for this level is: (.*)/,T="OK",K="You lose";var R;function z(e,t){I()}!function(e){e[e.CONNECTED=0]="CONNECTED",e[e.CLOSED=1]="CLOSED",e[e.CONNECTING=2]="CONNECTING"}(R||(R={}));var q=new(function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this))).state=R.CONNECTING,n.stream=void 0,n.actions=new Map,n.queue=[],n.busy=!1,n.onOpen=function(){n.setState(R.CONNECTED)},n.onError=function(e){return n.clearQueueWithError(e)},n.onClose=function(e){n.clearQueueWithError(e),n.setState(R.CLOSED)},n.onMessage=function(e){var t=function(e){var t=F(/^([0-9A-Z_a-z]+):[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]?((.*|\n+)+)$/,{command:1,body:2}).exec(e);if(t){var n=t.groups;return[n.command,n.body]}}(e.data);if(t){var r=Object(o.a)(t,2),a=r[0],c=r[1];z(a,"end");var i=n.actions.get(a);if(i&&i.length){var u=i.shift();if(u){var s=function(e,t){switch(e){case"map":return t.split("\n").reduce((function(e,t){return t.length>1&&e.push(t.split("")),e}),[]);case"new":return t===T?v.OK:v.Err;case"open":switch(t){case T:return{status:b.OK};case K:return{status:b.LOSE}}var n=t.match(W);if(n)return{status:b.WIN,message:n[1]}}throw new Error("Unknown response "+t)}(a,c.trim());u[0](s)}}}n.next()},n.stream=new WebSocket(e),n.stream.addEventListener("open",n.onOpen),n.stream.addEventListener("message",n.onMessage),n.stream.addEventListener("error",n.onError),n.stream.addEventListener("close",n.onClose),n}return Object(f.a)(t,e),Object(h.a)(t,[{key:"close",value:function(){this.stream&&this.state!==R.CLOSED&&(this.stream.close(),this.stream.removeEventListener("open",this.onOpen),this.stream.removeEventListener("message",this.onMessage),this.stream.removeEventListener("error",this.onError),this.stream.removeEventListener("close",this.onClose))}},{key:"dispatch",value:function(e,t){var n=this;return new Promise((function(r,a){n.queue.push(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}(e,t));var c=n.actions.get(e)||[];c.push([r,a]),n.actions.set(e,c),n.next()}))}},{key:"setState",value:function(e){this.state!==e&&(this.state=e,this.emit("change",this.state))}},{key:"send",value:function(e){if(this.stream&&this.stream.readyState===WebSocket.OPEN)return z(e.split(" ")[0],"start"),this.stream.send(e)}},{key:"clearQueueWithError",value:function(e){Array.from(this.actions.values()).forEach((function(t){t.forEach((function(t){var n=Object(o.a)(t,2);n[0];return(0,n[1])(e)}))})),this.queue.length=0,this.actions.clear(),this.busy=!1}},{key:"next",value:function(){if(!this.busy&&this.queue.length){var e=this.queue.shift();this.send(e)}else this.busy=!1}}]),t}(d))(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_WS_URL:"wss://hometask.eg1236.com/game1/"}).REACT_APP_WS_URL),U=a.a.createContext(q),H=function(e){var t=e.children;return a.a.createElement(U.Provider,{value:q},t)},$=a.a.createContext(void 0),Q=function(e){var t=e.children,n=e.level,c=Object(r.useContext)(U),i=Object(r.useMemo)((function(){return new D(c)}),[c]);return Object(r.useEffect)((function(){n>=0&&i&&i.newGame(n)}),[n,i]),a.a.createElement($.Provider,{value:i},t)},J=function(){var e=Object(r.useContext)($),t=function(){var e=Object(r.useContext)(C);return Object(r.useCallback)((function(){e&&(console.log(e.getStats()),e.mark("stopGame"),e.reset())}),[e])}();return Object(r.useCallback)((function(){return e?(t(),e.newGame(e.level)):Promise.reject(new Error("Minesweeper controller is not exist"))}),[e,t])};var Y=function(){var e=Object(r.useContext)($);return Object(r.useCallback)((function(){return e.field}),[e])},V=function(){var e=Object(r.useContext)($),t=function(){var e=Object(r.useContext)(C);return Object(r.useCallback)((function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(e)for(var r=0;r<n;r++)e.mark(t)}),[e])}();return[Object(r.useCallback)((function(n){return e&&n.length?(t("startGame"),t("open",n.length),e.openCell.apply(e,Object(M.a)(n)).then((function(e){return e.status!==b.OK&&t("stopGame"),e}))):Promise.resolve({status:b.OK})}),[e,t]),Object(r.useCallback)((function(n){e&&n.length&&(t("startGame"),t("mark",n.length),e.markCell.apply(e,Object(M.a)(n)))}),[e,t])]},Z=function(e,t,n){return e[n]&&e[n][t]||void 0},X=function(e,t,n){var r=Z(e,t,n);return!!r&&r.mode===j.Blank};function ee(e,t,n,r){var a=n-1,c=n+1,i=t-1,o=t+1;return[r&&Z(e,t,n),Z(e,i,a),Z(e,t,a),Z(e,o,a),Z(e,i,n),Z(e,o,n),Z(e,i,c),Z(e,o,c),Z(e,t,c)].reduce((function(e,t){if(t)switch(t.mode){case j.Blank:e.blank.push(t);break;case j.Opened:e.opened.push(t);break;case j.Marked:e.marked.push(t)}return e}),{marked:[],opened:[],blank:[]})}function te(e,t){return e.filter((function(e){return!t.mark.includes(e)&&!t.open.includes(e)}))}function ne(e,t,n){if(t.bombs){var r=ee(e,t.x,t.y),a=r.marked,c=r.blank,i=te(c,n).length,o=a.length+c.filter((function(e){return n.mark.includes(e)})).length;if(i)return(t.bombs-o)/i}return-1}function re(e,t,n){t.forEach((function(t){var r=e.get(t)||[];r.includes(n)||r.push(n),e.set(t,r)}))}function ae(e,t){t.forEach((function(t){return e.delete(t)}))}function ce(e,t,n){var r,a,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{mark:[],open:[],predict:new Map},i=ee(e,t,n,!0),o=new Set;if(i.opened.length)for(var u=0;u<i.opened.length;u++){var s=i.opened[u];if(!o.has(s)&&s.bombs){var l=te(ee(e,s.x,s.y).blank,c);if(!l.length)continue;var f=ne(e,s,c);if(f>=0){var m=!1;switch(f){case 0:(r=c.open).push.apply(r,Object(M.a)(l)),c.predict&&ae(c.predict,l),o.add(s),m=!0;break;case 1:(a=c.mark).push.apply(a,Object(M.a)(l)),c.predict&&ae(c.predict,l),o.add(s),m=!0;break;default:c.predict&&re(c.predict,l,f)}m&&(u=-1)}}}return c}function ie(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{mark:[],open:[],predict:new Map},n=1;n<e.length;n+=2)if(e[n])for(var r=1;r<e[n].length;r+=2){var a=t.mark.length,c=t.open.length;if(ce(e,r,n,t),a!==t.mark.length||c!==t.open.length){n=Math.max(1,n-4);break}}return t}function oe(e,t){arguments.length>2&&void 0!==arguments[2]&&arguments[2];var n=Array.from(e.entries()).reduce((function(e,t){var n=Object(o.a)(t,2),r=n[0],a=n[1],c=a.reduce((function(e,t){return e+t}))/a.length,i=e.get(c)||[];return i.push(r),e.set(c,i),e}),new Map),r=Math.min.apply(Math,Object(M.a)(Array.from(n.keys()))),a=n.get(r);return a[Math.floor(Math.random()*a.length)]}function ue(e){for(var t=0;t<=2*e.length;){t++;var n=Math.ceil(Math.random()*e.length),r=Math.ceil(Math.random()*e[0].length);if(X(e,n,r))return Z(e,n,r)}for(var a=0;a<e.length;a++)for(var c=0;c<e[a].length;c++)if(X(e,c,a))return Z(e,c,a)}function se(e,t){var n={open:[],mark:[],predict:new Map};return t.forEach((function(t,r){ce(e,r.x,r.y,n)})),n}var le={stepTimeout:10,predictBound:.7,selectRandomCellIfNoAnyChoice:!0},fe=a.a.createContext(void 0),me=function(){var e=Object(r.useContext)(fe),t=Object(r.useState)(e&&e.data||le),n=Object(o.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){if(e)return e.on("change",(function(){c(e.data)}))})),a};function he(e,t){var n=t,r=n.cellIndex;return e[n.parentElement.rowIndex][r]}n(24),n(25);var de=function(e){return function(t){return t?" "+e:""}},pe=de("mine-cell--blank"),be=de("mine-cell--opened"),ve=de("mine-cell--marked"),Oe=de("mine-cell--marked-open"),je=Object(r.memo)((function(e){var t=e.cell,n=Object(r.useMemo)((function(){return["mine-field__cell mine-cell",pe(t.mode===j.Blank),be(t.mode===j.Opened),ve(t.mode===j.Marked),Oe(t.mode===j.MarkOpen),(e=t.bombs,e>=0&&e<=4?"mine-cell--color-".concat(e):"")].join(" ");var e}),[t.mode,t.bombs]);return a.a.createElement("td",{className:n},t.bombs?t.bombs:void 0)}));je.displayName="Field Cell";var ge=Object(r.memo)((function(e){var t=e.row;return a.a.createElement("tr",null,t.map((function(e){return a.a.createElement(je,{key:e.id,cell:e})})))}));ge.displayName="Field Row";var ke=Object(r.memo)((function(e){var t=e.field;return a.a.createElement(a.a.Fragment,null,t.map((function(e,t){return a.a.createElement(ge,{row:e,key:t})})))})),ye=function(){var e=function(){var e=Object(r.useContext)($),t=Object(r.useState)(e&&e.field||[]),n=Object(o.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){if(e)return e.on("changeField",c)}),[e]),a}(),t=function(){var e=V(),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Y(),i=me(),u=Object(r.useCallback)((function(e){var t=he(c(),e.target);if(t)if(e.metaKey){var r=ce(c(),t.x,t.y),o=r.mark,u=r.open,s=r.predict;if(o.length&&a(o),u.length)n(u);else if(s&&s.size){var l=s&&oe(s,c(),i.predictBound);l&&n([l])}}else n([t])}),[n,a,c,i.predictBound]),s=Object(r.useCallback)((function(e){var t=he(c(),e.target);t&&a([t]),e.preventDefault()}),[a,c]);return Object(r.useMemo)((function(){return[u,s]}),[u,s])}(),n=Object(o.a)(t,2),c=n[0],i=n[1],u=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){var e=function(e){return a(e.metaKey)};return window.addEventListener("keydown",e),window.addEventListener("keyup",(function(){return a(!1)})),function(){return window.removeEventListener("keydown",e)}}),[]),n}(),s=Object(r.useMemo)((function(){return"table ".concat(u?"table-auto":"")}),[u]);return a.a.createElement("table",{className:s,onClick:c,onContextMenu:i},a.a.createElement("tbody",null,a.a.createElement(ke,{field:e})))};function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(n),!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ce=function(){var e=Object(r.useRef)(),t=Object(r.useRef)(),n=V(),a=Object(o.a)(n,2),c=a[0],i=a[1],u=function(){var e=Object(r.useContext)(C);return Object(r.useCallback)((function(){return e&&e.getStats()}),[e])}(),s=Y(),l=J(),f=me(),m=Object(r.useCallback)((function(e){return t.current=e.predict,e.mark&&e.mark.length&&i(e.mark),e.open&&e.open.length?c(e.open):Promise.reject("Nothing to open")}),[t,c,i]),h=Object(r.useCallback)(Object(P.a)(_.a.mark((function n(){var r,a,c,i,o,d,p;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=void 0,a=s(),t.current&&t.current.size&&(r=se(a,t.current)),r&&r.open.length||(r=ie(a,r||void 0)),r.open&&r.open.length||!r.predict||!r.predict.size||((c=oe(r.predict,a,f.predictBound))?r={mark:[],open:[c]}:f.selectRandomCellIfNoAnyChoice&&(i=ue(a))&&(r=we({},r,{open:[i]}))),r.open.length||(o=u())&&!o.startGame&&(d=ue(a))&&(r=we({},r,{open:[d]})),!r){n.next=22;break}return n.next=9,m(r);case 9:p=n.sent,n.t0=p.status,n.next=n.t0===b.WIN?13:n.t0===b.LOSE?15:n.t0===b.OK?20:22;break;case 13:return t.current=void 0,n.abrupt("break",22);case 15:return t.current=void 0,n.next=18,l();case 18:return e.current=setTimeout(h),n.abrupt("break",22);case 20:return e.current=setTimeout(h,f.stepTimeout),n.abrupt("break",22);case 22:case"end":return n.stop()}}),n)}))),[s,u,l,t,m,f]);return[h,Object(r.useCallback)((function(){e.current&&clearTimeout(e.current)}),[e])]},Ne=function(){var e=function(){var e=Object(r.useContext)($),t=Object(r.useState)(e&&e.loading||!1),n=Object(o.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){if(e)return e.on("loading",c)}),[e]),a}();switch(function(){var e=Object(r.useContext)($),t=Object(r.useState)(e&&e.state||O.Init),n=Object(o.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){if(e)return e.on("changeState",c)}),[e]),a}()){case O.Win:return a.a.createElement(a.a.Fragment,null,"\ud83e\udd73");case O.Lose:return a.a.createElement(a.a.Fragment,null,"\ud83d\ude22")}return a.a.createElement(a.a.Fragment,null,e?"\ud83e\udd14":"\ud83d\ude42")},Se=(n(26),function(e){var t=e.close,n=Object(r.useState)(!1),c=Object(o.a)(n,2),i=c[0],u=c[1],s=J(),l=Ce(),f=Object(o.a)(l,2),m=f[0],h=f[1],d=Object(r.useCallback)((function(){i?(u(!1),h()):(u(!0),m())}),[m,h,i,u]);return a.a.createElement("div",{className:"minesweeper-header"},a.a.createElement(S,{onClick:t},"Close Game"),a.a.createElement("div",{className:"minesweeper-header__center"},a.a.createElement(S,{className:"bombs-indicator",onClick:s},a.a.createElement(Ne,null))),a.a.createElement(S,{onClick:d},i?"Stop Auto-Solver":"Run Auto-Solver"))}),xe=(n(27),6),Me=15;var Le=function(e){var t=e.close,n=function(){var e=x(7),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(r.useCallback)((function(){n<=Me&&a(n+1)}),[n,a]),i=Object(r.useCallback)((function(){n>=xe&&a(n-1)}),[n,a]);return Object(r.useEffect)((function(){function e(e){if(e.metaKey)switch(e.key){case"+":e.preventDefault(),c();break;case"-":e.preventDefault(),i()}}return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[c,i]),[n,c,i]}(),c=Object(o.a)(n,3),i=c[0],u=c[1],s=c[2],l=Object(r.useMemo)((function(){return i<=Me}),[i]),f=Object(r.useMemo)((function(){return i>=xe}),[i]),m=Object(r.useMemo)((function(){return{fontSize:i}}),[i]);return a.a.createElement("div",{className:"minesweeper-body"},a.a.createElement("div",{className:"minesweeper-game"},a.a.createElement("div",{className:"minesweeper-game__header"},a.a.createElement(Se,{close:t})),a.a.createElement("div",{className:"minesweeper-game__field minesweeper-game-field",style:m},a.a.createElement(ye,null))),a.a.createElement("div",{className:"minesweeper-game-field__config"},a.a.createElement(S,{disabled:!l,onClick:u},"+"),a.a.createElement(S,{disabled:!f,onClick:s},"-")))},_e=(n(28),function(e){var t=e.onSelect,n=Object(r.useCallback)((function(e){if(e.target){var n=e.target.dataset;isNaN(+n.level)||t(+n.level)}}),[t]);return a.a.createElement("div",{className:"minesweeper-buttons",onClick:n},a.a.createElement(S,{className:"minesweeper-buttons__item","data-level":1},"Level 1"),a.a.createElement(S,{className:"minesweeper-buttons__item","data-level":2},"Level 2"),a.a.createElement(S,{className:"minesweeper-buttons__item","data-level":3},"Level 3"),a.a.createElement(S,{className:"minesweeper-buttons__item","data-level":4},"Level 4"))}),Pe=function(){var e=function(){var e=Object(r.useContext)(U),t=Object(r.useState)(e.state),n=Object(o.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){return e.on("change",c)}),[e]),a}(),t=Object(r.useRef)(null);return Object(r.useLayoutEffect)((function(){if(t.current)switch(e){case R.CLOSED:case R.CONNECTING:t.current&&!t.current.open&&t.current.showModal();break;case R.CONNECTED:t.current&&t.current.open&&t.current&&t.current.close()}}),[e]),a.a.createElement("dialog",{ref:t,className:"server-state-dialog"},e===R.CONNECTING&&"...Connecting",e===R.CLOSED&&"Connection closed")},Ae=function(){var e=Object(r.useState)(null),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(r.useCallback)((function(){return c(null)}),[]);return null===n?a.a.createElement(_e,{onSelect:function(e){return c(e)}}):a.a.createElement(N,null,a.a.createElement(Q,{level:n},a.a.createElement(Le,{close:i})))},Ge=function(){return a.a.createElement(H,null,a.a.createElement(Pe,null),a.a.createElement("div",{className:"game-wrapper"},a.a.createElement(E,null,a.a.createElement(Ae,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(Ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[15,1,2]]]);
//# sourceMappingURL=main.13d8101d.chunk.js.map