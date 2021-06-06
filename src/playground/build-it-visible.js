let visibility = false

const onVisibility = () => {
    visibility = !visibility
    renderVisibilityApp()
}

const renderVisibilityApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onVisibility}>{!visibility ? 'Show details' : 'Hide details'}</button>
            {visibility && <p>Here are some details of this app</p>}
        </div>
    )
    ReactDOM.render(template, document.getElementById('app'))
}

renderVisibilityApp()

