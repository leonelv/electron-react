import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { readManifest } from '../../actions/readManifestActions'
const remote = window.require('electron').remote
let mainWindow = remote.getCurrentWindow()

const Bar = styled.div`
  height: 32px;
  width: 100%;
  background-color: #212121;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  -webkit-app-region: drag;
`

const Title = styled.p`
  font-size: 10pt;
  font-weight: 400;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding-left: 10px;
  margin: 0;
  padding-bottom: 2px;
`

const Box = styled.div`
  height: 32px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #535353;
  }
  -webkit-app-region: no-drag;
`
const Close = styled(Box)`
  &:hover {
    background: #cd1a2b;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  -webkit-app-region: no-drag;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`

const Icon = styled.div`
  height: 18px;
  width: 18px;
  margin-left: 10px;
`

class TitleBar extends Component {
  state = {
    maximized: false
  }
  toggle = () => {
    if (!this.state.maximized) {
      mainWindow.maximize()
    } else {
      mainWindow.unmaximize()
    }
    this.setState(prev => ({
      maximized: !prev.maximized
    }))
  }

  close = () => {
    mainWindow.close()
  }

  minimize = () => {
    mainWindow.minimize()
  }
  componentWillMount() {
    this.props.readManifest()
  }
  componentDidMount(props) {
    if (props) document.title = props.manifest.short_name
  }
  render() {
    return (
      <Bar>
        <TitleContainer>
          <Icon>
            <img src={this.props.manifest.icons ? this.props.manifest.icons[0].src : null} style={{ width: '100%', height: '100%' }} />
          </Icon>
          <Title>{this.props.manifest.short_name}</Title>
        </TitleContainer>
        <ButtonContainer>
          <Box onClick={this.minimize}>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="1">
              <path fill="#fff" d="M0 0h10v1H0z" />
            </svg>
          </Box>
          <Box onClick={this.toggle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
              <path d="M9 1v8H1V1h8m1-1H0v10h10V0z" fill="#fff" />
            </svg>
          </Box>
          <Close onClick={this.close}>
            <svg xmlns="http://www.w3.org/2000/svg" width="10.7" height="10.7">
              <path style={{ fill: 'none', stroke: '#fff', strokeMiterlimit: 10 }} d="M.4.4l10 10M.4 10.4l10-10" />
            </svg>
          </Close>
        </ButtonContainer>
      </Bar>
    )
  }
}
const mapStateToProps = state => ({
  manifest: state.manifest.manifest
})
export default connect(
  mapStateToProps,
  { readManifest }
)(TitleBar)
