import { getTimetable, getAllCourses } from '../models/LecModel.js';

export async function GetTimetable(req, res) {
    try {
        console.log(req.query);
        const result = await getTimetable(req.user, req.query);
        return res.status(200).json(result);

    } catch (error) {
        console.error('Error adding lecturer:', error);
        res.status(500).json({ error: err.message });
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