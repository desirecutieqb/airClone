import './App.css'
import Nav from "./Nav"
import Main from "./Main.jsx"
import { ThemeProvider } from '../context/themeContext.jsx';

export default function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Nav />
        <Main />
      </ThemeProvider>
    </div>
  )
}
