(this["webpackJsonp3-hafta---react-memory-game-klcysn"]=this["webpackJsonp3-hafta---react-memory-game-klcysn"]||[]).push([[0],{24:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),r=n(16),c=n.n(r),i=(n(24),n(25),n(19)),o=n(2),u=n(5),l=n(6),d=n(8),h=n(7),j=(n(26),n(1)),b=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={username:"",usernamePicker:!1},t.handleStartButtonClick=function(){return t.setState({usernamePicker:!0})},t.handleInputChange=function(e){return t.setState({username:e.target.value})},t.handleOkButtonClick=function(){return""===t.state.username?null:t.props.history.push({pathname:"/game",state:{username:t.state.username}})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"home-container",children:[Object(j.jsx)("button",{onClick:this.handleStartButtonClick,className:"start-button",children:"Start Game"}),this.state.usernamePicker&&Object(j.jsxs)("div",{className:"username-picker",children:[Object(j.jsx)("input",{className:"username-input",maxLength:20,placeholder:"User Name",onChange:this.handleInputChange}),Object(j.jsx)("button",{className:"ok-button",onClick:this.handleOkButtonClick,children:"OK"})]})]})}}]),n}(s.a.Component),m=n(18),p=(n(28),n(29),function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(t){return Object(j.jsx)("img",{onClick:this.props.onClick,className:"card-image",src:this.props.src,alt:""})}}]),n}(s.a.Component)),C=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={index:[1,2,3,4,5,6,1,2,3,4,5,6],openedCards:[],firstCard:!1,secondCard:!1,rights:20},t.handleClick=function(e,n){t.state.firstCard?t.state.firstCard&&!t.state.secondCard&&(t.setState({secondCard:[e,n]}),t.state.firstCard[1]===n?(t.setState({openedCards:[].concat(Object(m.a)(t.state.openedCards),[n])}),t.setState({firstCard:!1,secondCard:!1})):t.state.firstCard[1]!==n&&setTimeout((function(){return t.setState({firstCard:!1,secondCard:!1})}),800)):t.setState({firstCard:[e,n]}),t.setState({rights:t.state.rights-1})},t.handleAgainButtonClick=function(t){return document.location.reload()},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setState({index:this.state.index.sort((function(t,e){return.5-Math.random()}))})}},{key:"render",value:function(){var t=this,e=this.props.location.state.username;return console.log(this.state.openedCards),Object(j.jsxs)("div",{className:"game-container",children:[Object(j.jsxs)("p",{className:"game-username",children:[e.toUpperCase()," ",Object(j.jsx)("br",{})," You have ",this.state.rights," rights"]}),Object(j.jsx)("div",{className:"cards-container",children:this.state.index.map((function(e,n){return t.state.openedCards.includes(e)?Object(j.jsx)(p,{src:"/assets/".concat(e,".png")},n):Object(j.jsx)(p,{onClick:function(){return t.state.firstCard[0]===n?null:t.handleClick(n,e)},src:t.state.firstCard[0]===n||t.state.secondCard[0]===n?"/assets/".concat(e,".png"):"/assets/back.png"},n)}))}),(6===this.state.openedCards.length||0===this.state.rights)&&Object(j.jsx)("div",{className:"snackbar-container",children:Object(j.jsxs)("div",{className:"snackbar",children:[6===this.state.openedCards.length&&Object(j.jsxs)("p",{className:"snackbar-text",children:["You Won ",Object(j.jsx)("b",{children:e})]}),0===this.state.rights&&6!==this.state.openedCards.length&&Object(j.jsxs)("p",{className:"snackbar-text",children:["You Lost ",Object(j.jsx)("b",{children:e})]}),Object(j.jsx)("p",{className:"snackbar-text",children:"Let's play again!"}),Object(j.jsx)("button",{onClick:function(){return t.handleAgainButtonClick(e)},className:"snackbar-button",children:"again"})]})})]})}}]),n}(s.a.Component);var f=function(){return Object(j.jsx)(i.a,{children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/",component:b,exact:!0}),Object(j.jsx)(o.a,{path:"/game",component:C})]})})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,r=e.getLCP,c=e.getTTFB;n(t),a(t),s(t),r(t),c(t)}))};c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),O()}},[[35,1,2]]]);
//# sourceMappingURL=main.2c7883b9.chunk.js.map