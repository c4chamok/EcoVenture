/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#03130e',
        'background': '#f0fdf9',
        'primary': '#26dd9e',
        'secondary': '#84dbec',
        'accent': '#60b8e6',
       },
    }
  },
  plugins: [
    require('daisyui'),
  ],
}


// color Url : https://www.realtimecolors.com/?colors=03130e-f0fdf9-26dd9e-84dbec-60b8e6&fonts=Inter-Inter