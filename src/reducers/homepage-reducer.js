export default function(state ={}, action){
    switch (action.type) {
        case 'HOMEPAGE':
            return {somekey: 'somevalue'};
        default:
            return state;
    }
}
