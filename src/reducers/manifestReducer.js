import { READ_MANIFEST } from '../actions/types'

const initialState = {
	manifest: {}
}

export default (state = initialState, action) => {
	switch (action.type) {
    case READ_MANIFEST:
    console.log(action)
			return {
				...state,
				manifest: action.manifest
			}
		default:
			return state
	}
}
