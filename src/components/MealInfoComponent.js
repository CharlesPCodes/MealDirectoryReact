import React from 'react';
import {
    CardBody, Card, CardImg,  Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label, Row, Col
} from 'reactstrap'
import { Control, LocalForm } from 'react-redux-form'
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
// import Countdown from './CountdownComponent';

// ADDRESS localhost:3000/mealid

    // Render the Campsites cards with img/descriptions
  function RenderCampsite({meals}){
        return(
            <div className="col-md-5 m-1">
                <Card>
                    {/* add cards with image from capsites.js */}
                    {/* All info has been recored in campsites.js */}
                    <CardImg top src={baseUrl + meals.image} alt={meals.name} />
                    <CardBody>
                        {/* <CardTitle>{meals.name}</CardTitle> */}
                    {/* <CardText><Button color="primary" id="ovenButton">{'Place in Oven'}</Button></CardText> */}
                    
                    </CardBody>
                </Card>
            </div>
        );
    }
    // Render Comments Section
    function  RenderComments({meals}){
        if(meals){
            return(
                // here
                <div className="col-md-5 m-1">
                    <h4>Directions</h4>
                    {/* MAP comment to include formated date via formattedDate + comment id, text, and author */}
                    {meals.map(meal => {
                        // const formattedDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)));
                        // ISSUE NEW ADDS NOT RENDERING TEMP AND TIME
                    return(<p className="directions" key={meal.id}>{meal.temp}<br />{meal.time}<br/> {meal.calories}</p>
                    );
                    })}

                </div>
            );
        } // otherwise return empty div
        return (<div></div>)
    }
    function refreshPage(){ 
        window.location.reload(); 
    }
    // render the following 
   function MealInfo(props){
        if(props.meals){
            return (
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Breadcrumb>
                            <BreadcrumbItem onClick={ refreshPage } active><Link to="/home">Home </Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.meals.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <h2>{props.meals.name}</h2>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        {/* imports meals to expor props.info as variable to call in other files ie maincomponent >> <MealInfo> */}
                        <RenderCampsite meals={props.meals} />
                        <RenderComments meals={props.info} />
                    </div>
                </div>
            );
        }
        else{ /*IF campsite is not there then return an empty div */
            return(
                <div><h2>Loading your meal</h2></div>
            );
        }
    }
//  ===================================================================






// =======================================================================

    
export class MealForm extends React.Component {
        constructor(props) {
            super(props)
            // allows this.toggleModal to be called inside of toggleModal() method
            this.toggleModal = this.toggleModal.bind(this);
            // sets default state of isModalOpen to false so it is hidden
            this.state = {
                isModalOpen: false
            }
        }
    
        // method that checks the state of the modal and changes to the opposite
        // if isModal = false then isModal = true
        // if isModal = true then isModal = false
        toggleModal() {
            this.setState({
                isModalOpen: !this.state.isModalOpen
            })
        }
        handleSubmit(values) {
            this.toggleModal();
            // HERE POSTMEAL
            this.props.postMeal(this.props.mealId, values.mealname, values.imagelink, values.timecook, values.temp);
        }
    
    
    
        //     id: ,
        //     name: "",
        //     image: "/assets/images/",
        //     time: "Bake mintues",
        //     temp: "°F",
        //     calories: "",
        //     calorieslink: ""
        render() {
            return (
                <div className="container">
                    {/* Modal is open checked from state of CommentForm */}
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        {/* Header with X toggle button */}
                        <ModalHeader toggle={this.toggleModal}>Submit a Meal</ModalHeader>
                        <ModalBody>
                            {/* Create local form with onSubmit of the values passed to this.handleSubmit above */}
                            <LocalForm onSubmit={values => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="mealname" md={6}>Meal Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".mealname" id="mealname" name="mealname"
                                            placeholder="Meal Name"
                                            className="form-control"
                                        >
                                        </Control.text>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="imagelink" md={6}>Image Link</Label>
                                    <Col md={10}>
                                        <Control.text model=".imagelink" id="imagelink" name="imagelink"
                                            placeholder="https://google.com/text.jpg"
                                            className="form-control"
                                        >
                                        </Control.text>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="timecook" md={6}>Cook Time</Label>
                                    <Col md={10}>
                                        <Control.text model=".timecook" id="timecook" name="timecook"
                                            placeholder="Cook for 10-20 minutes"
                                            className="form-control"
                                        >
                                        </Control.text>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="temp" md={6}>Temperature</Label>
                                    <Col md={10}>
                                        <Control.text model=".temp" id="temp" name="temp"
                                            placeholder="200°F"
                                            className="form-control"
                                        >
                                        </Control.text>
                                    </Col>
                                </Row>
                                {/* submit form on the click of the button AKA default to html buttons */}
                                <Button type="submit" value="submit" color="primary">Submit</Button>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                    {/* on click of button toggle modal with toggleModal method */}
                    <Button outline onClick={this.toggleModal}> <i className="fa fa-pencil fa-lg" /> Submit a Meal</Button>
                </div>
            )
        }
    }

export default MealInfo;
