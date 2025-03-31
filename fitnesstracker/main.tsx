import { createRoot } from 'react-dom/client'
import store from "./redux/store.tsx"
import { Provider } from 'react-redux'
import FitnessTracker from './FitnessTracker.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <FitnessTracker />
  </Provider>,
)
