(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(44)},22:function(e,t,n){},23:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),i=n(9),c=n.n(i),r=(n(22),n(10)),s=n(11),l=n(14),m=n(12),u=n(15),h=(n(23),n(13)),p=n.n(h),d=(n(43),function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={veiculos:[],mensagem:""},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://cors-anywhere.herokuapp.com/http://zn4.m2mcontrol.com.br/api//forecast/lines/load/forecast/lines/fromPoint/7986/159").then(function(t){console.log(t.data),t.data.length?e.setState({mensagem:"\xd4nibus a caminho:"}):e.setState({mensagem:"Sem \xf4nibus vindo :("});var n=t.data;e.setState({veiculos:n})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",{className:"titulo"},this.state.mensagem),o.a.createElement("ul",null,this.state.veiculos.map(function(e){return o.a.createElement("li",null,o.a.createElement("span",null,e.nameLine," em: "),e.arrivalTime,"min")})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.706795ec.chunk.js.map