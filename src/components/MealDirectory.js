import React from 'react'
import {
       Card, CardImg, CardImgOverlay, Breadcrumb, BreadcrumbItem} from 'reactstrap'
// import { Control, LocalForm } from 'react-redux-form'
import { Link } from 'react-router-dom'
// import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
// import ReactSearchBox from 'react-search-box'



function RenderMealDirectoryItem({meal}) {
    if(meal){
    return (
        // when card is clicked then open based on the id given within meals.js
        <div>
            
            <Card>
                <Link to={`/mealsdirectory/${meal.id}`}>
                    {/* finds image and name from meals.js and renderes the items */}
                    <CardImg width="100%" src={baseUrl + meal.image} alt={meal.name} />
                    <CardImgOverlay>
                        {/* <CardTitle>{meal.name}</CardTitle> */}
                    </CardImgOverlay>
                </Link>
            </Card>
            <div className="">
                {/* <Button color="primary" id="ovenButton">Place in Oven</Button> */}
                <h5>{meal.name}</h5>
                {/* <Button color="danger" id="ovenButton">Remove from Oven</Button> */}

            </div>
            {/* <MealForm mealId={mealId} postMeal={postMeal}/> */}
        </div>


    );
}

}
function refreshPage(){ 
    window.location.reload(); 
}
function MealDirectory(props) {
    const mealdirectory = props.meals.meals.map(meal => {
        return (
            <div key={meal.id} className="col-md-3 m-0">
                <RenderMealDirectoryItem meal={meal} />
            </div>
        )
    })
    if(props.meals){
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {/* breadcrumb for easy nav */}
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/contactus" >ContactUs</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Meal</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Directory</h2>
                    <hr />
                </div>
            </div>
            {/* <div>
                <ReactSearchBox placeholder="Search Meal Here" data={props.meals.name}></ReactSearchBox>
            </div> */}
            <button type="button" onClick={ refreshPage }> <span>Reload</span> </button> 
            <div className="row">
         
                {mealdirectory}
                {/* <MealForm postMeal={props.postMeal} mealId={props.meals.id}/> */}
            </div>
        </div>
    )
    }else{
        return(
            <div></div>
        )
    }
}
//=============================================================================================



export default MealDirectory;