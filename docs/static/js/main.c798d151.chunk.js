(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,t,a){e.exports=a(296)},296:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),i=a.n(c),o=a(81),l=a.n(o),s=a(136),u=a.n(s),m=a(10),d=a.n(m),p=a(17),h=a(79),f=a.n(h),y=a(118),g=a.n(y),E=a(80),v=a.n(E),b=f.a.A400,x=g.a[700],j=v.a[100],w=Object(p.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:{main:x},secondary:{main:b},type:"dark"}}),k=a(20),C=a(21),O=a(24),S=a(18),N=a(22),R=a(123),A=a.n(R),P=a(124),D=a.n(P),I=a(125),M=a.n(I),T=a(9),B=a.n(T),L=a(127),q=a.n(L),W=a(82),F=a.n(W),z=a(41),H=a.n(z),G=a(42),U=a.n(G),$=a(43),J=a.n($),Q=a(23),V=a(126),K=a.n(V),Y=a(120),_=a.n(Y),X=a(121),Z=a.n(X),ee=a(122),te=a.n(ee),ae=a(57),ne=a.n(ae);function re(e){return function(){var t,a=Object(S.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(S.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(O.a)(this,t)}}var ce=function(e){Object(N.a)(a,e);var t=re(a);function a(){var e;Object(k.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={drawerOpen:!1,section:"Home"},e.toggleDrawer=function(t){e.setState({drawerOpen:t})},e.setSection=function(t,a){e.setState({section:t},a)},e.scrollToElement=function(t){e.setState({drawerOpen:!1},Q.scroller.scrollTo(t,{spy:!0,smooth:!0,offset:-100,duration:500}))},e}return Object(C.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.drawerOpen,c=a.section,i="Home"===c?"":": "+c,o=r.a.createElement("div",{className:t.list},r.a.createElement(F.a,null,r.a.createElement(H.a,{button:!0,key:"About",onClick:function(){return e.scrollToElement("AboutMe")}},r.a.createElement(U.a,null,r.a.createElement(_.a,null)),r.a.createElement(J.a,{primary:"About Me"})),r.a.createElement(H.a,{button:!0,key:"Experience",onClick:function(){return e.scrollToElement("Experience")}},r.a.createElement(U.a,null,r.a.createElement(Z.a,null)),r.a.createElement(J.a,{primary:"Experience"})),r.a.createElement(H.a,{button:!0,key:"Resume",onClick:function(){return e.scrollToElement("Resume")}},r.a.createElement(U.a,null,r.a.createElement(te.a,null)),r.a.createElement(J.a,{primary:"Resume"})),r.a.createElement(H.a,{button:!0,key:"Contact",onClick:function(){return e.scrollToElement("Contact")}},r.a.createElement(U.a,null,r.a.createElement(ne.a,null)),r.a.createElement(J.a,{primary:"Contact"}))));return r.a.createElement("div",null,r.a.createElement(A.a,{position:"fixed"},r.a.createElement(D.a,null,r.a.createElement(M.a,{"aria-owns":"side-drawer","aria-haspopup":"true",onClick:function(){return e.toggleDrawer(!0)}},r.a.createElement(K.a,null)),r.a.createElement(B.a,{variant:"h6",color:"inherit"},"jhassler.dev",i))),r.a.createElement(q.a,{id:"side-drawer",open:n,onClose:function(){return e.toggleDrawer(!1)}},r.a.createElement("div",{tabIndex:0,role:"button"},o)))}}]),a}(r.a.Component),ie=Object(p.withStyles)({list:{width:250}})(ce),oe=a(25),le=a.n(oe),se=a(36),ue=a.n(se);function me(e){return function(){var t,a=Object(S.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(S.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(O.a)(this,t)}}var de=function(e){Object(N.a)(a,e);var t=me(a);function a(){return Object(k.a)(this,a),t.apply(this,arguments)}return Object(C.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.spacer},r.a.createElement(le.a,{className:e.card}),r.a.createElement("div",{className:e.overlay},r.a.createElement("h2",null,"Software Engineer"),r.a.createElement("h1",null,"Joshua Hassler"),r.a.createElement(Q.Link,{to:"AboutMe",spy:!0,smooth:!0,offset:-100,duration:500},r.a.createElement(ue.a,{variant:"contained",color:"secondary",className:e.button},"About Me"))))}}]),a}(r.a.Component),pe=Object(p.withStyles)(function(e){return{button:{width:"200px"},card:{height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center",backgroundImage:'url("./header.jpg")',backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundAttachment:"fixed"},overlay:{position:"absolute",backgroundColor:"rgba(0, 0, 0, 0.4)",border:"2px solid"+j,borderRadius:"25px",color:j,top:"20%",left:"50%",transform:"translate(-50%, 50%)",zIndex:2,padding:"10px 40px 40px 40px",textAlign:"center"},spacer:{top:"100%"}}})(de),he=a(27),fe=a.n(he),ye={rootGrid:{maxWidth:1100,margin:"auto",flexGrow:1},titleCard:{width:"100%",marginLeft:"auto",marginRight:"auto"},title:{fontSize:20},content:{fontSize:25},alignTextWithIcon:{display:"flex",alignItems:"center",color:j},contactLinks:{color:j,"&:hover":{color:b}},textContainer:{textAlign:"center"}};function ge(e){return function(){var t,a=Object(S.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(S.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(O.a)(this,t)}}var Ee=function(e){Object(N.a)(a,e);var t=ge(a);function a(e){var n;return Object(k.a)(this,a),(n=t.call(this,e)).state={inview:!1},n}return Object(C.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(Q.Element,{name:"AboutMe"},r.a.createElement(le.a,{className:e.titleCard},r.a.createElement(fe.a,null,r.a.createElement(B.a,{variant:"h3",className:e.title,color:"textSecondary",gutterBottom:!0},"About Me"),r.a.createElement(B.a,{component:"p",className:e.content,color:"textPrimary"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor erat nec mi dignissim pulvinar. Nullam porta risus quis elit fermentum imperdiet. Etiam nec pretium justo, eu bibendum arcu. Phasellus eleifend diam sed risus dictum blandit. Cras nec eros faucibus, finibus elit vitae, rhoncus augue. Donec aliquet pulvinar tellus, eu ullamcorper augue ultrices ut. Mauris at tortor sed orci egestas maximus sit amet vel lectus. Nulla convallis sit amet nisi sed interdum."))))}}]),a}(r.a.Component),ve=Object(p.withStyles)(ye)(Ee),be=a(39),xe=a(58),je=a.n(xe),we=a(59),ke=a.n(we),Ce=a(131),Oe=a.n(Ce),Se=a(132),Ne=a.n(Se),Re=a(40),Ae=a.n(Re),Pe=a(128),De=a.n(Pe),Ie=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum sem a sapien consequat varius. Cras vitae placerat diam, a posuere tellus. Donec varius, nulla ac rhoncus ultrices, erat ex aliquet velit, pulvinar imperdiet felis magna sed diam. Nulla at posuere neque. Donec aliquam ligula quis mauris mattis tempor. Cras rutrum justo sit amet nibh commodo, vitae blandit sem commodo. Mauris sit amet mauris sem. Quisque nisl tortor, congue in blandit vitae, cursus ut felis. Donec quis pulvinar lorem, ut varius",Me=[{id:0,title:"UMass Lowell",description:"Student. Achieved Bachelor of Science in Computer Science. Studied a wide variety of topics with extra focus on compilers, language design,operating systems, and distributed systems.",image:"uml.png",keywords:["education","school","umass lowell","uml","university","college","university","umass","degree"]},{id:1,title:"Arista Networks",description:"Software Engineer. Works as a compiler engineer to improve language usability. Optimized compiler parsing to reduice build times. Designed and implemented caching solutions powered by Redis increasing cache hit rate from 20% to 80%.  Worked with c, c++, python, redis, and boost.",image:"testimg.jpg",keywords:["compilers","language","redis","anet","c++","c","boost","python","work"]},{id:2,title:"Akamai Technologies",description:"Technical Intern. Implemented tooling to increase team efficiency. Created automated resource requisitioning tool to help team respond to dynamic network demands. Developed skills in project management to achieve goals. Worked with and designed structures for large SQL databases. Worked with perl, python, PHP, javascript, SQL, BASH",image:"akamai.png",keywords:["akamai","intern","perl","python","PHP","js","javascript","tools","cdn","work","software","engineer"]},{id:3,title:"91.5 WUML",description:Ie,image:"testimg.jpg",keywords:[]},{id:4,title:"UMass Lowell ACM",description:Ie,image:"testimg.jpg",keywords:[]},{id:5,title:"Demolay",description:Ie,image:"testimg.jpg",keywords:[]},{id:6,title:"Skiing",description:Ie,image:"testimg.jpg",keywords:[]},{id:7,title:"Vidjio Germs",description:Ie,image:"testimg.jpg",keywords:[]},{id:8,title:"SPACE HAUC",description:Ie,image:"testimg.jpg",keywords:[]},{id:8,title:"Home Networking",description:Ie,image:"testimg.jpg",keywords:[]}],Te=a(129),Be=a.n(Te),Le=a(133),qe=a.n(Le),We=a(130),Fe=a.n(We);function ze(e){return function(){var t,a=Object(S.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(S.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(O.a)(this,t)}}var He=function(e){return{cardBody:{width:350,height:400},cardMedia:{height:140},cardAction:{height:"100%"},cardButton:{position:"relative",top:e.spacing.unit,width:e.typography.display1.fontSize,height:e.typography.display1.fontSize},expContainer:{flexGrow:1},search:{width:"100%"},searchInput:{"&$cssFocused":{color:e.palette.secondary.light}},cssOutlinedInput:{"&$cssFocused $notchedOutline":{borderColor:e.palette.secondary.light}},cssFocused:{},notchedOutline:{}}};var Ge=Object(p.withStyles)(He)(function(e){var t=e.classes;return r.a.createElement(d.a,{container:!0,justify:"center"},r.a.createElement(fe.a,null,r.a.createElement(B.a,{gutterBottom:!0,variant:"h6",color:"primary"},r.a.createElement(Fe.a,{className:t.cardButton}),"See More")))}),Ue=function(e){Object(N.a)(a,e);var t=ze(a);function a(e){var n;return Object(k.a)(this,a),(n=t.call(this,e)).state={title:"",description:"",image:""},n.state={title:e.title,description:e.description,image:e.image,isFlipped:!1},n.handleClick=n.handleClick.bind(Object(be.a)(n)),n}return Object(C.a)(a,[{key:"handleClick",value:function(e){e.preventDefault();var t=this.state.isFlipped;this.setState({isFlipped:!t})}},{key:"render",value:function(){var e=this.props.classes,t=this.state.description;return r.a.createElement(De.a,{isFlipped:this.state.isFlipped},r.a.createElement(le.a,{key:"front",className:e.cardBody},r.a.createElement(je.a,{onClick:this.handleClick,className:e.cardAction},r.a.createElement(ke.a,{className:e.cardMedia,image:this.state.image,title:this.state.title}),r.a.createElement(fe.a,null,r.a.createElement(B.a,{gutterBottom:!0,variant:"h5",component:"h2"},this.state.title),r.a.createElement(B.a,{component:"p"},t.substring(0,230)+"...")),r.a.createElement(Ge,null))),r.a.createElement(le.a,{key:"back",className:e.cardBody},r.a.createElement(je.a,{onClick:this.handleClick,className:e.cardAction},r.a.createElement(fe.a,null,r.a.createElement(B.a,{gutterBottom:!0,variant:"h5",component:"h2"},this.state.title),r.a.createElement(B.a,{component:"p"},t)),r.a.createElement(Ge,null))))}}]),a}(r.a.Component),$e=Object(p.withStyles)(He)(Ue),Je=function(e){Object(N.a)(a,e);var t=ze(a);function a(e){var n;return Object(k.a)(this,a),(n=t.call(this,e)).state={experienceCards:[]},n.state={experienceCards:e.expCards},n}return Object(C.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({experienceCards:e.expCards})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.experienceCards.map(function(e){return r.a.createElement(d.a,{key:e.id,item:!0},r.a.createElement($e,{title:e.title,description:e.description,image:e.image}))}))}}]),a}(r.a.Component),Qe=Object(p.withStyles)(He)(Je),Ve=function(e){Object(N.a)(a,e);var t=ze(a);function a(e){var n;return Object(k.a)(this,a),(n=t.call(this,e)).state={cb:n.props.cb,searchString:""},n.handleChange=n.handleChange.bind(Object(be.a)(n)),n}return Object(C.a)(a,[{key:"handleChange",value:function(e){this.setState({searchString:e.target.value},this.state.cb(e.target.value))}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(Oe.a,{id:"search",label:"Search Experience",value:this.state.searchString,margin:"normal",variant:"outlined",className:t.search,onChange:function(t){return e.handleChange(t)},InputLabelProps:{classes:{root:t.searchInput,focused:t.cssFocused}},InputProps:{startAdornment:r.a.createElement(Ne.a,{position:"start"},r.a.createElement(qe.a,null)),classes:{root:t.cssOutlinedInput,focused:t.cssFocused,notchedOutline:t.notchedOutline}}})}}]),a}(r.a.Component),Ke=Object(p.withStyles)(He)(Ve),Ye=function(e){Object(N.a)(a,e);var t=ze(a);function a(e){var n;Object(k.a)(this,a),(n=t.call(this,e)).scrollToElement=function(e){n.setState({drawerOpen:!1},Q.scroller.scrollTo(e,{spy:!0,smooth:!0,offset:-100,duration:500}))},n.handleSearch=function(e){var t=n.state.fuse.search(e);""===e?t=Me:""!==e&&t==={}&&(console.log("No Results"),t=Me),n.setState({experienceCards:t})};return n.state={experienceCards:Me,fuse:new Be.a(Me,{shouldSort:!0,threshold:.2,location:0,distance:100,maxPatternLength:32,minMatchCharLength:1,keys:["title","description","keywords"]}),inview:!1},n}return Object(C.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.expContainer},r.a.createElement(d.a,{container:!0,spacing:16,justify:"center"},r.a.createElement(d.a,{xs:12,key:-1,item:!0},r.a.createElement(Q.Element,{name:"Experience"},r.a.createElement(le.a,{className:t.titleCard},r.a.createElement(fe.a,null,r.a.createElement(B.a,{variant:"h3",className:t.title,color:"textSecondary",gutterBottom:!0},"Experience"),r.a.createElement(B.a,{component:"p",className:t.content,color:"textPrimary"},"Search around my experience or ",r.a.createElement(Ae.a,{onClick:function(){return e.scrollToElement("Contact")}},"contact me")," with any questions."),r.a.createElement(Ke,{cb:this.handleSearch}))))),r.a.createElement(Qe,{expCards:this.state.experienceCards,inview:this.state.inview})))}}]),a}(r.a.Component),_e=Object(p.withStyles)(ye)(Ye),Xe=a(135),Ze=a.n(Xe),et=a(134),tt=a.n(et);function at(e){return function(){var t,a=Object(S.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(S.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(O.a)(this,t)}}var nt=function(e){Object(N.a)(a,e);var t=at(a);function a(e){return Object(k.a)(this,a),t.call(this,e)}return Object(C.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(Q.Element,{name:"Contact"},r.a.createElement(le.a,{className:e.titleCard},r.a.createElement(fe.a,null,r.a.createElement(d.a,{container:!0,spacing:16},r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(B.a,{variant:"h3",className:e.title,color:"textSecondary",gutterBottom:!0},"Contact"),r.a.createElement("div",{className:e.textContainer},r.a.createElement(B.a,{component:"p",className:e.content,color:"textPrimary"},"Feel free to contact me! I am most reachable by email."))),r.a.createElement(d.a,{item:!0,xs:6},r.a.createElement(B.a,{component:"p",className:e.content,color:"textPrimary",style:{textAlign:"center"}},r.a.createElement("span",{className:(e.alignTextWithIcon,e.textContainer)},r.a.createElement(ne.a,null),r.a.createElement(Ae.a,{className:e.contactLinks,href:"mailto:joshua@hassler.dev"},"joshua@hassler.dev")))),r.a.createElement(d.a,{item:!0,xs:6},r.a.createElement(B.a,{component:"p",className:e.content,color:"textPrimary",style:{textAlign:"center"}},r.a.createElement("span",{className:(e.alignTextWithIcon,e.textContainer)},r.a.createElement(tt.a,null),r.a.createElement(Ae.a,{className:e.contactLinks,href:"/jhassler_pgp.asc",download:!0},"PGP Key")))),r.a.createElement(d.a,{item:!0,xs:6},r.a.createElement(B.a,{component:"p",className:e.content,color:"textPrimary",style:{textAlign:"center"}},r.a.createElement("span",{className:(e.alignTextWithIcon,e.textContainer)},r.a.createElement(Ze.a,null),"(774) 313 7029")))))))}}]),a}(r.a.Component),rt=Object(p.withStyles)(ye)(nt),ct=a(2),it=a.n(ct);function ot(e){return function(){var t,a=Object(S.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(S.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(O.a)(this,t)}}var lt=function(e){Object(N.a)(a,e);var t=ot(a);function a(e){var n;return Object(k.a)(this,a),(n=t.call(this,e)).state={inview:!1},n}return Object(C.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(Q.Element,{name:"Resume"},r.a.createElement(le.a,{className:e.cardRoot},r.a.createElement(ke.a,{className:e.resImage,image:"Resume2020-1.png",title:"My Resume"}),r.a.createElement("div",{className:e.info},r.a.createElement(fe.a,{className:e.content},r.a.createElement(d.a,{container:!0,spacing:16},r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(B.a,{variant:"h3",className:e.title,color:"textSecondary",gutterBottom:!0},"Resume")),r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement("div",{className:e.container},r.a.createElement(B.a,{component:"p",className:e.textContent,color:"textPrimary"},"You can"))),r.a.createElement(d.a,{item:!0,xs:4},r.a.createElement("div",{className:e.container},r.a.createElement(ue.a,{variant:"contained",color:"primary",href:"jhassler-resume.pdf"},"View"))),r.a.createElement(d.a,{item:!0,xs:4},r.a.createElement("div",{className:e.container},r.a.createElement(B.a,{component:"p",className:e.textContent,color:"textPrimary"},"or"))),r.a.createElement(d.a,{item:!0,xs:4},r.a.createElement("div",{className:e.container},r.a.createElement(ue.a,{variant:"contained",color:"primary",href:"jhassler-resume.pdf",download:!0},"Download"))),r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement("div",{className:e.container},r.a.createElement(B.a,{component:"p",className:e.textContent,color:"textPrimary"},"my resume. Have any questions?"),r.a.createElement(ue.a,{variant:"contained",color:"secondary",href:"#contained-buttons"},"contact me"))))))))}}]),a}(r.a.Component);lt.propType={classes:it.a.object.isRequired};var st=Object(p.withStyles)(function(e){return{cardRoot:{display:"flex"},resImage:{backgroundPosition:"top",width:300},info:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},container:{textAlign:"center"},textContent:{fontSize:25},title:{fontSize:20},button:{margin:10}}})(lt);var ut=Object(p.withStyles)(ye)(function(e){var t=e.classes;return r.a.createElement(l.a,{theme:w},r.a.createElement(u.a,null),r.a.createElement("div",{className:"App"},r.a.createElement(ie,null),r.a.createElement(pe,null),r.a.createElement(d.a,{container:!0,className:t.rootGrid,spacing:16},r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(d.a,{container:!0,justify:"center",spacing:16},r.a.createElement(d.a,{item:!0,key:"AboutMe"},r.a.createElement(ve,null)),r.a.createElement(d.a,{item:!0,key:"Experience"},r.a.createElement(_e,null)),r.a.createElement(d.a,{item:!0,key:"Resume"},r.a.createElement(st,null)),r.a.createElement(d.a,{item:!0,key:"Contact"},r.a.createElement(rt,null)))))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ut,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[137,1,2]]]);
//# sourceMappingURL=main.c798d151.chunk.js.map