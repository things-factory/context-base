import { APPEND_CONTEXT_TOOL, REMOVE_CONTEXT_TOOL } from '../actions/context'

const INITIAL_STATE = {
  tools: []
}

const context = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case APPEND_CONTEXT_TOOL:
      return {
        ...state,
        tools: [...state.tools, action.tool]
      }

    case REMOVE_CONTEXT_TOOL:
      return {
        ...state,
        tools: state.tools.filter(i => i !== action.tool)
      }

    default:
      return state
  }
}

export default context
