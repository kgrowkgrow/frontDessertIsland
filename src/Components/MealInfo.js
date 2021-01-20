import React from 'react';
import { connect } from "react-redux";

// this is where i'll have to do recommended insulin - use user from redux, if they have diabetes: take their ratio. net carbs / ratio = amt of insulin (keep it an integer and round down)

const MealInfo = (props) => {
    const {calories, net_carbs, ready_in_minutes, serving_size} = props.recipe
    const {diabetic, carb_ratio} = props.user 
    
    return (
        <div>
            <h5>Dessert Info:</h5>
            <ul>
                <li>Makes {serving_size} servings</li>
                <li>Ready in {ready_in_minutes} minutes</li>
                <li>{calories} calories</li>
                <li>{net_carbs} net carbs</li>
                {diabetic ? <li>Recommended doses of insulin: {Math.round(net_carbs/carb_ratio)} units</li> : null}
               
            </ul> 
        </div>
    );
}

const mapStateToProps = state => {
    return {user: state.user.user}
}
// have to connect state of user to see if diabetic

export default connect(mapStateToProps) (MealInfo);
