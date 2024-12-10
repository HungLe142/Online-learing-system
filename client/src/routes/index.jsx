/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Loading from "../components/Loading";
// import LandingLayout from "../layouts/LandingLayout";
import DefaultLayout from "../layouts/DefaultLayout";
import { ENDPOINTS } from "./endPoints";
import LandingLayout from "../layouts/LandingLayout";

const WEB_NAME = "WePress App";

const RequiredAuth = ({ children, path }) => {
  const location = useLocation();
  // Fixed the token selector
  const token = useSelector((state) => state.auth?.token);

  if (!token) {
    return <Navigate to={path} state={{ from: location }} replace />;
  }

  return children;
};

RequiredAuth.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
};

const delayRoute = (ms = 500) => {
  return (promise) =>
    promise.then(
      (data) =>
        new Promise((resolve) => {
          setTimeout(() => resolve(data), ms);
        })
    );
};

// Routes configuration
const landingPage = {
  path: ENDPOINTS.INDEX,
  Layout: LandingLayout,
  component: lazy(() => delayRoute()(import("../modules/landing/features"))),
  title: WEB_NAME,
};

const loginPage = {
  path: ENDPOINTS.AUTH.LOGIN,
  component: lazy(() => delayRoute()(import("../modules/auth/features/login"))),
  title: `Login | ${WEB_NAME}`,
  Layout: DefaultLayout,
};
const forgotPasswordPage = {
  path: ENDPOINTS.AUTH.FORGOT_PASSWORD,
  component: lazy(() => delayRoute()(import("../modules/auth/features/forgotPassword"))),
  title: `Forgot Password | ${WEB_NAME}`,
  Layout: DefaultLayout,
};
//Trang home cua hoc sinh
const homePage = {
  path: ENDPOINTS.USER.HOME,
  component: lazy(() => delayRoute()(import("../modules/St_course/features/index"))),
  title: `Home | ${WEB_NAME}`,
  Layout: DefaultLayout,
};
const courseContentPage = {
  path: ENDPOINTS.USER.COURSE_CONTENT,
  component: lazy(() => delayRoute()(import("../modules/St_courseContent/features/index"))),
  title: `Course Content | ${WEB_NAME}`,
  Layout: DefaultLayout,
};
const InfoPage = {
  path: ENDPOINTS.USER.INFO,
  component: lazy(() => delayRoute()(import("../modules/info/features/index"))),
  title: `Info | ${WEB_NAME}`,
  Layout: DefaultLayout,
}
const editInfoPage = {
  path: ENDPOINTS.USER.EDIT_INFO,
  component: lazy(() => delayRoute()(import("../modules/editInfo/features/index"))),
  title: `Edit Info | ${WEB_NAME}`,
  Layout: DefaultLayout,
};
const timetablePage = {
  path: ENDPOINTS.USER.TIMETABLE,
  component: lazy(() => delayRoute()(import("../modules/timeTable/features/index"))),
  title: `Timetable | ${WEB_NAME}`,
  Layout: DefaultLayout,
};
const forumPage = {
  path: ENDPOINTS.USER.FORUM,
  component: lazy(() => delayRoute()(import("../modules/forum/features/index"))),
  title: `Forum | ${WEB_NAME}`,
  Layout: DefaultLayout,
}
const scoreboardPage = {
  path: ENDPOINTS.USER.SCOREBOARD,
  component: lazy(() => delayRoute()(import("../modules/scoreBoard/features/index"))),
  title: `Scoreboard | ${WEB_NAME}`,
  Layout: DefaultLayout,
}
const registerCoursePage = {
  path: ENDPOINTS.USER.REGISTER_COURSE,
  component: lazy(() => delayRoute()(import("../modules/St_registerCourse/features/index"))),
  title: `Register Course | ${WEB_NAME}`,
  Layout: DefaultLayout,
}
//trang cua teacher
const teacherContentCoursePage = {
  path: ENDPOINTS.TEACHER.COURSE_CONTENT,
  component: lazy(() => delayRoute()(import("../modules/T_courseContent/features/index"))),
  title: `Course Content | ${WEB_NAME}`,
  Layout: DefaultLayout,
}
export const privateRouteData = [];
export const publicRoutesData = [
  landingPage, 
  loginPage,
  forgotPasswordPage,
  homePage,
  courseContentPage,
  InfoPage,
  editInfoPage,
  timetablePage,
  forumPage,
  scoreboardPage,
  registerCoursePage,
  teacherContentCoursePage
];

// Improved route rendering function
const renderRoutes = (routes, isPrivate = false) => {
  return routes.map((route, index) => {
    const { component: Component, path, Layout, ...rest } = route;

    const content = (
      <Suspense fallback={<Loading />}>
        {Layout ? (
          <Layout>
            <Component />
          </Layout>
        ) : (
          <Component />
        )}
      </Suspense>
    );

    return (
      <Route
        {...rest}
        key={`${isPrivate ? "private" : "public"}-route-${index}`}
        path={path}
        element={
          isPrivate ? (
            <RequiredAuth path={ENDPOINTS.AUTH.LOGIN}>{content}</RequiredAuth>
          ) : (
            content
          )
        }
      />
    );
  });
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {renderRoutes(publicRoutesData)}
        {renderRoutes(privateRouteData, true)}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
