import { READ_MANIFEST } from '../actions/types'
const fs = window.require('fs-extra')
const path = window.require('path')
export const readManifest = () => dispatch => {
  const manifest = JSON.parse(fs.readFileSync('./public/manifest.json'))
  console.log(manifest)
	dispatch({
		type: READ_MANIFEST,
		manifest
	})
}
