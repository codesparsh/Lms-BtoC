import React, { Fragment } from "react";
import jwt_decode from "jwt-decode";
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./Actions/actions";
import history from "./History";

import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/login";
import SingupPage from "./Pages/signup";
import InstructorDashboard from "./Pages/Instructor/instructor-dashboard";
import InstructorCourses from "./Pages/Instructor/instructor-courses";
import InstructorEarning from "./Pages/Instructor/instructor-earning";
import InstructorEditCourse from "./Pages/Instructor/instructor-edit-course";
import Quizes from "./Pages/Instructor/quizes";
import EditQuiz from "./Pages/Instructor/editquiz";

import StudentDasboard from "./Pages/Students/student-dashboard";

import store from "./store";
import Courses from "./Pages/courses";
import Header from "./Header/header";
import InstructorAddCourse from "./Pages/Instructor/instructor-add-course";
import ForgotPassword from "./Pages/forgotpassword";
import resetpassword from "./Pages/resetpassword";
import WizardForm from "./Pages/WizardForm/WizardForm";
import RegMoadl from "./Pages/Modal/RegModal";
import TakeCourse from "./Pages/Students/takecourse";
import CoursePreview from "./Pages/Students/course-preview";
import Cart from "./Pages/Students/cart";
import MyCourses from "./Pages/Students/mycourses";
import EditPage from "./Pages/Instructor/EditForm/editpage";
import Delete from "./Pages/Instructor/Delete";
import ManageCourse from "./Pages/Instructor/ManageCourse";
import AdminDash from "./Pages/Admin/AdminDash";
import AdminLogin from "./Pages/Admin/AdminLogin";
import AdminAddCourseForm from "./Pages/Admin/AddCourse";
import AdminManageCourse from "./Pages/Admin/ManageCourses";
import AdminEditPage from "./Pages/Admin/EditCourse";
import AdminDelete from "./Pages/Admin/DeleteCourse";
import TakeLesson from "./Pages/Students/takelesson";
import ListofUsers from "./Pages/Admin/ListofUsers";
import UserDetails from "./Pages/Admin/UserDetails";
import ApproveCourse from "./Pages/Admin/ApproveCourse";
import ListofInstructors from "./Pages/Admin/ListofInstructors";
import InsDetails from "./Pages/Admin/InsDetails";
import Quiz from "./Pages/Instructor/Quiz/Quiz";
import Settings from "./Pages/Admin/Setting";
import AddCategories from "./Pages/Admin/AddCategories";
import Profile from "./Pages/Profile/Profile";
import Reports from "./Pages/Admin/Reports";
import Earnings from "./Pages/Instructor/Earnings";
import EarningByCourse from "./Pages/Instructor/EarningByCourse";
import AdminProfile from "./Pages/Admin/AdminProfile/AdminProfile";

if (localStorage.token) {
  // set auth token
  setAuthToken(localStorage.token);
  const decoded = jwt_decode(localStorage.token);
  //set user
  store.dispatch(setCurrentUser(decoded));
  //check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "/";
  }
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* ADMIN */}

          <Route path="/admin/dashboard" exact component={AdminDash} />
          <Route path="/admin/login" exact component={AdminLogin} />
          <Route path="/admin/addcourse" exact component={AdminAddCourseForm} />
          <Route
            path="/admin/managecourse"
            exact
            component={AdminManageCourse}
          />
          <Route path="/admin/editcourse/:id" exact component={AdminEditPage} />
          <Route path="/admin/deletecourse/:id" exact component={AdminDelete} />
          <Route path="/admin/listofusers" exact component={ListofUsers} />
          <Route
            path="/admin/listofinstructors"
            exact
            component={ListofInstructors}
          />
          <Route path="/admin/ins/:id" exact component={InsDetails} />
          <Route path="/admin/user/:id" exact component={UserDetails} />
          <Route path="/admin/approvecourses" exact component={ApproveCourse} />
          <Route path="/admin/settings" exact component={Settings} />
          <Route path="/admin/addcategories" exact component={AddCategories} />
          <Route path="/admin/reports" exact component={Reports} />
          <Route
            path="/admin/profile"
            exact
            component
            component={AdminProfile}
          />

          {/* ADMIN */}
          <Route path="/" exact component={HomePage} />
          <Route path="/courses" exact component={Courses} />

          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={SingupPage} />
          <Route path="/forgotpassword" exact component={ForgotPassword} />
          <Route
            path="/user/reset-password/:id"
            exact
            component={resetpassword}
          />
          <Route path="/user/profile" exact component={Profile} />
          <Route path="/regmodal" exact component={RegMoadl} />
          {/*Insructor*/}
          <Route
            path="/instructor-dashboard"
            exact
            component={InstructorDashboard}
          />
          <Route path="/instructor/earnings" exact component={Earnings} />
          <Route
            path="/instructor/earnings/:title/:instructorid/:courseid"
            exact
            component={EarningByCourse}
          />
          <Route path="/instructor/quiz" exact component={Quiz} />
          <Route
            path="/instructor-courses"
            exact
            component={InstructorCourses}
          />
          <Route
            path="/instructor-earning"
            exact
            component={InstructorEarning}
          />
          <Route
            path="/instructor-edit-course"
            exact
            component={InstructorEditCourse}
          />
          <Route path="/instructor-add-course" exact component={WizardForm} />
          <Route path="/quizes" exact component={Quizes} />
          <Route path="/editquiz" exact component={EditQuiz} />
          <Route path="/instructor/edit/:id" exact component={EditPage} />
          <Route path="/instructor/delete/:id" exact component={Delete} />
          <Route
            path="/instructor/managecourse"
            exact
            component={ManageCourse}
          />
          {/*Student*/}
          <Route path="/student-dashboard" exact component={StudentDasboard} />
          <Route path="/courses-preview/:id" exact component={CoursePreview} />
          <Route path="/cart/:id" exact component={Cart} />
          <Route path="/student/mycourses" exact component={MyCourses} />
          <Route path="/courses/:id" exact component={TakeCourse} />
          <Route path="/student/takelesson/:id" exact component={TakeLesson} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
