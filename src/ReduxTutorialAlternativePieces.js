
//     NOTE: think of the store as the base, AND the state as the status of the mission

// (1) store()  <<--- reducer, state

// (2) reducer()  <<--- state, action

// (3) subscribe()  // get the 'current' state

// (4) dispatch( )  <<--- action


/*

HOW TO CHANGE LAW: (Redux Analogy)
-----------------'

(1) people ---> (2) Protest ---> (3) "request change" LAW ---> (4) Ministers ---> (5) Parliament ---> (6) amend law "NEVER change it" ---> (7) Notify ---> (8) Newspaper
    `.                                                                                                                                                                  |
      `------------------------<<<<-----------<<<<-----------<<<<--------  Passes updates -------------<<<<--------------<<<<--------------<<<<-------------------------'

*/

/*

(1) Components ---> (2) Dispatch ---> (3) "request change" Action ---> (4) Reducers ---> (5) "Central" STORE ---> (6) Triggers ---> (7) Subscription ---> Passes updated states as props
    `.                                                                                                                                                                                  |
      `--------------------------------<<<<-----------<<<<-----------<<<<--------  Passes updates -------------<<<<--------------<<<<--------------<<<<---------------------------------'
*/
