import React, { Component } from 'react'
import { connect } from 'react-redux'
import { User } from '../components/User'
import { Page } from '../components/Page'
import { getPhotos } from '../actions/PageActions'
import { handleLogin } from '../actions/UserActions'

import '../css/main.scss'

class App extends Component {
  render() {
    const { user, page, getPhotosAction, handleLoginAction } = this.props

    return (
      <div className="vk-app">
        <header className="vk-app__header">
          <h1 className="vk-app__title">Мой топ фото</h1>
          <User name={user.name} isFetching={user.isFetching} error={user.error} handleLogin={handleLoginAction} />
        </header>
        <section className="vk-app__section">
          <Page photos={page.photos} year={page.year} isFetching={page.isFetching} getPhotos={getPhotosAction} />
        </section>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
    page: store.page,
  }
}

const mapDispatchToProp = dispatch => {
  return {
    getPhotosAction: year => dispatch(getPhotos(year)),
    handleLoginAction: () => dispatch(handleLogin()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(App)
