import React, { useEffect } from "react";
import Layout from "./Layout";
// import MateriList from "../components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
import ManageJadwals from "../components/managejadwals";

const Managejadwal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
    if (user && user.role !== "dosen") {
      navigate("/dashboard");
    }
  }, [isError, user, navigate]);

  return (
    <Layout>
      <ManageJadwals />
    </Layout>
  );
};

export default Managejadwal;