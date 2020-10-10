/* use react-redux with this resume app */

// START --- Redux Tutorial Example

// Think of redux store as a James Bond mission, where CONSTANT mission UPDATES are REQUIRED
// step (1) === store  <<<--- reducer + state // and state is the "status" of each step
// step (2) === reducer  <<<--- state + action // a reducer is an "agent" that is given a list of smaller tasks ('actions') to perform to achieve the mission; then update you with the mission's state
// step (3) === subscribe  // get 'current' state  --- James Bond (the "agent") will get connected to the base (for an update of the 'state') to receive orders of what to do (what 'action' to perform, depending on {or requesting} the current state)
// step (4) === dispatch  //take action by sending orders to the "agent" (like 'save the day')

// // (2)  // 2nd step 'is' to create; however must be before placed ahead of (before/above) creating the 'store'
// const reducer = (state, action) => {
//     if (action.type === 'ATTACK') {
//         return action.payload // this is the "PAYLOAD"
//     }
//     return state;
// }

// // (1)
// const store = Redux.createStore(reducer, "Peace"); // store takes the parameters of: (1) reducer, (2) state


// // (3)
// store.subscribe(() => {
//     console.log("Store is now", store.getState());
// });

// // (4)
// store.dispatch({
//     type: "ATTACK",
//     payload: "Iron Man"
// })

// END --- Redux Tutorial Example


