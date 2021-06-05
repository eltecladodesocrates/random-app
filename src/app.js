const app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.title && <p>{app.subTitle}</p>}
        <p>{app.options.length > 0 ?'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
)

const user = {
    name: `D'artagnan`,
    age: 35,
    location: 'Newport'
}

const getLocation = (location) => {
    if (location) {
        return <p>Location: {location}</p>
    }
}

let count = 0
const addOne = () => {
    console.log('addOne')
}

const minusOne = () => {
    console.log('minusOne')
}

const reset = () => {
    console.log('reset')
}

const newTemplate = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>
)

const root = document.getElementById('app')

ReactDOM.render(newTemplate, root)

