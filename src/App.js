
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Input from './pages/naturalGas/Input';
import Model from './pages/naturalGas/Model';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import CruidOil from './pages/cruidoil/CruidOil';
import Gas from "./pages/gas/Gas"
import Gas2 from './pages/gas/Gas2';
import Per from './pages/performance/Per';
import ModuleTwo from './pages/naturalGas/ModuleTwo';
import CruidOilTwo from './pages/cruidoil/CruidOilTwo';
import InputCruid from "./pages/cruidoil/InputCruid"
import InputGas from './pages/gas/InputGas';
import PerCruid from './pages/cruidoil/PerCruid';
import PerGas from './pages/gas/PerGas';
import CrudeMatrix from './pages/cruidoil/CrudeMatrix';
import GasMatrix from './pages/gas/GasMatrix';
import NaturalgasMatrix from './pages/naturalGas/NaturalgasMatrix';




function App() {
  return (
    <div className="App">
            <Router>
              <Navbar/>
              <Routes>
                <Route path='/home' exact element={<Home/>}/>
                <Route path='/input' exact element={<Input/>}/>
                <Route path='/model' exact element={<Model/>}/>
                <Route path='/cruidoil' exact element={<CruidOil/>}/>
                <Route path='/gas' exact element={<Gas/>}/>
                <Route path='/gas2' exact element={<Gas2/>}/>
                <Route path='/Per' exact element={<Per/>}/>
                <Route path='/naturalgas' exact element={<ModuleTwo/>}/>
                <Route path='/cruidoiltwo' exact element={<CruidOilTwo/>}/>
                <Route path='/inputcruid' exact element={<InputCruid/>}/>
                <Route path='/inputgas' exact element={<InputGas/>}/>
                <Route path='/percruid' exact element={<PerCruid/>}/>
                <Route path='/pergas' exact element={<PerGas/>}/>
                
                <Route path='/crudematrix' exact element={<CrudeMatrix/>}/>
                <Route path='/gasmatrix' exact element={<GasMatrix/>}/>
                <Route path='/naturalgasmatrix' exact element={<NaturalgasMatrix/>}/>
              </Routes>
            </Router>
    </div>
  );
}

export default App;
