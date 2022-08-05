

export const Alert = ({children}) => {
  return (
    <div className='bg-red-300 text-red-700 text-center p-3 uppercase font-black mb-3 rounded-md'>
              <p>
                  {children}
              </p>
    </div>
  )
}

export default Alert; 
