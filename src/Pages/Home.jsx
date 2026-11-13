
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="card">

        <span className="tag">WELCOME TO MY WEBSITE</span>

        <h1>Hello, Welcome!</h1>

        <p>
          This is the first page of my website. You can navigate to the second page by clicking the button below. This website uses React Router for navigation.
        </p>

        <button
          className="btn"
          onClick={() => navigate("/about")}
        >
          Explore Page 2 →
        </button>

      </div>
    </div>
  );
}

export default Home;
