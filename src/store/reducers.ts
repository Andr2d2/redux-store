import * as fromAction from './actions'

export const initialState = {
    loaded: false,
    loading: false,
    data: [
        { label: 'Hello world', complete: false }
    ]
};

export function reducer(
    state = initialState,
    action: { type: string; payload: any }
) {
    switch (action.type) {
        case fromAction.ADD_TODO: {
            const data = [...state.data, action.payload];

            return {
                ...state,
                data
            };
        }

        case fromAction.REMOVE_TODO: {
            const data = state.data.filter(
                todo => todo.label !== action.payload.label
            );

            return {
                ...state,
                data
            };
        }
    }

    return state;
}