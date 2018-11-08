import React from 'react'
import PropTypes from 'prop-types'

export class Page extends React.Component {
  onBtnClick = e => {
    const year = parseInt(e.currentTarget.innerText)

      this.props.getPhotos(year)
  }
  render() {
      const { year, photos, isFetching } = this.props

    return (
      <section className="photos">
        <header className="photos__header">
          <a className="btn _btn-gradient1" href="#test" onClick={this.onBtnClick}>
            <span>2018</span>
          </a>
          <a className="btn _btn-gradient1" href="#test" onClick={this.onBtnClick}>
            <span>2017</span>
          </a>
          <a className="btn _btn-gradient1" href="#test" onClick={this.onBtnClick}>
            <span>2016</span>
          </a>
          <a className="btn _btn-gradient1" href="#test" onClick={this.onBtnClick}>
            <span>2015</span>
          </a>
          <a className="btn _btn-gradient1" href="#test" onClick={this.onBtnClick}>
            <span>2014</span>
          </a>
        </header>
        <section className="photos__section">
          <h2 className="photos__title">{year} год</h2>
          <div className="photos__info">
              {isFetching ? <div className="loader">Загружаю...</div> : <p>У тебя {photos.length} фото.</p>}
          </div>
          <div className="photos__content" />
        </section>
      </section>
    )
  }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
}
