(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{363:function(n,e,t){},364:function(n,e,t){"use strict";t.r(e);var r,a,i,o,c=t(3),s=t.n(c),l=t(33),d=t.n(l),m=t(8),b=t(9),j=Object(b.a)(r||(r=Object(m.a)(["\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    cursor:none;\n  }\n  :root{\n    --dark-bg: #262626;\n    --gray-1: #BCB4B4;\n    --deep-dark: #1E1E1E;\n    --gray-2: #363636;\n    --white : white;\n    --black: black;\n  }\n  html{\n    font-size: 10px;\n    font-family: 'Roboto Mono';\n    background-color: var(--dark-bg);\n  }\n  ul,li{\n    list-style: none;\n  }\n  a{\n    text-decoration: none;\n  }\n  img, svg{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  button{\n    outline: none\n  }\n  .container {\n    max-width: 1200px;\n    width: 90%;\n    margin: 0 auto;\n  }\n//rubberband animation\n.animation_rubber:hover {\n  animation: rubberBandEffect linear 1s;\n  animation-fill-mode: both;\n  animation-duration:1s;\n  -webkit-animation-duration:1s;\n  -webkit-animation-fill-mode: both;\n}\n\n@keyframes rubberBandEffect{\n  0%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}\n  30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}\n  40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}\n  50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}\n  65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}\n  75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}\n  100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}\n}\n\n//boune animation\n.animation_bounce-1 {\n  animation: bounce-1 linear 1s;\n  animation-fill-mode: both;\n  animation-duration:1s;\n  animation-iteration-count: infinite;\n  -webkit-animation-duration:1s;\n  -webkit-animation-fill-mode: both;\n}\n@keyframes bounce-1{\n  0%{-webkit-transform:translateY(0);transform:translateY(0);}\n  50%{-webkit-transform:translateY(-15px);\n  /* transform:translateY(-15px) */}\n  100%{-webkit-transform:translateY(0);transform:translateY(0);}\n}\n/* Smooth Scroll  */\n  [data-scrollbar] {\n    height: 100vh;\n    overflow: hidden;\n    background-color: var(--gray-1);\n    .scroll-content {\n      background-color: var(--dark-bg);\n    }\n    .scrollbar-track.scrollbar-track-y {\n      background: var(--deep-dark);\n      .scrollbar-thumb-y {\n        background: var(--gray-1);\n      }\n    }\n  }\n"]))),u=t.p+"static/media/RobotoMono-Regular.418a8f9f.ttf",p=t.p+"static/media/Montserrat-SemiBold.fa8441f3.ttf",h=t.p+"static/media/Montserrat-Bold.079ca05d.ttf",x=Object(b.a)(a||(a=Object(m.a)(["\n  @font-face {\n    font-family: 'RobotoMono Regular';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat SemiBold';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat Bold';\n    src: url(",");\n    font-style: normal;\n  }\n  html{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  *{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  h1,h2,h3,h4,h5,h6{\n    font-family: 'Montserrat SemiBold'\n  }\n"])),u,p,h),f=t(23),g=t(12),_=t(74),O=t.n(_),v=t(75),w=t(21),y=t(15),k=t(0),N=b.b.nav(i||(i=Object(m.a)(["\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 1rem 0;\n  background: var(--dark-bg);\n  ul {\n    max-width: 1200px;\n    margin: 0 auto;\n    width: 90%;\n    text-align: center;\n    li {\n      display: inline-block;\n      border-radius: 8px;\n      transition: 0.3s ease background-color;\n      &:hover {\n        background-color: var(--deep-dark);\n      }\n    }\n    a {\n      display: inline-block;\n      font-family: 'RobotoMono Regular';\n      padding: 1rem 2rem;\n      font-size: 2rem;\n      color: var(--gray-1);\n      outline: none;\n    }\n    .active {\n      color: var(--white);\n    }\n  }\n  .mobile-menu-icon {\n    position: absolute;\n    right: 1rem;\n    top: 1rem;\n    width: 4rem;\n    cursor: pointer;\n    display: none;\n    outline: none;\n    * {\n      pointer-events: none;\n    }\n  }\n  .navItems .closeNavIcon {\n    display: none;\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 0;\n    .hide-item {\n      transform: translateY(calc(-100% - var(--top)));\n    }\n    .mobile-menu-icon {\n      display: block;\n    }\n    .navItems {\n      --top: 1rem;\n      transition: 0.3s ease transform;\n      background-color: var(--deep-dark);\n      padding: 2rem;\n      width: 90%;\n      max-width: 300px;\n      border-radius: 12px;\n      position: absolute;\n      right: 1rem;\n      top: var(--top);\n      .closeNavIcon {\n        display: block;\n        width: 3rem;\n        margin: 0 0 0 auto;\n        cursor: pointer;\n        * {\n          pointer-events: none;\n        }\n      }\n      li {\n        display: block;\n        margin-bottom: 1rem;\n      }\n    }\n  }\n"])));function I(){var n=Object(c.useState)(!1),e=Object(w.a)(n,2),t=e[0],r=e[1];return Object(k.jsxs)(N,{children:[Object(k.jsx)("div",{className:"mobile-menu-icon",onClick:function(){return r(!t)},role:"button",onKeyDown:function(){return r(!t)},tabIndex:0,children:Object(k.jsx)(y.i,{})}),Object(k.jsxs)("ul",{className:t?"navItems":"navItems hide-item",children:[Object(k.jsx)("div",{className:"closeNavIcon",onClick:function(){return r(!t)},role:"button",onKeyDown:function(){return r(!t)},tabIndex:0,children:Object(k.jsx)(y.c,{})}),Object(k.jsx)("li",{children:Object(k.jsx)(f.c,{to:"/",exact:!0,onClick:function(){return r(!t)},role:"button",onKeyDown:function(){return r(!t)},tabIndex:0,children:"Home"})}),Object(k.jsx)("li",{children:Object(k.jsx)(f.c,{to:"/projects",onClick:function(){return r(!t)},role:"button",onKeyDown:function(){return r(!t)},tabIndex:0,children:"Projects"})}),Object(k.jsx)("li",{children:Object(k.jsx)(f.c,{to:"/contact",onClick:function(){return r(!t)},role:"button",onKeyDown:function(){return r(!t)},tabIndex:0,children:"Contact"})})]})]})}var z,S=b.b.div(o||(o=Object(m.a)(["\n  margin-top: 2rem;\n  .button {\n    font-size: 2.2rem;\n    background-color: ",";\n    padding: 0.7em 2em;\n    border: 2px solid var(--gray-1);\n    border-radius: 8px;\n    display: inline-block;\n    color: ",";\n  }\n  @media only screen and (max-width: 768px) {\n    .button {\n      font-size: 1.8rem;\n    }\n  }\n"])),(function(n){return n.outline?"transperant":"var(--gray-1)"}),(function(n){return n.outline?"var(--gary-1)":"black"}));function B(n){var e=n.btnText,t=void 0===e?"test":e,r=n.btnLink,a=void 0===r?"test":r,i=n.outline,o=void 0!==i&&i;return Object(k.jsx)(S,{outline:o,className:"button-wrapper",children:Object(k.jsx)(f.b,{className:"button",to:a,children:t})})}var C,M=b.b.div(z||(z=Object(m.a)(["\n  max-width: 500px;\n  padding:10px;\n  margin: 0 auto;\n  font-size: 1.8rem;\n  line-height: 1.3em;\n  @media only screen and (max-width: 768px) {\n    font-size: 1.4rem;\n  }\n"])));function Y(n){var e=n.children;return Object(k.jsx)(M,{className:"para",children:Object(k.jsx)("p",{children:e})})}var R=b.b.div(C||(C=Object(m.a)(["\n  text-align: center;\n  p {\n    font-family: 'RobotoMono Regular';\n    font-size: 2rem;\n  }\n  h2 {\n    font-family: 'Montserrat Bold';\n    font-size: 6rem;\n    margin-top: 0.5rem;\n    text-transform: uppercase;\n  }\n  @media only screen and (max-width: 768px) {\n    text-align: center;\n    p {\n      font-size: 1.2rem;\n    }\n    h2 {\n      font-size: 3.6rem;\n    }\n  }\n"])));function D(n){var e=n.subheading,t=void 0===e?"Need Subheading":e,r=n.heading,a=void 0===r?"need heading":r;return Object(k.jsxs)(R,{className:"section-title",children:[Object(k.jsx)("p",{children:t}),Object(k.jsx)("h2",{children:a})]})}var L,E,F=t.p+"static/media/about-sec-img.9769a6c5.png",X=b.b.div(L||(L=Object(m.a)(["\n  padding: 10rem 0;\n  .container {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    text-align: left;\n  }\n  .aboutSection__left,\n  .aboutSection__right {\n    flex: 1;\n  }\n  .section-title {\n    text-align: left;\n  }\n  .para {\n    margin-top: 2rem;\n    margin-left: 0;\n  }\n  .aboutImg{\n    border-radius:15px;\n  }\n  .aboutSection__buttons {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 2rem;\n    margin-top: 2rem;\n  }\n  @media only screen and (max-width: 950px) {\n    .aboutSection__left {\n      flex: 4;\n    }\n    .aboutSection__right {\n      flex: 3;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      text-align: center;\n    }\n    .aboutSection__left,\n    .aboutSection__right {\n      width: 100%;\n    }\n    .aboutSection__right {\n      margin-top: 3rem;\n    }\n    .section-title {\n      text-align: center;\n    }\n    .para {\n      margin: 0 auto;\n      margin-top: 2rem;\n    }\n    .aboutSection__buttons {\n      flex-direction: column;\n      gap: 0rem;\n      .button-wrapper,\n      a {\n        width: 100%;\n        text-align: center;\n      }\n    }\n  }\n"])));function T(){return Object(k.jsx)(X,{children:Object(k.jsxs)("div",{className:"container",children:[Object(k.jsxs)("div",{className:"aboutSection__left",children:[Object(k.jsx)(D,{subheading:"Let me introduce myself",heading:"About Me"}),Object(k.jsx)(Y,{children:"I am a Salesforce Developer, website designer and developer from Ajmer, Rajasthan. I create professional websites. I love Programing and always try to learn new technologies."}),Object(k.jsxs)("div",{className:"aboutSection__buttons",children:[Object(k.jsx)(B,{btnText:"Works",btnLink:"/projects"}),Object(k.jsx)(B,{btnText:"Read More",btnLink:"/about",outline:!0})]})]}),Object(k.jsx)("div",{className:"aboutSection__right",children:Object(k.jsx)("img",{className:"aboutImg",src:F,alt:"Img"})})]})})}var P,A=b.b.div(E||(E=Object(m.a)(["\n  text-align: center;\n  border-radius: 12px;\n  padding: 3.5rem 10px;\n  background: var(--deep-dark);\n  \n  .servicesItem__icon {\n    svg {\n      width: 3rem;\n    }\n  }\n  .servicesItem__title {\n    font-size: 2.5rem;\n    font-family: 'Montserrat SemiBold';\n  }\n  .para {\n    margin-top: 2rem;\n  }\n"])));function H(n){var e=n.icon,t=void 0===e?Object(k.jsx)(y.f,{}):e,r=n.title,a=void 0===r?"Web Design":r,i=n.desc,o=void 0===i?"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok":i;return Object(k.jsxs)(A,{className:"servicesItem",children:[Object(k.jsx)("div",{className:"servicesItem__icon",children:t}),Object(k.jsx)("div",{className:"servicesItem__title",children:a}),Object(k.jsx)(Y,{children:o})]})}var W=b.b.div(P||(P=Object(m.a)(["\n  padding: 10rem 0;\n  .services__allItems {\n    display: flex;\n    gap: 10rem;\n    justify-content: space-between;\n    margin-top: 5rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .services__allItems {\n      flex-direction: column;\n      max-width: 350px;\n      margin: 0 auto;\n      margin-top: 5rem;\n      gap: 5rem;\n    }\n  }\n"])));function K(){return Object(k.jsx)(W,{children:Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)(D,{subheading:"What i will do for you",heading:"Services"}),Object(k.jsxs)("div",{className:"services__allItems",children:[Object(k.jsx)(H,{icon:Object(k.jsx)(y.f,{}),title:"web design",desc:"I do ui/ux design for the website that helps website to get a unique look."}),Object(k.jsx)(H,{icon:Object(k.jsx)(y.e,{}),title:"web devlopment",desc:"I also develop the websites. I create high performance website with blazing fast speed."}),Object(k.jsx)(H,{icon:Object(k.jsx)(y.d,{}),title:"Salesforce Commerce Cloud",desc:"I can develop E-Commerce websites On Salesforce Commerce Cloud platform"})]})]})})}var G,J;t(367),t(369),b.b.div(G||(G=Object(m.a)(["\n  overflow-x: hidden;\n  padding: 10rem 0;\n  text-align: center;\n  .testimonial__wrapper {\n    position: relative;\n    max-width: 700px;\n    margin: 0 auto;\n  }\n  .testimonial__info {\n    width: 100%;\n    height: fit-content;\n    padding: 3rem;\n    background-color: var(--deep-dark);\n    border-radius: 12px;\n    margin-top: 5rem;\n  }\n  .testimonial__desc {\n    .para {\n      text-align: center;\n    }\n  }\n  .testimonial__name {\n    margin-top: 4rem;\n    font-family: 'Montserrat Bold';\n    font-size: 2.2rem;\n  }\n  .testimonial__title {\n    font-size: 1.6rem;\n    margin-top: 0.3rem;\n  }\n  .arrows {\n    margin-top: 2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    svg {\n      width: 30px;\n      pointer-events: none;\n    }\n    .next,\n    .prev {\n      margin: 0 0.5rem;\n      width: fit-content;\n      background-color: var(--deep-dark);\n      padding: 0.5rem 2rem;\n      border-radius: 8px;\n      cursor: pointer;\n    }\n  }\n  .fade-enter {\n    opacity: 0;\n    transform: scale(0.96);\n    z-index: 1;\n  }\n  .fade-enter-active {\n    opacity: 1;\n    transform: scale(1);\n    transition: 250ms ease-in;\n    transition-property: transform, opacity;\n    z-index: 1;\n  }\n  .fade-exit {\n    transform: scale(1);\n    opacity: 1;\n  }\n  .fade-exit-active {\n    opacity: 0;\n    transform: scale(0.96);\n    transition: 200ms ease-in;\n    transition-property: transform, opacity;\n  }\n"])));var q=b.b.div(J||(J=Object(m.a)(["\n  padding: 5rem 0;\n  .contactBanner__wrapper {\n    background-color: var(--deep-dark);\n    border-radius: 12px;\n    padding: 5rem 0rem;\n    text-align: center;\n  }\n  .contactBanner__heading {\n    font-size: 4rem;\n    margin-bottom: 2rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .contactBanner__heading {\n      font-size: 2.8rem;\n    }\n  }\n"])));function V(){return Object(k.jsx)(q,{children:Object(k.jsx)("div",{className:"container",children:Object(k.jsxs)("div",{className:"contactBanner__wrapper",children:[Object(k.jsx)(Y,{children:"Have a project in mind"}),Object(k.jsx)("h3",{className:"contactBanner__heading",children:"Let me help you"}),Object(k.jsx)(B,{btnText:"Contact Now",btnLink:"/contact"})]})})})}t.p;var Q,U=t.p+"static/media/social-media-arrow.f5e093ce.svg",Z=t.p+"static/media/scroll-down-arrow.b013ca45.svg",$=b.b.div(Q||(Q=Object(m.a)(["\n  .hero {\n    height: 100vh;\n    min-height: 568px;\n    width: 100%;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n  }\n  .hero__heading {\n    font-size: 2rem;\n    position: relative;\n    span {\n      display: inline-block;\n      width: 100%;\n    }\n    .hero__name span{\n      width:auto;\n    }\n    .hero__name {\n      font-family: 'Montserrat SemiBold';\n      font-size: 7rem;\n      color: var(--white);\n    }\n    \n    .hero__name .word{\n      font-family: 'Montserrat SemiBold';\n      font-size: 7rem;\n      color: var(--white);\n      display: inline-block;\n      width:auto;\n      transition: all .3s ease-out\n    }\n    .hero__name .word:hover{\n      color: red;\n    }\n    .hero__name .onespace{\n      width:20px;\n    }\n  }\n  .hero__img {\n    max-width: 900px;\n    width: 100%;\n    height: 600px;\n    margin: 0 auto;\n    border: 2px solid var(--gray-1);\n  }\n  .hero__info {\n    \n  }\n  .hero__social,\n  .hero__scrollDown {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    position: absolute;\n\n    bottom: 20px;\n    width: 50px;\n  }\n  .hero__social {\n    left: 50px;\n  }\n  .hero__scrollDown {\n    right: 50px;\n  }\n\n  .hero__social__indicator,\n  .hero__scrollDown {\n    width: 50px;\n    p {\n      font-size: 1.6rem;\n      transform: translateY(-70px) rotate(90deg);\n      letter-spacing: 0.7rem;\n      text-transform: uppercase;\n    }\n    img {\n      max-height: 45px;\n      width: 16px;\n      margin: 0 auto;\n      object-fit: contain;\n    }\n  }\n  .hero__scrollDown {\n    img {\n      max-height: 70px;\n    }\n  }\n\n  .hero__social__text {\n    ul {\n      li {\n        margin-bottom: 1rem;\n        a {\n          display: inline-block;\n          font-size: 1.6rem;\n          transform: rotate(-90deg);\n          letter-spacing: 5px;\n          margin-bottom: 2rem;\n        }\n      }\n    }\n  }\n  @media only screen and (min-width: 768px) {\n    .hero__name .mobile{\n      display: none;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .hero {\n    }\n    .hero__heading {\n      font-size: 1.4rem;\n      .hero__name {\n        font-size: 4.5rem;\n      }\n    }\n    .hero__name{\n      font-size: 4rem;\n    }\n    .hero__name .mobile{\n      font-family: 'Montserrat SemiBold';\n      color: var(--white);\n      display: inline-block;\n      width:auto;\n      transition: all .3s ease-out\n      display: inline-block;\n    }\n    .hero__name .word{\n      display: none !important;\n    }\n    .hero__img {\n      height: 300px;\n      border-radius: 15px;\n    }\n    .hero__info {\n      margin-top: 3rem;\n    }\n    .hero__social {\n      left: 0px;\n      bottom: -15%;\n      width: 20px;\n      .hero__social__indicator {\n        width: 20px;\n        p {\n          font-size: 1.2rem;\n        }\n        img {\n          max-height: 22px;\n        }\n      }\n      .hero__social__text {\n        ul {\n          li {\n            a {\n              font-size: 1.2rem;\n              margin-bottom: 1rem;\n            }\n          }\n        }\n      }\n    }\n    .hero__scrollDown {\n      right: 0;\n      width: 20px;\n      bottom: 50px;\n      gap: 1rem;\n      p {\n        font-size: 1.3rem;\n      }\n    }\n  }\n"])));function nn(){return Object(k.jsx)($,{children:Object(k.jsx)("div",{className:"hero",children:Object(k.jsxs)("div",{className:"container",children:[Object(k.jsxs)("h1",{className:"hero__heading",children:[Object(k.jsx)("span",{children:"Hello, This is"}),Object(k.jsxs)("span",{className:"hero__name",children:[Object(k.jsx)("span",{className:"mobile  animation_rubber",children:"Dharmesh Gurnani"}),Object(k.jsx)("span",{className:"word animation_rubber",children:"D"}),Object(k.jsx)("span",{className:"word animation_rubber",children:"h"}),Object(k.jsx)("span",{className:"word animation_rubber",children:"a"}),Object(k.jsx)("span",{className:"word animation_rubber",children:"r"}),Object(k.jsx)("span",{className:"word animation_rubber",children:"m"}),Object(k.jsx)("span",{className:"word animation_rubber",children:"e"}),Object(k.jsx)("span",{className:"word animation_rubber",children:"s"}),Object(k.jsx)("span",{className:"word animation_rubber",children:"h"}),Object(k.jsx)("span",{className:"onespace",children:" "}),Object(k.jsx)("span",{className:"word animation_rubber",children:"G"}),Object(k.jsx)("span",{className:"word animation_rubber",children:"u"}),Object(k.jsx)("span",{className:"word animation_rubber",children:"r"}),Object(k.jsx)("span",{className:"word animation_rubber",children:"n"}),Object(k.jsx)("span",{className:"word animation_rubber",children:"a"}),Object(k.jsx)("span",{className:"word animation_rubber",children:"n"}),Object(k.jsx)("span",{className:"word animation_rubber",children:"i"})]})]}),Object(k.jsxs)("div",{className:"hero__info",children:[Object(k.jsx)(Y,{children:"I'm a Salesforce Commerce Cloud developer & full stack web designer and developer. I'm passionate about programming and Networking."}),Object(k.jsx)(B,{btnText:"see my works",btnLink:"/projects"})]}),Object(k.jsxs)("div",{className:"hero__social",children:[Object(k.jsxs)("div",{className:"hero__social__indicator",children:[Object(k.jsx)("p",{children:"Follow"}),Object(k.jsx)("img",{src:U,alt:"icon"})]}),Object(k.jsx)("div",{className:"hero__social__text",children:Object(k.jsxs)("ul",{children:[Object(k.jsx)("li",{children:Object(k.jsx)("a",{href:"http://twitter.com/dharmeshgurnani",target:"_blank",rel:"noreferrer",children:"TW"})}),Object(k.jsx)("li",{children:Object(k.jsx)("a",{href:"http://instagram.com/dharmeshgurnani",target:"_blank",rel:"noreferrer",children:"IG"})}),Object(k.jsx)("li",{children:Object(k.jsx)("a",{href:"https://www.linkedin.com/in/dharmeshgurnani/",target:"_blank",rel:"noreferrer",children:"LI"})})]})})]}),Object(k.jsxs)("div",{className:"hero__scrollDown animation_bounce-1",children:[Object(k.jsx)("p",{children:"Scroll"}),Object(k.jsx)("img",{src:Z,alt:"ScrollDown Arrow"})]})]})})})}function en(){return Object(k.jsxs)("div",{children:[Object(k.jsx)(nn,{}),Object(k.jsx)(T,{}),Object(k.jsx)(K,{}),Object(k.jsx)(V,{})]})}var tn,rn,an=t(368),on=t.p+"static/media/projectImg.9bd60e0b.png",cn=[{id:Object(an.a)(),name:"Movie Search Engine",desc:"An website made using html and css used for searching movies and it's information using Omdb API",img:on}],sn=b.b.div(tn||(tn=Object(m.a)(["\n  .projectItem__img {\n    width: 100%;\n    height: 400px;\n    border-radius: 12px;\n    overflow: hidden;\n    display: inline-block;\n    border: 3px solid var(--gray-2);\n    img {\n      height: 100%;\n    }\n  }\n  .projectItem__info {\n    margin-top: 1rem;\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 12px;\n  }\n  .projectItem__title {\n    font-size: 2.2rem;\n  }\n  .projectItem__desc {\n    font-size: 1.6rem;\n    font-family: 'RobotoMono Regular';\n    margin-top: 1rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .projectItem__img {\n      height: 350px;\n    }\n  }\n"])));function ln(n){var e=n.img,t=void 0===e?on:e,r=n.title,a=void 0===r?"Project Name":r,i=n.desc,o=void 0===i?"Lorem Ipsum is simply dummy text of the printing and typesetting industry.":i;return Object(k.jsxs)(sn,{children:[Object(k.jsx)(f.b,{to:"/projects",className:"projectItem__img",children:Object(k.jsx)("img",{src:t,alt:"project img"})}),Object(k.jsxs)("div",{className:"projectItem__info",children:[Object(k.jsx)(f.b,{to:"#",children:Object(k.jsx)("h3",{className:"projectItem__title",children:a})}),Object(k.jsx)("p",{className:"projectItem__desc",children:o})]})]})}var dn=b.b.div(rn||(rn=Object(m.a)(["\n  padding: 10rem 0;\n  .projects__allItems {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 5rem;\n    margin-top: 5rem;\n  }\n  .projects__searchBar {\n    position: relative;\n    width: 300px;\n    margin-top: 5rem;\n  }\n  .projects__searchBar input {\n    width: 100%;\n    font-size: 2rem;\n    padding: 0.8rem;\n    color: var(--black);\n    border-radius: 6px;\n    outline: none;\n    border: none;\n  }\n  .projects__searchBar .searchIcon {\n    position: absolute;\n    width: 2rem;\n\n    right: 1rem;\n  }\n  .projects__searchBar .searchIcon path {\n    color: var(--deep-dark);\n  }\n  @media only screen and (max-width: 768px) {\n    .projects__searchBar,\n    .projects__searchBar form,\n    .projects__searchBar input {\n      width: 100%;\n    }\n  }\n"])));function mn(){var n=Object(c.useState)(""),e=Object(w.a)(n,2),t=e[0],r=e[1],a=Object(c.useState)(cn),i=Object(w.a)(a,2),o=i[0],s=i[1];Object(c.useEffect)((function(){""!==t&&s((function(){return cn.filter((function(n){return n.name.toLowerCase().match(t.toLowerCase())}))}))}),[t]);return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(dn,{children:Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)(D,{heading:"Projects",subheading:"some of my recent works"}),Object(k.jsx)("div",{className:"projects__searchBar",children:Object(k.jsxs)("form",{children:[Object(k.jsx)("input",{type:"text",value:t,onChange:function(n){n.preventDefault(),r(n.target.value),!n.target.value.length>0&&s(cn)},placeholder:"Project Name"}),Object(k.jsx)(y.k,{className:"searchIcon"})]})}),Object(k.jsx)("div",{className:"projects__allItems",children:o.map((function(n){return Object(k.jsx)(ln,{title:n.name,desc:n.desc,img:n.img},n.id)}))})]})})})}var bn,jn,un=t(77),pn=t(78),hn=t(80),xn=t(79),fn=function(n){Object(hn.a)(t,n);var e=Object(xn.a)(t);function t(){return Object(un.a)(this,t),e.apply(this,arguments)}return Object(pn.a)(t,[{key:"render",value:function(){return Object(k.jsx)("div",{children:Object(k.jsx)("h1",{children:"Games"})})}}]),t}(c.PureComponent),gn=b.b.form(bn||(bn=Object(m.a)(["\n  width: 100%;\n  .form-group {\n    width: 100%;\n    margin-bottom: 2rem;\n  }\n  label {\n    font-size: 1.8rem;\n  }\n  input,\n  textarea {\n    width: 100%;\n    font-size: 2rem;\n    padding: 1.2rem;\n    color: var(--gray-1);\n    background-color: var(--deep-dark);\n    outline: none;\n    border: none;\n    border-radius: 8px;\n    margin-top: 1rem;\n  }\n  textarea {\n    min-height: 250px;\n    resize: vertical;\n  }\n  button[type='submit'] {\n    background-color: var(--gray-1);\n    color: var(--black);\n    font-size: 2rem;\n    display: inline-block;\n    outline: none;\n    border: none;\n    padding: 1rem 4rem;\n    border-radius: 8px;\n    cursor: pointer;\n  }\n"])));function _n(){var n=Object(c.useState)(""),e=Object(w.a)(n,2),t=e[0],r=e[1],a=Object(c.useState)(""),i=Object(w.a)(a,2),o=i[0],s=i[1],l=Object(c.useState)(""),d=Object(w.a)(l,2),m=d[0],b=d[1];return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(gn,{children:[Object(k.jsx)("div",{className:"form-group",children:Object(k.jsxs)("label",{htmlFor:"name",children:["Your Name",Object(k.jsx)("input",{type:"text",id:"name",name:"name",value:t,onChange:function(n){return r(n.target.value)}})]})}),Object(k.jsx)("div",{className:"form-group",children:Object(k.jsxs)("label",{htmlFor:"email",children:["Your Email",Object(k.jsx)("input",{type:"email",id:"email",name:"email",value:o,onChange:function(n){return s(n.target.value)}})]})}),Object(k.jsx)("div",{className:"form-group",children:Object(k.jsxs)("label",{htmlFor:"message",children:["Your message",Object(k.jsx)("textarea",{type:"text",id:"message",name:"message",value:m,onChange:function(n){return b(n.target.value)}})]})}),Object(k.jsx)("input",{type:"button"})]})})}var On,vn=b.b.div(jn||(jn=Object(m.a)(["\n  padding: 2rem;\n  background-color: var(--deep-dark);\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  border-radius: 8px;\n  margin-bottom: 2rem;\n  .icon {\n    color: var(--white);\n    background-color: var(--gray-2);\n    padding: 1.3rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n  }\n  svg {\n    width: 3.5rem;\n  }\n"])));function wn(n){var e=n.icon,t=void 0===e?Object(k.jsx)(y.j,{}):e,r=n.text,a=void 0===r?"I need text ":r;return Object(k.jsxs)(vn,{children:[Object(k.jsx)("div",{className:"icon",children:t}),Object(k.jsx)("div",{className:"info",children:Object(k.jsx)(Y,{children:a})})]})}var yn=b.b.div(On||(On=Object(m.a)(["\n  padding: 10rem 0;\n  .contactSection__wrapper {\n    display: flex;\n    gap: 5rem;\n    margin-top: 7rem;\n    justify-content: space-between;\n    position: relative;\n  }\n  .contactSection__wrapper::after {\n    position: absolute;\n    content: '';\n    width: 2px;\n    height: 50%;\n    background-color: var(--gray-1);\n    left: 50%;\n    top: 30%;\n    transform: translate(-50%, -50%);\n  }\n  .left {\n    width: 100%;\n    max-width: 500px;\n  }\n  .right {\n    max-width: 500px;\n    width: 100%;\n    border-radius: 12px;\n    /* padding-left: 3rem; */\n  }\n  @media only screen and (max-width: 768px) {\n    .contactSection__wrapper {\n      flex-direction: column;\n    }\n    .contactSection__wrapper::after {\n      display: none;\n    }\n    .left,\n    .right {\n      max-width: 100%;\n    }\n    .right {\n      padding: 4rem 2rem 2rem 2rem;\n    }\n  }\n"])));function kn(){return Object(k.jsx)(yn,{children:Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)(D,{heading:"contact",subheading:"get in touch"}),Object(k.jsxs)("div",{className:"contactSection__wrapper",children:[Object(k.jsxs)("div",{className:"left",children:[Object(k.jsx)(wn,{icon:Object(k.jsx)(y.h,{}),text:"+91 7023355478"}),Object(k.jsx)(wn,{icon:Object(k.jsx)(y.g,{}),text:"dharmeshgurnani2000@gmail.com"}),Object(k.jsx)(wn,{text:"Ajmer, Rajasthan"})]}),Object(k.jsx)("div",{className:"right",children:Object(k.jsx)(_n,{})})]})]})})}var Nn,In=t.p+"static/media/map.7d98ba39.png",zn=b.b.div(Nn||(Nn=Object(m.a)(["\n  background: url(",") no-repeat;\n  background-position: center;\n  background-size: cover;\n  min-height: 400px;\n  .container {\n    position: relative;\n    min-height: 400px;\n  }\n  .map__card {\n    position: absolute;\n    right: 10%;\n    bottom: 10%;\n    padding: 2rem;\n    background: var(--deep-dark);\n    width: 100%;\n    max-width: 300px;\n    border-radius: 12px;\n  }\n  .map__card__heading {\n    font-size: 3rem;\n    margin-bottom: 1rem;\n  }\n  .map__card__link {\n    display: inline-block;\n    font-size: 1.6rem;\n    margin-top: 3rem;\n    text-decoration: underline;\n  }\n  @media only screen and (max-width: 768px) {\n    background-position: 80% center;\n  }\n  @media only screen and (max-width: 400px) {\n    .map__card {\n      max-width: none;\n      right: auto;\n    }\n  }\n"])),In);function Sn(){return Object(k.jsx)(zn,{children:Object(k.jsx)("div",{className:"container",children:Object(k.jsxs)("div",{className:"map__card",children:[Object(k.jsx)("h3",{className:"map__card__heading",children:"Here is me"}),Object(k.jsx)(Y,{children:"Ajmer, Rajasthan"}),Object(k.jsx)("a",{className:"map__card__link",href:"https://www.google.com/maps/place/Ajmer,+Rajasthan/@26.4532261,74.5656735,12z/data=!3m1!4b1!4m5!3m4!1s0x396be6d8fcb7cd01:0xcbaf8f12eb8100ee!8m2!3d26.4498954!4d74.6399163",target:"_blank",rel:"noreferrer",children:"Open in google map"})]})})})}function Bn(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(kn,{}),Object(k.jsx)(Sn,{})]})}var Cn=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(O.a,{options:v}),Object(k.jsxs)(f.a,{children:[Object(k.jsx)(I,{}),Object(k.jsxs)(g.c,{children:[Object(k.jsx)(g.a,{path:"/projects",children:Object(k.jsx)(mn,{})}),Object(k.jsx)(g.a,{path:"/games",children:Object(k.jsx)(fn,{})}),Object(k.jsx)(g.a,{path:"/contact",children:Object(k.jsx)(Bn,{})}),Object(k.jsx)(g.a,{path:"/",children:Object(k.jsx)(en,{})})]})]})]})},Mn=(t(363),Object(c.createContext)({type:"default",setType:function(){}})),Yn=function(){var n=Object(c.useContext)(Mn).type,e=s.a.useRef(null),t=s.a.useRef(null),r=s.a.useRef({mouseX:0,mouseY:0,destinationX:0,destinationY:0,distanceX:0,distanceY:0,key:-1});return s.a.useEffect((function(){return document.addEventListener("mousemove",(function(n){var a=n.clientX,i=n.clientY;r.current.mouseX=a-e.current.clientWidth/2,r.current.mouseY=i-e.current.clientHeight/2,t.current.style.transform="translate3d(".concat(a-t.current.clientWidth/2,"px,").concat(i-t.current.clientHeight/2,"px, 0)")})),function(){}}),[]),s.a.useEffect((function(){!function n(){r.current.key=requestAnimationFrame(n);var t=r.current,a=t.mouseX,i=t.mouseY,o=t.destinationX,c=t.destinationY,s=t.distanceX,l=t.distanceY;o&&c?(r.current.distanceX=.1*(a-o),r.current.distanceY=.1*(i-c),Math.abs(r.current.distanceX)+Math.abs(r.current.distanceY)<.1?(r.current.destinationX=a,r.current.destinationY=i):(r.current.destinationX+=s,r.current.destinationY+=l)):(r.current.destinationX=a,r.current.destinationY=i),e.current.style.transform="translate3d(".concat(o,"px, ").concat(c,"px, 0)")}()}),[]),Object(k.jsxs)("div",{className:"cursor-wrapper ".concat(n),children:[Object(k.jsx)("div",{className:"main-cursor ",ref:t,children:Object(k.jsx)("div",{className:"main-cursor-background"})}),Object(k.jsx)("div",{className:"secondary-cursor",ref:e,children:Object(k.jsx)("div",{className:"cursor-background"})})]})},Rn=function(n){var e=n.children,t=Object(c.useState)("default"),r=Object(w.a)(t,2),a=r[0],i=r[1];return Object(k.jsx)(Mn.Provider,{value:{type:a,setType:i},children:e})},Dn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,370)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),r(n),a(n),i(n),o(n)}))};d.a.render(Object(k.jsxs)(Rn,{children:[Object(k.jsx)(Yn,{}),Object(k.jsxs)(s.a.StrictMode,{children:[Object(k.jsx)(j,{}),Object(k.jsx)(x,{}),Object(k.jsx)(Cn,{})]})]}),document.getElementById("root")),Dn()},75:function(n){n.exports=JSON.parse('{"background":{"color":{"value":"var(--dark-bg)"},"position":"fixed","repeat":"no-repeat","size":"20%"},"fullScreen":{"enable":true,"zIndex":-1},"interactivity":{"events":{"onClick":{"enable":true,"mode":"repulse"},"onHover":{"enable":true,"mode":"connect","parallax":{"enable":true,"force":30}}},"modes":{"bubble":{"distance":250,"duration":2,"opacity":0,"size":0},"grab":{"distance":400},"repulse":{"distance":400}}},"particles":{"color":{"value":"#ffffff"},"links":{"color":{"value":"#ffffff"},"distance":150,"opacity":0.4},"move":{"attract":{"rotate":{"x":600,"y":600}},"enable":true,"outModes":{"bottom":"out","left":"out","right":"out","top":"out"},"random":true,"speed":1},"number":{"density":{"enable":true},"value":160},"opacity":{"random":{"enable":true},"value":{"min":0,"max":1},"animation":{"enable":true,"speed":1,"minimumValue":0}},"size":{"random":{"enable":true},"value":{"min":1,"max":3},"animation":{"speed":4,"minimumValue":0.3}}}}')}},[[364,1,2]]]);
//# sourceMappingURL=main.251a85b7.chunk.js.map