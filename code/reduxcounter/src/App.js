import { connect } from "react-redux";
import Counter from "./Counter";

// main purpose is to turn all redux-specific hooks into
// something we can use in react

// Map Redux state to component props
// this function subscribes to all
// store updates and gets called
// when anything in our store
// changes
function mapStateToProps(state) {
  return {
    countValue: state.count
  };
}

// Action
var increaseAction = { type: "increase" };
var decreaseAction = { type: "decrease" };

// Map Redux actions to comoponent props
// we return an object containing
// the name of two functions our component
// can call to dispatch a change to our store
function mapDispatchToProps(dispatch) {
  return {
    increaseCount: function() {
      return dispatch(increaseAction);
    },
    decreaseCount: function() {
      return dispatch(decreaseAction);
    }
  };
}

// The HOC
// this function creates a magical Connect
// Higher Order Comoponent

// takes mapStateToProps and mapDispatchToProps
// functions as arguments and it passes all that into
// the Counter component

var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
) (Counter);

export default connectedComponent;

// the end result of all this code is the equivalent to rendering
// the following

// <Connect>
//   <Counter  increaseCount={increaseCount}
//             decreaseCoun={decreaseCount}
//             countValue={countValue}/>
// </Connect>