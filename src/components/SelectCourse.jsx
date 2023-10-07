import { useEffect, useState } from "react";
import Course from "./Course";

const SelectCourse = ({ key, courseObj, courseExpanded, selectedCourses, setSelectedCourses }) => {
    const [checkBoxStatus, setCheckBoxStatus] = useState(false);

    useEffect(() => {
        if (checkBoxStatus === true) {
            setSelectedCourses([ ]);
        } else {
            setSelectedCourses(selectedCourses.filter((item) => item.id === courseObj.id));
        }
        
        console.log({ title: courseObj.title, checked: checkBoxStatus});
    }, [checkBoxStatus]);
    return (
            <Course 
                key={ key } 
                courseObj={ courseObj } 
                allExpanded={ courseExpanded } 
                checkBox={
                    <button 
                        className="addCourseButton"
                        onClick={() => console.log(key)}
                        >Add Course</button>
                }
            />
    );
}

export default SelectCourse;