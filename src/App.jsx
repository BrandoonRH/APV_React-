import { useState, useEffect } from 'react'
import Header from './components/Header'
import Foorm from './components/Foorm'
import ListadoPacientes from './components/ListadoPacientes'

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({}); 

  useEffect(() => {
   const obtenerLS = () => {
    const pacientesls = JSON.parse(localStorage.getItem('pacientes')) ?? []; 
   setPacientes(pacientesls)
   }
   obtenerLS(); 
  }, [])

  useEffect(() => {
      localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]) 

  const deletePaciente = (id) => {
    const pacientesUpdate = pacientes.filter(paciente => paciente.id !== id); 
    setPacientes(pacientesUpdate); 
  }

  return (

    <div className="container mx-auto mt-20">
        <Header/>

        <div className='mt-12 md:flex '>
          <Foorm 
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          />
          <ListadoPacientes 
            pacientes={pacientes}
            setPaciente={setPaciente}
            deletePaciente = {deletePaciente}
          />
        </div>

        

    </div>

  )
}

export default App
