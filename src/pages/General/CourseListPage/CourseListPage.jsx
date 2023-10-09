import { useState, useEffect } from "react"; 
import CourseList from "../../../components/CourseList";
import NavBar from '../../../components/NavBar';
import "./css/CourseListPage.css";


const CourseListPage = ({ schoolInfo, courses, setCourses }) => {
    const [coursesExpanded, setCoursesExpanded] = useState(false);
    
    // console.log(coursesExpanded);
    // useEffect(() => console.log(coursesExpanded), [coursesExpanded]);
    return (
        <>
            <NavBar  schoolInfo={schoolInfo}/>
            <CourseList
            courses={ courses } 
            coursesExpanded={ coursesExpanded }
            setCoursesExpanded={ setCoursesExpanded }/>
            {/* <SelectedCourses /> */}
        </>
    );
};

export default CourseListPage;

