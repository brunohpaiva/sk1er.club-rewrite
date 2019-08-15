import React from "react"
import NextApp, { Container, AppProps, AppContext } from "next/app"
import Head from "next/head"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/styles"
import { Provider } from "mobx-react"

import { Store } from "../store"
import withStore from "../utils/withStore"
import { light as lightTheme, dark as darkTheme } from "../utils/themes"

type IProps = {
  store: Store
} & AppProps

class App extends NextApp<IProps> {
  public static async getInitialProps({ Component, ctx }: AppContext) {
    const pageProps = {}

    if (Component.getInitialProps) {
      Object.assign(pageProps, await Component.getInitialProps(ctx))
    }

    return { pageProps }
  }

  public componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  public render() {
    const { Component, pageProps, store } = this.props

    const theme =
      (store.currentUser && store.currentUser.theme) === "dark"
        ? darkTheme
        : lightTheme

    return (
      <>
        <Head>
          <title>sk1er.club</title>
        </Head>
        <Container>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </ThemeProvider>
        </Container>
      </>
    )
  }
}

export default withStore(App)
