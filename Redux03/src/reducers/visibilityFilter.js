/**
 * Created by nayunhwan on 2016. 12. 26..
 */

function visibilityFilter (state = 'SHOW_ALL', action){
    switch (action.type){
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter;