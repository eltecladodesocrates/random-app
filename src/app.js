const app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value
    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        renderIndecisionApp()
    }
}

const onRemoveAll = () => {
    app.options = []
    renderIndecisionApp()
}

const onMakeDescision = () => {
    const randonNum = Math.floor((Math.random() * app.options.length))
    const option = app.options[randonNum]
    alert(option)
    
}

const root = document.getElementById('app')

const numbers = [55, 101, 1000]

const renderIndecisionApp = () => {

    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.title && <p>{app.subTitle}</p>}
            <p>{app.options.length > 0 ?'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length <= 1} onClick={onMakeDescision}>What should I do</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    )

    ReactDOM.render(template, root)
}

renderIndecisionApp()



