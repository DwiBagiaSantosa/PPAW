import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddProduct = () => {
  const [name, setName] = useState("");
  const [link, setPrice] = useState("");
  const [matkul, setMatkul] = useState("");
  const [tenggat, setTenggat] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/materis", {
        nama_materi: name,
        link_materi: link,
        mata_kuliah: matkul,
        tenggat_waktu: tenggat,
      });
      navigate("/managemateri");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Materi</h1>
      <h2 className="subtitle">Tambah Materi</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveProduct}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama Materi"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Link Materi</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={link}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Link materi"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Mata Kuliah</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={matkul}
                    onChange={(e) => setMatkul(e.target.value)}
                    placeholder="Link"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Waktu Tenggat</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={tenggat}
                    onChange={(e) => setTenggat(e.target.value)}
                    placeholder="Link"
                  />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddProduct;
