(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{365:function(n,e,t){},366:function(n,e,t){"use strict";t.r(e);var r,a,i,o=t(3),c=t.n(o),s=t(33),l=t.n(s),d=t(8),m=t(9),b=Object(m.a)(r||(r=Object(d.a)(["\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    cursor:none;\n  }\n  :root{\n    --dark-bg: #050209;\n    --gray-1: #94d0cc;\n    --deep-dark: #11111A;\n    --gray-2: #363636;\n    --white : #D1D9D9;\n    --black: black;\n    --redMistory: #f29191;\n  }\n  html{\n    font-size: 10px;\n    font-family: 'Roboto Mono';\n    background-color: var(--dark-bg);\n  }\n  ul,li{\n    list-style: none;\n  }\n  a{\n    text-decoration: none;\n  }\n  img, svg{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  button{\n    outline: none\n  }\n  .container {\n    max-width: 1200px;\n    width: 90%;\n    margin: 0 auto;\n  }\n  .mainContent {\n    width: calc(100% - 15rem);\n    margin-left: 15rem;\n  }\n\n  @media only screen and (max-width: 768px) {\n    .mainContent {\n      width:100%;\n      margin-left: 0;\n    }\n  };\n//rubberband animation\n.animation_rubber {\n  animation: rubberBandEffect linear 1s;\n  animation-fill-mode: both;\n  animation-duration:1s;\n  -webkit-animation-duration:1s;\n  -webkit-animation-fill-mode: both;\n}\n\n@keyframes rubberBandEffect{\n  0%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}\n  30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}\n  40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}\n  50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}\n  65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}\n  75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}\n  100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}\n}\n\n//boune animation\n.animation_bounce-1 {\n  animation: bounce-1 linear 1s;\n  animation-fill-mode: both;\n  animation-duration:1s;\n  animation-iteration-count: infinite;\n  -webkit-animation-duration:1s;\n  -webkit-animation-fill-mode: both;\n}\n@keyframes bounce-1{\n  0%{-webkit-transform:translateY(0);transform:translateY(0);}\n  50%{-webkit-transform:translateY(-15px);\n  /* transform:translateY(-15px) */}\n  100%{-webkit-transform:translateY(0);transform:translateY(0);}\n}\n/* Smooth Scroll  */\n  [data-scrollbar] {\n    height: 100vh;\n    overflow: hidden;\n    background-color: var(--gray-1);\n    .scroll-content {\n      background-color: var(--dark-bg);\n    }\n    .scrollbar-track.scrollbar-track-y {\n      background: var(--deep-dark);\n      .scrollbar-thumb-y {\n        background: var(--gray-1);\n      }\n    }\n  }\n"]))),p=t.p+"static/media/RobotoMono-Regular.418a8f9f.ttf",h=t.p+"static/media/Montserrat-SemiBold.fa8441f3.ttf",u=t.p+"static/media/Montserrat-Bold.079ca05d.ttf",j=Object(m.a)(a||(a=Object(d.a)(["\n  @font-face {\n    font-family: 'RobotoMono Regular';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat SemiBold';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat Bold';\n    src: url(",");\n    font-style: normal;\n  }\n  html{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  *{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  h1,h2,h3,h4,h5,h6{\n    font-family: 'Montserrat SemiBold'\n  }\n"])),p,h,u),x=t(25),f=t(12),g=t(74),v=t.n(g),_=t(75),O=t(21),w=t(15),y=t(0),k=m.b.nav(i||(i=Object(d.a)(["\n  position: fixed;\n  display:flex;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 15rem;\n  height: 100%;\n  padding: 1rem 0;\n  border-right: solid;\n  background: var(--gray-2);\n  ul {\n    max-width: 1200px;\n    margin: 0 auto;\n    width: 90%;\n    text-align: center;\n    li {\n      display: inline-block;\n      border-radius: 8px;\n      transition: 0.3s ease background-color;\n      &:hover {\n        background-color: var(--deep-dark);\n      }\n    }\n    a {\n      display: inline-block;\n      font-family: 'RobotoMono Regular';\n      padding: 1rem 2rem;\n      font-size: 2rem;\n      color: var(--gray-1);\n      outline: none;\n    }\n    .active {\n      color: var(--white);\n    }\n  }\n  .navLogo {\n    display: flex;\n    align-content: center;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 12rem;\n    font-size: 7rem;\n    background: var(--deep-dark);\n    border: 4px solid;\n    margin-top: 20px;\n    margin-bottom: 40px;\n  }\n\n  .mobile-navLogo {\n    display: flex;\n    align-content: center;\n    justify-content: center;\n    align-items: center;\n    width: 4rem;\n    height: 4rem;\n    font-size: 28px;\n    position: absolute;\n    top: 1rem;\n    left: 1rem;\n    width: 4rem;\n    cursor: pointer;\n    display: none;\n    outline: none;\n    * {\n      pointer-events: none;\n    }\n  }\n  .mobile-menu-icon {\n    position: absolute;\n    right: 1rem;\n    top: 1rem;\n    width: 4rem;\n    cursor: pointer;\n    display: none;\n    outline: none;\n    * {\n      pointer-events: none;\n    }\n  }\n  .navItems .closeNavIcon {\n    display: none;\n  }\n  @media only screen and (max-width: 768px) {\n    height: 60px;\n    width: 100%;\n    padding: 0;\n    background: var(--deep-dark);\n    border-bottom: 1px solid;\n    .hide-item {\n      transform: translateY(calc(-100% - var(--top)));\n    }\n    .mobile-menu-icon {\n      display: block;\n    }\n    .navLogo{\n      display: none;\n    }\n    .mobile-navLogo{\n      display: block;\n    }\n    .navItems {\n      --top: 1rem;\n      transition: 0.3s ease transform;\n      background-color: var(--deep-dark);\n      border: 1px solid;\n      padding: 2rem;\n      width: 60%;\n      max-width: 300px;\n      border-radius: 12px;\n      position: absolute;\n      right: 1rem;\n      top: var(--top);\n      .closeNavIcon {\n        display: block;\n        width: 3rem;\n        margin: 0 0 0 auto;\n        cursor: pointer;\n        * {\n          pointer-events: none;\n        }\n      }\n      li {\n        display: block;\n        margin-bottom: 1rem;\n      }\n    }\n  }\n\n  /* glitch*/\n  .stack {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n\n  .stack span {\n    font-weight: bold;\n    grid-row-start: 1;\n    grid-column-start: 1;\n    font-size: inherit;\n    --stack-height: calc(100% / var(--stacks) - 1px);\n    --inverse-index: calc(calc(var(--stacks) - 1) - var(--index));\n    --clip-top: calc(var(--stack-height) * var(--index));\n    --clip-bottom: calc(var(--stack-height) * var(--inverse-index));\n    clip-path: inset(var(--clip-top) 0 var(--clip-bottom) 0);\n    animation: stack 340ms cubic-bezier(.46,.29,0,1.24) 1 backwards calc(var(--index) * 120ms), glitch 2s ease infinite 2s alternate-reverse;\n  }\n\n  .stack span:nth-child(odd) { --glitch-translate: 8px; }\n  .stack span:nth-child(even) { --glitch-translate: -8px; }\n\n  @keyframes stack {\n    0% {\n      opacity: 0;\n      transform: translateX(-50%);\n      text-shadow: -2px 3px 0 red, 2px -3px 0 blue;\n    };\n    60% {\n      opacity: 0.5;\n      transform: translateX(50%);\n    }\n    80% {\n      transform: none;\n      opacity: 1;\n      text-shadow: 2px -3px 0 red, -2px 3px 0 blue;\n    }\n    100% {\n      text-shadow: none;\n    }\n  }\n  @keyframes glitch {\n    0% {\n      text-shadow: -2px 3px 0 red, 2px -3px 0 blue;\n      transform: translate(var(--glitch-translate));\n    }\n    2% {\n      text-shadow: 2px -3px 0 red, -2px 3px 0 blue;\n    }\n    4%, 100% {  text-shadow: none; transform: none; }\n  }\n"])));function N(){var n=Object(o.useState)(!1),e=Object(O.a)(n,2),t=e[0],r=e[1];return Object(y.jsxs)(k,{children:[Object(y.jsx)("div",{className:"mobile-navLogo",children:Object(y.jsxs)("div",{className:"stack",style:{"--stacks":"3"},children:[Object(y.jsx)("span",{style:{"--index":0},children:"DG"}),Object(y.jsx)("span",{style:{"--index":1},children:"DG"}),Object(y.jsx)("span",{style:{"--index":2},children:"DG"})]})}),Object(y.jsx)("div",{className:"mobile-menu-icon",onClick:function(){return r(!t)},role:"button",onKeyDown:function(){return r(!t)},tabIndex:0,children:Object(y.jsx)(w.i,{})}),Object(y.jsxs)("ul",{className:t?"navItems":"navItems hide-item",children:[Object(y.jsx)("div",{className:"closeNavIcon",onClick:function(){return r(!t)},role:"button",onKeyDown:function(){return r(!t)},tabIndex:0,children:Object(y.jsx)(w.c,{})}),Object(y.jsx)("div",{className:"navLogo",children:Object(y.jsxs)("div",{className:"stack",style:{"--stacks":"3"},children:[Object(y.jsx)("span",{style:{"--index":0},children:"DG"}),Object(y.jsx)("span",{style:{"--index":1},children:"DG"}),Object(y.jsx)("span",{style:{"--index":2},children:"DG"})]})}),Object(y.jsx)("li",{children:Object(y.jsx)(x.c,{to:"/",exact:!0,onClick:function(){return r(!t)},role:"button",onKeyDown:function(){return r(!t)},tabIndex:0,children:"Home"})}),Object(y.jsx)("li",{children:Object(y.jsx)(x.c,{to:"/projects",onClick:function(){return r(!t)},role:"button",onKeyDown:function(){return r(!t)},tabIndex:0,children:"Projects"})}),Object(y.jsx)("li",{children:Object(y.jsx)(x.c,{to:"/contact",onClick:function(){return r(!t)},role:"button",onKeyDown:function(){return r(!t)},tabIndex:0,children:"Contact"})})]})]})}var I,z,S=t(77),C=(t(364),m.b.div(I||(I=Object(d.a)(["\n  margin-top: 2rem;\n  .button {\n    font-size: 2.2rem;\n    background-color: ",";\n    padding: 0.7em 2em;\n    border: 2px solid var(--gray-1);\n    border-radius: 8px;\n    display: inline-block;\n    color: ",";\n  }\n  @media only screen and (max-width: 768px) {\n    .button {\n      font-size: 1.8rem;\n    }\n  }\n\n  .aws-btn {\n    --button-default-height: 48px;\n    --button-default-font-size: 2.2rem;\n    --button-default-border-radius: 6px;\n    --button-horizontal-padding: 20px;\n    --button-raise-level: 5px;\n    --button-hover-pressure: 2;\n    --transform-speed: .185s;\n    --button-primary-color: var(--gray-1);\n    --button-primary-color-dark:var(--gray-2);\n    --button-primary-color-light: var(--gray-2);\n    --button-primary-color-hover: #95c9e4;\n    --button-primary-border: none;\n    --button-secondary-color: #fafafa;\n    --button-secondary-color-dark: #67cbc3;\n    --button-secondary-color-light: #349890;\n    --button-secondary-color-hover: #ecf9f8;\n    --button-secondary-border: 2px solid #b3e5e1;\n    --button-anchor-color: #95d44a;\n    --button-anchor-color-dark: #52a934;\n    --button-anchor-color-light: #3f8228;\n    --button-anchor-color-hover: #89cf35;\n    --button-anchor-border: 2px solid #5bbd3a;\n  }\n\n  .aws-btn__content > span{\n    color: inherit;\n  }\n  "])),(function(n){return n.outline?"transperant":"var(--gray-1)"}),(function(n){return n.outline?"var(--gary-1)":"black"})));function B(n){var e=n.btnText,t=void 0===e?"test":e,r=n.btnLink,a=void 0===r?"test":r,i=n.outline,o=void 0!==i&&i;return Object(y.jsx)(C,{outline:o,className:"button-wrapper",children:Object(y.jsx)(S.AwesomeButton,{type:"primary",href:"#"+a,children:t})})}var M,D=m.b.div(z||(z=Object(d.a)(["\n  max-width: 500px;\n  padding:10px;\n  margin: 0 auto;\n  font-size: 1.8rem;\n  line-height: 1.3em;\n  @media only screen and (max-width: 768px) {\n    font-size: 1.4rem;\n  }\n"])));function Y(n){var e=n.children;return Object(y.jsx)(D,{className:"para",children:Object(y.jsx)("p",{className:"anim-typewriter",children:e})})}var R=m.b.div(M||(M=Object(d.a)(["\n  text-align: center;\n  p {\n    font-family: 'RobotoMono Regular';\n    font-size: 2rem;\n  }\n  h2 {\n    font-family: 'Montserrat Bold';\n    font-size: 6rem;\n    margin-top: 0.5rem;\n    text-transform: uppercase;\n  }\n  @media only screen and (max-width: 768px) {\n    text-align: center;\n    p {\n      font-size: 1.2rem;\n    }\n    h2 {\n      font-size: 3.6rem;\n    }\n  }\n"])));function L(n){var e=n.subheading,t=void 0===e?"Need Subheading":e,r=n.heading,a=void 0===r?"need heading":r;return Object(y.jsxs)(R,{className:"section-title",children:[Object(y.jsx)("p",{children:t}),Object(y.jsx)("h2",{children:a})]})}t.p;var X,F,T=m.b.div(X||(X=Object(d.a)(["\n  padding: 10rem 0;\n  .container {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    text-align: left;\n  }\n  .aboutSection__left,\n  .aboutSection__right {\n    flex: 1;\n  }\n  .section-title {\n    text-align: left;\n  }\n  .para {\n    margin-top: 2rem;\n    margin-left: 0;\n  }\n  .aboutImg{\n    border-radius:15px;\n  }\n  .aboutSection__buttons {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 2rem;\n    margin-top: 2rem;\n  }\n  @media only screen and (max-width: 950px) {\n    .aboutSection__left {\n      flex: 4;\n    }\n    .aboutSection__right {\n      flex: 3;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      text-align: center;\n    }\n    .aboutSection__left,\n    .aboutSection__right {\n      width: 100%;\n    }\n    .aboutSection__right {\n      margin-top: 3rem;\n    }\n    .section-title {\n      text-align: center;\n    }\n    .para {\n      margin: 0 auto;\n      margin-top: 2rem;\n    }\n    .aboutSection__buttons {\n      flex-direction: column;\n      gap: 0rem;\n      .button-wrapper,\n      a {\n        width: 100%;\n        text-align: center;\n      }\n    }\n  }\n"])));function P(){return Object(y.jsx)(T,{children:Object(y.jsxs)("div",{className:"container",children:[Object(y.jsxs)("div",{className:"aboutSection__left",children:[Object(y.jsx)(L,{subheading:"Let me introduce myself",heading:"About Me"}),Object(y.jsx)(Y,{children:"I am a Salesforce Developer, website designer and developer from Ajmer, Rajasthan. I create professional websites. I love Programing and always try to learn new technologies."}),Object(y.jsxs)("div",{className:"aboutSection__buttons",children:[Object(y.jsx)(B,{btnText:"Works",btnLink:"/projects"}),Object(y.jsx)(B,{btnText:"Read More",btnLink:"/about",outline:!0})]})]}),Object(y.jsx)("div",{className:"aboutSection__right"})]})})}var A,E=m.b.div(F||(F=Object(d.a)(["\n  text-align: center;\n  border-radius: 12px;\n  padding: 3.5rem 10px;\n  background: var(--deep-dark);\n  \n  .servicesItem__icon {\n    svg {\n      width: 3rem;\n    }\n  }\n  .servicesItem__title {\n    font-size: 2.5rem;\n    font-family: 'Montserrat SemiBold';\n  }\n  .para {\n    margin-top: 2rem;\n  }\n"])));function G(n){var e=n.icon,t=void 0===e?Object(y.jsx)(w.f,{}):e,r=n.title,a=void 0===r?"Web Design":r,i=n.desc,o=void 0===i?"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok":i;return Object(y.jsxs)(E,{className:"servicesItem",children:[Object(y.jsx)("div",{className:"servicesItem__icon",children:t}),Object(y.jsx)("div",{className:"servicesItem__title",children:a}),Object(y.jsx)(Y,{children:o})]})}var W=m.b.div(A||(A=Object(d.a)(["\n  padding: 10rem 0;\n  .services__allItems {\n    display: flex;\n    gap: 10rem;\n    justify-content: space-between;\n    margin-top: 5rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .services__allItems {\n      flex-direction: column;\n      max-width: 350px;\n      margin: 0 auto;\n      margin-top: 5rem;\n      gap: 5rem;\n    }\n  }\n"])));function H(){return Object(y.jsx)(W,{children:Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)(L,{subheading:"What i will do for you",heading:"Services"}),Object(y.jsxs)("div",{className:"services__allItems",children:[Object(y.jsx)(G,{icon:Object(y.jsx)(w.f,{}),title:"web design",desc:"I do ui/ux design for the website that helps website to get a unique look."}),Object(y.jsx)(G,{icon:Object(y.jsx)(w.e,{}),title:"web devlopment",desc:"I also develop the websites. I create high performance website with blazing fast speed."}),Object(y.jsx)(G,{icon:Object(y.jsx)(w.d,{}),title:"Salesforce Commerce Cloud",desc:"I can develop E-Commerce websites On Salesforce Commerce Cloud platform"})]})]})})}var K,J;t(369),t(371),m.b.div(K||(K=Object(d.a)(["\n  overflow-x: hidden;\n  padding: 10rem 0;\n  text-align: center;\n  .testimonial__wrapper {\n    position: relative;\n    max-width: 700px;\n    margin: 0 auto;\n  }\n  .testimonial__info {\n    width: 100%;\n    height: fit-content;\n    padding: 3rem;\n    background-color: var(--deep-dark);\n    border-radius: 12px;\n    margin-top: 5rem;\n  }\n  .testimonial__desc {\n    .para {\n      text-align: center;\n    }\n  }\n  .testimonial__name {\n    margin-top: 4rem;\n    font-family: 'Montserrat Bold';\n    font-size: 2.2rem;\n  }\n  .testimonial__title {\n    font-size: 1.6rem;\n    margin-top: 0.3rem;\n  }\n  .arrows {\n    margin-top: 2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    svg {\n      width: 30px;\n      pointer-events: none;\n    }\n    .next,\n    .prev {\n      margin: 0 0.5rem;\n      width: fit-content;\n      background-color: var(--deep-dark);\n      padding: 0.5rem 2rem;\n      border-radius: 8px;\n      cursor: pointer;\n    }\n  }\n  .fade-enter {\n    opacity: 0;\n    transform: scale(0.96);\n    z-index: 1;\n  }\n  .fade-enter-active {\n    opacity: 1;\n    transform: scale(1);\n    transition: 250ms ease-in;\n    transition-property: transform, opacity;\n    z-index: 1;\n  }\n  .fade-exit {\n    transform: scale(1);\n    opacity: 1;\n  }\n  .fade-exit-active {\n    opacity: 0;\n    transform: scale(0.96);\n    transition: 200ms ease-in;\n    transition-property: transform, opacity;\n  }\n"])));var q=m.b.div(J||(J=Object(d.a)(["\n  padding: 5rem 0;\n  .contactBanner__wrapper {\n    background-color: var(--deep-dark);\n    border-radius: 12px;\n    padding: 5rem 0rem;\n    text-align: center;\n  }\n  .contactBanner__heading {\n    font-size: 4rem;\n    margin-bottom: 2rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .contactBanner__heading {\n      font-size: 2.8rem;\n    }\n  }\n"])));function Q(){return Object(y.jsx)(q,{children:Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)("div",{className:"contactBanner__wrapper",children:[Object(y.jsx)(Y,{children:"Have a project in mind"}),Object(y.jsx)("h3",{className:"contactBanner__heading",children:"Let me help you"}),Object(y.jsx)(B,{btnText:"Contact Now",btnLink:"/contact"})]})})})}t.p;var V,U=t.p+"static/media/social-media-arrow.f5e093ce.svg",Z=t.p+"static/media/scroll-down-arrow.b013ca45.svg",nn=m.b.div(V||(V=Object(d.a)(["\n  .hero {\n    height: 100vh;\n    min-height: 568px;\n    width: 100%;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n  }\n  .hero__heading {\n    font-size: 2rem;\n    position: relative;\n    span {\n      display: inline-block;\n      width: 100%;\n    }\n    .hero__name span{\n      width:auto;\n    }\n    .hero__name {\n      font-family: 'Montserrat SemiBold';\n      font-size: 7rem;\n      color: var(--white);\n    }\n\n    .hero__name .word{\n      font-family: 'Montserrat SemiBold';\n      font-size: 7rem;\n      color: var(--white);\n      display: inline-block;\n      width:auto;\n      transition: all .3s ease-out\n    }\n    .hero__name .word:hover{\n      color: var(--redMistory);\n    }\n    .hero__name .onespace{\n      width:20px;\n    }\n  }\n  .hero__img {\n    max-width: 900px;\n    width: 100%;\n    height: 600px;\n    margin: 0 auto;\n    border: 2px solid var(--gray-1);\n  }\n  .hero__info {\n    \n  }\n  .hero__social,\n  .hero__scrollDown {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    position: absolute;\n\n    bottom: 20px;\n    width: 50px;\n  }\n  .hero__social {\n    left: 50px;\n  }\n  .hero__scrollDown {\n    right: 50px;\n  }\n\n  .hero__social__indicator,\n  .hero__scrollDown {\n    width: 50px;\n    p {\n      font-size: 1.6rem;\n      transform: translateY(-70px) rotate(90deg);\n      letter-spacing: 0.7rem;\n      text-transform: uppercase;\n    }\n    img {\n      max-height: 45px;\n      width: 16px;\n      margin: 0 auto;\n      object-fit: contain;\n    }\n  }\n  .hero__scrollDown {\n    img {\n      max-height: 70px;\n    }\n  }\n\n  .hero__social__text {\n    ul {\n      li {\n        margin-bottom: 1rem;\n        a {\n          display: inline-block;\n          font-size: 1.6rem;\n          transform: rotate(-90deg);\n          letter-spacing: 5px;\n          margin-bottom: 2rem;\n        }\n      }\n    }\n  }\n  @media only screen and (min-width: 768px) {\n    .hero__name .mobile{\n      display: none;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .hero {\n    }\n    .hero__heading {\n      font-size: 1.4rem;\n      .hero__name {\n        font-size: 4.5rem;\n      }\n    }\n    .hero__name{\n      font-size: 4rem;\n    }\n    .hero__name .mobile{\n      font-family: 'Montserrat SemiBold';\n      color: var(--white);\n      display: inline-block;\n      width:auto;\n      transition: all .3s ease-out\n      display: inline-block;\n    }\n    .hero__name .word{\n      display: none !important;\n    }\n    .hero__img {\n      height: 300px;\n      border-radius: 15px;\n    }\n    .hero__info {\n      margin-top: 3rem;\n    }\n    .hero__social {\n      left: 0px;\n      bottom: -15%;\n      width: 20px;\n      .hero__social__indicator {\n        width: 20px;\n        p {\n          font-size: 1.2rem;\n        }\n        img {\n          max-height: 22px;\n        }\n      }\n      .hero__social__text {\n        ul {\n          li {\n            a {\n              font-size: 1.2rem;\n              margin-bottom: 1rem;\n            }\n          }\n        }\n      }\n    }\n    .hero__scrollDown {\n      right: 0;\n      width: 20px;\n      bottom: 50px;\n      gap: 1rem;\n      p {\n        font-size: 1.3rem;\n      }\n    }\n  }\n"])));function en(){return Object(y.jsx)(nn,{children:Object(y.jsx)("div",{className:"hero",children:Object(y.jsxs)("div",{className:"container",children:[Object(y.jsxs)("h1",{className:"hero__heading",children:[Object(y.jsx)("span",{children:"Hello, This is"}),Object(y.jsxs)("span",{className:"rubberWords hero__name",children:[Object(y.jsx)("span",{className:"mobile  animation_rubber",children:"Dharmesh Gurnani"}),Object(y.jsx)("span",{className:"word animation_rubber",children:"D"}),Object(y.jsx)("span",{className:"word animation_rubber",children:"h"}),Object(y.jsx)("span",{className:"word animation_rubber",children:"a"}),Object(y.jsx)("span",{className:"word animation_rubber",children:"r"}),Object(y.jsx)("span",{className:"word animation_rubber",children:"m"}),Object(y.jsx)("span",{className:"word animation_rubber",children:"e"}),Object(y.jsx)("span",{className:"word animation_rubber",children:"s"}),Object(y.jsx)("span",{className:"word animation_rubber",children:"h"}),Object(y.jsx)("span",{className:"onespace",children:" "}),Object(y.jsx)("span",{className:"word animation_rubber",children:"G"}),Object(y.jsx)("span",{className:"word animation_rubber",children:"u"}),Object(y.jsx)("span",{className:"word animation_rubber",children:"r"}),Object(y.jsx)("span",{className:"word animation_rubber",children:"n"}),Object(y.jsx)("span",{className:"word animation_rubber",children:"a"}),Object(y.jsx)("span",{className:"word animation_rubber",children:"n"}),Object(y.jsx)("span",{className:"word animation_rubber",children:"i"})]})]}),Object(y.jsxs)("div",{className:"hero__info",children:[Object(y.jsx)(Y,{children:"I'm a Salesforce Commerce Cloud developer & full stack web designer and developer. I'm passionate about programming and Networking."}),Object(y.jsx)(B,{btnText:"see my works",btnLink:"/projects"})]}),Object(y.jsxs)("div",{className:"hero__social",children:[Object(y.jsxs)("div",{className:"hero__social__indicator",children:[Object(y.jsx)("p",{children:"Follow"}),Object(y.jsx)("img",{src:U,alt:"icon"})]}),Object(y.jsx)("div",{className:"hero__social__text",children:Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:Object(y.jsx)("a",{href:"http://twitter.com/dharmeshgurnani",target:"_blank",rel:"noreferrer",children:"TW"})}),Object(y.jsx)("li",{children:Object(y.jsx)("a",{href:"http://instagram.com/dharmeshgurnani",target:"_blank",rel:"noreferrer",children:"IG"})}),Object(y.jsx)("li",{children:Object(y.jsx)("a",{href:"https://www.linkedin.com/in/dharmeshgurnani/",target:"_blank",rel:"noreferrer",children:"LI"})})]})})]}),Object(y.jsxs)("div",{className:"hero__scrollDown animation_bounce-1",children:[Object(y.jsx)("p",{children:"Scroll"}),Object(y.jsx)("img",{src:Z,alt:"ScrollDown Arrow"})]})]})})})}function tn(){return Object(y.jsxs)("div",{children:[Object(y.jsx)(en,{}),Object(y.jsx)(P,{}),Object(y.jsx)(H,{}),Object(y.jsx)(Q,{})]})}var rn,an,on=t(370),cn=t.p+"static/media/projectImg.9bd60e0b.png",sn=[{id:Object(on.a)(),name:"Movie Search Engine",desc:"An website made using html and css used for searching movies and it's information using Omdb API",img:cn}],ln=m.b.div(rn||(rn=Object(d.a)(["\n  .projectItem__img {\n    width: 100%;\n    height: 400px;\n    border-radius: 12px;\n    overflow: hidden;\n    display: inline-block;\n    border: 3px solid var(--gray-2);\n    img {\n      height: 100%;\n    }\n  }\n  .projectItem__info {\n    margin-top: 1rem;\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 12px;\n  }\n  .projectItem__title {\n    font-size: 2.2rem;\n  }\n  .projectItem__desc {\n    font-size: 1.6rem;\n    font-family: 'RobotoMono Regular';\n    margin-top: 1rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .projectItem__img {\n      height: 350px;\n    }\n  }\n"])));function dn(n){var e=n.img,t=void 0===e?cn:e,r=n.title,a=void 0===r?"Project Name":r,i=n.desc,o=void 0===i?"Lorem Ipsum is simply dummy text of the printing and typesetting industry.":i;return Object(y.jsxs)(ln,{children:[Object(y.jsx)(x.b,{to:"/projects",className:"projectItem__img",children:Object(y.jsx)("img",{src:t,alt:"project img"})}),Object(y.jsxs)("div",{className:"projectItem__info",children:[Object(y.jsx)(x.b,{to:"#",children:Object(y.jsx)("h3",{className:"projectItem__title",children:a})}),Object(y.jsx)("p",{className:"projectItem__desc",children:o})]})]})}var mn=m.b.div(an||(an=Object(d.a)(["\n  padding: 10rem 0;\n  .projects__allItems {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 5rem;\n    margin-top: 5rem;\n  }\n  .projects__searchBar {\n    position: relative;\n    width: 300px;\n    margin-top: 5rem;\n  }\n  .projects__searchBar input {\n    width: 100%;\n    font-size: 2rem;\n    padding: 0.8rem;\n    color: var(--black);\n    border-radius: 6px;\n    outline: none;\n    border: none;\n  }\n  .projects__searchBar .searchIcon {\n    position: absolute;\n    width: 2rem;\n\n    right: 1rem;\n  }\n  .projects__searchBar .searchIcon path {\n    color: var(--deep-dark);\n  }\n  @media only screen and (max-width: 768px) {\n    .projects__searchBar,\n    .projects__searchBar form,\n    .projects__searchBar input {\n      width: 100%;\n    }\n  }\n"])));function bn(){var n=Object(o.useState)(""),e=Object(O.a)(n,2),t=e[0],r=e[1],a=Object(o.useState)(sn),i=Object(O.a)(a,2),c=i[0],s=i[1];Object(o.useEffect)((function(){""!==t&&s((function(){return sn.filter((function(n){return n.name.toLowerCase().match(t.toLowerCase())}))}))}),[t]);return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(mn,{children:Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)(L,{heading:"Projects",subheading:"some of my recent works"}),Object(y.jsx)("div",{className:"projects__searchBar",children:Object(y.jsxs)("form",{children:[Object(y.jsx)("input",{type:"text",value:t,onChange:function(n){n.preventDefault(),r(n.target.value),!n.target.value.length>0&&s(sn)},placeholder:"Project Name"}),Object(y.jsx)(w.k,{className:"searchIcon"})]})}),Object(y.jsx)("div",{className:"projects__allItems",children:c.map((function(n){return Object(y.jsx)(dn,{title:n.name,desc:n.desc,img:n.img},n.id)}))})]})})})}var pn,hn,un=t(78),jn=t(79),xn=t(81),fn=t(80),gn=function(n){Object(xn.a)(t,n);var e=Object(fn.a)(t);function t(){return Object(un.a)(this,t),e.apply(this,arguments)}return Object(jn.a)(t,[{key:"render",value:function(){return Object(y.jsx)("div",{children:Object(y.jsx)("h1",{children:"Games"})})}}]),t}(o.PureComponent),vn=m.b.form(pn||(pn=Object(d.a)(["\n  width: 100%;\n  .form-group {\n    width: 100%;\n    margin-bottom: 2rem;\n  }\n  label {\n    font-size: 1.8rem;\n  }\n  input,\n  textarea {\n    width: 100%;\n    font-size: 2rem;\n    padding: 1.2rem;\n    color: var(--gray-1);\n    background-color: var(--deep-dark);\n    outline: none;\n    border: none;\n    border-radius: 8px;\n    margin-top: 1rem;\n  }\n  textarea {\n    min-height: 250px;\n    resize: vertical;\n  }\n  button[type='submit'] {\n    background-color: var(--gray-1);\n    color: var(--black);\n    font-size: 2rem;\n    display: inline-block;\n    outline: none;\n    border: none;\n    padding: 1rem 4rem;\n    border-radius: 8px;\n    cursor: pointer;\n  }\n"])));function _n(){var n=Object(o.useState)(""),e=Object(O.a)(n,2),t=e[0],r=e[1],a=Object(o.useState)(""),i=Object(O.a)(a,2),c=i[0],s=i[1],l=Object(o.useState)(""),d=Object(O.a)(l,2),m=d[0],b=d[1];return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(vn,{children:[Object(y.jsx)("div",{className:"form-group",children:Object(y.jsxs)("label",{htmlFor:"name",children:["Your Name",Object(y.jsx)("input",{type:"text",id:"name",name:"name",value:t,onChange:function(n){return r(n.target.value)}})]})}),Object(y.jsx)("div",{className:"form-group",children:Object(y.jsxs)("label",{htmlFor:"email",children:["Your Email",Object(y.jsx)("input",{type:"email",id:"email",name:"email",value:c,onChange:function(n){return s(n.target.value)}})]})}),Object(y.jsx)("div",{className:"form-group",children:Object(y.jsxs)("label",{htmlFor:"message",children:["Your message",Object(y.jsx)("textarea",{type:"text",id:"message",name:"message",value:m,onChange:function(n){return b(n.target.value)}})]})}),Object(y.jsx)("input",{type:"button"})]})})}var On,wn=m.b.div(hn||(hn=Object(d.a)(["\n  padding: 2rem;\n  background-color: var(--deep-dark);\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  border-radius: 8px;\n  margin-bottom: 2rem;\n  .icon {\n    color: var(--white);\n    background-color: var(--gray-2);\n    padding: 1.3rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n  }\n  svg {\n    width: 3.5rem;\n  }\n"])));function yn(n){var e=n.icon,t=void 0===e?Object(y.jsx)(w.j,{}):e,r=n.text,a=void 0===r?"I need text ":r;return Object(y.jsxs)(wn,{children:[Object(y.jsx)("div",{className:"icon",children:t}),Object(y.jsx)("div",{className:"info",children:Object(y.jsx)(Y,{children:a})})]})}var kn=m.b.div(On||(On=Object(d.a)(["\n  padding: 10rem 0;\n  .contactSection__wrapper {\n    display: flex;\n    gap: 5rem;\n    margin-top: 7rem;\n    justify-content: space-between;\n    position: relative;\n  }\n  .contactSection__wrapper::after {\n    position: absolute;\n    content: '';\n    width: 2px;\n    height: 50%;\n    background-color: var(--gray-1);\n    left: 50%;\n    top: 30%;\n    transform: translate(-50%, -50%);\n  }\n  .left {\n    width: 100%;\n    max-width: 500px;\n  }\n  .right {\n    max-width: 500px;\n    width: 100%;\n    border-radius: 12px;\n    /* padding-left: 3rem; */\n  }\n  @media only screen and (max-width: 768px) {\n    .contactSection__wrapper {\n      flex-direction: column;\n    }\n    .contactSection__wrapper::after {\n      display: none;\n    }\n    .left,\n    .right {\n      max-width: 100%;\n    }\n    .right {\n      padding: 4rem 2rem 2rem 2rem;\n    }\n  }\n"])));function Nn(){return Object(y.jsx)(kn,{children:Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)(L,{heading:"contact",subheading:"get in touch"}),Object(y.jsxs)("div",{className:"contactSection__wrapper",children:[Object(y.jsxs)("div",{className:"left",children:[Object(y.jsx)(yn,{icon:Object(y.jsx)(w.h,{}),text:"+91 7023355478"}),Object(y.jsx)(yn,{icon:Object(y.jsx)(w.g,{}),text:"dharmeshgurnani2000@gmail.com"}),Object(y.jsx)(yn,{text:"Ajmer, Rajasthan"})]}),Object(y.jsx)("div",{className:"right",children:Object(y.jsx)(_n,{})})]})]})})}var In,zn=t.p+"static/media/map.7d98ba39.png",Sn=m.b.div(In||(In=Object(d.a)(["\n  background: url(",") no-repeat;\n  background-position: center;\n  background-size: cover;\n  min-height: 400px;\n  .container {\n    position: relative;\n    min-height: 400px;\n  }\n  .map__card {\n    position: absolute;\n    right: 10%;\n    bottom: 10%;\n    padding: 2rem;\n    background: var(--deep-dark);\n    width: 100%;\n    max-width: 300px;\n    border-radius: 12px;\n  }\n  .map__card__heading {\n    font-size: 3rem;\n    margin-bottom: 1rem;\n  }\n  .map__card__link {\n    display: inline-block;\n    font-size: 1.6rem;\n    margin-top: 3rem;\n    text-decoration: underline;\n  }\n  @media only screen and (max-width: 768px) {\n    background-position: 80% center;\n  }\n  @media only screen and (max-width: 400px) {\n    .map__card {\n      max-width: none;\n      right: auto;\n    }\n  }\n"])),zn);function Cn(){return Object(y.jsx)(Sn,{children:Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)("div",{className:"map__card",children:[Object(y.jsx)("h3",{className:"map__card__heading",children:"Here is me"}),Object(y.jsx)(Y,{children:"Ajmer, Rajasthan"}),Object(y.jsx)("a",{className:"map__card__link",href:"https://www.google.com/maps/place/Ajmer,+Rajasthan/@26.4532261,74.5656735,12z/data=!3m1!4b1!4m5!3m4!1s0x396be6d8fcb7cd01:0xcbaf8f12eb8100ee!8m2!3d26.4498954!4d74.6399163",target:"_blank",rel:"noreferrer",children:"Open in google map"})]})})})}function Bn(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(Nn,{}),Object(y.jsx)(Cn,{})]})}var Mn=function(){return window.enableParticles=!0,setTimeout((function(){var n=$("[class^='rubberWords']");n.find(".word").removeClass("animated bounceIn"),n.find(".word").css("opacity",1),n.find(".word").mouseenter((function(){var n=jQuery(this);jQuery(this).addClass("animation_rubber"),setTimeout((function(){n.removeClass("animation_rubber")}),1e3)}))}),3e3),Object(y.jsxs)(y.Fragment,{children:[window.enableParticles&&Object(y.jsx)(v.a,{options:_}),Object(y.jsxs)(x.a,{children:[Object(y.jsx)(N,{}),Object(y.jsx)("div",{className:"mainContent",children:Object(y.jsxs)(f.c,{children:[Object(y.jsx)(f.a,{path:"/projects",children:Object(y.jsx)(bn,{})}),Object(y.jsx)(f.a,{path:"/games",children:Object(y.jsx)(gn,{})}),Object(y.jsx)(f.a,{path:"/contact",children:Object(y.jsx)(Bn,{})}),Object(y.jsx)(f.a,{path:"/",children:Object(y.jsx)(tn,{})})]})})]})]})},Dn=(t(365),Object(o.createContext)({type:"default",setType:function(){}})),Yn=function(){var n=Object(o.useContext)(Dn).type,e=c.a.useRef(null),t=c.a.useRef(null),r=c.a.useRef({mouseX:0,mouseY:0,destinationX:0,destinationY:0,distanceX:0,distanceY:0,key:-1});return c.a.useEffect((function(){return document.addEventListener("mousemove",(function(n){var a=n.clientX,i=n.clientY;r.current.mouseX=a-e.current.clientWidth/2,r.current.mouseY=i-e.current.clientHeight/2,t.current.style.transform="translate3d(".concat(a-t.current.clientWidth/2,"px,").concat(i-t.current.clientHeight/2,"px, 0)")})),function(){}}),[]),c.a.useEffect((function(){!function n(){r.current.key=requestAnimationFrame(n);var t=r.current,a=t.mouseX,i=t.mouseY,o=t.destinationX,c=t.destinationY,s=t.distanceX,l=t.distanceY;o&&c?(r.current.distanceX=.1*(a-o),r.current.distanceY=.1*(i-c),Math.abs(r.current.distanceX)+Math.abs(r.current.distanceY)<.1?(r.current.destinationX=a,r.current.destinationY=i):(r.current.destinationX+=s,r.current.destinationY+=l)):(r.current.destinationX=a,r.current.destinationY=i),e.current.style.transform="translate3d(".concat(o,"px, ").concat(c,"px, 0)")}()}),[]),Object(y.jsxs)("div",{className:"cursor-wrapper ".concat(n),children:[Object(y.jsx)("div",{className:"main-cursor ",ref:t,children:Object(y.jsx)("div",{className:"main-cursor-background"})}),Object(y.jsx)("div",{className:"secondary-cursor",ref:e,children:Object(y.jsx)("div",{className:"cursor-background"})})]})},Rn=function(n){var e=n.children,t=Object(o.useState)("default"),r=Object(O.a)(t,2),a=r[0],i=r[1];return Object(y.jsx)(Dn.Provider,{value:{type:a,setType:i},children:e})},Ln=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,372)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),r(n),a(n),i(n),o(n)}))};l.a.render(Object(y.jsxs)(Rn,{children:[Object(y.jsx)(Yn,{}),Object(y.jsxs)(c.a.StrictMode,{children:[Object(y.jsx)(b,{}),Object(y.jsx)(j,{}),Object(y.jsx)(Mn,{})]})]}),document.getElementById("root")),Ln()},75:function(n){n.exports=JSON.parse('{"background":{"color":{"value":"var(--dark-bg)"},"position":"fixed","repeat":"no-repeat","size":"20%"},"fullScreen":{"enable":true,"zIndex":-1},"interactivity":{"events":{"onClick":{"enable":true,"mode":"repulse"},"onHover":{"enable":true,"mode":"connect","parallax":{"enable":true,"force":30}}},"modes":{"bubble":{"distance":250,"duration":2,"opacity":0,"size":0},"grab":{"distance":400},"repulse":{"distance":400}}},"particles":{"color":{"value":"#ffffff"},"links":{"color":{"value":"#ffffff"},"distance":150,"opacity":0.4},"move":{"attract":{"rotate":{"x":600,"y":600}},"enable":true,"outModes":{"bottom":"out","left":"out","right":"out","top":"out"},"random":true,"speed":0.5},"number":{"density":{"enable":true},"value":20},"opacity":{"random":{"enable":true},"value":{"min":0,"max":1},"animation":{"enable":true,"speed":1,"minimumValue":0}},"size":{"random":{"enable":true},"value":{"min":1,"max":5},"animation":{"speed":4,"minimumValue":0.3}}}}')}},[[366,1,2]]]);
//# sourceMappingURL=main.e7ecba69.chunk.js.map