import './App.css'
import Header from './components/useContext/header/Header'
import { ThemeProvider } from './components/useContext/providerContext'
import { ThemeContext } from './components/useContext/createContextTest'
import { useContext } from 'react'

function App() {

  return (
    <ThemeProvider>
      <Header />
        <h1>Compartilhando Estados no React com useContext</h1> 
    </ThemeProvider>
  )
}

export default App
