import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import { LoginPage } from "./LoginPage";

export default function Auth() {
  return (
    <div>
      <Container>
        <LoginPage></LoginPage>
      </Container>
    </div>
  );
}
