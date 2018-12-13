import { EnthusiasmAction } from '../actions'
import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM } from '../constants'
import { StoreState } from '../types'

export function enthusiasm(state: StoreState, action: EnthusiasmAction) {
  switch (action.type) {
    case DECREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: state.enthusiasmLevel - 1,
      }

    case INCREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: state.enthusiasmLevel + 1,
      }

    default:
      return state
  }
}
