import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';

import { Header } from './components/Header';
import { AuthContextProvider } from './hooks/useAuth';

import { GlobalStyles } from './styles/global';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



function App() {
  return (
    <AuthContextProvider>
        <Router>
          <Header />
          <Routes />
          <GlobalStyles />
          <ToastContainer autoClose={3000}/>
        </Router>
    </AuthContextProvider>
  );
}

export default App;
