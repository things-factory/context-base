import { store } from '@things-factory/shell'
import context from './reducers/context'

export default function bootstrap() {
  store.addReducers({
    context
  })
}
