export const ENDPOINTS = Object.freeze({
    AUTH: {
        LOGIN: '/user/login',
        FORGOT_PASSWORD: '/user/forgot-password',
    },
    INDEX: "/",
    USER: {
        HOME: "/user/home",
        INFO: "/user/info",
        TIMETABLE: "/user/timetable",
        REGISTER_COURSE: "/user/register-course",
        COURSE_CONTENT: "/user/course-content/:id",
        EDIT_INFO: "/user/edit-info",
        FORUM: "/user/forum/:id",
        SCOREBOARD: "/user/scoreboard"
    },
    TEACHER: {
        HOME: "/teacher/home",
        INFO: "/teacher/info",
        TIMETABLE: "/teacher/timetable",
        COURSE_CONTENT: "/teacher/course-content/:id",
        EDIT_INFO: "/teacher/edit-info",
        FORUM: "/teacher/forum/:id",
        GRADE_ENTRY: "/enter-grades/:id",
    },
    ADMIN: {
        HOME: "/admin/home",
        INFO: "/admin/info",
        TIMETABLE: "/admin/timetable",
        CREATE_COURSE: "/admin/create-course",
        STUDENTLIST: "/admin/students-list",
    }
    
});