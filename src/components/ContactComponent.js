import React, { Component } from 'react';
import { Button, Label, Col, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';
// import { Control, LocalForm } from 'react-redux-form';
import { Control, Form } from 'react-redux-form';
import { Link } from 'react-router-dom'
// create function of Contact pass it props parm
class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            imageLink: '',
            time: '',
            temp: '',
            calories: ""
        };

        // this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleBlur = (field) => () => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

  

    handleSubmit(values) {
        this.props.postMeal(values);
        // this.props.resetFeedbackForm();
    }
    render() {
        return (
            <div className="row row-content">
                <div className="col-12">
                    <h2>Add a meal</h2>
                    <hr />
                </div>
                <div className="col-md-10">
                    <Form model="feedbackForm" onSubmit={values => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="name" md={2}>Meal Name</Label>
                            <Col md={10}>
                                <Control.text model=".name" id="name" name="name"
                                    placeholder="Meal Name"
                                    className="form-control"
                                />
                              
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="image" md={2}>Image Link</Label>
                            <Col md={10}>
                            <Control.select model=".image" id="image" name="image"
                                        className="form-control"
                                        placeholder="1"
                                    >
                                        <option value="images/default.jpg">Default</option>
                                        <option value="images/chicken.jpg">Chicken</option>
                                        <option value="three">3</option>
                                        <option value="four">4</option>
                                        <option value="five">5</option>
                                    </Control.select>
                               
                            
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="time" md={2}>time</Label>
                            <Col md={10}>
                                <Control.text model=".time" id="time" name="time"
                                    placeholder="10 - 20 minutes"
                                    className="form-control"
                                />
                               
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="temp" md={2}>Temp</Label>
                            <Col md={10}>
                                <Control.text model=".temp" id="temp" name="temp"
                                    placeholder="200F"
                                    className="form-control"
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="feedback" md={2}>Calories</Label>
                            <Col md={10}>
                                <Control.text model=".calories" id="calories" name="calories"
                                    placeholder="200 calories for 2 pieces"
                                    className="form-control"
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{ size: 10, offset: 2 }}>
                                <Button type="submit" color="primary">
                                    Send Feedback
                                    </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/contactus" >ContactUs</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/home" >Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Meal</BreadcrumbItem>
                </Breadcrumb>
            </div>
        )

    }
}
export default Contact;