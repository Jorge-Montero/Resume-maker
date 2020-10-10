
//     NOTE: think of the store as the base, AND the state as the status of the mission

// (1) store()  <<--- reducer, state

// (2) reducer()  <<--- state, action

// (3) subscribe()  // get the 'current' state

// (4) dispatch( )  <<--- action

const reducer = (state, action) => {
    if (action.type === 'ATTACK') {
        return action.payload; // latent
    }
    if (action.type === 'GREENATTACK') {
        return action.payload(); // real-time
    }

    return state;
}

// (1)
const store = Redux.createStore(reducer, "Store starts:  at Peace");

// (2) reducer was moved above store

// (3)
store.subscribe( () => console.log("Store is now: ", store.getState() ));

// NOT part of this app --- just check initial state
console.log(store.getState());

// (4)
store.dispatch({
    type: 'ATTACK',
    payload: "sending Iron Man" // latent
})

store.dispatch({
    type: 'GREENATTACK',
    payload: () => "sending Hulk" // real-time
})

