import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import HomePage from './Component/HomePage';
import CreateAccountPage from './Component/CreateAccountPage';
import LoginPage from './Component/LoginPage';
import UserDataPage from './Component/UserDataPage';

function App() {
  const handleCreateAccount = (formData) => {
    console.log('Form data submitted:', formData);
  };

  const handleLogin = (email, password) => {
    console.log("Login", email, password)
  };

  const handleData = () => {
    console.log("handling data")
  };

  return (
    <Router>
        <nav>
          <ul style={{ listStyleType: "none",textAlign:'center'  }}>
            <li style={{display: 'inline', marginRight:20}}>
              <NavLink to="/"><strong>Home</strong></NavLink>
            </li>
            <li style={{display: 'inline', marginRight:20}}>
              <NavLink to="/create-account"><strong>Sing UP</strong></NavLink>
            </li>
            <li style={{display: 'inline'}}>
              <NavLink to="/LoginPage"><strong>Log IN</strong></NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/create-account" element={<CreateAccountPage onCreateAccount={handleCreateAccount}/>} />
          <Route path="/LoginPage" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/user-data" element={<UserDataPage userData={handleData}/>} />
        </Routes>
    </Router>
  );
}

export default App;
