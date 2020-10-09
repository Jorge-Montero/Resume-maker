/* use react-redux with this resume app */

const reducer = Redux.combineReducers({
    todos: () => "Redux working!!!"
})

const store = Redux.createStore(reducer);

const answer = store.getState().todos;

document.getElementById('title').innerHTML = answer;

