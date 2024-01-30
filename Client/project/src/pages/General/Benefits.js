import Home from "../../components/Home";

const Benefits = () => {
  return (
    <>
      <Home />
      <div style={{ margin: "1rem" }}>
        <div>
          <h2 className="gheader">Benefits for Students:</h2>
        </div>

        <h5 className="gheader">Application of Knowledge:</h5>
        <ul>
          <li>
            WIL allows students to apply classroom knowledge in real-world
            settings, reinforcing their learning.
          </li>
        </ul>

        <h5 className="gheader">Skill Development:</h5>
        <ul>
          <li>
            Students acquire practical skills such as communication,
            problem-solving, and teamwork, enhancing their employability.
          </li>
        </ul>

        <h5 className="gheader">Industry Exposure:</h5>
        <ul>
          <li>
            Students gain insight into industry practices, trends, and
            expectations, aiding in career decision-making.
          </li>
        </ul>

        <h5 className="gheader">Networking:</h5>
        <ul>
          <li>
            WIL provides networking opportunities with professionals,
            potentially leading to mentorship or job offers.
          </li>
        </ul>

        <h2 className="gheader"> Benefits for Organizations: </h2>

        <h5 className="gheader"> Access to Talent:</h5>
        <ul>
          <li>
            {" "}
            Organizations identify and recruit talented individuals early,
            creating a pipeline for future skilled employees.
          </li>
        </ul>

        <h5 className="gheader">Fresh Perspectives:</h5>
        <ul>
          <li>
            Students bring new ideas and creativity to the workplace,
            contributing to innovation.
          </li>
        </ul>

        <h5 className="gheader">Cost-Effective Recruitment:</h5>
        <ul>
          <li>
            WIL helps assess potential employees without the cost of traditional
            recruitment.
          </li>
        </ul>

        <h5 className="gheader">Knowledge Transfer:</h5>
        <ul>
          <li>
            Organizations benefit from the transfer of academic knowledge into
            practical skills.
          </li>
        </ul>

        <h5 className="gheader">Enhanced Productivity:</h5>
        <ul>
          <li>
            Students contribute to tasks and projects, increasing overall
            productivity.
          </li>
        </ul>

        <h5 className="gheader">Community Engagement:</h5>
        <ul>
          <li>
            Partnering with educational institutions strengthens community ties
            and enhances the organization's reputation.
          </li>
        </ul>

        <div>
          In short, work-integrated learning mutually benefits students by
          enhancing skills and employability, while organizations gain access to
          talent, fresh perspectives, and cost-effective recruitment.
        </div>
      </div>
    </>
  );
};

export default Benefits;
