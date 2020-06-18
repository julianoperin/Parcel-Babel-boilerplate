//! SCSS
import "./scss/app.scss";

//! JS
import Header from "./components/Header";

const app = () => {
  document.getElementById("header").innerHTML = Header();
};

// init app
app();
