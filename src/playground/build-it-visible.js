class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props)
        this.handleDetails = this.handleDetails.bind(this)
        this.state = {
            visibility: false
        }
    }

    handleDetails() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleDetails}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && <p>Here are some details</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// let visibility = false

// const onVisibility = () => {
//     visibility = !visibility
//     renderVisibilityApp()
// }

// const renderVisibilityApp = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onVisibility}>{!visibility ? 'Show details' : 'Hide details'}</button>
//             {visibility && <p>Here are some details of this app</p>}
//         </div>
//     )
//     ReactDOM.render(template, document.getElementById('app'))
// }

// renderVisibilityApp()

