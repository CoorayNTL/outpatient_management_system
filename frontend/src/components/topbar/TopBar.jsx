import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './topbar.css'
import { logout } from '../../context/commonFunctions'
export default function TopBar(props) {
  const toggleClass = () => {
    props.setActive(!props.isActive)
  }

  return (
    <>
      <div className="col-md-12 m-0 p-0">
        <nav className="navbar mb-4 font-color">
          <div id="tcontainer" className="container container-topbar">
            <div className="top-logo d-flex justify-content-between">
              <a href="#" onClick={toggleClass} className="navbar-brand" id="sidebar-toggle">
                <FontAwesomeIcon icon="fas fa-bars" />
              </a>
            </div>
            <form className="d-flex search-box">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn font-color topbar-hover " type="submit">
                <i className="fas fa-search"></i>
              </button>
            </form>
            <div className="btn-group ">
              <button
                type="button"
                className="btn dropdown-toggle d-flex align-items-center font-color topbar-hover p-0"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-user-circle fa-2x tcontainerbtn" id="iprofile"></i> Amal
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Setting
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={logout}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
