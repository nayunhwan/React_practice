/**
 * Created by nayunhwan on 2016. 12. 21..
 */

class DefaultComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h1>hello world</h1>

        )
    }

}
ReactDOM.render(<DefaultComponent/>, document.getElementById("container"));