import React, { Component } from 'react'
import styled from 'styled-components'

import TitleBar from './components/TitleBar/TitleBar'
import Main from './views/Main'
import Container from './components/Container'

import { Provider } from 'react-redux'
import store from './store'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer>
          <TitleBar />
          <Container>
            <Main />
          </Container>
        </AppContainer>
      </Provider>
    )
  }
}

export default App
