// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import navLogo from "@/../public/images/WITL-logo.webp";
import Image from "next/image";

const Navigation = () => {
  return (
    <Navbar expand="md" className="bg-witl-purple-200">
      <Container>
        <Navbar.Brand href="/">
          <Image src={navLogo} alt="WITL logo" />
          <div className="">
            <div>WOMXN IN THE LAW</div>
            <div>EST. 2022</div>
          </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Navigation;
