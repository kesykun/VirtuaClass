const createCourse = ( key, course ) => {
    return (
        <tr className="tableRow" key={ key } >
            <td>{ course.title }</td>
            <td>{ course.description }</td>
        </tr>
    );
};

const SelectedCourses = ({ selectedCourses }) => {
    let selectedCoursesInJsx = [];
    for(let i=0; i<selectedCourses.length; i++) {
        selectedCoursesInJsx.push(createCourse(i+1, selectedCourses[i]));
    }
    return (
        <section className="ubox">
                <div className="ubox_head">
                    <h1>Selected Courses</h1>
                </div>
                <div className="ubox_body">
                    <table>
                        <tr>
                            <th style={
                                {
                                    width: "300px"
                                }
                            }>Course Name</th>
                            <th style={
                                {
                                    width: "500px"
                                }
                            }>Description</th>
                        </tr>
                        { selectedCoursesInJsx }
                    </table>
                </div>
        </section>
    );
};

export default SelectedCourses;