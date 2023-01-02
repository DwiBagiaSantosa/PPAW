import React from "react";
import { useSelector } from "react-redux";
import { NavLink} from "react-router-dom";

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
<>
<div>
      <h1 className="title">Dashboard</h1>
      <h2 className="subtitle">
        Welcome Back <strong>{user && user.name}</strong>
      </h2> 
    </div>
    <section className="section has-background-light is-clickable">
    <div className="container ">
      <div className="title has-text-centered is-size-4">
        <div className="columns mt-5 is-8 is-variable is-justify-content-center">
          <div className="column is-4-tablet is-3-desktop ">
          <NavLink to={"/materigeneral"}>
            <div className="card has-background-primary-light">
              <div className="card-image has-text-centered px-6">
              </div>
              <div className="card-content">Lihat Materi</div>
              <div className="title is-size-5"></div>
            </div>
            </NavLink>
          </div>
          {user && user.role === "dosen" && (
          <div className="column is-4-tablet is-3-desktop ">
          <NavLink to={"/managemateri"}>
            <div className="card has-background-primary-light">
              <div className="card-image has-text-centered px-6">
              </div>
              <div className="card-content">Manage Materi</div>
              <div className="title is-size-5"></div>
            </div>
            </NavLink>
          </div>)}

          {user && user.role === "admin" && ( 
          <div className="column is-4-tablet is-3-desktop ">
          <NavLink to={"/users"}>
            <div className="card has-background-primary-light">
              <div className="card-image has-text-centered px-6">
              </div>
              <div className="card-content">Data Users</div>
              <div className="title is-size-5"></div>
            </div>
            </NavLink>
          </div>)}

        <div className="column is-4-tablet is-3-desktop ">
          <NavLink to={"/pengaturanakun"}>
            <div className="card has-background-primary-light">
              <div className="card-image has-text-centered px-6">
              </div>
              <div className="card-content">Pengaturan</div>
              <div className="title is-size-5"></div>
            </div>
            </NavLink>
          </div>
          
        </div>
      </div>
    </div>
  </section>
  </>
  );
};

export default Welcome;
