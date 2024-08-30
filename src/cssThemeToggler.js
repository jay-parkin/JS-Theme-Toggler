console.log("CSS Theme Toggler loaded and running!");

let themes = [
  {
    name: "dark",
    properties: {
      backgroundColour: "darkgrey",
      fontColour: "white",
      "theme-100": "#4641d1",
    },
  },
  {
    name: "light",
    properties: {
      backgroundColour: "#87E0E0",
      fontColour: "black",
      "theme-100": "#87E0E0",
    },
  },
];

// Read theme name stored in local storage
// update CSS variables based on that name
function getChosenTheme() {}

// Set theme to local storage
// update CSS variables based on that name
function setChosenTheme() {}

// Loop through properties key in chose theme object
// and apply those properties to CSS
function updateCssVariables() {}

let rootElement = document.querySelector(":root");

function getVariablesFromCSS() {
  console.log(rootElement);

  //   console.log(
  //     document.documentElement.style.getPropertyValue("--backgroundColour")
  //   );

  let rootStyles = getComputedStyle(rootElement);
  console.log(rootStyles.getPropertyValue("--backgroundColour"));
}

getVariablesFromCSS();
