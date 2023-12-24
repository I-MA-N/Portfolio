const particleOption = 
{
  background: {
    color: {
      value: "#ffffff",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "grab",
        parallax: {
            enable: true,
            force: 20,
            smooth: 50,
        },
      },
    },
    modes: {
        grab: {
            distance: 400,
            links: {
                opacity: 0.5,
            },
        },
        push: {
            quantity: 2,
        },
    },
  },
  particles: {
    color: {
      value: "#000000",
    },
    links: {
      color: "#000000",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 3,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: true,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: false,
      },
      value: 40,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
}

export { particleOption };