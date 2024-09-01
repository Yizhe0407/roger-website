module.exports = {
  plugins: [
    require('daisyui'),
  ],
  theme: {
    extend: {
      screens: {
        'custom': '730px', // 自定义断点
      },
      colors: {
        'regal-blue': '#0f172a',
      },
    }
  }
}