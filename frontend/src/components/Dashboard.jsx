import "bootstrap-icons/font/bootstrap-icons.css";

function Dashboard() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-4 text-white min-vh-100">
              <a
                href="/"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span className="fs-5 d-none d-sm-inline">Admin Dashboard</span>
              </a>
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li>
                  <a
                    href="#submenu1"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle text-white"
                  >
                    <i className="fs-4 bi-speedometer2"></i>
                    <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-0 align-middle text-white">
                    <i className="fs-4 bi-people"></i>
                    <span className="ms-1 d-none d-sm-inline">
                      Manage Employees
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#submenu1"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle text-white"
                  >
                    <i className="fs-4 bi-person"></i>
                    <span className="ms-1 d-none d-sm-inline">Profile</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#submenu1"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle text-white"
                  >
                    <i className="fs-4 bi-power"></i>
                    <span className="ms-1 d-none d-sm-inline">Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col py-3">Content area...</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
