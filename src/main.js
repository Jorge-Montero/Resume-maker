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
    let userSkillsCommunication = {
        Skill: "",
        Delivery: "",
        Confirmation: ""
    }
    let userSkillsOrganization = {
        Follow: "",
        Trustworthy: "",
        Independent: ""
    }
    let userSkillsSolving = {
        Communicator: "",
        Explainer: "",
        Resolver: ""
    }
    let employer1 = {
        Position: "",
        Start: "",
        End:""
    }
    let educationHighSchool = {
        Name: "",
        Graduation: "",
        City: "",
        State: ""
    }
    let educationCollege = {
        Name: "",
        Graduation: "",
        City: "",
        State: ""
    }
    let educationUniversity = {
        Name: "",
        Graduation: "",
        City: "",
        State: ""
    }

    if (action.type === 'submitResume') {
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

        const strategyRole = document.getElementById('strategy-role').value;
        const strategyPersonality = document.getElementById('strategy-personality').value;
        const strategyAccolades = document.getElementById('strategy-accolades').value;
        const strategyWork = document.getElementById('strategy-work').value;
        userStrategy.Role = strategyRole;
        userStrategy.Personality = strategyPersonality;
        userStrategy.Accolades = strategyAccolades;
        userStrategy.Work = strategyWork;

        const qualificationsManageable = document.getElementById('qualifications-manageable').value;
        const qualificationsConsistent = document.getElementById('qualifications-consistent').value;
        const qualificationsTrainable = document.getElementById('qualifications-trainable').value;
        userQualifications.Manageable = qualificationsManageable;
        userQualifications.Consistent = qualificationsConsistent;
        userQualifications.Trainable = qualificationsTrainable;

        const communicationSkill = document.getElementById('communication-skill').value;
        const communicationDelivery = document.getElementById('communication-delivery').value;
        const communicationConfirmation = document.getElementById('communication-confirmation').value;
        userSkillsCommunication.Skill = communicationSkill;
        userSkillsCommunication.Delivery = communicationDelivery;
        userSkillsCommunication.Confirmation = communicationConfirmation;

        const organizationFollow = document.getElementById('organization-follow').value;
        const organizationTrustworthy = document.getElementById('organization-trustworthy').value;
        const organizationIndependent = document.getElementById('organization-independent').value;
        userSkillsOrganization.follow = organizationFollow;
        userSkillsOrganization.Trustworthy = organizationTrustworthy;
        userSkillsOrganization.Confirmation = organizationIndependent;

        const solvingCommunicator = document.getElementById('solving-communicator').value;
        const solvingExplainer = document.getElementById('solving-explainer').value;
        const solvingResolver = document.getElementById('solving-resolver').value;
        userSkillsSolving.Communicator = solvingCommunicator;
        userSkillsSolving.Explainer = solvingExplainer;
        userSkillsSolving.Resolver = solvingResolver;

        const employer1Position = document.getElementById('employer1-position').value;
        employer1.Position = employer1Position;
        const employer1Start = document.getElementById('employer1-date-start').value;
        employer1.Start = employer1Start;
        const employer1End = document.getElementById('employer1-date-end').value;
        employer1.End = employer1End;

    }

    currentState = {
        userInfo: userInfo,
        userStrategy: userStrategy,
        userQualifications: userQualifications,
        userSkillsCommunication: userSkillsCommunication,
        userSkillsOrganization: userSkillsOrganization,
        userSkillsSolving: userSkillsSolving,
        employer1: employer1,
        educationHighSchool: educationHighSchool,
        educationCollege: educationCollege,
        educationUniversity: educationUniversity
    };
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

document.getElementById('submitResume').onclick = () => {
    store.dispatch({
        type: "submitResume"
    });
};

// Scroll to bottom so user can complete task
let scrollingElement = (document.scrollingElement || document.body);
let scrollToBottom = () => {
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
};

