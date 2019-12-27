import React, { Component } from 'react'
import * as fr from './views/translations/fr.json'
import * as en from './views/translations/en.json'

// Create new context
export const MyContext = React.createContext()

// Then create a Provider Component
export class MyProvider extends Component {
  state = {
    language: 'fr', 
    contains : fr,
  }

  changeLanguage = (language) => {
    this.setState({
      language,
      contains: language==='fr'?fr:en,
    })

  }

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        changeLanguage: this.changeLanguage,
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}