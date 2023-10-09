import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';




import CourseListPage from "./pages/General/CourseListPage/CourseListPage";
import EnrollmentForm from "./pages/General/EnrollmentForm/EnrollmentForm";
import Faq from "./pages/General/FAQ/Faq";
import Calendar from "./pages/General/Calendar/Calendar";
import GeneralSchoolInformation from "./pages/General/GeneralSchoolInfo/GeneralSchoolInfo";
import PaymentLink from "./pages/General/PaymentLink/PaymentLink";
import LoginScreen from "./pages/General/LoginScreen/LoginScreen";

import EnrollmentApplications from "./pages/Admin/EnrollmentApplications/EnrollmentApplications";
import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard";
import SiteSettings from "./pages/Admin/SiteSettings/SiteSettings";


const getAllCourses = async () => {
  const response = await fetch('/api/courses');
  return await response.json();
};


const getAllInstructors = async () => {
  const response = await fetch(`/api/instructors`);
  return await response.json();
};

const App = () => {
    const [currentUser, setCurrentUser] = useState(
    {
      email: '',
      password: '',
      firstname: '',
      lastname: ''
    }
    );

    // sessionStorage.setItem('currentUser', JSON.stringify(currentUser));

    const [schoolInfo, setSchoolInfo] = useState(
      {
        schoolName: '',
        mission: '',
        vision: '',
        objectives: '',
        faq: '',
        contactInformation: ''
      }
    );
    useEffect(
      () => {
        fetch('/api/school')
        .then(result =>{return result.json()})
        .then(value =>{setSchoolInfo(value)});
      }, []
    )

    
    const [courses, setCourses] = useState([]);

    useEffect(() => {
      (async () => {
        const allCourses = await getAllCourses();
        const allInstructors = await getAllInstructors();
        let temp = [];
        for (let i=0; i<allCourses.length; i++) {
          
          // console.log(instructorData);
          let instructorData = allInstructors.filter(instructor => instructor._id === allCourses[i].instructor_id)[0];
          temp.push({
            id: allCourses[i]._id,
            name: allCourses[i].name,
            fee: allCourses[i].fee,
            description: allCourses[i].description,
            instructor: `${instructorData.firstname} ${instructorData.lastname}`,
            email: instructorData.email
          });
        }
        // console.log(temp);
        setCourses(temp);
      })();
      
    }, []);


    
    return (
        <>
            <BrowserRouter>
                
                <Routes>
                    <Route path='/' element={<GeneralSchoolInformation schoolInfo={schoolInfo}/>} />
                    <Route path='/courses' element={<CourseListPage 
                                                    schoolInfo={schoolInfo}
                                                    courses={ courses }
                                                    setCourses={ setCourses } />} />
                    <Route path='/faq' element={<Faq schoolInfo={schoolInfo} />} />
                    <Route path='/calendar' element={<Calendar schoolInfo={schoolInfo} />} />
                    <Route path='/enrollment' element={<EnrollmentForm 
                                                    schoolInfo={schoolInfo}
                                                    courses={ courses }
                                                    setCourses={ setCourses } 
                                                    getAllCourses={getAllCourses} 
                                                    getAllInstructors={getAllInstructors} />} />
                    <Route path='/paymentlinks' element={<PaymentLink schoolInfo={schoolInfo} />} />
                    <Route path='/login' element={<LoginScreen schoolInfo={schoolInfo} currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />

                    <Route path="/admin" element={<AdminDashboard 
                                                    currentUser={currentUser}
                                                    setCurrentUser={setCurrentUser} 
                                                  />} />
                    <Route path="/admin/enrollment_applications" element={<EnrollmentApplications 
                                                                              currentUser={currentUser}
                                                                              setCurrentUser={setCurrentUser} 
                                                                          />} />
                    <Route path="/admin/student_accounts" element={<h1>Para StudentAccounts</h1>} />
                    <Route path="/admin/instructor_accounts" element={<h1>Para InstructorAccounts</h1>} />
                    <Route path="/admin/administrator_accounts" element={<h1>Para AdministratorAccounts</h1>} />
                    <Route path="/admin/site_settings" element={<SiteSettings 
                                                                    currentUser={currentUser}
                                                                    setCurrentUser={setCurrentUser}/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;