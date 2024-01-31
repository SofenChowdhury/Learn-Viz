import React from 'react'
import {
  Navbar,
  NavbarBrand,
  Row,
  Col,
  Container,
  NavbarText
} from 'reactstrap';
const Footer = () => {
  return (
    <Navbar
      // className="my-0"
      color="dark"
      dark
    >
      <NavbarBrand>
        Copyright © 2024 Learn-Viz. All rights reserved.
      </NavbarBrand>
      <NavbarBrand>
        Privacy Policy | Terms of Use
      </NavbarBrand>
      {/* <Container style={{color:"white"}}>
        <Row className="main-container">
          <Col className="class-start">
            Copyright © 2024 Learn-Viz. All rights reserved.
          </Col>
          <Col className="class-end">
            Privacy Policy | Terms of Use
          </Col>
        </Row>
      </Container>  */}
    </Navbar>
  )
}

export default Footer