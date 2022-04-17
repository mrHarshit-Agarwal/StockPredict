import React, { Component } from "react";
import { render } from "react-dom";
import FeedBack from "./components/Feedback";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div className="App">
        <FeedBack
          style={{ zIndex: "1", position: "fixed", left: "2px!" }}
          position="left"
          numberOfStars={5}
          headerText="Feedback"
          bodyText="Give your Feedback"
          buttonText="Feedback"
          handleClose={() => console.log("handleclose")}
          handleSubmit={data =>
            fetch("https://formspree.io/xxxxxxx", {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              method: "POST", // or 'PUT'
              body: JSON.stringify(data)
            })
              .then(response => {
                if (!response.ok) {
                  return Promise.reject(
                    "Our servers are having issues! We couldn't send your feedback!"
                  );
                }
                response.json();
              })
              .then(() => {
                alert("Success!");
              })
              .catch(error => {
                alert(
                  "Our servers are having issues! We couldn't send your feedback!",
                  error
                );
              })
          }
          handleButtonClick={() => console.log("handleButtonClick")}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
