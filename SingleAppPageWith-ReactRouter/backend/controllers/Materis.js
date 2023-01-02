import Materi from "../models/MateriModel.js";
import User from "../models/UserModel.js";

export const getMateris = async(req, res) =>{
    try {
        let response;
        if(req.role === "mahasiswa" || req.role === "admin"){
            response = await Materi.findAll({
                attributes:['uuid', 'mata_kuliah', 'nama_materi','link_materi', 'tenggat_waktu'],
                include:[{
                    model: User,
                    attributes:['name']
                }]
            });
        }else{
            response = await Materi.findAll({
                attributes:['uuid','mata_kuliah', 'nama_materi','link_materi', 'tenggat_waktu'],
                where:{
                    userId: req.userId
                },
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


export const getMateribyId = async(req, res) =>{
    try {
        const response = await Materi.findOne({
            attributes:['uuid','mata_kuliah','nama_materi','link_materi', 'tenggat_waktu'],
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

// export const getMateribyId = async(req, res) =>{
//     try {
//         let response;
//         if(req.role === "dosen"){
//             response = await Materi.findOne({
//                 attributes: ['uuid','mata_kuliah','nama_materi','link_materi', 'tenggat_waktu'],
//                 include:[{
//                     model: User,
//                     attributes:['name','email']
//                 }]
//             });
//         }else{
//             response = await Materi.findOne({
//                 attributes:['uuid','mata_kuliah','nama_materi','link_materi', 'tenggat_waktu'],
//                 where:{
//                     userId: req.userId
//                 },
//                 include:[{
//                     model: User,
//                     attributes:['name']
//                 }]
//             });
//         }
//         res.status(200).json(response);
//     } catch (error) {
//         res.status(500).json({msg: error.message});
//     }
// }

export const createMateri = async(req, res) =>{
    const {nama_materi, link_materi, mata_kuliah, tenggat_waktu} = req.body;
    try {
        await Materi.create({
            nama_materi: nama_materi,
            link_materi: link_materi,
            mata_kuliah: mata_kuliah,
            tenggat_waktu: tenggat_waktu,
            userId: req.userId
        });
        res.status(201).json({msg: "Materi Berhasil ditambahkan"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateMateri = async(req, res) =>{
    try {
        const materi = await Materi.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!materi) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {nama_materi, link_materi, mata_kuliah, tenggat_waktu} = req.body;
        if(req.role === "dosen"){
            await materi.update({nama_materi, link_materi, mata_kuliah, tenggat_waktu},{
                where:{
                    id: materi.id
                }
            });
        }else{
            if(req.userId !== materi.userId) return res.status(403).json({msg: "Akses terlarang"});
            await Materi.update({nama_materi, link_materi, mata_kuliah},{
                where:{
                    [Op.and]:[{id: materi.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Materi Berhasil diupdate"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteMateri = async(req, res) =>{
    try {
        const materi = await Materi.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!materi) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {nama_materi, link_materi, mata_kuliah, tenggat_waktu} = req.body;
        if(req.role === "dosen"){
            await materi.destroy({
                where:{
                    id: materi.id
                }
            });
        }else{
            if(req.userId !== materi.userId) return res.status(403).json({msg: "Akses terlarang"});
            await materi.destroy({
                where:{
                    [Op.and]:[{id: materi.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "User berhasil dihapus"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}