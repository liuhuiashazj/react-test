//constatns
const GET_DATA = 'GET_DATA'
    //Actions
export function getData() {
    return {
        type: GET_DATA,

    }
}

//Action handlers

const ACTIONS_HANDLERS = {
    [GET_DATA]: (state, action) => {
        return {
            pn: 0,
            data: 3
        }
    }
}
const initialState = {
    pn: 1,
    data: 1
}
export default function meetReducer(state = initialState, action) {
    const handler = ACTIONS_HANDLERS[action.type];
    return handler ? handler(state, action) : state
}
