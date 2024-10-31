import { Container } from "reactstrap";
import Base from "../components/Base";
import NewFeed from "../components/NewFeed";
import Login from "./Login";
import Signup from "./Signup";

const Home = () => {
  return (
    <Base>
      <Container className="mt-3">
        {/* <NewFeed /> */}
        <Login />
        {/* <Signup /> */}
      </Container>
    </Base>
  )
}

export default Home;