import { Link } from "react-router-dom";
import Home from "../../components/Home";

const GSAP = () => {
  return (
    <>
      <Home />
      <div className="page-div">
        <div>
          <h2 className="gheader">Submit a Project </h2>
        </div>

        <div>
          Ready to showcase your work? Submit a project and be part of our
          growing community! Whether it's a groundbreaking idea, a creative
          endeavor, or a problem-solving initiative, we welcome your
          contributions. Share your project with us, and let's celebrate
          innovation together.
        </div>

        <div style={{ marginTop: "1rem" }}>
          
        </div>
        <Link to="/form">Please click here to submit a project</Link>
      </div>
    </>
  );
};

export default GSAP;
