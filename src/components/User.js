import React from 'react'
import PropTypes from 'prop-types'

export class User extends React.Component {
  renderTemplate = () => {
    const { name, error, isFetching } = this.props

    if (error) {
      return <p>Во время запроса произошла ошибка, обновите страницу</p>
    }

    if (isFetching) {
      return <div className="loader _xs">Загружаю...</div>
    }

    if (name) {
      return <p>Привет, {name}!</p>
    } else {
      return (
        <a className="btn _btn-gradient2" onClick={this.props.handleLogin} href="#test">
          <span>Войти</span>
        </a>
      )
    }
  }

  render() {
    return <div className="ib user">{this.renderTemplate()}</div>
  }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    error: PropTypes.string,
    isFetching: PropTypes.bool.isRequired,
    handleLogin: PropTypes.func.isRequired,
}
