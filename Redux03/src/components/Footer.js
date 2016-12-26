/**
 * Created by nayunhwan on 2016. 12. 26..
 */

import React, {Componet} from 'react';
import FilterLink from '../containers/FilterLink'

export default function Footer(){
    return(
        <p>
            Show:
            {" "}
            <FilterLink filter="SHOW_ALL">
                All
            </FilterLink>
            {", "}
            <FilterLink filter="SHOW_ACTIVE">
                Active
            </FilterLink>
            {", "}
            <FilterLink filter="SHOW_COMPLETED">
                Completed
            </FilterLink>
        </p>
    )
}

