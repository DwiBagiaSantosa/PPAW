import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import MateriGeneral from "./pages/Materi_General";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddMateri from "./pages/AddMateri";
import EditMateri from "./pages/EditMateri";
import Materi from "./pages/Materi";
import EditPengaturanAkun from "./pages/EditPengaturanAkun";
import Pengaturan from "./pages/Pengaturan"
import Jadwal from "./pages/Jadwal"
// import Managejadwal from "./pages/Managejadwal"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/materigeneral" element={<MateriGeneral />} />
          <Route path="/managemateri/add" element={<AddMateri />} />
          <Route path="/managemateri/edit/:id" element={<EditMateri />} />
          <Route path='/managemateri' element={<Materi />} />
          <Route path='/pengaturanakun' element={<Pengaturan/>} />
          <Route path='/pengaturanakun/edit/:id' element={<EditPengaturanAkun />} />
          <Route path='/jadwal' element={<Jadwal/>} />
          {/* <Route path='/managejadwal' element={<Managejadwal/>} /> */}
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
