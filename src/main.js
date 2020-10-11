/* use react-redux with this resume app */

// START --- Redux Tutorial Example-1 (Hitesh Choudhary)

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

// END --- Redux Tutorial Example-1 (Hitesh Choudhary)

// START --- Redux Tutorial Example-2 (Vim Girl)

// END --- Redux Tutorial Example-2 (Vim Girl)

const reducer = (state, action) => {
    let currentState = Object.assign({}, state);
    let userInfo = {
        FirstName: "",
        LastName: "",
        State: "",
        City: "",
        Email: ""
    }
    let userStrategy = {
        Role: "",
        Personality: "",
        Accolades: "",
        Work: ""
    }
    let userQualifications = {
        Manageable: "",
        Consistent: "",
        Trainable: ""
    }

    if (action.type === 'submitUserInfo') {
        const userFirstName = document.getElementById('user-first-name').value;
        const userLastName = document.getElementById('user-last-name').value;
        const userState = document.getElementById('user-state').value;
        const userCity = document.getElementById('user-city').value;
        const userEmail = document.getElementById('user-email').value;
        userInfo.userFirstName = userFirstName;
        userInfo.userLastName = userLastName;
        userInfo.state = userState;
        userInfo.city = userCity;
        userInfo.email = userEmail;
    }
    if (action.type === 'submitStrategy') {
        const strategyRole = document.getElementById('strategy-role').value;
        userStrategy.role = strategyRole;
        const strategyPersonality = document.getElementById('strategy-personality').value;
        userStrategy.personality = strategyPersonality;
        const strategyAccolades = document.getElementById('strategy-accolades').value;
        userStrategy.accolades = strategyAccolades;
        const strategyWork = document.getElementById('strategy-work').value;
        userStrategy.work = strategyWork;
    }
    if (action.type === 'submitQualifications') {
        const qualificationsManageable = document.getElementById('qualifications-manageable').value;
        userQualifications.manageable = qualificationsManageable;
        const qualificationsConsistent = document.getElementById('qualifications-consistent').value;
        userQualifications.consistent = qualificationsConsistent;
        const qualificationsTrainable = document.getElementById('qualifications-trainable').value;
        userQualifications.trainable = qualificationsTrainable;
    }

    // if (action.type === 'submitSkillsCommunication') {
    //     const ? = document.getElementById('').value;
    //     #.? = ?;
    // }
    // if (action.type === 'submitSkillsOrganization') {
    //     const ? = document.getElementById('').value;
    //     #.? = ?;
    // }
    // if (action.type === 'submitSkillsSolving') {
    //     const ? = document.getElementById('').value;
    //     #.? = ?;
    // }
    // if (action.type === '') {
    //     const ? = document.getElementById('').value;
    //     #.? = ?;
    // }
    // if (action.type === '') {
    //     const ? = document.getElementById('').value;
    //     #.? = ?;
    // }

    currentState = {
        userInfo: userInfo,
        userStrategy: userStrategy,
        userQualifications: userQualifications
    };
    // currentState = {
    //     userInfo: userInfo,
    //     userStrategy: userStrategy,
    //     userQualifications: this.userQualifications
    // };
    // currentState = {
    //     userInfo: userInfo,
    //     userStrategy: userStrategy,
    //     userQualifications: this.userQualifications
    // };
    return currentState;
}

const store = Redux.createStore(reducer, {
    userInfo: {
        FirstName: "",
        LastName: "",
        State: "",
        City: "",
        Email: ""
    },
    userStrategy: {
        Role: "",
        Personality: "",
        Accolades: "",
        Work: ""
    },
    userQualifications: {
        Manageable: "",
        Consistent: "",
        Trainable: ""
    }
});

store.subscribe(() => {
    console.log(store.getState()); // output this everytime ANY 'dispatch' is sent
});

// document.getElementById('submitUserInfo').onclick = () => {
//     store.dispatch({
//         type: "submitUserInfo"
//     });
// };
// document.getElementById('submitStrategy').onclick = () => {
//     store.dispatch({
//         type: "submitStrategy"
//     });
// };
// document.getElementById('submitQualifications').onclick = () => {
//     store.dispatch({
//         type: "submitQualifications"
//     });
// };

// Scroll to bottom so user can complete task
let scrollingElement = (document.scrollingElement || document.body);
let scrollToBottom = () => {
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
};

// below requires 'full' JQuery
// let scrollSmoothToBottom = (id) => {
//     $(scrollingElement).animate({
//         scrollTop: document.body.scrollHeight
//     }, 500);
// };
