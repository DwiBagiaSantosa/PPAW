import express from "express";
import {
    getJadwalDosens,
    getJadwalDosenbyId,
    createJadwalDosen,
    updateJadwalDosen,
    deleteJadwalDosen
} from "../controllers/JadwalDosens.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";
const router = express.Router();

router.get('/jadwal_dosen', verifyUser, getJadwalDosens);
router.get('/jadwal_dosen/:id', verifyUser,  getJadwalDosenbyId);
router.post('/jadwal_dosen', verifyUser, adminOnly, createJadwalDosen);
router.patch('/jadwal_dosen/:id', verifyUser, adminOnly, updateJadwalDosen);
router.delete('/jadwal_dosen/:id', verifyUser, adminOnly, deleteJadwalDosen);

export default router;