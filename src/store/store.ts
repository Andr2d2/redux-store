export class Store {
    private _subscribers: Function[];
    private _reducers: { [key: string]: Function};
    private _state: { [key: string]: any };

    constructor(reducers = {}, initialState = {}){
        this._state = initialState;
    }

    get value(){
        return this._state;
    }
}
