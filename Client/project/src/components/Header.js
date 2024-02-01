// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

// function Header() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="/">Home</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <NavDropdown title="Gallery" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>

//             <Nav.Link href="/form">Project Form</Nav.Link>
//             <Nav.Link href="/contact">Contact Us</Nav.Link>
//             <Nav.Link href="#link">Links</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;

import "./Header.css";

function Header(props) {
  return (
    <>
      <nav className="global-header navbar navbar-expand-lg">
        {/* <nav className="global-header"> */}
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="https://www.waikato.ac.nz/__data/assets/file/0011/575147/CoA-transparent.svg"
              alt="The University of Waikato - Te Whare Wānanga o Waikato"
              width="225"
              height="125"
              className="d-inline-block align-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="search-button" type="submit">
              <svg
                viewBox="0 0 21 21"
                fill="currentColor"
                height="1em"
                width="1em"
                {...props}
                
                className="search-icon"
              >
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13.5 8.5 A5 5 0 0 1 8.5 13.5 A5 5 0 0 1 3.5 8.5 A5 5 0 0 1 13.5 8.5 z" />
                  <path d="M17.571 17.5L12 12" />
                </g>
              </svg>
              </button>
              
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
