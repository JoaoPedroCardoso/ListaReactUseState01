import {Routes, Route} from 'react-router-dom'
import ContadorLista from './components/ContadorLista';
import ShowName from './components/ShowName';
import Home from "./components/Home";
import Label from './components/ShowLabel';
import ConcatenaNome from './components/ConcatenaNome';
import AdicionaParagrafo from './components/AdicionaParagrafo';

export default function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}>Home</Route>
      <Route path='/contadorLista' element={<ContadorLista/>}>ContadorLista</Route>
      <Route path='/showName' element={<ShowName/>}>ShowName</Route>
      <Route path='/label' element={<Label/>}>Label</Route>
      <Route path='/concatenanome' element={<ConcatenaNome/>}>ConcatenaNome</Route>
      <Route path='/adicionaparagrafo' element={<AdicionaParagrafo/>}>AdicionaParagrafo</Route>
    </Routes>
    </>
  )
}

