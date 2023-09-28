
import AccordionForCourse from "./AccordionForCourse";

const Course = ({ key, courseObj, allExpanded, checkBox='' }) => {
    return (
        <AccordionForCourse key={ key } 
        title={ [courseObj.title, <hr/>, checkBox] } 
        body={ 
          [
            <div className="courseDescription">
              { courseObj.description }
            </div>,
            <div className="coursePrice">
              { `₱${ courseObj.price }` }
            </div>,
            <AccordionForCourse key={ key }
            title={ `Instructor: ${courseObj.instructor}` } 
            body={ 
              [
                <div className="instructorContact">
                  Contact No.: { courseObj.instructor_contact_no }
                </div>
              ]
             }
            allExpanded={ allExpanded }/>
          ]
        } 
        allExpanded={ allExpanded }/>
    );
}

export default Course;