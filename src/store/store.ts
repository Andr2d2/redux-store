export class Store {
    private _subscribers: Function[];
    private _reducers: { [key: string]: Function };
    private _state: { [key: string]: any };

    constructor(reducers = {}, initialState = {}) {
        this._subscribers = [];
        this._reducers = reducers;
        this._state = this._reduce(initialState, {});
    }

    private _notify() {
        this._subscribers.forEach(fn => fn(this._state));   
    }

    private _reduce(state, action) {
        const newState = {};

        for (const prop in this._reducers) {
            newState[prop] = this._reducers[prop](state[prop], action);
        }

        return newState;
    }

    get value() {
        return this._state;
    }

    subscribe(fn) {
        this._subscribers = [...this._subscribers, fn];
        this._notify();

        return () => {
            this._subscribers = this._subscribers.filter(sub => sub !== fn);
        }
    }
    
    dispatch(action) {
        this._state = this._reduce(this._state, action);
        this._notify();
    }


}
