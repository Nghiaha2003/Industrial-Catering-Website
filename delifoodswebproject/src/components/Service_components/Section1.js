import React from 'react';
import './Section1.css';
import { Container, Row, Col } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Section1() {
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item href="/">DELIFOODS</Breadcrumb.Item>
                <Breadcrumb.Item active>Dịch vụ</Breadcrumb.Item>
            </Breadcrumb>
            Nothing here~~~
    </>
    );
}

export default Section1;