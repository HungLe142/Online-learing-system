import { getTimetable, getAllCourses, postMaterial, deleteMaterial } from '../models/LecModel.js';

export async function GetTimetable(req, res) {
    try {
        console.log(req.query);
        const result = await getTimetable(req.user, req.query);
        return res.status(200).json(result);

    } catch (error) {
        console.error('Error adding lecturer:', error);
        res.status(500).json({ error: error.message }); // Use error.message instead of err.message
    }
}

export async function GetAllCourses(req, res) {
    try {
        console.log(req.query);
        const result = await getAllCourses(req.user, req.query);
        return res.status(200).json(result);

    } catch (error) {
        console.error('Error adding lecturer:', error);
        res.status(500).json({ error: err.message });
    }
}

export async function CreateMaterial(req, res) {
    try {
        console.log(req.query);
        // input: class_id, material's name, url
        const class_id = req.query.lop_id;
        const mate_name = req.query.ten_tai_lieu;
        const url = req.query.url;
        console.log("fix bug: ", class_id, mate_name, url);

        const result = await postMaterial(class_id, mate_name, url);
        return res.status(200).json(result);

    } catch (error) {
        console.error('Error adding material:', error);
        res.status(500).json({ error: error.message });
    }
}

export async function RemoveMaterial(req, res) {
    try {
        // input: class_id, material's name
        const class_id = req.query.lop_id;
        const mate_name = req.query.ten_tai_lieu;

        const result = await deleteMaterial(class_id, mate_name);
        return res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

