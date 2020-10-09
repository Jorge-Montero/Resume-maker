/* use react-redux with this resume app */

const reducer = Redux.combineReducers({
    todos: () => "Redux working!!!"
})

const store = Redux.createStore(reducer);

console.log(store.getState());

