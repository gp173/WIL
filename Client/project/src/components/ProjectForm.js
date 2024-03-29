// src/components/ProjectForm.js
import React, { useEffect, useState } from "react";
import "./ProjectForm.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Home from "./Home";

const ProjectForm = () => {
    const [formData, setFormData] = useState({
        ProjectID: "",
        Title: "",
        Outline: "",
        TechSpecification: "",
        Description: "",
        SpecialEquipments: "",
        Confidentiality: false,
        OpenSource: false,
        AdditionalInformation: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));

        console.log(e.target);
    };

    useEffect(() => {
        console.log(formData);
    }, [formData]);
    console.log("HelloWorld");

    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle form submission, e.g., send data to the server
    //     console.log('Form data submitted:', formData);

    const clear = () => {
        setFormData({
            ProjectID: "",
            Title: "",
            Outline: "",
            TechSpecification: "",
            Description: "",
            SpecialEquipments: "",
            Confidentiality: false,
            OpenSource: false,
            AdditionalInformation: "",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to the server endpoint
            const response = await fetch("http://localhost:5001/submitForm", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Form data submitted successfully");
                setFormData({
                    ProjectID: "",
                    Title: "",
                    Outline: "",
                    TechSpecification: "",
                    Description: "",
                    SpecialEquipments: "",
                    Confidentiality: false,
                    OpenSource: false,
                    AdditionalInformation: "",
                });
            } else {
                console.error("Error submitting form data");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div>
            <Home />
            <div id="pf-container">
                <form id="pf-form" onSubmit={handleSubmit}>
                    <label class="pf-label">
                        Project ID:
                        <input
                            type="number"
                            name="ProjectID"
                            value={formData.ProjectID}
                            onChange={handleChange}
                        />
                    </label>

                    <label class="pf-label">
                        Title:
                        <textarea
                            name="Title"
                            value={formData.Title}
                            onChange={handleChange}
                        />
                    </label>

                    <label class="pf-label">
                        Outline:
                        <textarea
                            name="Outline"
                            value={formData.Outline}
                            onChange={handleChange}
                        />
                    </label>

                    <label class="pf-label">
                        Technical Specification:
                        <textarea
                            name="TechSpecification"
                            value={formData.TechSpecification}
                            onChange={handleChange}
                        />
                    </label>

                    <label class="pf-label">
                        Description:
                        <textarea
                            name="Description"
                            value={formData.Description}
                            onChange={handleChange}
                        />
                    </label>

                    <label class="pf-label">
                        Special Equipments:
                        <textarea
                            name="SpecialEquipments"
                            value={formData.SpecialEquipments}
                            onChange={handleChange}
                        />
                    </label>

                    <table>
                        <tr>
                            <td>
                                <label class="pf-label">
                                    <input
                                        type="checkbox"
                                        name="Confidentiality"
                                        checked={formData.Confidentiality}
                                        onChange={handleChange}
                                    />
                                    Confidentiality
                                </label>
                            </td>
                            <td>
                                <label class="pf-label">
                                    <input
                                        type="checkbox"
                                        name="OpenSource"
                                        checked={formData.OpenSource}
                                        onChange={handleChange}
                                    />
                                    Open Source
                                </label>
                            </td>
                        </tr>
                    </table>
                    <label class="pf-label">
                        Additional Information:
                        <textarea
                            name="AdditionalInformation"
                            value={formData.AdditionalInformation}
                            onChange={handleChange}
                        />
                    </label>

                    <Container>
                        <Row>
                            <Col>
                                <Button onClick={() => clear()} variant="primary">
                                    Clear
                                </Button>
                            </Col>
                            <Col>
                                <Button variant="secondary" type="submit">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </form>
            </div>
        </div>
    );
};

export default ProjectForm;
