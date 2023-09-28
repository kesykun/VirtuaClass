import { useState } from "react";
import AccordionForCourse from "../../components/AccordionForCourse";
import './css/CourseList.css';


const createCourse = ( key, courseObj, allExpanded ) => {
    return (
        <AccordionForCourse key={ key } 
        title={ courseObj.title } 
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

const CourseList = () => {
    const [courseExpanded, setCourseExpanded] = useState(false);
    const courses = [
      {
        title: "Introduction to Web Development",
        price: 49.99,
        instructor: "Luisito Santos",
        description: "This comprehensive course covers the basics of HTML, CSS, and JavaScript, providing a solid foundation for building dynamic and interactive websites.",
        instructor_contact_no: "+639123456701"
      },
      {
        title: "Data Science and Machine Learning Masterclass",
        price: 79.99,
        instructor: "Maria dela Cruz",
        description: "Dive into the world of data science and machine learning with this hands-on course. Learn how to analyze and interpret data, and build predictive models.",
        instructor_contact_no: "+639123456702"
      },
      {
        title: "Graphic Design Fundamentals",
        price: 39.99,
        instructor: "Antonio Reyes",
        description: "Unleash your creativity in this course covering the basics of graphic design. Explore color theory, typography, and layout design.",
        instructor_contact_no: "+639123456703"
      },
      {
        title: "Advanced JavaScript and ES6",
        price: 59.99,
        instructor: "Isabella Ramos",
        description: "Take your JavaScript skills to the next level with this course. Learn about ES6 features, asynchronous programming, and modern development practices.",
        instructor_contact_no: "+639123456704"
      },
      {
        title: "Mobile App Development with React Native",
        price: 69.99,
        instructor: "Josefino Garcia",
        description: "Build cross-platform mobile apps using React Native. This course covers the fundamentals of mobile app development for iOS and Android.",
        instructor_contact_no: "+639123456705"
      },
      {
        title: "Python for Data Analysis and Visualization",
        price: 54.99,
        instructor: "Rosa Caballero",
        description: "Learn Python for data manipulation, analysis, and visualization. This course is essential for anyone working with large datasets.",
        instructor_contact_no: "+639123456706"
      },
      {
        title: "Digital Marketing Strategy and SEO",
        price: 49.99,
        instructor: "Eduardo Santos",
        description: "Master the art of digital marketing with this comprehensive course. Learn about SEO, social media marketing, and online advertising.",
        instructor_contact_no: "+639123456707"
      },
      {
        title: "Introduction to Artificial Intelligence",
        price: 64.99,
        instructor: "Sofia Villanueva",
        description: "Get a foundational understanding of AI concepts and applications. Explore machine learning, natural language processing, and more.",
        instructor_contact_no: "+639123456708"
      },
      {
        title: "Cybersecurity and Ethical Hacking",
        price: 74.99,
        instructor: "Emilio Reyes",
        description: "Protect systems from cyber threats and learn ethical hacking techniques. This course provides hands-on experience in cybersecurity.",
        instructor_contact_no: "+639123456709"
      },
      {
        title: "Game Development with Unity",
        price: 59.99,
        instructor: "Gabriela Gomez",
        description: "Create interactive games using Unity. Learn about game design, physics engines, and programming for game development.",
        instructor_contact_no: "+639123456710"
      }
    ];
    
    // console.log(courseExpanded);
    useState(() => console.log(courseExpanded), [courseExpanded]);
      
    let coursesInJsx = [];
    for(let i=0; i<courses.length; i++) {
        coursesInJsx.push(createCourse( i+1, courses[i], courseExpanded ));
    }
    return (
        <>
            <section className="courselist__section">
                <div className="courselist__top">
                    <div>
                        <label htmlFor="expandAllCourse">Expand All</label>
                        <input 
                        id="expandAllCourse" 
                        type="checkbox" 
                        checked={ !courseExpanded }
                        onChange={ () => setCourseExpanded( !courseExpanded ) }/>
                    </div>
                </div>
                <div className="allCourses">
                    { coursesInJsx }
                </div>
            </section>
            <section className="ubox">
                <div className="ubox_head">
                    <h1>Head</h1>
                </div>
                <div className="ubox_body">
                    <h2>Body</h2>
                </div>
            </section>
        </>
    );
};

export default CourseList;

