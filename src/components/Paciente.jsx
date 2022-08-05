

const Paciente = ({paciente, setPaciente, deletePaciente}) => {
    
    const {nameMascota, namePropietario, email, fecha, sintomas, id} = paciente

    const handleDelete = () => {
        Swal.fire({
            title: '¿Desea Eliminar el Paciente?',
            text: "Esta acción no se podra revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!', 
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {

              deletePaciente(id)
              Swal.fire(
                'Eliminado',
                'Paciente Eliminado Exitosamente',
                'success'
              )
            }

          })
    }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">

        <p className="font-bold mb-3 text-gray-800 uppercase">Nombre: {""}
            <span className="font-normal normal-case">{nameMascota}</span>
        </p>
        <p className="font-bold mb-3 text-gray-800 uppercase">Propietario: {""}
            <span className="font-normal normal-case">{namePropietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-800 uppercase">Email: {""}
            <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-800 uppercase">Fecha: {""}
            <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-800 uppercase">Sintomas: {""}
            <span className="font-normal normal-case">
            {sintomas}
            </span>
        </p>

        <div className="flex justify-between mt-10">
            <button onClick={() => setPaciente(paciente)} type="button" className="flex justify-between py-2 px-10 bg-indigo-500 hover:bg-indigo-800 text-white font-bold uppercase rounded-lg cursor-pointer hover:-translate-y-2 transition-all">editar
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            </button>

            <button onClick={handleDelete} type="button" className="flex justify-between py-2 px-10 bg-red-500 hover:bg-red-800 text-white font-bold uppercase rounded-lg cursor-pointer hover:-translate-y-2 transition-all">eliminar 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        </div>

    </div>
    
  )
}

export default Paciente