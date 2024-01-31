import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";
import Base from "../components/Base";
import { useState } from "react";
import {signUp} from "../services/user-service";
import { toast } from 'react-toastify';

const Signup = () => {

    const [data, setData] = useState({
        name:"",
        email:"",
        password:"",
        about:""
    });
    const [error, setError] = useState({
        errors:{},
        isError:false
    });

    // useEffect(()=>{
    //     console.log(data);
    // },[data]);

    // handleChange
    const handleChange = (event, property) => {
        // dynamic data set 
        setData({...data,[property]:event.target.value});
    }

    // resetForm
    const resetData=()=>{
        setData({
            name:"",
            email:"",
            password:"",
            about:""
        });
    }

    // submitForm
    const submitForm=(event)=>{
        //using preventDefault for handling form defalut behaviour
        event.preventDefault();
        // data validate from client side
        // if (error.isError) {
        //     toast.error("Form data is invalid !!");
        //     setError({...data,isError:false});
        //     return;
        // }

        // console.log("data");
        const apiData = signUp(data);
        console.log("apiData");
        console.log(apiData);
        if(200 === apiData?.status){
            toast.success(`${apiData?.message} User is registered successfully !!`);
            setData({
                name:"",
                email:"",
                password:"",
                about:""
            });
            setError({...data,isError:false});
        }else{
            // handleErrors 
            setError({
                errors:apiData?.error,
                isError:true
            });
            toast.error(`${apiData?.message} User is not registered !!`);
        }
        // call server api for sending data 
        // signUp(data).then((res)=>{
        //     console.log(res);
        //     console.log("success");
        //     toast.success("User is registered successfully !!");
        //     setData({
        //         name:"",
        //         email:"",
        //         password:"",
        //         about:""
        //     });
        // }).catch((error)=>{
        //     console.log(error);
        //     console.log("error");
        //     toast.error("User is not registered !!");
        // });
    }
    console.log("error");
    console.log(error.errors?.email);

    return (
        <Base>
            <Container>
                <Row className="mt-4 mb-4">
                    <Col sm={{size:6, offset:3}}>
                        {/* Creating Card  */}
                        <Card color="dark" outline>
                            <CardHeader>
                                <h3>Fill information to Register !!</h3>
                            </CardHeader>
                            <Card color="dark" inverse>
                                <CardHeader>
                                    {JSON.stringify(data)}
                                </CardHeader>
                            </Card>
                            
                            <CardBody>
                                {/* Creating Form  */}
                                <Form onSubmit={submitForm}>
                                    {/* Name Field  */}
                                    <FormGroup>
                                        <Label for="name">Enter Name</Label>
                                        <Input
                                            type="text"
                                            placeholder="Enter here"
                                            id="name"
                                            onChange={(e)=>handleChange(e,"name")}
                                            value={data?.name}
                                            invalid={error.errors?.name ? true : false}
                                        />
                                        <FormFeedback>{error.errors?.name}</FormFeedback>
                                    </FormGroup>
                                    {/* Email Field  */}
                                    <FormGroup>
                                        <Label for="email">Enter Email</Label>
                                        <Input
                                            type="email"
                                            placeholder="Enter here"
                                            id="email"
                                            onChange={(e)=>handleChange(e,"email")}
                                            value={data?.email}
                                            invalid={error.errors?.email ? true : false}
                                        />
                                        <FormFeedback>{error.errors?.email}</FormFeedback>
                                    </FormGroup>
                                    {/* Password Field  */}
                                    <FormGroup>
                                        <Label for="password">Enter Password</Label>
                                        <Input
                                            type="password"
                                            placeholder="Enter here"
                                            id="password"
                                            // invalid="true"
                                            onChange={(e)=>handleChange(e,"password")}
                                            value={data?.password}
                                            invalid={error.errors?.password ? true : false}
                                        />
                                        <FormFeedback>{error.errors?.password}</FormFeedback>
                                    </FormGroup>
                                    {/* About Field  */}
                                    <FormGroup>
                                        <Label for="about">Enter About</Label>
                                        <Input
                                            type="textarea"
                                            placeholder="Enter here"
                                            id="about"
                                            // invalid="true"
                                            style={{height:"250px"}}
                                            onChange={(e)=>handleChange(e,"about")}
                                            value={data?.about}
                                            invalid={error.errors?.about ? true : false}
                                        />
                                        <FormFeedback>{error.errors?.about}</FormFeedback>
                                    </FormGroup>
                                    <Container className="text-center">
                                        <Button onClick={resetData} className="me-2" outline color="secondary" type="reset">Reset</Button>
                                        <Button outline color="dark">Register</Button>
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
  
export default Signup;