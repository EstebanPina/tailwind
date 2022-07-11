module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: theme => ({
            'wave-patern': "url('../img/wave-white.png')",
            'wave-patter-dots': "url('../img/pattern-white-dots.png')",
            'pattern-characters-red': "url('../img/pattern-characters-red.png')",
            'characters-mario': "url('../img/character-l.png')",
            'wave-pink': "url('../img/wave-pink.png')",
            'yellow-dots': "url('../img/pattern-yellow-dots.png')",
        }),
      },
    },
    plugins: [],
  }