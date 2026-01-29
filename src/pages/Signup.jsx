import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: "350px" }}>
        <h3 className="text-center mb-3 text-success">Signup</h3>

        <form onSubmit={handleSignup}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Create password"
              required
            />
          </div>

          <button className="btn btn-success w-100" type="submit">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
