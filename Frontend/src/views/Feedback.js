import React,{useEffect,useState} from "react"
import axios from "axios";
import {message} from "antd";
import {
    Alert,
    Badge,
    Button,
    Card,
    Modal,
    Navbar,
    Nav,
    Container,
    Row,
    Col,
    Form
  } from "react-bootstrap";
  

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(document.getElementById('feedback-title').value.length ===0 || document.getElementById('feedback-text').value.length ===0){
        alert("Please enter value to submit!");
        return;
    }else{
        console.log(document.getElementById('feedback-title').value , document.getElementById('feedback-text').value)
    }
    var postData = {
      name: e.target[0].value,
      desc: e.target[1].value,
    };
    
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "Authorization":localStorage.getItem("token")
        }
    };
    axios.post('http://localhost:3001/pages/feedback', postData, axiosConfig)
      .then((res) => {
        if(res.status == 200){
          message.success("Feedback recieved Successfully.");
          return;
        }
        message.error("Unable to send feedback.");
      })
      .catch((err) => {
        message.error("Unable to send feedback.");
        console.log("AXIOS ERROR: ", err);
      })
  }

function Feedback (){
 
    return (<div>
        <Container fluid>
        <Card>
          <Card.Header>
            <Card.Title as="h4">Feedback</Card.Title>
            <p className="card-category">Enter your valuable feedback</p>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="feedback-title">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="feedback-text">
                        <Form.Label>Feedback</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="outline-primary" type="submit" className="btn-fill pull-right btn btn-info">Submit</Button>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>)
}

export default Feedback