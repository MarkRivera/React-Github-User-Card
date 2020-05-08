import React from 'react';
import { Row, Col } from 'reactstrap';
import './UserHeader.css';

function UserHeader ({userName}) {

    return(
        <Row>
            <Col>
              <h1 className="display-4 text-center text-change">
                Hello, {userName} 
              </h1>
            </Col>
        </Row>
    );
}

export default UserHeader;