import { useContext } from 'react'
import { AuthContext } from 'src/contexts/auth'

const useAuth = () => {
  const context = useContext(AuthContext)

  return context
}
export default useAuth