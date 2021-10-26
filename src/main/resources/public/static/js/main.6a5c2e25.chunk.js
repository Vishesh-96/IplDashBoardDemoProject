(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},29:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(18),r=c.n(s),i=(c(26),c(7)),j=c(2),m=(c(27),c(8)),l=c.n(m),h=c(10),o=c(11),d=c(13),u=(c(29),c(0)),b=function(e){var t=e.teamName,c=e.match;if(!c)return null;var a=c.team1===t?c.team2:c.team1,n="/teams/".concat(a),s=t===c.matchWinner;return Object(u.jsxs)("div",{className:s?"MatchDetailCard won-card":"MatchDetailCard lost-card",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"vs",children:"vs"}),Object(u.jsx)("h1",{children:Object(u.jsx)(d.a,{to:n,children:a})}),Object(u.jsx)("h2",{className:"match-date",children:c.date}),Object(u.jsxs)("h3",{className:"match-venue",children:["at ",c.venue]}),Object(u.jsxs)("h3",{className:"match-result",children:[c.matchWinner," won by ",c.resultMargin," ",c.result," "]})]}),Object(u.jsxs)("div",{className:"additional-detail",children:[Object(u.jsx)("h3",{children:"First Innings"}),Object(u.jsx)("p",{children:c.team1}),Object(u.jsx)("h3",{children:"Second Innings"}),Object(u.jsx)("p",{children:c.team2}),Object(u.jsx)("h3",{children:"Man of the match"}),Object(u.jsx)("p",{children:c.playerofmatch}),Object(u.jsx)("h3",{children:"Umpires"}),Object(u.jsxs)("p",{children:[c.umpire1,",",c.umpire2]})]})]})},O=(c(36),function(e){var t=e.match,c=e.teamName;if(!t)return null;var a=t.team1===c?t.team2:t.team1,n="/teams/".concat(a),s=c===t.matchWinner;return Object(u.jsxs)("div",{className:s?"MatchSmallCard won-card":"MatchSmallCard lost-card",children:[Object(u.jsx)("span",{className:"vs",children:"vs"}),Object(u.jsx)("h1",{children:Object(u.jsx)(d.a,{to:n,children:a})}),Object(u.jsxs)("p",{className:"match-result",children:[t.matchWinner," won by ",t.resultMargin," ",t.result]})]})}),x=c(21),f=(c(37),function(e){var t=Object(a.useState)({matches:[]}),c=Object(o.a)(t,2),n=c[0],s=c[1],r=Object(j.f)().teamName;return Object(a.useEffect)((function(){var e=function(){var e=Object(h.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/team/".concat(r));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),s(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[r]),n&&n.teamName?Object(u.jsxs)("div",{className:"TeamPage",children:[Object(u.jsx)("div",{className:"team-name-section",children:Object(u.jsx)("h1",{className:"team-name",children:n.teamName})}),Object(u.jsxs)("div",{className:"win-loss-section",children:["Wins/Losses",Object(u.jsx)(x.PieChart,{data:[{title:"Losses",value:n.totalMatches-n.totalWins,color:"#a34d5d"},{title:"Wins",value:n.totalWins,color:"#4da375"}]})]}),Object(u.jsxs)("div",{className:"match-detail-section",children:[Object(u.jsx)("h3",{children:"Latest Matches"}),Object(u.jsx)(b,{teamName:n.teamName,match:n.matches[0]})]}),n.matches.slice(1).map((function(e){return Object(u.jsx)(O,{teamName:n.teamName,match:e},e.id)})),Object(u.jsx)("div",{className:"more-link",children:Object(u.jsx)(i.b,{to:"/teams/".concat(r,"/matches/").concat("2020"),children:"More >"})})]}):Object(u.jsx)("h1",{children:"Team not Found"})}),v=(c(38),c(39),function(e){for(var t=e.teamName,c=[],a="2008";a<="2020";a++)c.push(a);return Object(u.jsx)("ol",{className:"YearSelector",children:c.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/teams/".concat(t,"/matches/").concat(e),children:e})},e)}))})}),p=function(e){var t=Object(a.useState)([]),c=Object(o.a)(t,2),n=c[0],s=c[1],r=Object(j.f)(),i=r.teamName,m=r.year;return Object(a.useEffect)((function(){var e=function(){var e=Object(h.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/team/".concat(i,"/matches?year=").concat(m));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,s(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[i,m]),Object(u.jsxs)("div",{className:"MatchPage",children:[Object(u.jsxs)("div",{className:"year-selector",children:[Object(u.jsx)("h3",{children:" Select Year "}),Object(u.jsx)(v,{teamName:i})]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("h1",{className:"page-heading",children:[i," matches in ",m]}),n.map((function(e){return Object(u.jsx)(b,{teamName:i,match:e},e.id)}))]})]})},N=(c(40),c(41),function(e){var t=e.teamName;return Object(u.jsx)("div",{className:"TeamTile",children:Object(u.jsx)("h1",{children:Object(u.jsx)(i.b,{to:"/teams/".concat(t),children:t})})})}),g=function(e){var t=Object(a.useState)([]),c=Object(o.a)(t,2),n=c[0],s=c[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(h.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/team");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,s(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(u.jsxs)("div",{className:"HomePage",children:[Object(u.jsx)("div",{className:"header-section",children:Object(u.jsx)("h1",{className:"app-name",children:"IPL DashBoard"})}),Object(u.jsx)("div",{className:"team-grid",children:n.map((function(e){return Object(u.jsx)(N,{teamName:e.teamName},e.id)}))})]})};var w=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(i.a,{children:Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{path:"/teams/:teamName/matches/:year",children:Object(u.jsx)(p,{})}),Object(u.jsx)(j.a,{path:"/teams/:teamName",children:Object(u.jsx)(f,{})}),Object(u.jsx)(j.a,{path:"/",children:Object(u.jsx)(g,{})})]})})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root")),M()}},[[42,1,2]]]);
//# sourceMappingURL=main.6a5c2e25.chunk.js.map