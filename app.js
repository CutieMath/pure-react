const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.occupation),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { className: "title" }, "React is rendered"),
    React.createElement(
      Person,
      { name: "Cutie", occupation: "Software Engineer" },
      null
    ), // null represents children here
    React.createElement(
      Person,
      { name: "Math", occupation: "Software Engineer" },
      null
    ),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
