import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/logo-dark.png';
import { Link } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import { useGlobalState } from '../../hooks/useGlobalState';
import { NewAccount } from '../../types/NewAccount';
import { RequestStatus } from '../../constants/RequestStatus';
import { useActions } from '../../hooks/useActions';
import { signUp } from '../../actions/auth';

const SignUpPage = () => {
    const signUpStatus = useGlobalState(({ auth }) => auth.signUpStatus);
    const createAccount = useActions(signUp, []);
    const history = useHistory();

    useEffect(() => {
        if (signUpStatus === RequestStatus.SUCCESSFUL) {
            history.push('/login');
        }
    }, [signUpStatus, history]);

    const onSignUp = (account: NewAccount) => {
        createAccount(account);
    };

    return (
        <Container fluid className="min-svh-100 bg-dark">
            <Row className="justify-content-md-center py-5">
                <Col lg={4} md={6}>
                    <Card className="py-3">
                        <Card.Body className="text-center">
                            <img src={logo} alt="ANLEO Logo" className="logo logo--md my-5" />
                            <h4 className="text-uppercase mb-5">Create an account</h4>

                            <SignUpForm
                                id="new-account"
                                onSubmit={onSignUp}
                                submitting={signUpStatus === RequestStatus.PENDING}
                            />

                            <h6 className="mt-5 mb-0">Already have an account?</h6>
                            <Link to="/login">Login</Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUpPage;
