/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      "greenblack": "#383a39",
      "blackbean": "#413332",
      "goldenoak": "#95724a",
      "shiitake": "#c8bbab",
      "morrisgrey": "#ada193",
      "rojomarron": "#4b3029",
      "tungsten": "#584e42",
      "purplebrown": "#453736",
      "redwine": "#421220",
      "mutedpink": "#b89c8c",
      "dullorange": "#a8835d",
      "darkbrown": "#271d20",
      "nearblack": "#120f12",
      "navy": "#202430",
      "dustyrose": "#8f5e5f",
      "forestfloor": "#2b271c",
      "greyish": "#b6aca8",
      "darkpurple": "#321f19",
      "ohgolden": "#81613b",
      "beige": "#b69b7d",
      "greenydark": "#43473e",
      "merlot": "#5c343b",
      "darkeggplant": "#22151f",
      "softgold": "#bdac86",
      "greengrey": "#3c3838",
      "chocolate": "#422d20",
      "rust": "#5a3925",
      "oldboots": "#472f26",
      "zinfandel": "#5a2827",
      "oldblack": "#3d3232",
      "rich": "#341f22",
      "latte": "#8d7458"
    },
    fontFamily: {
      karla: ["Karla", "sans-serif"],
      lora: ["Lora", "serif"]
    },
    extend: {},
  },
  plugins: [],
}

