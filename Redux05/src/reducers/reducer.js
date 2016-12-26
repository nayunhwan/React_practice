/**
 * Created by nayunhwan on 2016. 12. 26..
 */



export default function reducer(state = [], action){
    switch (action.type){
        case 'ADD_TODO':
            return [
                {text: action.text}, ...state
            ]


        default:
            return state;
    }
}
