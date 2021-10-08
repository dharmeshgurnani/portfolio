import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    cursor:none;
  }
  :root{
    --dark-bg: #050209;
    --gray-1: #94d0cc;
    --deep-dark: #11111A;
    --gray-2: #363636;
    --white : #D1D9D9;
    --black: black;
    --hoverAcent: #FFB902;
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--dark-bg);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
  .mainContent {
    width: calc(100% - 15rem);
    margin-left: 15rem;
  }

  @media only screen and (max-width: 768px) {
    .mainContent {
      width:100%;
      margin-left: 0;
    }
  };
//rubberband animation
.animation_rubber {
  animation: rubberBandEffect linear 1s;
  animation-fill-mode: both;
  animation-duration:1s;
  -webkit-animation-duration:1s;
  -webkit-animation-fill-mode: both;
}

@keyframes rubberBandEffect{
  0%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}
  30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}
  40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}
  50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}
  65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}
  75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}
  100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}
}

//boune animation
.animation_bounce-1 {
  animation: bounce-1 linear 1s;
  animation-fill-mode: both;
  animation-duration:1s;
  animation-iteration-count: infinite;
  -webkit-animation-duration:1s;
  -webkit-animation-fill-mode: both;
}
@keyframes bounce-1{
  0%{-webkit-transform:translateY(0);transform:translateY(0);}
  50%{-webkit-transform:translateY(-15px);
  /* transform:translateY(-15px) */}
  100%{-webkit-transform:translateY(0);transform:translateY(0);}
}
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }
`;
export default GlobalStyles;
