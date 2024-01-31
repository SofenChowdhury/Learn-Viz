// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'reactstrap';
import Base from './components/Base';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home  from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Learn from './pages/Learn';
import Service from './pages/Service';
import ContactUs from './pages/ContactUs';
import UserDashboard from './pages/user-route/UserDashboard';
import PrivateRoutes from './components/PrivateRoutes';
import ProfileInfo from './pages/user-route/ProfileInfo';
import PostPage from './pages/PostPage';
import UserProvider from './context/UserProvider';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <ToastContainer position='bottom-right' />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/learn" element={<Learn/>} />
            <Route path="/service" element={<Service/>} />
            <Route path="/contactus" element={<ContactUs/>} />
            <Route path="/posts/:postId" element={<PostPage/>} />
            {/* Private Routes  */}
            <Route path="/user" element={<PrivateRoutes />}>
              <Route path="dashboard" element={<UserDashboard/>} />
              <Route path="profile-info" element={<ProfileInfo/>}/>
            </Route>
            
          </Routes>
        </BrowserRouter>
      </UserProvider>

    </div>
  );
}

export default App;
