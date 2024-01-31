import { FormFeedback, Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Base from "../components/Base";
import { useState } from "react";
import { toast } from "react-toastify";
import { login } from "../services/user-service";
import { doLogin } from "../auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [loginDetail, setLoginDetail] = useState({
        email:"",
        password:""
    });
    const [error, setError] = useState({
        errors:{},
        isError:false
    });

    const handleChange = (event, field) => {
        let actualValue = event.target.value;
        setLoginDetail({
            ...loginDetail,
            [field]:actualValue
        });
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(loginDetail);
        // Validation
        if(loginDetail.email.trim() === "" || loginDetail.password.trim() === ""){
            toast.error("Username or Password is required !!");
            setError({
                errors:{
                    email:"input email address",
                    password:"set your password"
                },
                isError:true
            });
            return;
        }

        const apiData = login(loginDetail);
        console.log("apiData");
        console.log(apiData);
        if(200 === apiData?.status){
            toast.success(`${apiData?.message} User is successfully login !!`);
            //save the data to local storage
            doLogin(apiData,()=>{
                console.log('stored login user data to local storage');
                //redirect to user dashboard page
                navigate("/user/dashboard");

            });
            console.log("decodeURI()");
            console.log(apiData.token);
            setError({...loginDetail,isError:false});
        }else{
            // handleErrors 
            setError({
                errors:apiData?.error,
                isError:true
            });

            toast.error(`${apiData?.message} User credentials wrong !!`);
        }

        // Submit data to server to genarate token
        // login(loginDetail).then((data)=>{
        //     console.log(data);
        //     //save the data to local storage
        //     doLogin(loginDetail,()=>{
        //         console.log('stored login user data');
        //     });
        // }).catch((error) => {
        //     if(error?.response?.status ===400 || error?.response?.status ===404){
        //         console.log(error?.response?.data?.message);
        //     }else{
        //         console.log(error);
        //     }
        // });
    }
    const handleReset = () => {
        setLoginDetail({
            email:"",
            password:""
        });
        setError({
            errors:{
                email:"",
                password:""
            },
            isError:false
        });
    }

    return (
        <Base>
            <Container>
                <Row className="mt-4 mb-4">
                    <Col sm={{size:6, offset:3}}>
                        <Card color="dark" outline>
                            <CardHeader>
                                <h3>Login Form !!</h3>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={handleFormSubmit}>
                                    {/* Email Field  */}
                                    <FormGroup>
                                        <Label for="email">Enter Email</Label>
                                        <Input 
                                            type="email" 
                                            id="email" 
                                            placeholder="Enter email address ex: test@gmail.com" 
                                            value={loginDetail?.email}
                                            onChange={(e)=>handleChange(e,"email")}
                                            invalid={error.errors?.email ? true : false}
                                            required
                                        />
                                        <FormFeedback>{error.errors?.email}</FormFeedback>
                                    </FormGroup>
                                    {/* Password Field  */}
                                    <FormGroup>
                                        <Label for="password">Enter Password</Label>
                                        <Input 
                                            type="password" 
                                            id="password" 
                                            placeholder="Enter password ex: 123" 
                                            value={loginDetail?.password}
                                            onChange={(e)=>handleChange(e,"password")}
                                            invalid={error.errors?.password ? true : false}
                                            required
                                        />
                                        <FormFeedback>{error.errors?.password}</FormFeedback>
                                    </FormGroup>
                                    <Container className="text-center">
                                        <Button onClick={handleReset} className="me-2" type="reset" color="secondary" outline>Reset</Button>
                                        <Button color="dark" outline>Login</Button>
                                    </Container>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Base>
    )
  }
  
  export default Login;