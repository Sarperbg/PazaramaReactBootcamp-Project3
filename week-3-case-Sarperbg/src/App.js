import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Auth from './auth';
import HelloPage from './Pages/HelloPage/HelloPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import SignInPage from './Pages/SignInPage'
function App() {
  return (
    <div>
    <Router>
        <Routes>
          <Route exact path="/" element={<HelloPage/>}/>
          <Route exact path="/login" element={<LoginPage/>}/>
          <Route exact path="/login/register" element={<RegisterPage/>}/>
          <Route exact path="/login/sign-in" element={<SignInPage/>}/>

        </Routes>
    </Router>
  </div>
  );
}

export default App;
