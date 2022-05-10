import React from "react";

// react-bootstrap components
import "./Information.css";
const Information = () => {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home</title>
        <link rel="stylesheet" href="home.css" />
        <div className="home">
          <h3 className="home-heading">Stock Prediction using Neural Networks</h3>
          <h6 className="sub-heading">LSTM and RNN to predict stock price</h6>
          <img src={require("../assets/img/stock-img.jpeg")} alt="home image" className="image" width={700} height={450} />
          <br /><br />
          <h4 className="topic-heading">LSTM</h4>
          <p className="para">It is special kind of recurrent neural network that is capable of learning long term dependencies in data. 
            This is achieved because the recurring module of the model has a combination of four layers interacting with each other.</p>
          <p className="para">Long short term memory (LSTM) is a model that increases the memory of recurrent neural networks. Recurrent neural networks hold short term memory in that they allow earlier determining information to be employed in the current neural networks. 
            For immediate tasks, the earlier data is used. We may not possess a list of all of the earlier information for the neural node. In RNNs, LSTMs are very widely used in Neural networks. 
            Their effectiveness should be implemented to multiple sequence modelling problems in many application domains like video, NLP, geospatial, and time-series.</p>
          <img src={require("../assets/img/LSTM.png")} alt="lstm model" className="image" width={680} height={450} />
          <br />
          <br />
          <img src={require("../assets/img/LSTM_home.png")} alt="LSTM-image" className="image" width={600} height={312} />
          <br /><br />
          <h4 className="topic-heading">LSTM Model implementation</h4>
          <img src={require("../assets/img/graph.png")} alt="lstm graph" className="image" width={650} height={350} />
          <br />
          <h4 className="topic-heading">Recurrent Neural Network (RNN)</h4>
          <p className="para">The neurons of RNN have a cell state/memory, and input is processed according to this internal state, 
            which is achieved with the help of loops with in the neural network.</p>
          <p className="para">A recurrent neural network (RNN) is a type of artificial neural network designed to recognize data’s sequential patterns to predict the following scenarios. 
            This architecture is especially powerful because of its nodes connections, allowing the exhibition of a temporal dynamic behavior. 
            Another important feature of this architecture is the use of feedback loops to process a sequence. Such a characteristic allows information to persist, often described as a memory.</p>
          <br /><br />
          <br /><br />
          <h4 className="topic-heading">Model implementation</h4>
          <img src={require("../assets/img/dumy-table.png")} alt="dumy-data" className="image" width={700} height={299} /><br />
          <p className="para">We are going to predict the Close price of the stock, and the following is the data behavior over the years.</p><br />
          <img src={require("../assets/img/dumy-graph.png")} alt="dumy-graph" className="image" width={700} height={465} />
          <h4 className="topic-heading">Conclusion</h4>
          <img src={require("../assets/img/result.png")} alt="dumy-data" className="image" width={500} height={299} /><br />
          <p className="para">This proposes RNN based on LSTM built to forecast future values of stocks.  the result of our model has shown some promising result. The testing result conform that our 
            model is capable of tracing the evolution of opening prices and closing prices both. For our future work we will try to find the best sets for bout data length and number of training epochs 
            that beater suit our assets and maximize our predictions accuracy.</p><br />
        </div>
      </div>
    );
  }


export default Information