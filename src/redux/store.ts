import {combineReducers, createStore} from 'redux'
import {HeaderReducer} from 'containers/header/redux/HeaderReducer'
import {GistsReducer} from 'containers/gists/redux/GistsReducer'
import {ThemeReducer} from 'shared/components/theme/redux/ThemeReducer'

const reducers = combineReducers({
  gists: GistsReducer,
  personality: HeaderReducer,
  theme: ThemeReducer
})

export default createStore(
  reducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
