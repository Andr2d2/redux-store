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
        case 'ADD_TODO':
            const data = [...this.state.data, action.payload];

            return {
                ...state,
                data
            }
    }

    return state;
}