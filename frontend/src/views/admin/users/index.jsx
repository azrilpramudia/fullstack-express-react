import SidebarMenu from "../../../components/SidebarMenu";
import { Link } from "react-router-dom";

const UsersIndex = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-3">
          <SidebarMenu />
        </div>
        <div className="col-md-9">
          <div className="card border-0 rounded shadow-sm">
            <div className="card-header d-flex justify-content-between align-items-center">
              <span>Users</span>
              <Link
                to="/admin/users/create"
                className="btn btn-sm btn-success rounded shadow-sm border-0"
              >
                Add User
              </Link>
            </div>
            <div className="card-body">Halaman Users Index</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersIndex;
