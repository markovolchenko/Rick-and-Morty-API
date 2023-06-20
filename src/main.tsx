import React from 'react'
import ReactDOM from 'react-dom/client'
import './../styles/global.scss'
import './main.module.scss.css'
import App from "../components/App/App";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)
