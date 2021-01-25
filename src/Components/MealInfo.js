import React from 'react';
import { connect } from "react-redux";

// this is where i'll have to do recommended insulin - use user from redux, if they have diabetes: take their ratio. net carbs / ratio = amt of insulin (keep it an integer and round down)

const MealInfo = (props) => {
    const {calories, net_carbs, ready_in_minutes, serving_size} = props.recipe
    const {diabetic, carb_ratio} = props.user 
    
    return (
        <div className="meal-info-div">
            <h5>Dessert Info:</h5>
            <span>
               <p>Makes {serving_size} servings</p> 
               <p>Ready in {ready_in_minutes} minutes</p> 
               <p>{calories} calories</p> 
               <p>{net_carbs} net carbs</p> 
               {diabetic ? <p>Recommended dose of insulin: <b>{Math.round(net_carbs/carb_ratio)}</b> units</p> : null}
            </span>
        </div>
    );
}

const mapStateToProps = state => {
    return {user: state.user.user}
}
// have to connect state of user to see if diabetic

export default connect(mapStateToProps) (MealInfo);
