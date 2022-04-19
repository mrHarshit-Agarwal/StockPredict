import React from "react"
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
        alert("Please enter value to submit!")
    }else{
        console.log(document.getElementById('feedback-title').value , document.getElementById('feedback-text').value)
    }
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
                        <Form.Label>Feedback Title</Form.Label>
                        <Form.Control type="text" placeholder="Feedback Title" />
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