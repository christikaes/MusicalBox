import { AppActions } from './app.actions';

export interface IAppState {
    box: {
        name: string,
        public: boolean,
        data: Array<Array<boolean>>,
        id: string
    };
}

export const INITITAL_STATE: IAppState = {
    box: {
        name: 'My Musical Box',
        public: true,
        data: new Array(8).fill(new Array(25).fill(false)),
        id: null
    }
};
