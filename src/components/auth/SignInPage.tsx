import React, { FC, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../assets/logo-dark.png';
import SignInForm from './SignInForm';
import { useActions } from '../../hooks/useActions';
import { signIn } from '../../actions/auth';
import { AuthCredentials } from '../../types/AuthCredentials';
import { useGlobalState } from '../../hooks/useGlobalState';
import { RequestStatus } from '../../constants/RequestStatus';

const SignInPage: FC = () => {
    const { signInStatus, authenticated } = useGlobalState(({ auth }) => auth);
    const login = useActions(signIn, []);
    const history = useHistory();
    const location = useLocation<{ from: { pathname: string } }>();

    useEffect(() => {
        const { from } = location.state || { from: { pathname: '/app' } };

        if (signInStatus === RequestStatus.SUCCESSFUL || authenticated) {
            history.replace(from);
        }
    }, [signInStatus, authenticated, history, location.state]);

    const onSignIn = (credentials: AuthCredentials) => {
        login(credentials);
    };

    return (
        <Container fluid className="vh-100 bg-dark">
            <Row className="justify-content-md-center py-5">
                <Col lg={4} md={6}>
                    <Card className="py-3">
                        <Card.Body className="text-center">
                            <img src={logo} alt="ANLEO Logo" className="logo logo--md my-5" />
                            <h4 className="text-uppercase mb-5">Login to your account</h4>

                            <SignInForm
                                id="login-form"
                                onSubmit={onSignIn}
                                submitting={signInStatus === RequestStatus.PENDING}
                            />

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
