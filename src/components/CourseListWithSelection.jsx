import SelectCourse from "./SelectCourse";

const CourseListWithSelection = ({ courses, coursesExpanded, setCoursesExpanded, selectedCourses, setSelectedCourses }) => {
    let coursesInJsx = [];
    for(let i=0; i<courses.length; i++) {
        coursesInJsx.push(
                <SelectCourse 
                    key={ courses[i].id } 
                    courseObj={ courses[i] } 
                    allExpanded={ coursesExpanded } 
                    selectedCourses={ selectedCourses }
                    setSelectedCourses={ setSelectedCourses } 
                />
            );
    }
    return (
        <section className="courselist_with_selection__section">
            <div className="allCourses">
                { coursesInJsx }
            </div>
        </section>
    );
};

export default CourseListWithSelection;