import App from "next/app"
import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "../src/styles/theme"

import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import reducers from "../src/reducers"

export default class MyApp extends App {
  constructor(props) {
    super(props)
    this.store = configureStore({ reducer: reducers })
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider store={this.store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    )
  }
}
