import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
        <ChakraProvider>
            <CartContextProvider>
                <App />
            </CartContextProvider>
        </ChakraProvider>
    </BrowserRouter>
)
