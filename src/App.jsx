import Hero from "./components/Hero"
import HighLights from "./components/HighLights"
import NavBar from "./components/NavBar"
import Model from "./components/Model"
import './index.css';

const App = ()=> {
  return (
    <main className="bg-balck">
      <NavBar/>
      <Hero/>
      <HighLights/>
      <Model/>
    </main> 
  )
}

export default App
