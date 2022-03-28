import React from "react";
import PropTypes from "prop-types";
import { Col, FormGroup, FormText, Input, Label, Row } from "reactstrap";
import Forms from "./components/Forms";

FormInfor.propTypes = {
  
};

function FormInfor(props) {
  return (
    <div>
        <Row className="m-30">
            <Col>
                <Forms/>
            </Col>
            <Col>
                
            </Col>
        </Row>
      
    </div>
  );
}

export default FormInfor;
