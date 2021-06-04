console.log('App.js is running')

const app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer'
}
const template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subTitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
)

const user = {
    name: `D'artagnan`,
    age: 35,
    location: 'New York'
}

const newTemplate = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
)

const root = document.getElementById('app')

ReactDOM.render(template, root)

