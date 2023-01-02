import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoNewspaperSharp, IoHome, IoLogOut,IoCalendar, IoBook, IoSettingsSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import logo from "../dp.png";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  
  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <aside className="menu pl-2 has-shadow">
              <img src={logo} width="200" height="100" alt="logo" />
        <form action="">
          <ul>
            <li><center>
            
            </center></li>
            <li><center>{user && user.name}</center></li>
            <li><center>({user && user.role})</center></li>
            <li><center>{user && user.nim}</center></li>
          </ul>
        </form>
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/dashboard"}>
              <IoHome /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={"/materigeneral"}>
              <IoNewspaperSharp /> Materi
            </NavLink>
          </li>
        </ul>

        {user && user.role === "dosen" && (
          <div>
            <p className="menu-label">Dosen</p>
            <ul className="menu-list">
              <li>
                <NavLink to={"/managemateri"}>
                  < IoBook /> Manage Materi
                </NavLink>
              </li>
              <li>
                <NavLink to={"/jadwal"}>
                  <IoCalendar /> Jadwal Mata Kuliah
                </NavLink>
              </li>
            </ul>
          </div>
        )}

        {user && user.role === "admin" && (
          
          <div>
            <p className="menu-label">Admin</p>
            <ul className="menu-list">
            <li>
                <NavLink to={"/jadwal"}>
                  <IoCalendar /> Jadwal Mengajar
                </NavLink>
              </li>
              <li>
                <NavLink to={"/users"}>
                  <IoPerson /> Users
                </NavLink>
              </li>
            </ul>
          </div>
          
        )}

        <p className="menu-label">Settings</p>
        <ul className="menu-list"><li>
              <li>
                <NavLink to={`/pengaturanakun/edit/:id`}>
                  <IoSettingsSharp /> Akun
                </NavLink>
              </li>
          </li>
          <li>
            <button onClick={logout} className="button is-white">
              <IoLogOut /> Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
