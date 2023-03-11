import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

// COMPONENTS, RESOURCES, CONSTANTS
import { fullActions } from '../store/fullActions'

export const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(fullActions, dispatch)
}
