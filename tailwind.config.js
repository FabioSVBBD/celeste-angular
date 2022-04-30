module.exports = {
  content: ["./src/**/*.{html,ts}", "./projects/**/*.{html,ts}"],
  theme: {
    extend: {
      fontSize: {
        "2xs": ["1rem", "130%"],
        xs: ["1.2rem", "130%"],
        sm: ["1.3rem", "130%"],
        md: ["1.4rem", "150%"],
        lg: ["1.6rem", "150%"],
        xl: ["1.6rem", "130%"],
        "2xl": ["2.1rem", "130%"],
        "3xl": ["2.6rem", "120%"],
        "4xl": ["3.25rem", "110%"],
        "5xl": ["4.5rem", "110%"],
      },
      colors: {
        "primary-black": "#14141F",
        "primary-white": "#E6E8EC",
        "primary-gold": "#BF9B30",
        "primary-grey": "#B3B3B3",
        "secondary-black": "#303030",
      },
      fontFamily: {
        oleo: ["OleoScript"],
        raleway: ["Raleway"],
      },
    },
  },
};
