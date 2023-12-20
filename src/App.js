
import './App.css';
import {
  ChakraProvider,Box
} from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
//import Navbar from './componets/Navbar'
import SelectRole from './pages/SelectRole';
import Coach from './pages/Login/Coach';
import Scout from './pages/Login/Scout';
import Player from './pages/Login/Player';
import Login from './pages/Login/Login';
import ComingSoon from './pages/ComingSoon';
import ErrorPage from './pages/404Page';
import Dashboard from './dashboard/pages/Dashboard';
import Players from './dashboard/pages/Player'
import ProtectedNav from './componets/ProtectedNav';
import ProtectedLayout from './dashboard/components/ProtectedLayout';
import Tatics from './dashboard/pages/Tatics';
import Matches from './dashboard/pages/Matches';
import Notifications from './dashboard/pages/Notifications';
import Settings from './dashboard/pages/Settings';

function App() {
  return (
    <ChakraProvider>
      <Box bg='#1A1818'>
        <Router>
           {/* <Navbar/>  */}
          <Routes>
            <Route element={<ProtectedNav/>}>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/contacts' element={<Contact/>} />
              <Route path='/services' element={<Services/>} />
              <Route path='/login' element={<Login/>} />
            </Route>
            <Route path='/select-role' element={<SelectRole/>} />
            <Route path='/coach-login' element={<Coach/>} />
            <Route path='/scout-login' element={<Scout/>} />
            <Route path='/player-login' element={<Player/>} />
            
            <Route path='/coming' element={<ComingSoon/>} />
            <Route path='*' element={<ErrorPage/>} />
            <Route element={<ProtectedLayout/>}>
              <Route path='/dashboard' element={<Dashboard/>} />
              <Route path='/player' element={<Players/>} />
              <Route path='/tactics' element={<Tatics/>} />
              <Route path='/matches' element={<Matches/>} />
              <Route path='/notifications' element={<Notifications/>} />
              <Route path='/settings' element={<Settings/>} />
            </Route>
          </Routes>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
