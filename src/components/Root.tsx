import React, { FC } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import NavigationBar from './navbar/NavigationBar'

const Root:FC = (props) => {
    return (
        <Container fluid className="p-0">
            <NavigationBar />
            <Row className="m-0 p-0">
                <Col md={12} className="p-0">
                    {props.children}
                </Col>
            </Row>
        </Container>
        
    )
}

export default Root
