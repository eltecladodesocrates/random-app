
class IndecisionApp extends React.Component {

    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            options: props.options
        }
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    handlePick() {
        const randonNum = Math.floor((Math.random() * this.state.options.length))
        const option = this.state.options[randonNum]
        alert(option)
    }

    handleAddOption(option) {

        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        })
    }

    render() {
        const subTitle = "Put your life in the hands of a computer"
        return (
            <div>
                <Header subTitle={subTitle}/>
                <Action
                    hasOptions={this.state.options.length > 1}
                    handlePick={this.handlePick}
                />
                <Options  
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision App'
}

const Action = (props) => {
    return (
        <div>
            <button 
                disabled={!props.hasOptions} 
                onClick={props.handlePick}
            >What should I do</button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.map((option) => <Option key={option} optionText={option}/>)}
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
        </div>
    )
}

class AddOption extends React.Component {

    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)

        this.setState(() => {
            return {
                error
            }
        })

        e.target.elements.option.value = ''

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button name="boton">Submit</button>
                </form>
                <p>{this.state.error}</p>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp name={'Athos'} age={26}/>, document.getElementById('app'))