import React, { FC } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import logo from '../../assets/logo-dark.png';
import SignInForm from './SignInForm';
import { Link } from 'react-router-dom';

const SignInPage: FC = () => {
    return (
        <Container fluid className="vh-100 bg-dark">
            <Row className="justify-content-md-center py-5">
                <Col lg={4} md={6}>
                    <Card className="py-3">
                        <Card.Body className="text-center">
                            <img src={logo} alt="ANLEO Logo" className="logo logo--md my-5" />
                            <h4 className="text-uppercase mb-5">Login to your account</h4>

                            <SignInForm id="login-form" onSubmit={values => console.log((values))} />

                            <h6 className="mt-5 mb-0">Don't you have an account?</h6>
                            <Link to="/new-account">Create an account</Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default SignInPage;
