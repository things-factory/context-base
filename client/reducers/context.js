import {
  APPEND_CONTEXT_TOOL,
  REMOVE_CONTEXT_TOOL,
  SHOW_CONTEXT_OVERLAY,
  HIDE_CONTEXT_OVERLAY
} from '../actions/context'

const INITIAL_STATE = {
  contextTools: [],
  overlay: {
    show: false
  }
}

const context = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case APPEND_CONTEXT_TOOL:
      return {
        ...state,
        contextTools: [...state.contextTools, action.tool]
      }

    case REMOVE_CONTEXT_TOOL:
      return {
        ...state,
        contextTools: state.contextTools.filter(i => i !== action.tool)
      }

    case SHOW_CONTEXT_OVERLAY:
      return {
        ...state,
        overlay: {
          show: true,
          template: action.template
        }
      }

    case HIDE_CONTEXT_OVERLAY:
      return {
        ...state,
        overlay: {
          show: false
        }
      }

    default:
      return state
  }
}

export default context
