import { useEffect } from "react"; 
import CourseList from "../../../components/CourseList";
import "./css/CourseListPage.css";


const CourseListPage = ({ courses, setCourses, coursesExpanded, setCoursesExpanded }) => {
    
    // console.log(coursesExpanded);
    useEffect(() => console.log(coursesExpanded), [coursesExpanded]);
    return (
        <>
            <CourseList
            courses={ courses } 
            coursesExpanded={ coursesExpanded }
            setCoursesExpanded={ setCoursesExpanded }/>
            {/* <SelectedCourses /> */}
        </>
    );
};

export default CourseListPage;

