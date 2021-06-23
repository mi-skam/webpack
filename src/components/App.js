import sword from "../images/sword.png";

const App = (el) => {
  let tempEl = document.createElement("img");
  tempEl.setAttribute("src", sword);
  el.append(tempEl);
};

export default App;
