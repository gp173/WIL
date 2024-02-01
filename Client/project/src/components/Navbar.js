// import React from "react";
// import { Nav } from "react-bootstrap";

// const Navbar = () => {
//   return (
//     <Nav variant="pills" className="flex-column">
//       <Nav.Item>
//         <Nav.Link eventKey="what-is-wil">What is WIL</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="benefits">Benefits</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="engage-with-us">Engage with Us</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="example-stories">Example Stories</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//        <Nav.Link eventKey="companies-collaboration"> Companies Collaboration </Nav.Link>
//      </Nav.Item>
//       <Nav.Item>
//        <Nav.Link eventKey="submit-a-project">Submit a Project</Nav.Link>
//        </Nav.Item>

//       <Nav variant="pills" className="flex-column">
//         <Nav.Item>
//           <Nav.Link eventKey="project-example">Project Example</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="submit-a-project">Submit a Project</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="example-companies-partners">
//             Example Companies Partners
//           </Nav.Link>
//         </Nav.Item>
//       </Nav>

//       <Nav.Item>
//         <Nav variant="pills" className="flex-column">
//           <Nav.Item>
//             <Nav.Link eventKey="benifts-for-students">
//               Benefits for students
//             </Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link eventKey="papers">Papers</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link eventKey="example-stores">Example stores</Nav.Link>
//           </Nav.Item>
//         </Nav>
//       </Nav.Item>
//     </Nav>
//   );
// };

// export default Navbar;

// import React from "react";
// import { Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const Navbar = ({ activeTab }) => {
//   const renderSubtabs = () => {
//     switch (activeTab) {
//       case "general":
//         return (
//           <Nav variant="pills" className="flex-column">
//             {/* Subtabs for the "General" tab */}
//             <Nav.Item className="leftmargin">
//               <Nav.Link eventKey="what-is-wil">
//                 <Link to="/gwil">What is WIL</Link>
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item className="leftmargin">
//               <Nav.Link eventKey="benefits">
//                 <Link to="/benefits">Benefits</Link>
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item className="leftmargin">
//               <Nav.Link eventKey="engage-with-us">
//                 {" "}
//                 <Link to="/engage">Engage with Us </Link>
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item className="leftmargin">
//               <Nav.Link eventKey="example-stories">
//                 {" "}
//                 <Link to="/ges"> Example Stories </Link>
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item className="leftmargin">
//               <Nav.Link eventKey="companies-collaboration">
//                 <Link to="/gcc"> Companies Collaboration </Link>
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item className="leftmargin">
//               <Nav.Link eventKey="submit-a-project"> <Link to="/gsap"> Submit a Project </Link> </Nav.Link>
//             </Nav.Item>
//           </Nav>
//         );

//       case "employers":
//         return (
//           <Nav variant="pills" className="flex-column">
//             {/* Subtabs for the "Employers" tab */}
//             <Nav.Item className="leftmargin">
//               <Nav.Link eventKey="what-is-wil"> <Link to="/ewil"> What is WIL </Link> </Nav.Link>
//             </Nav.Item>
//             <Nav.Item className="leftmargin">
//               <Nav.Link eventKey="benefits-for-employer"> <Link to="/ebenefits"> Benefits for Employer </Link> </Nav.Link>
//             </Nav.Item>
//             <Nav.Item className="leftmargin">
//               <Nav.Link eventKey="project-example"> <Link to="/pe"> Project Example </Link> </Nav.Link>
//             </Nav.Item>
//             <Nav.Item className="leftmargin">
//               <Nav.Link eventKey="submit-a-project"> <Link to="/esap"> Submit a Project </Link> </Nav.Link>
//             </Nav.Item>
//             <Nav.Item className="leftmargin">
//               <Nav.Link eventKey="companies-partners"> <Link to="/cp"> Companies Partners </Link> </Nav.Link>
//             </Nav.Item>
//           </Nav>
//         );

//       case "students":
//         return (
//           <Nav variant="pills" className="flex-column">
//             {/* Subtabs for the "Students" tab */}
//             <Nav.Item className="leftmargin">
//               <Nav.Link eventKey="what-is-wil"> <Link to="/swil"> What is WIL </Link> </Nav.Link>
//             </Nav.Item >
//             <Nav.Item className="leftmargin">
//               <Nav.Link eventKey="benifts-for-students"> <Link to="/sbenefits"> Benefits for students </Link> </Nav.Link>
//             </Nav.Item>
//             <Nav.Item className="leftmargin">
//               <Nav.Link eventKey="papers"> <Link to="/p"> Papers </Link> </Nav.Link>
//             </Nav.Item>
//             <Nav.Item className="leftmargin">
//               <Nav.Link eventKey="example-stories"> <Link to="/es"> Example Stories </Link> </Nav.Link>
//             </Nav.Item>
//           </Nav>
//         );

//         case "contact-us":
//           return (
//             <Nav variant="pills" callsName="flex-column">
//               <Nav.Item>
//                 <Nav.Link eventKey="contact-us"> <Link to="/contact-us"> Contact Us </Link></Nav.Link>
//               </Nav.Item>
//             </Nav>
//           );

//       default:
//         return null;
//     }
//   };

//   return <div>{renderSubtabs()}</div>;
// };

// export default Navbar;
