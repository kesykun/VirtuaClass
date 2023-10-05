import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

import Calendar from "./pages/Calendar/Calendar";
import CourseListPage from "./pages/CourseListPage/CourseListPage";
import EnrollmentForm from "./pages/EnrollmentForm/EnrollmentForm";
import Faq from "./pages/FAQ/Faq";
import GeneralSchoolInformation from "./pages/GeneralSchoolInfo/GeneralSchoolInfo";
import PaymentLink from "./pages/PaymentLink/PaymentLink";

const App = () => {
    const [coursesExpanded, setCoursesExpanded] = useState(false);
    const [courses, setCourses] = useState([
      {
        id: 0,
        title: "Introduction to Web Development",
        price: 49.99,
        instructor: "Luisito Santos",
        description: "This comprehensive course covers the basics of HTML, CSS, and JavaScript, providing a solid foundation for building dynamic and interactive websites.",
        instructor_contact_no: "+639123456701"
      },
      {
        id: 1,
        title: "Data Science and Machine Learning Masterclass",
        price: 79.99,
        instructor: "Maria dela Cruz",
        description: "Dive into the world of data science and machine learning with this hands-on course. Learn how to analyze and interpret data, and build predictive models.",
        instructor_contact_no: "+639123456702"
      },
      {
        id: 2,
        title: "Graphic Design Fundamentals",
        price: 39.99,
        instructor: "Antonio Reyes",
        description: "Unleash your creativity in this course covering the basics of graphic design. Explore color theory, typography, and layout design.",
        instructor_contact_no: "+639123456703"
      },
      {
        id: 3,
        title: "Advanced JavaScript and ES6",
        price: 59.99,
        instructor: "Isabella Ramos",
        description: "Take your JavaScript skills to the next level with this course. Learn about ES6 features, asynchronous programming, and modern development practices.",
        instructor_contact_no: "+639123456704"
      },
      {
        id: 4,
        title: "Mobile App Development with React Native",
        price: 69.99,
        instructor: "Josefino Garcia",
        description: "Build cross-platform mobile apps using React Native. This course covers the fundamentals of mobile app development for iOS and Android.",
        instructor_contact_no: "+639123456705"
      },
      {
        id: 5,
        title: "Python for Data Analysis and Visualization",
        price: 54.99,
        instructor: "Rosa Caballero",
        description: "Learn Python for data manipulation, analysis, and visualization. This course is essential for anyone working with large datasets.",
        instructor_contact_no: "+639123456706"
      },
      {
        id: 6,
        title: "Digital Marketing Strategy and SEO",
        price: 49.99,
        instructor: "Eduardo Santos",
        description: "Master the art of digital marketing with this comprehensive course. Learn about SEO, social media marketing, and online advertising.",
        instructor_contact_no: "+639123456707"
      },
      {
        id: 7,
        title: "Introduction to Artificial Intelligence",
        price: 64.99,
        instructor: "Sofia Villanueva",
        description: "Get a foundational understanding of AI concepts and applications. Explore machine learning, natural language processing, and more.",
        instructor_contact_no: "+639123456708"
      },
      {
        id: 8,
        title: "Cybersecurity and Ethical Hacking",
        price: 74.99,
        instructor: "Emilio Reyes",
        description: "Protect systems from cyber threats and learn ethical hacking techniques. This course provides hands-on experience in cybersecurity.",
        instructor_contact_no: "+639123456709"
      },
      {
        id: 9,
        title: "Game Development with Unity",
        price: 59.99,
        instructor: "Gabriela Gomez",
        description: "Create interactive games using Unity. Learn about game design, physics engines, and programming for game development.",
        instructor_contact_no: "+639123456710"
      },
      {
        id: 10,
        title: "Photography Masterclass",
        price: 44.99,
        instructor: "Luisa Garcia",
        description: "Unlock the secrets of photography with this comprehensive masterclass. Learn about composition, lighting, and post-processing techniques.",
        instructor_contact_no: "+639123456711"
      },
      {
        id: 11,
        title: "Full Stack Web Development with MERN",
        price: 69.99,
        instructor: "Ramon Cruz",
        description: "Become a full-stack developer using the MERN stack. Learn to build dynamic web applications from the front-end to the back-end.",
        instructor_contact_no: "+639123456712"
      },
      {
        id: 12,
        title: "Digital Illustration and Vector Art",
        price: 49.99,
        instructor: "Isabelita Santos",
        description: "Explore the world of digital illustration and create stunning vector artworks. Learn about digital brushes, layers, and more.",
        instructor_contact_no: "+639123456713"
      },
      {
        id: 13,
        title: "React.js for Beginners",
        price: 39.99,
        instructor: "Mateo dela Rosa",
        description: "Get started with React.js and build interactive user interfaces. This course covers the fundamentals of React and component-based architecture.",
        instructor_contact_no: "+639123456714"
      },
      {
        id: 14,
        title: "Advanced Data Structures and Algorithms",
        price: 59.99,
        instructor: "Carolina Reyes",
        description: "Master advanced data structures and algorithms for efficient problem-solving. Dive deep into algorithms analysis and design.",
        instructor_contact_no: "+639123456715"
      },
      {
        id: 15,
        title: "Social Media Marketing Strategy",
        price: 49.99,
        instructor: "Rafaelito Gomez",
        description: "Craft effective social media marketing strategies to reach and engage your target audience. Learn about content planning, analytics, and more.",
        instructor_contact_no: "+639123456716"
      },
      {
        id: 16,
        title: "Introduction to Natural Language Processing",
        price: 64.99,
        instructor: "Anastacia Caballero",
        description: "Explore the fascinating field of Natural Language Processing (NLP) and learn how to process and analyze human language data.",
        instructor_contact_no: "+639123456717"
      },
      {
        id: 17,
        title: "Ethical Hacking and Penetration Testing",
        price: 74.99,
        instructor: "Vicente Santos",
        description: "Become an ethical hacker and learn penetration testing techniques to secure systems. Gain practical skills in cybersecurity.",
        instructor_contact_no: "+639123456718"
      },
      {
        id: 18,
        title: "2D Game Development with Godot Engine",
        price: 54.99,
        instructor: "Angelica Rivera",
        description: "Create 2D games using the powerful Godot game engine. Learn about game physics, animation, and scripting with GDScript.",
        instructor_contact_no: "+639123456719"
      },
      {
        id: 19,
        title: "Blockchain and Cryptocurrency Fundamentals",
        price: 59.99,
        instructor: "Santiago Cruz",
        description: "Dive into the world of blockchain technology and cryptocurrencies. Learn about decentralized ledgers, smart contracts, and more.",
        instructor_contact_no: "+639123456720"
      }
    ]);
    const [selectedCourses, setSelectedCourses] = useState([]);
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<GeneralSchoolInformation/>} />
                    <Route path='/courses' element={<CourseListPage 
                                                    courses={ courses }
                                                    setCourses={ setCourses }
                                                    coursesExpanded={ coursesExpanded }
                                                    setCoursesExpanded={ setCoursesExpanded }/>
                                                } />
                    <Route path='/faq' element={<Faq />} />
                    <Route path='/calendar' element={<Calendar />} />
                    <Route path='/enrollment' element={<EnrollmentForm 
                                                    courses={ courses }
                                                    setCourses={ setCourses }
                                                    coursesExpanded={ coursesExpanded }
                                                    setCoursesExpanded={ setCoursesExpanded }
                                                    selectedCourses={ selectedCourses }
                                                    setSelectedCourses={ setSelectedCourses }
                                                    />} />
                    <Route path='/paymentlinks' element={<PaymentLink />} />
                    <Route path='/login' element={<h1>Para Login</h1>} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;