// import logo from './logo.svg';
// import './App.css';
import userContext from "../context/userContext";
import Base from "../components/Base";

const About = () => {
  return (
    <userContext.Consumer>
      {(user)=>(
        <Base>
          <h1>about page</h1>
          <p>react website</p>
          <h2>welcome: {user.name}</h2>
        </Base>
      )}
    </userContext.Consumer>
  );
};

export default About;
  