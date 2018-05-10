import { Injectable } from '@angular/core';
declare var require: any;
// const expect = require('expect.js');

@Injectable({
    providedIn: 'root'
})
export class AppActions {
    static SET_BOX = 'SET_BOX';

    setBox(box) {
        return {
            type: AppActions.SET_BOX,
            payload: box
        };
    }

}

// // Tests
// const appActions = new AppActions();
// expect(appActions.setBox('foo')).to.eql({
//     type: 'SET_BOX',
//     payload: 'foo'
// });
