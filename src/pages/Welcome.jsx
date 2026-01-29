import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="container-fluid p-4">
      {/* Top Bar */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="text-primary">My Dashboard</h4>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Content */}
      <div className="row">
        <div className="col-md-6">
          <div className="card p-3 shadow">
            <h5>Welcome 👋</h5>
            <p>
              You have successfully logged in. This is your home page.
            </p>
            <p>
              You can add more features like profile, settings, or data here.
            </p>
          </div>
        </div>

        <div className="col-md-6 mt-3 mt-md-0">
          <div className="card p-3 shadow">
            <h5>Application Info</h5>
            <ul>
              <li>React + Vite</li>
              <li>Bootstrap UI</li>
              <li>Login & Logout flow</li>
              <li>Deployed on Netlify</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
