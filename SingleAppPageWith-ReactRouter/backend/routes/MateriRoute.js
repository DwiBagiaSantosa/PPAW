import express from "express";
import {
    getMateris,
    getMateribyId,
    createMateri,
    updateMateri,
    deleteMateri
} from "../controllers/Materis.js";
import { verifyUser, dosenOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/materis',verifyUser,  getMateris);
router.get('/materis/:id',verifyUser, getMateribyId);
router.post('/materis',verifyUser, dosenOnly, createMateri);
router.patch('/materis/:id',verifyUser, dosenOnly, updateMateri);
router.delete('/materis/:id',verifyUser, dosenOnly, deleteMateri);

export default router;