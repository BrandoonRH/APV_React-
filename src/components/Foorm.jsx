import React from 'react'
import {useState, useEffect} from 'react'
import Alert from './Alert';

function Foorm({pacientes, setPacientes, paciente, setPaciente }) {
  const [nameMascota, setNameMascota] = useState('');
  const [namePropietario, setNamePropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

useEffect(() => {
  if(Object.keys(paciente).length > 0 ){
      setNameMascota(paciente.nameMascota)
      setNamePropietario(paciente.namePropietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
  }

},[paciente])

  const generateId = ()  => {
      const randomA = Math.random().toString(36).substring(2); 
      const randomB = Date.now().toString(36); 
      return randomA + randomB; 
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    //Validar Formulario 
    if([nameMascota, namePropietario, email, fecha, sintomas].includes('')){
      console.log('Campos Vacios'); 
      setError(true)
      return
    }
    setError(false)
    //Objeto de Paciente
    const objetoPciente = {
      nameMascota, 
      namePropietario, 
      email, 
      fecha, 
      sintomas,
    
    }

    if(paciente.id){
      //Edit
      objetoPciente.id = paciente.id;
      const pacientesUpdate = pacientes.map( pacienteElemet => pacienteElemet.id === paciente.id ? objetoPciente : pacienteElemet);
      setPacientes(pacientesUpdate);
      setPaciente({})

    }else{
      //Create
      objetoPciente.id = generateId(); 
      setPacientes([...pacientes, objetoPciente]); 

    }
    //Resert Form
    setNameMascota('');
    setNamePropietario(''); 
    setEmail('');
    setFecha('');
    setSintomas('');  
  }

  return (
    <div className='md:w-1/2  lg:w-2/5'>

      <h2 className='font-black text-3xl text-center'>Seguimiento 
       Pacientes</h2>

       <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y {""}
        <span className='text-indigo-600 font-bold'>Administralos</span>
       </p>

       {error && <Alert><p>'Todos los campos son obligatoios'</p></Alert>}

       <form onSubmit={handleSubmit} action="" className='bg-white shadow-md rounded-lg py-10 px-5 mx-5 mb-10'>
          <div className='mb-5'>
            <label htmlFor="nameMascota" className='block text-gray-800 uppercase font-bold'>Nombre Mascota: </label>
            <input type="text"
                   name="nameMascota"   
                   id="nameMascota" 
                   className='border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md' 
                   placeholder='Nombre de la Mascota' 
                   value={nameMascota}
                   onChange={ (e) => {
                    setNameMascota(e.target.value)
                   }}
            />
          </div>

          <div className='mb-5'>
            <label htmlFor="namePropietario" className='block text-gray-800 uppercase font-bold'>Nombre Propietario: </label>
            <input type="text"
                   name="namePropietario"   
                   id="namePropietario" 
                   className='border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md' 
                   placeholder='Nombre del Propietario' 
                   value={namePropietario}
                   onChange={ (e) => {
                    setNamePropietario(e.target.value)
                   }}
            />
          </div>

          <div className='mb-5'>
            <label htmlFor="email" className='block text-gray-800 uppercase font-bold'>Email: </label>
            <input type="email"
                   name="email"   
                   id="email" 
                   className='border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md' 
                   placeholder='Email' 
                   value={email}
                   onChange={ (e) => {
                    setEmail(e.target.value)
                   }}
            />
          </div>

          <div className='mb-5'>
            <label htmlFor="fecha" className='block text-gray-800 uppercase font-bold'>fecha: </label>
            <input type="date"
                   name="fecha"   
                   id="fecha" 
                   className='border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md' 
                   placeholder='Email' 
                   value={fecha}
                   onChange={ (e) => {
                    setFecha(e.target.value)
                   }}
            />
          </div>

          <div className='mb-5'>
            <label htmlFor="sintomas" className='block text-gray-800 uppercase font-bold'>Sintomas: </label>
            <textarea 
                   id="sintomas" 
                   className='border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md' 
                   placeholder='Describe los Sintomas' 
                   value={sintomas}
                   onChange={ (e) => {
                    setSintomas(e.target.value)
                   }}
            />
          </div>

          <input type="submit"
                 value={paciente.id ? 'Editar Paciente' : 'Guardar Paciente'}
                 className='bg-indigo-500 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all' />

       </form>

    </div>
  )
}

export default Foorm
