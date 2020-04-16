import React, {Component} from 'react';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
// import { connect } from 'react-redux';
import {MEALS} from '../shared/meals'
import Contact from './ContactComponent'
import Header from './HeaderComponent'
import MealDirectory from './MealDirectory'
import MealInfo from './MealInfoComponent'
import {postMeal, fetchMeals} from '../redux/ActionCreator'
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        meals: state.meals,

    };
};

const mapDispatchToProps ={
    postMeal:(name, image,time, temp,calories) => (postMeal(name, image,time, temp,calories)),
    fetchMeals: () =>(fetchMeals())
}


class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            meals: MEALS
        }
    }

    componentDidMount(){
        this.props.fetchMeals()
    }

    render(){
        const MealWithId = ({match}) => {
            return(
                <MealInfo
                meals={this.props.meals.meals.filter(meals => meals.id === +match.params.mealId)[0]}
                mealsLoading={this.props.meals.isLoading}
                mealsErrMess={this.props.meals.errMess}
                info={this.props.meals.meals.filter(info => info.id === +match.params.mealId)}
                //   postMeal = {this.props.postMeal}
                />
              
            )
        }

        return(
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/mealsdirectory' render={() => <MealDirectory meals={this.props.meals}/>}/>
                    <Route path='/mealsdirectory/:mealId' component={MealWithId} />
                    <Route exact path='/contactus' render={() => <Contact  postMeal={postMeal}/> } />

                    <Redirect to='/mealsdirectory'/>
                </Switch>
            </div>
        )
    }
    

}








export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));