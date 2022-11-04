import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'mobx-react'
import store from './store/index'
import './index.scss'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider {...store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
)
