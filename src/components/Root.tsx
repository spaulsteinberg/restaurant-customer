import React, { FC } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavigationBar from './navbar/NavigationBar'

const Root:FC = (props) => {
    return (
        <Container fluid className="p-0">
            <NavigationBar />
            <Row>
                <Col md={12}>
                    {props.children}
                </Col>
            </Row>
        </Container>
        
    )
}

export default Root
