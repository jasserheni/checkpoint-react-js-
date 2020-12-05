import logo from './logo.svg';
import './App.css';
import  * as ReactBootstrap from "react-bootstrap";
import { Navbar, From, Nav,NavDropdown,FormControl,Button } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <ReactBootstrap.Navbar bg="light" expand="lg">
  <ReactBootstrap.Navbar.Brand href="#home">React-Bootstrap</ReactBootstrap.Navbar.Brand>
  <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
  <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
    <ReactBootstrap.Nav className="mr-auto">
      <ReactBootstrap.Nav.Link href="#home">Home</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#link">Link</ReactBootstrap.Nav.Link>
      <ReactBootstrap.NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <ReactBootstrap.NavDropdown.Item href="#action/3.1">Action</ReactBootstrap.NavDropdown.Item>
        <ReactBootstrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootstrap.NavDropdown.Item>
        <ReactBootstrap.NavDropdown.Item href="#action/3.3">Something</ReactBootstrap.NavDropdown.Item>
        <ReactBootstrap.NavDropdown.Divider />
        <ReactBootstrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootstrap.NavDropdown.Item>
      </ReactBootstrap.NavDropdown>
    </ReactBootstrap.Nav>
    <ReactBootstrap.Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </ReactBootstrap.Form>
  </ReactBootstrap.Navbar.Collapse>
</ReactBootstrap.Navbar>
    </div>
  );
}

export default App;
