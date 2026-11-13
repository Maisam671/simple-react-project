
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="card">

        <span className="tag">SECOND PAGE</span>

        <h1>Discover More ✨</h1>

        <p>
          This is the second page of my website. You can navigate back to the first page by clicking the button below. This website uses React Router for navigation.
        </p>

        <button
          className="btn btn-back"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </button>

      </div>
    </div>
  );
}

export default About;
