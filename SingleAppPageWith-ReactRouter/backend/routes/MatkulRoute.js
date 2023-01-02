import express from "express";
import {
    getMatkuls,
    getMatkulbyId,
    createMatkul,
    updateMatkul,
    deleteMatkul
} from "../controllers/Matkuls.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/matkuls',verifyUser, getMatkuls);
router.get('/matkuls/:id',verifyUser, getMatkulbyId);
router.post('/matkuls',verifyUser, adminOnly, createMatkul);
router.patch('/matkuls/:id',verifyUser, adminOnly, updateMatkul);
router.delete('/matkuls/:id',verifyUser, adminOnly, deleteMatkul);

export default router;