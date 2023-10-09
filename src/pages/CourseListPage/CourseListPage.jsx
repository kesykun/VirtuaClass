import { useEffect } from "react";
import CourseList from "../../components/CourseList";
import NavBar from '../../components/NavBar';
import "./css/CourseListPage.css";


const CourseListPage = ({ courses, setCourses, coursesExpanded, setCoursesExpanded }) => {
    
    // console.log(coursesExpanded);
    useEffect(() => console.log(coursesExpanded), [coursesExpanded]);
    return (
        <>
            <NavBar />
            <CourseList
            courses={ courses } 
            coursesExpanded={ coursesExpanded }
            setCoursesExpanded={ setCoursesExpanded }/>
            {/* <SelectedCourses /> */}
        </>
    );
};

export default CourseListPage;

