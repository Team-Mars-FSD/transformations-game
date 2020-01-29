(this["webpackJsonptransformations-game"]=this["webpackJsonptransformations-game"]||[]).push([[0],{164:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(20),o=a.n(s),l=(a(74),a(10)),i=a(54),c=a(2),m=a(3),h=a(5),u=a(4),p=a(6),d=(a(75),r.a.Fragment),b=function(e){var t=e.onRouteChange;return e.isSignedIn?r.a.createElement(d,null,r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{onClick:function(){return t("home")},className:"f3 dim pointer link underline fw6 ph0 mh0  mh3 black"},"Go Home"),r.a.createElement("p",{onClick:function(){return t("signout")},className:"f3 dim pointer link underline fw6 ph0 mh0  mh3 black"},"Sign Out"))):r.a.createElement(d,null,r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 dim pointer link underline fw6 ph0 mh0 black mh3"},"Sign In"),r.a.createElement("p",{onClick:function(){return t("register")},className:"f3 dim pointer link underline fw6 ph0 mh0 black mh3"},"Register")))},f=a(8),g=a.n(f),y=(a(76),a(55)),v=a.n(y),E=a(56),k=a.n(E),x=a(57),w=a.n(x),N=a(58),C=a.n(N),S=a(59),F=a.n(S),L=r.a.Fragment,j=function(e){var t=e.onRouteChange;return r.a.createElement(L,null,r.a.createElement("div",{className:"ma4 mt0 levels"},r.a.createElement(g.a,{className:"Tilt br3 shadow-5 pa1",options:{max:55},style:{height:240,width:250}},r.a.createElement("div",{className:"Tilt-inner"}," ",r.a.createElement("img",{style:{paddingTop:"5px",paddingBottom:"5px",height:220,width:230},alt:"house-logo",src:v.a,onClick:function(){return t("game","house")}}))),r.a.createElement(g.a,{className:"Tilt br3 shadow-5 pa1",options:{max:55},style:{height:240,width:250}},r.a.createElement("div",{className:"Tilt-inner"}," ",r.a.createElement("img",{style:{paddingTop:"5px",paddingBottom:"5px",height:220,width:230},alt:"tree-logo",src:k.a,onClick:function(){return t("game","tree")}}))),r.a.createElement(g.a,{className:"Tilt br3 shadow-5 pa1",options:{max:55},style:{height:240,width:250}},r.a.createElement("div",{className:"Tilt-inner"}," ",r.a.createElement("img",{style:{paddingTop:"5px",paddingBottom:"5px",height:220,width:230},alt:"logo",src:w.a,onClick:function(){return t("game","boat")}}))),r.a.createElement(g.a,{className:"Tilt br3 shadow-5 pa1",options:{max:55},style:{height:240,width:250}},r.a.createElement("div",{className:"Tilt-inner"}," ",r.a.createElement("img",{style:{paddingTop:"5px",paddingBottom:"5px",height:220,width:230},alt:"logo",src:C.a,onClick:function(){return t("game","fish")}}))),r.a.createElement(g.a,{className:"Tilt br3 shadow-5 pa1",options:{max:55},style:{height:240,width:250}},r.a.createElement("div",{className:"Tilt-inner"}," ",r.a.createElement("img",{style:{paddingTop:"5px",paddingBottom:"5px",height:220,width:230},alt:"logo",src:F.a,onClick:function(){return t("game","cat")}})))))},O=r.a.Fragment,M=function(e){var t=e.name,a=e.totalScore;return r.a.createElement(O,null,r.a.createElement("div",{className:"f1 white"},"Hello ".concat(t,"! Welcome back.")),r.a.createElement("div",{style:{color:"#95dbe5ff"},className:"f2 white"},"Your total score is: ".concat(a)))},R=r.a.Fragment,T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).onUserChange=function(e){a.setState({signInUser:e.target.value})},a.onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSubmitSignIn=function(){a.props.onRouteChange("home"),a.props.getUsername(a.state.signInUser)},a.state={signInUser:"",signInEmail:"",signInPassword:""},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(R,null,r.a.createElement("article",{className:"br3 ba dark-gray b--white-40 mv4 w-100 w-100-m w-50-l mw6 center shadow-3"},r.a.createElement("main",{className:"pa2 black-80 w-60"},r.a.createElement("div",{className:"measure"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f2 fw6 ph0 mh0 black"},"Sign In"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f4 black",htmlFor:"username"},"Username"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--black-90",type:"text",name:"username",id:"username",onChange:this.onUserChange})),r.a.createElement("div",{className:"mv1"},r.a.createElement("label",{className:"db fw6 lh-copy f4 black",htmlFor:"password"},"Password"),r.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--black-90",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),r.a.createElement("div",{className:""},r.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib black b--black-90",type:"submit",value:"Sign in"}))))))}}]),t}(r.a.Component),A=r.a.Fragment,I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).onNameChange=function(e){a.setState({name:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onSubmitRegister=function(){a.props.onRouteChange("home"),a.props.getUsername(a.state.name)},a.state={email:"",password:"",name:""},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(A,null,r.a.createElement("article",{className:"br3 ba dark-gray b--white-40 mv4 w-100 w-100-m w-50-l mw6 center shadow-3"},r.a.createElement("main",{className:"pa2 black-80 w-60"},r.a.createElement("div",{className:"measure"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f2 fw6 ph0 mh0 black"},"Register"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f4 black pr2",htmlFor:"name"},"Username"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--black-90",type:"text",name:"name",id:"name",onChange:this.onNameChange})),r.a.createElement("div",{className:"mv1"},r.a.createElement("label",{className:"db fw6 lh-copy f4 black pr2",htmlFor:"email-address"},"Email"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--black-90",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),r.a.createElement("div",{className:"mv1"},r.a.createElement("label",{className:"db fw6 lh-copy f4 black pr2",htmlFor:"password"},"Password"),r.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--black-90",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),r.a.createElement("div",{className:""},r.a.createElement("input",{onClick:this.onSubmitRegister,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib black b--black-90",type:"submit",value:"Register"}))))))}}]),t}(r.a.Component),D=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"shouldComponentUpdate",value:function(){return"completed"!==this.props.triangleClassName}},{key:"render",value:function(){var e=50*(10+this.props.a.x),t=50*(10-this.props.a.y),a=50*(10+this.props.b.x),n=50*(10-this.props.b.y),s=50*(10+this.props.c.x),o=50*(10-this.props.c.y);return r.a.createElement(r.a.Fragment,null,r.a.createElement("polygon",{className:this.props.triangleClassName,fill:this.props.color,points:"".concat(e," ").concat(t,", ").concat(a," ").concat(n,", ").concat(s," ").concat(o)}))}}]),t}(n.Component),U=a(68),X=function(e,t){for(var a=["a","b","c"],n=0,r=a;n<r.length;n++){var s=r[n],o=!0,l=!1,i=void 0;try{for(var c,m=a[Symbol.iterator]();!(o=(c=m.next()).done);o=!0){var h=c.value;if(e[s].x===t[h].x&&e[s].y===t[h].y){console.log(s,h),console.log("x: ",e[s].x,t[h].x,"y: ",e[s].y,t[h].y);break}if("c"===h)return!1}}catch(u){l=!0,i=u}finally{try{o||null==m.return||m.return()}finally{if(l)throw i}}}return console.log("MATCH"),!0},P=function(e){for(var t=0,a=["a","b","c"];t<a.length;t++){var n=a[t];if(e[n].x>10||e[n].x<-10||e[n].y>10||e[n].y<-10)return!0}return!1},B=a(77),Y=function(){function e(t){Object(c.a)(this,e);var a=Object(U.a)(t,6),n=a[0],r=a[1],s=a[2],o=a[3],l=a[4],i=a[5];this.a={x:n,y:r},this.b={x:s,y:o},this.c={x:l,y:i},this.completed=!1}return Object(m.a)(e,[{key:"translate",value:function(e,t){this.a.x=this.a.x+e,this.a.y=this.a.y+t,this.b.x=this.b.x+e,this.b.y=this.b.y+t,this.c.x=this.c.x+e,this.c.y=this.c.y+t}},{key:"rotate",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=this.a.x,r=this.a.y,s=this.b.x,o=this.b.y,l=this.c.x,i=this.c.y,c=Math.PI/180*e;this.a.x=Math.round((n-t)*Math.cos(c)+(r-a)*Math.sin(c)+t),this.a.y=Math.round((r-a)*Math.cos(c)-(n-t)*Math.sin(c)+a),this.b.x=Math.round((s-t)*Math.cos(c)+(o-a)*Math.sin(c)+t),this.b.y=Math.round((o-a)*Math.cos(c)-(s-t)*Math.sin(c)+a),this.c.x=Math.round((l-t)*Math.cos(c)+(i-a)*Math.sin(c)+t),this.c.y=Math.round((i-a)*Math.cos(c)-(l-t)*Math.sin(c)+a)}},{key:"reflect",value:function(e){"x"===e?(this.a.y=-1*this.a.y,this.b.y=-1*this.b.y,this.c.y=-1*this.c.y):(this.a.x=-1*this.a.x,this.b.x=-1*this.b.x,this.c.x=-1*this.c.x)}},{key:"randomizeLocation",value:function(){var e=[{method:"rotate",params:90},{method:"rotate",params:-90},{method:"reflect",params:"x"},{method:"reflect",params:"y"},{method:"rotate",params:0}];do{var t=B(this),a=e[Math.floor(5*Math.random())];console.log(a),t[a.method](a.params),console.log(t.a,t.b,t.c)}while(P(t));this.a=t.a,this.b=t.b,this.c=t.c}}]),e}(),z={house:{pieces:[[9,-6,5,-8,9,-8],[5,-6,5,-8,9,-6],[7,-4,5,-6,9,-6]],path:"M850 700 L750 800 L 750 900 L 950 900 L 950 800 Z",pathX:850,strokeDasharray:900,stars:[200,350,450]},tree:{pieces:[[-5,-2,-6,-3,-4,-3],[-5,-3,-7,-5,-3,-5],[-5,-5,-8,-8,-2,-8],[-6,-8,-6,-10,-4,-10],[-6,-8,-4,-8,-4,-10]],path:"M250 600 L200 650 L250 650 L 150 750 L250 750 L 100 900 L 200 900 L 200 1000 L300 1000 L 300 900 L 400 900 L 250 750 L350 750 L 250 650 L 300 650 Z",pathX:2100,strokeDasharray:2200,stars:[400,600,800]},boat:{pieces:[[1,3,4,3,4,0],[4,0,6,0,4,3],[4,3,6,0,9,3],[6,3,10,3,8,5],[6,3,8,5,6,7],[0,4,3,7,6,4],[3,7,6,4,6,10]],path:"M800 0 L800 150 L 1000 350 L 950 350 L 800 500 L 700 500 L 550 350 L 800 350 L 800 300 L 500 300 Z",pathX:2100,strokeDasharray:2200,stars:[550,850,1150]},fish:{pieces:[[1,5,5,1,5,5],[5,2,7,4,5,4],[7,4,9,2,9,4],[7,4,9,4,9,6],[7,4,7,6,9,6],[7,6,9,6,9,8],[7,4,5,4,7,6],[5,4,5,6,7,6],[5,6,5,8,7,6],[1,5,5,5,5,9]],path:"M750 50 L 750 100 L850 200 L 950 100 L 950 400 L 850 300 L 750 400 L 750 450 L 550 250 Z",pathX:1500,strokeDasharray:1600,stars:[850,1250,1650]},cat:{pieces:[[2,-10,6,-10,6,-6],[6,-10,8,-10,8,-8],[8,-10,10,-8,8,-8],[3,-9,6,-6,3,-3],[3,-6,1,-4,3,-3],[3,-3,1,-2,3,-1],[3,-3,5,-2,3,-1],[1,-2,1,0,3,-1],[3,-1,5,-2,5,0]],path:"M550 500 L 650 550 L 750 500 L 750 600 L 650 650 L 800 800 L 800 1000 L 900 900 L 1000 900 L 900 1000 L 600 1000 L 650 950 L 650 800 L 550 700 L650 650 L 550 600 Z",pathX:2300,strokeDasharray:2400,stars:[650,1050,1450]}},W=["#FC766AFF","#783937FF","#F1AC88FF","#F6EA7BFF","#FFBA52FF","#E683A9FF","#F65058FF","#FBDE44FF","#28334AFF","#95DBE5FF","#078282FF","#339E66FF","#643E46FF","#BA0020FF","#EE2737FF"],Z=a(60),H=a.n(Z),_=a(21),G=a.n(_),J=a(13),$=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t,a=this,n=50*(10+this.props.a.x),s=50*(10-this.props.a.y),o=50*(10+this.props.b.x),l=50*(10-this.props.b.y),i=50*(10+this.props.c.x),c=50*(10-this.props.c.y),m=50*this.props.translateX,h=-50*this.props.translateY,u=this.props.rotateDeg,p=this.props.animate;switch(p){case"translate":e="".concat(p,"(0, 0)"),t="".concat(p,"(").concat(m,", ").concat(h,")");break;case"rotate":e="".concat(p,"(0)"),t="".concat(p,"(").concat(u,")");break;case"reflect":e="scale(1, 1)",t="scale(".concat("x"===this.props.reflectAxis?"1, -1":"-1, 1",")")}return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.Spring,{from:{transform:e},to:{transform:t}},(function(e){return r.a.createElement("polygon",{className:a.props.triangleClassName,points:"".concat(n," ").concat(s,", ").concat(o," ").concat(l,", ").concat(i," ").concat(c),fill:a.props.color,transform:e.transform,"transform-origin":"500 500"})})))}}]),t}(n.Component),q=a(61),K=a.n(q),Q=a(62),V=a.n(Q),ee=a(63),te=a.n(ee),ae=a(64),ne=a.n(ae),re=a(65),se=a.n(re),oe=a(66),le=a.n(oe),ie=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).playAudio=function(e){new Audio(e).play()},a.sounds=[ne.a,se.a,le.a],a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return setTimeout((function(){e.props.rank&&e.playAudio(e.sounds[e.props.rank-1])}),3e3),r.a.createElement("svg",{x:"100",y:"100"},1===this.props.rank?r.a.createElement(K.a,{size:"800",delay:3,repeatDelay:0,repeat:0,color:"white"}):2===this.props.rank?r.a.createElement(V.a,{size:"800",delay:3,repeatDelay:0,repeat:1,color:"white"}):3===this.props.rank?r.a.createElement(te.a,{size:"800",delay:3,repeatDelay:0,repeat:2,color:"white"}):null)}}]),t}(n.Component),ce=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.Spring,{from:{x:this.props.pathX},to:{x:0},config:{duration:3e3}},(function(t){return r.a.createElement(J.animated.svg,{fill:"none",stroke:"white",strokeWidth:"5",strokeDasharray:e.props.strokeDasharray,strokeDashoffset:t.x},r.a.createElement("path",{d:e.props.path}))})),r.a.createElement(ie,{rank:this.props.rank}))}}]),t}(n.Component),me=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).playAudio=function(e){new Audio(e).play()},a.initializeGoals=function(e){return z[e].pieces.map((function(e){return new Y(e)}))},a.initializePlayers=function(e){return z[e].pieces.map((function(e){return new Y(e.map((function(e){return-e})))}))},a.componentDidMount=function(){a.colors=function(e){for(var t=e.slice(),a=t.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),r=[t[n],t[a]];t[a]=r[0],t[n]=r[1]}return t}(W),a.setState({color:a.colors.pop(),start:!0})},a.reInitializePlayer=function(){if(a.players.length){var e=a.players.pop();return e.randomizeLocation(),a.setState({color:a.colors.pop(),moveCounter:0}),e}},a.handleOnChange=function(e){a.setState(Object(l.a)({},e.target.name,e.target.value))},a.handleTranslate=function(){a.playAudio(G.a),a.setState({animate:"translate"}),setTimeout((function(){a.player.translate(Number(a.state.translateX),Number(a.state.translateY));var e=P(a.player);a.setState((function(t){return{animate:null,moveCounter:t.moveCounter+1,totalMoves:t.totalMoves+1,outside:e}}))}),650),setTimeout((function(){a.state.outside&&(a.setState((function(e){return{animate:"translate"}})),a.player.translate(Number(-a.state.translateX),Number(-a.state.translateY)),a.setState((function(e){return{animate:null,moveCounter:e.moveCounter+1,outside:!1}})))}),650),setTimeout((function(){a.setState({translateX:"",translateY:""})}),650)},a.handleRotate=function(e){a.playAudio(G.a),a.setState((function(t){return{animate:"rotate",rotateDeg:e}})),setTimeout((function(){a.player.rotate(e),a.setState((function(e){return{animate:null,moveCounter:e.moveCounter+1,totalMoves:e.totalMoves+1}}))}),650)},a.handleReflect=function(e){a.playAudio(G.a),a.setState((function(t){return{animate:"reflect",reflectAxis:e}})),setTimeout((function(){a.player.reflect(e),a.setState((function(e){return{animate:null,moveCounter:e.moveCounter+1,totalMoves:e.totalMoves+1}}))}),650)},a.renderColumns=function(){for(var e=[],t=0;t<=1e3;t+=50)e.push(r.a.createElement("line",{key:t,x1:t,x2:t,y1:"0",y2:"1000",stroke:"gray",strokeWidth:"1"}));return e},a.renderRows=function(){for(var e=[],t=0;t<=1e3;t+=50)e.push(r.a.createElement("line",{key:t,x1:"0",x2:"1000",y1:t,y2:t,stroke:"gray",strokeWidth:"1"}));return e},a.renderXNumbers=function(){for(var e=[],t=-10,a=2;a<=1e3;a+=50)e.push(r.a.createElement("text",{key:a,x:a,y:"515",fontWeight:"bold"},t)),t+=1;return e},a.renderYNumbers=function(){for(var e=[],t=10,a=-2;a<=1e3;a+=50)0!==t&&e.push(r.a.createElement("text",{key:a,x:"505",y:a,fontWeight:"bold"},t)),t-=1;return e},a.rendergoals=function(){var e=0;return a.goals.map((function(t){return e+=1,r.a.createElement(D,{key:e,triangleClassName:t.completed?"completed":"goal",color:a.state.color,a:t.a,b:t.b,c:t.c})}))},a.addScore=function(){a.setState((function(e){return{score:e.score+(200-50*(a.state.moveCounter-1))}}))},a.state={translateX:"",translateY:"",rotateDeg:"",reflectAxis:"",animate:null,moveCounter:0,totalMoves:0,score:0,outside:!1,color:""},a.goals=a.initializeGoals(a.props.level),a.players=a.initializePlayers(a.props.level),a.player=a.players.pop(),a.colors=[],a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=!0,a=0,n=!0,s=!1,o=void 0;try{for(var l,i=this.goals[Symbol.iterator]();!(n=(l=i.next()).done);n=!0){var c=l.value;if(!c.completed){if(console.log("eval"),X(this.player,c)){c.completed=!0,this.addScore(),this.playAudio(H.a),this.player=this.reInitializePlayer();break}t=!1}}}catch(y){s=!0,o=y}finally{try{n||null==i.return||i.return()}finally{if(s)throw o}}if(t){var m=0,h=!0,u=!1,p=void 0;try{for(var d,b=z[this.props.level].stars[Symbol.iterator]();!(h=(d=b.next()).done);h=!0){var f=d.value;m+=1,this.state.score>=f&&(a=m)}}catch(y){u=!0,p=y}finally{try{h||null==b.return||b.return()}finally{if(u)throw p}}this.props.updateScore(this.state.score,a)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"info-div"},r.a.createElement("p",null,"Player Info:"),r.a.createElement(g.a,{className:"new-tilt br3",options:{max:55},style:{height:280,width:250}},r.a.createElement("article",{className:"flex flex-column mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10"},r.a.createElement("div",{className:"tc"},r.a.createElement("img",{src:"https://udayton.edu/0/img/generic-profile.png",className:"br-100 h3 w3 dib",title:"Profile Photo",alt:"Profile"}),r.a.createElement("h1",{className:"f4 black"},this.props.username),r.a.createElement("hr",{className:"mw3 bb bw1 b--black-10"})),r.a.createElement("p",{className:"lh-copy measure center f6 gray"},"Current Score: ",this.state.score),r.a.createElement("p",{className:"lh-copy measure center f6 gray"},"Best Score: ",this.props.bestScore)))),r.a.createElement("div",{className:"svg-div"},r.a.createElement("svg",{width:"1000",height:"1000"},this.renderColumns(),this.renderRows(),r.a.createElement("line",{x1:"500",x2:"500",y1:"0",y2:"1000",stroke:"black",strokeWidth:"3"}),r.a.createElement("line",{x1:"0",x2:"1000",y1:"500",y2:"500",stroke:"black",strokeWidth:"3"}),this.renderXNumbers(),this.renderYNumbers(),r.a.createElement("text",{x:"505",y:"15",fontWeight:"bold"},"10"),r.a.createElement("text",{x:"980",y:"515",fontWeight:"bold"},"10"),this.rendergoals(),this.state.animate||t?null:r.a.createElement(D,{triangleClassName:"player",color:this.state.color,a:this.player.a,b:this.player.b,c:this.player.c}),this.state.animate?r.a.createElement($,{triangleClassName:"player",color:this.state.color,a:this.player.a,b:this.player.b,c:this.player.c,animate:this.state.animate,rotateDeg:this.state.rotateDeg,reflectAxis:this.state.reflectAxis,translateX:Number(this.state.translateX),translateY:Number(this.state.translateY)}):null,t?r.a.createElement(ce,{path:z[this.props.level].path,pathX:z[this.props.level].pathX,strokeDasharray:z[this.props.level].strokeDasharray,rank:a}):null)),r.a.createElement("div",{className:"buttons-div"},r.a.createElement("div",{className:"buttons"},r.a.createElement("div",{className:"btn-txt-div"},r.a.createElement("div",{className:"flex flex-row"},r.a.createElement("div",{className:"btn-txt pr2"},"x-move:"),r.a.createElement("input",{className:"input",type:"number",onChange:this.handleOnChange,name:"translateX",value:this.state.translateX})),r.a.createElement("br",null),r.a.createElement("div",{className:"flex flex-row"},r.a.createElement("div",{className:"btn-txt pr2"},"y-move:"),r.a.createElement("input",{className:"input",type:"number",onChange:this.handleOnChange,name:"translateY",value:this.state.translateY}))),r.a.createElement("button",{className:"f6 link dim ph3 pv2 mb2 dib black ",href:"#0",id:"idTrans",onClick:function(){return e.handleTranslate()},disabled:!(!this.state.animate&&!t)},"Translate"),r.a.createElement("button",{className:"f6 link dim ph3 pv2 mb2 dib black ",href:"#0",id:"idRotPlus",onClick:function(){return e.handleRotate(90)},disabled:!(!this.state.animate&&!t)},"Rotate +90\xb0 \u21bb"),r.a.createElement("button",{className:"f6 link dim ph3 pv2 mb2 dib black ",href:"#0",id:"idRotMin",onClick:function(){return e.handleRotate(-90)},disabled:!(!this.state.animate&&!t)},"Rotate -90\xb0 \u21ba"),r.a.createElement("button",{className:"f6 link dim ph3 pv2 mb2 dib black ",href:"#0",id:"idRefX",onClick:function(){return e.handleReflect("x")},disabled:!(!this.state.animate&&!t)},"Reflect on x-axis"),r.a.createElement("button",{className:"f6 link dim ph3 pv2 mb2 dib black ",href:"#0",id:"idRefY",onClick:function(){return e.handleReflect("y")},disabled:!(!this.state.animate&&!t)},"Reflect on y-axis"),r.a.createElement("article",{className:"mw5 mw6-ns hidden mv4 moves"},r.a.createElement("h1",{className:"f5 bg-gray white mv0 pv2 ph3"},"Number of Moves"),r.a.createElement("div",{className:"pa3"},r.a.createElement("p",{className:"f6 f5-ns lh-copy measure mv0"},this.state.totalMoves)))))))}}]),t}(n.Component),he=a(67),ue=a.n(he),pe={particles:{number:{value:30,density:{enable:!1,value_area:0}},opacity:{value:1,random:!1,anim:{enable:!1}},size:{value:0,random:!1,anim:{enable:!1}},line_linked:{enable:!0,distance:250,color:"#ffffff",opacity:1,width:2.5},move:{enable:!1}}},de=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(h.a)(this,Object(u.a)(t).call(this))).addUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,totalScore:t.totalScore,joined:t.joined}})},e.onRouteChange=function(t,a){"signout"===t?e.setState({isSignedIn:!1}):"home"===t?e.setState({isSignedIn:!0}):"game"===t&&e.setState({isSignedIn:!0,level:a}),e.setState({route:t})},e.getUsername=function(t){e.setState({username:t}),e.setState({name:t})},e.updateScore=function(t,a){if(console.log(t),t>e.state["".concat(e.state.level,"Score")].score){var n=Object(i.a)({},e.state["".concat(e.state.level,"Score")]);n.score=Number(t),n.rank=e.rankIcons[a],e.setState((function(t){var a;return a={},Object(l.a)(a,"".concat(t.level,"Score"),n),Object(l.a)(a,"totalScore",e.state.houseScore.score+e.state.treeScore.score+e.state.boatScore.score+e.state.fishScore.score+e.state.catScore.score),a}))}},e.state={route:"signin",isSignedIn:!1,name:"",username:"",totalScore:0,houseScore:{score:0,rank:0},treeScore:{score:0,rank:0},boatScore:{score:0,rank:0},fishScore:{score:0,rank:0},catScore:{score:0,rank:0},level:0,user:{id:"",name:"",email:"",entries:0,joined:""}},e.rankIcons=["","\u2b50","\u2b50\u2b50","\u2b50\u2b50\u2b50"],e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement(ue.a,{style:{color:"red"},className:"particles",params:pe}),r.a.createElement(b,{isSignedIn:this.state.isSignedIn,onRouteChange:this.onRouteChange}),"home"===this.state.route?r.a.createElement("div",null,r.a.createElement(j,{onRouteChange:this.onRouteChange}),r.a.createElement(M,{name:this.state.username,totalScore:this.state.totalScore}),r.a.createElement("table",{className:"highscores"},r.a.createElement("tr",{style:{backgroundColor:"#EE2737FF",height:"40px"}},r.a.createElement("th",null,"Level"),r.a.createElement("th",null,"Scores"),r.a.createElement("th",null,"Bonus")),r.a.createElement("tr",{style:{backgroundColor:"#339E66FF",height:"40px"}},r.a.createElement("td",null,"House:"),r.a.createElement("td",null," ",this.state.houseScore.score," "),r.a.createElement("td",null," ",this.state.houseScore.rank," ")),r.a.createElement("tr",{style:{backgroundColor:"#BA0020FF",height:"40px"}},r.a.createElement("td",null,"Tree: "),r.a.createElement("td",null,this.state.treeScore.score),r.a.createElement("td",null,this.state.treeScore.rank)),r.a.createElement("tr",{style:{backgroundColor:"#078282FF",height:"40px"}},r.a.createElement("td",null,"Boat: "),r.a.createElement("td",null,this.state.boatScore.score),r.a.createElement("td",null,this.state.boatScore.rank)),r.a.createElement("tr",{style:{backgroundColor:"#E683A9FF",height:"40px"}},r.a.createElement("td",null,"Fish:"),r.a.createElement("td",null,this.state.fishScore.score),r.a.createElement("td",null,this.state.fishScore.rank)),r.a.createElement("tr",{style:{backgroundColor:"#28334AFF",height:"40px"}},r.a.createElement("td",null,"Cat:"),r.a.createElement("td",null,this.state.catScore.score),r.a.createElement("td",null,this.state.catScore.rank)))):"signin"===this.state.route?r.a.createElement(T,{addUser:this.addUser,onRouteChange:this.onRouteChange,getUsername:this.getUsername}):"game"===this.state.route?r.a.createElement(me,{style:{backgroundColor:"white"},onRouteChange:this.onRouteChange,level:this.state.level,username:this.state.username,bestScore:this.state["".concat(this.state.level,"Score")].score,updateScore:function(t,a){return e.updateScore(t,a)}}):r.a.createElement(I,{addUser:this.addUser,onRouteChange:this.onRouteChange,getUsername:this.getUsername})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(163);o.a.render(r.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},21:function(e,t,a){e.exports=a.p+"static/media/move3.5880efea.mp3"},55:function(e,t,a){e.exports=a.p+"static/media/Logo1.0a2eb078.png"},56:function(e,t,a){e.exports=a.p+"static/media/Logo2.7fab8c46.png"},57:function(e,t,a){e.exports=a.p+"static/media/Logo3.b1acb1e8.png"},58:function(e,t,a){e.exports=a.p+"static/media/Logo4.b7706456.png"},59:function(e,t,a){e.exports=a.p+"static/media/Logo5.309bd7a0.png"},60:function(e,t,a){e.exports=a.p+"static/media/drop.155e888f.mp3"},64:function(e,t,a){e.exports=a.p+"static/media/fire1.ec08b995.mp3"},65:function(e,t,a){e.exports=a.p+"static/media/fire2.ffd6b1b4.mp3"},66:function(e,t,a){e.exports=a.p+"static/media/fire3.9993daac.mp3"},69:function(e,t,a){e.exports=a(164)},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.17907dca.chunk.js.map