// 1) Import React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

// 2) Get a refernce to the DIV with ID of "root"
const el = document.getElementById('root')

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el)

// 4) Create a component
// import App()

// 5) Show the component on the screen
root.render(<App />)
