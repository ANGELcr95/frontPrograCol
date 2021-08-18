import { useHistory, useLocation} from 'react-router-dom';
import useAuth from '../Auth/useAuth';

const Pages = ()  => {
  

  const auth = useAuth()
  const history =  useHistory()
  const location = useLocation()

  const handleFiguras =()=> {
   history.push(`${location.pathname}/figura`)
  }
  return (
    <div className="Pages">
      <h1 style={{color: 'white'}}>{auth.user}</h1>
      <button onClick={handleFiguras}
      >ListarFiguras</button>
       <button onClick={auth.logout}
      >Salir</button>
    </div>

  );
}

export default Pages;
