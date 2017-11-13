var React = require('react')
var render = require('react-dom').render

class App extends React.Component {
  render () {
    return (
      <div className="container">
        <h1>Hello from the other side</h1>
      </div>
    )
  }
}

render(<App/>, window.document.getElementById('app'))
