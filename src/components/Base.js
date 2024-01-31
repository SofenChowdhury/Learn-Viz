import { Col, Container, Row } from "reactstrap";
import CustomNavbar from "./CustomNavbar";
import Footer from "./Footer";


const Base = ({ title = "LearnViz", children }) => {
  return (
    <div className="container-fluid p-0 m-0">
      <div className="fixed-top mb-5">
        <CustomNavbar title={title}/>
      </div>
      <div className="container-fluid mt-5 mb-5">
        <Container>
          <Row>
            <Col>
              {children}
            </Col>
          </Row>
        </Container>
      </div>
      <div className="fixed-bottom mt-5">
        <Row>
          <Col>
            <Footer/>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Base;