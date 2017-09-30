import React from 'react'
import { injectGlobal } from 'styled-components'
// import {  Header } from 'components'

injectGlobal`

`

class ToastMasters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toastmasterName: '',
      priceBefore: '',
      priceAfter: '',
      kyrgyzLang: false,
      russianLang: false,
      englishLang: false,
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleLanguageCheck = this.handleLanguageCheck.bind(this)
    this.handlePriceBeforeChange = this.handlePriceBeforeChange.bind(this)
    this.handlePriceAfterChange = this.handlePriceAfterChange.bind(this)
  }

  handleNameChange(e) {
    this.setState({ toastmasterName: e.target.value })
  }

  handleLanguageCheck(e) {
    this.setState({ [`${e.target.name}Lang`]: !this.state[`${e.target.name}Lang`] })
  }

  handlePriceBeforeChange(e) {
    this.setState({ priceBefore: e.target.value })
  }

  handlePriceAfterChange(e) {
    this.setState({ priceAfter: e.target.value })
  }

  componentWillMount() {
    this.props.fetchToastMastersRequest()
  }

  render() {
    console.log(this.state)
    return (
      <div className="block">
        <form className="filter">
          <div className="name-block">
            <p>Имя тамады</p>
            <input onChange={this.handleNameChange} />
          </div>
          <div className="language-block">
            <p>Язык</p>
            <input type="checkbox" name="kyrgyz" onChange={this.handleLanguageCheck} checked={this.state.kyrgyzLang} />Кыргызский
            <input type="checkbox" name="russian" onChange={this.handleLanguageCheck} checked={this.state.russianLang} />Русский
            <input type="checkbox" name="english" onChange={this.handleLanguageCheck} checked={this.state.englishLang} />Английский
          </div>
          <div className="price-block">
            <p>Цена от </p>
            <input type="number" onChange={this.handlePriceBeforeChange} />
            <p>до</p>
            <input type="number" onChange={this.handlePriceAfterChange} />
          </div>
        </form>
        <div className="results">
          {
            this.props.toastmasters.map((item, index) => {
              return (<div key={index}>
                <h3>{item.name}</h3>
                тут картинка
              </div>)
            })
          }
        </div>
      </div>
    )
  }
}

ToastMasters.propTypes = {}

export default ToastMasters
