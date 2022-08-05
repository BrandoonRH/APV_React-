import Paciente from "./Paciente"


const ListadoPacientes = ({pacientes, setPaciente, deletePaciente}) => {
 

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">

      { pacientes && pacientes.length ? (
          <>
              <h2 className='font-black text-3xl text-center'>Listado 
              Pacientes</h2>

              <p className='text-lg mt-5 text-center mb-10'>
                Administra tus {""}
                <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
              </p>

              {pacientes.map( paciente => (
                <Paciente
                  key = {paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  deletePaciente={deletePaciente}
                />
              ) )}
          </>
        ) : (
          <>
            <h2 className='font-black text-3xl text-center'>Aún no hay Pacientes</h2>

            <p className='text-lg mt-5 text-center mb-10'>
              Comienza a Agregar{""}
              <span className='text-indigo-600 font-bold'> Pacientes y Citas</span>
            </p>
          </>
        )}
     
       

    </div>
  )
}

export default ListadoPacientes