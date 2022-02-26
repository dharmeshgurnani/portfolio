
//TODO: use local svgs in place of cnd onces
var ParticlesImages = [
  {
    "src": "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
  },
  {
    "src": "https://cdn.worldvectorlogo.com/logos/git-icon.svg"
  },
  {
    "src": "https://cdn.worldvectorlogo.com/logos/sass-1.svg"
  },
  {
    "src": "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg"
  },
  {
    "src": "https://cdn.worldvectorlogo.com/logos/html-1.svg"
  },
  {
    "src": "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
  },
  {
    "src": "https://cdn.worldvectorlogo.com/logos/react-2.svg"
  },
  {
    "src": "https://cdn.worldvectorlogo.com/logos/jquery-2.svg"
  },
  {
    "src": "https://cdn.worldvectorlogo.com/logos/jenkins-1.svg"
  }
]

var particlesOptions = {
  "background": {
    "color": {
      "value": "#121212"
    },
    "position": "fixed",
    "repeat": "no-repeat",
    "size": "20%"
  },
  "fullScreen": {
    "enable": true,
    "zIndex": -1
  },
  "interactivity": {
    "events": {
      "onClick": {
        "enable": true,
        "mode": "repulse"
      },
      "onHover": {
        "enable": true,
        "mode": "connect",
        "parallax": {
          "enable": true,
          "force": 30
        }
      }
    },
    "modes": {
      "bubble": {
        "distance": 20,
        "duration": 2,
        "opacity": 0,
        "size": 0
      },
      "grab": {
        "distance": 400
      },
      "repulse": {
        "distance": 400
      }
    }
  },
  "particles": {
    "color": {
      "value": "#94d0cc"
    },
    "shape": {
      "type": "image",
      "options": {
        "images": ParticlesImages
      }
    },
    "links": {
      "color": {
        "value": "#94d0cc"
      },
      "distance": 1,
      "opacity": 0.4
    },
    "move": {
      "attract": {
        "rotate": {
          "x": 600,
          "y": 600
        }
      },
      "enable": true,
      "outModes": {
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      },
      "random": true,
      "speed": 0.5
    },
    "number": {
      "density": {
        "enable": true
      },
      "value": 20
    },
    "opacity": {
      "random": {
        "enable": true
      },
      "value": {
        "min": 0,
        "max": 1
      },
      "animation": {
        "enable": true,
        "speed": 1,
        "minimumValue": 0
      }
    },
    "size": {
      "random": {
        "enable": true
      },
      "value": {
        "min": 10,
        "max": 20
      },
      "animation": {
        "speed": 4,
        "minimumValue": 0.3
      }
    }
  }
};

function particlesProjects() {
  return (
    particlesOptions
  );
}
export default particlesProjects;