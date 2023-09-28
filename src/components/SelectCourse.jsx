import { useEffect, useState } from "react";
import Course from "./Course";

const SelectCourse = ({ key, courseObj, courseExpanded, selectedCourses, setSelectedCourses }) => {
    const [checkBoxStatus, setCheckBoxStatus] = useState(false);
    const addToSelectedCourses = ( ) => {
        let tempSelectedCourses = selectedCourses;
        tempSelectedCourses.push( courseObj );
        setSelectedCourses(tempSelectedCourses);
    }
    useEffect(() => {
        if (checkBoxStatus === true) {
            addToSelectedCourses();
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
                <input 
                    type="checkbox" 
                    checked={ checkBoxStatus }
                    onChange={ () => setCheckBoxStatus(!checkBoxStatus) }
                />
            }/>
    );
}

export default SelectCourse;