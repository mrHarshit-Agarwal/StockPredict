import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function TableList() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Sample time series of Amazon</Card.Title>
                <p className="card-category">
                  Data from 2006 to 2017
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                <thead>
                    <tr>
                      <th className="border-0">Date</th>
                      <th className="border-0">Open</th>
                      <th className="border-0">High</th>
                      <th className="border-0">Low</th>
                      <th className="border-0">Close</th>
                      <th className="border-0">Volume</th>
                      <th className="border-0">Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2006-01-03</td>
                      <td>$47.47</td>
                      <td>$47.85</td>
                      <td>$46.25</td>
                      <td>$47.58</td>
                      <td>7582127</td>
                      <td>Amazon</td>

                    </tr>

                    <tr>
                      <td>2006-01-04</td>
                      <td>$47.48</td>
                      <td>$47.73</td>
                      <td>$46.69</td>
                      <td>$47.25</td>
                      <td>7440914</td>
                      <td>Amazon</td>

                    </tr>

                    <tr>
                      <td>2006-01-05</td>
                      <td>$47.16</td>
                      <td>$48.2</td>
                      <td>$47.11</td>
                      <td>$47.65</td>
                      <td>5417258</td>
                      <td>Amazon</td>

                    </tr>

                    <tr>
                      <td>2006-01-06</td>
                      <td>$47.97</td>
                      <td>$48.58</td>
                      <td>$47.32</td>
                      <td>$47.87</td>
                      <td>61542857</td>
                      <td>Amazon</td>

                    </tr>

                    <tr>
                      <td>2006-01-09</td>
                      <td>$46.55</td>
                      <td>$47.10</td>
                      <td>$46.40</td>
                      <td>$47.08</td>
                      <td>8945056</td>
                      <td>Amazon</td>

                    </tr>

                    <tr>
                      <td>2006-01-10</td>
                      <td>$46.41</td>
                      <td>$46.75</td>
                      <td>$45.36</td>
                      <td>$45.65</td>
                      <td>9686957</td>
                      <td>Amazon</td>

                    </tr>

                    <tr>
                      <td>2006-01-11</td>
                      <td>$45.65</td>
                      <td>$45.70</td>
                      <td>$44.26</td>
                      <td>$44.93</td>
                      <td>8497383</td>
                      <td>Amazon</td>

                    </tr>

                    <tr>
                      <td>2006-01-12</td>
                      <td>$44.79</td>
                      <td>$45.09</td>
                      <td>$44.09</td>
                      <td>$44.36</td>
                      <td>5818301</td>
                      <td>Amazon</td>

                    </tr>

                    <tr>
                      <td>2006-01-13</td>
                      <td>$44.48</td>
                      <td>$44.85</td>
                      <td>$44.00</td>
                      <td>$44.40</td>
                      <td>4432237</td>
                      <td>Amazon</td>

                    </tr>

                    <tr>
                      <td>2006-01-17</td>
                      <td>$43.95</td>
                      <td>$44.32</td>
                      <td>$43.66</td>
                      <td>$44.00</td>
                      <td>5635225</td>
                      <td>Amazon</td>

                    </tr>

                    <tr>
                      <td>2006-01-18</td>
                      <td>$43.19</td>
                      <td>$44.59</td>
                      <td>$43.10</td>
                      <td>$44.32</td>
                      <td>8744464</td>
                      <td>Amazon</td>

                    </tr>

                    <tr>
                      <td>2006-01-19</td>
                      <td>$44.50</td>
                      <td>$45.24</td>
                      <td>$44.30</td>
                      <td>$44.45</td>
                      <td>5156990</td>
                      <td>Amazon</td>

                    </tr>


                    <tr>
                      <td>2006-01-20</td>
                      <td>$44.23</td>
                      <td>$44.36</td>
                      <td>$43.20</td>
                      <td>$43.92</td>
                      <td>834432</td>
                      <td>Amazon</td>

                    </tr>

                    <tr>
                      <td>2006-01-23</td>
                      <td>$44.18</td>
                      <td>$44.75</td>
                      <td>$43.50</td>
                      <td>$43.73</td>
                      <td>5752811</td>
                      <td>Amazon</td>

                    </tr>


                    <tr>
                      <td>2006-01-24</td>
                      <td>$43.66</td>
                      <td>$44.43</td>
                      <td>$43.42</td>
                      <td>$44.02</td>
                      <td>4342401</td>
                      <td>Amazon</td>

                    </tr>

                    <tr>
                      <td>2006-01-25</td>
                      <td>$44.05</td>
                      <td>$45.47</td>
                      <td>$43.34</td>
                      <td>$43.36</td>
                      <td>4297595</td>
                      <td>Amazon</td>

                    </tr>

                    <tr>
                      <td>2006-01-26</td>
                      <td>$43.95</td>
                      <td>$44.78</td>
                      <td>$43.79</td>
                      <td>$44.68</td>
                      <td>4890969</td>
                      <td>Amazon</td>   

                    </tr>

                    <tr>
                      <td>2006-01-27</td>
                      <td>$44.55</td>
                      <td>$45.22</td>  
                      <td>$44.53</td>
                      <td>$45.22</td>
                      <td>4174089</td>
                      <td>Amazon</td>

                    </tr>

                    <tr>
                      <td>2006-01-30</td>
                      <td>$45.41</td>
                      <td>$45.97</td>
                      <td>$44.74</td> 
                      <td>$44.96</td>
                      <td>4099826</td>
                      <td>Amazon</td>

                    </tr>

                    <tr>
                      <td>2006-01-31</td>
                      <td>$44.76</td>
                      <td>$45.21</td>  
                      <td>$44.25</td> 
                      <td>$44.82</td>
                      <td>4056024</td>
                      <td>Amazon</td>

                    </tr>




                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </>
  );
}

export default TableList;
