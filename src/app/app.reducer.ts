declare var require: any;
// const expect = require('expect.js');

import { AppActions } from './app.actions';
import { IAppState } from './app.store';

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case AppActions.SET_BOX:
            return { ...state, box: action.payload };
        default:
            return state;
    }
}

// // Tests
// const appActions = new AppActions();
// const state = {
//     box: {
//         name: 'a',
//         public: false,
//         data: [[]],
//         id: 'a'
//     }
// };
// const newState = {
//     box: {
//         name: 'b',
//         public: false,
//         data: [[]],
//         id: 'b'
//     }
// };
// const action = {
//     type: 'SET_BOX', payload: {
//         name: 'b',
//         public: false,
//         data: [[]],
//         id: 'b'
//     }
// };
// expect(rootReducer(state, action)).to.eql(newState);
