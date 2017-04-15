export default (state = [
    '00',
    '10',
    '20',
    '30'
], action) => {
    switch (action.type) {
        case 'SORT_FILTER':
            state[action.sort] = action.sort + "" + action.id
            return state

        default:
            return state
    }
}