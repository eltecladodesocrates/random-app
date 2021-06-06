'use strict';

var visibility = false;

var onVisibility = function onVisibility() {
    visibility = !visibility;
    renderVisibilityApp();
};

var renderVisibilityApp = function renderVisibilityApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: onVisibility },
            !visibility ? 'Show details' : 'Hide details'
        ),
        visibility && React.createElement(
            'p',
            null,
            'Here are some details of this app'
        )
    );
    ReactDOM.render(template, document.getElementById('app'));
};

renderVisibilityApp();
