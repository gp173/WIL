import Home from "../../components/Home";
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';

const SP = () => {
    // Assuming you have state to store the retrieved projects
const [projects, setProjects] = useState([]);

const getAllProjects = async () => {
    try {
      const response = await fetch("http://localhost:5001/getAllProjects", {
        method: "GET",
      });
  
      console.log("Response status:", response.status);
  
      if (response.ok) {
        const data = await response.json();
        console.log("Projects retrieved successfully:", data);
        setProjects(data);
      } else {
        console.error("Error retrieving projects");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

// useEffect to trigger the GET request on component load
useEffect(() => {
  getAllProjects();
}, []); // Empty dependency array ensures it only runs once on component mount

  return (
    <>
      <Home />
      <div className="page-div">
        <div>
          <h3 className="sheader">Projects</h3>
        </div>

        <div>
        <Table bordered hover >
      <thead>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>OUTLINE</th>
          <th>TECHNICAL SPECIFICATION</th>
          <th>DESCRIPTION</th>
          <th>SPECIAL EQUIPMENTS</th>
          <th>CONFIDENTIALITY</th>
          <th>OPEN SOURCE</th>
          <th>ADDITIONAL INFORMATION</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => (
          <tr key={project.ProjectID}>
            <td>{project.ProjectID}</td>
            <td>{project.Title}</td>
            <td>{project.Outline}</td>
            <td>{project.TechSpecification}</td>
            <td>{project.Description}</td>
            <td>{project.SpecialEquipments}</td>
            <td>{project.Confidentiality === 1 ? 'Yes' : 'No'}</td>
            <td>{project.OpenSource === 1 ? 'Yes' : 'No'}</td>
            <td>{project.AdditionalInformation}</td>
          </tr>
        ))}
      </tbody>
    </Table>
        </div>
      </div>
    </>
  );
};

export default SP;
