import JadwalDosen from "../models/JadwalDosenModel.js";
import User from "../models/UserModel.js";

export const getJadwalDosens = async(req, res) =>{
    try {
        let response;
        if(req.role === "admin"){
            response = await JadwalDosen.findAll({
                attributes:['uuid', 'matakuliah', 'kelas','sks', 'ruang', 'hari', 'waktu'],
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }else{
            response = await JadwalDosen.findAll({
                attributes:['uuid', 'matakuliah', 'kelas','sks', 'ruang', 'hari', 'waktu'],
                include:[{
                    model: User,
                    attributes:['name']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getJadwalDosenbyId = async(req, res) =>{
    try {
        const response = await JadwalDosen.findOne({
            attributes:['uuid', 'matakuliah', 'kelas','sks', 'ruang', 'hari', 'waktu'],
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createJadwalDosen = async(req, res) =>{
    const {matakuliah, kelas, sks, ruang, hari, waktu} = req.body;
    try {
        await JadwalDosen.create({
            matakuliah: matakuliah,
            kelas: kelas,
            sks: sks,
            ruang: ruang,
            hari: hari,
            waktu: waktu,
            userId: req.userId
        });
        res.status(201).json({msg: "Jadwal Dosen Berhasil ditambahkan"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateJadwalDosen = async(req, res) =>{
    try {
        const jadwal_dosen = await JadwalDosen.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!jadwal_dosen) return res.status(404).json({msg: "jadwal tidak ditemukan"});
        const {matakuliah, kelas, sks, ruang, hari, waktu} = req.body;
        if(req.role === "dosen"){
            await jadwal_dosen.update({matakuliah, kelas, sks, ruang, hari, waktu},{
                where:{
                    id: jadwal_dosen.id
                }
            });
        }else{
            if(req.userId !== jadwal_dosen.userId) return res.status(403).json({msg: "Akses terlarang"});
            await JadwalDosen.update({matakuliah, kelas, sks, ruang, hari, waktu},{
                where:{
                    [Op.and]:[{id: jadwal_dosen.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Jadwal Berhasil diupdate"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteJadwalDosen = async(req, res) =>{
    try {
        const jadwal_dosen = await JadwalDosen.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!jadwal_dosen) return res.status(404).json({msg: "Jadwal tidak ditemukan"});
        const {matakuliah, kelas, sks, ruang, hari, waktu} = req.body;
        if(req.role === "dosen"){
            await jadwal_dosen.destroy({
                where:{
                    id: jadwal_dosen.id
                }
            });
        }else{
            if(req.userId !== jadwal_dosen.userId) return res.status(403).json({msg: "Akses terlarang"});
            await jadwal_dosen.destroy({
                where:{
                    [Op.and]:[{id: jadwal_dosen.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Jadwalberhasil dihapus"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}