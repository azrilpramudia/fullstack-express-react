import { Link } from "react-router-dom";

const SidebarMenu = () => {
  return (
    <div className="card border-0 rounded shadow-sm">
      <div className="card-header">Main Menu</div>
      <div className="card-body">
        <div className="list-group">
          <Link
            to="/admin/dashboard"
            className="list-group-item list-group-item-action"
          >
            Dashboard
          </Link>
          <Link
            to="/admin/users"
            className="list-group-item list-group-item-action"
          >
            Users
          </Link>
          <a
            href="#"
            className="list-group-item list-group-item-action"
            style={{ cursor: "pointer" }}
          >
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
