import Accordion from "../../components/Accordion";

const Faq = () => {
    return (
        <>
            <section className="faq__section">
                <div className="faq__heading">
                    <h1>Questions? Look here.</h1>
                    <p>Cant find an answer? just lorem ipsum dolor</p>
                </div>
                <div>
                    <Accordion title=" What are the school's hours of operation?" body = "Answer: The school's hours of operation typically vary by grade level and may be subject to change, but a common schedule is from 8:00 AM to 3:00 PM on weekdays. Be sure to check with the school administration for the most accurate and up-to-date information." />
                    <Accordion title="How do I enroll my child in the school?" body = "Answer: To enroll your child in our school, you should contact the school's admissions office. They will provide you with the necessary forms and information about the enrollment process. Requirements may include proof of residency, immunization records, and other documentation." />
                    <Accordion title="What extracurricular activities are available for students?" body = "Answer: Our school offers a variety of extracurricular activities, including sports teams, clubs, and academic enrichment programs. These activities can vary from year to year and by grade level. You can usually find information about current offerings on the school's website or by contacting the school directly." />
                    <Accordion title="How can I stay informed about my child's progress and school events?" body = "Answer: The school typically provides several ways to stay informed, including: Parent-teacher conferences: Scheduled meetings with your child's teachers. School newsletters: Regular updates on school events, achievements, and news. Online portals: Access to your child's grades, assignments, and attendance. School events: Attend parent-teacher meetings, open houses, and other school-sponsored events to stay involved." />
                    <Accordion title="What is the school's policy on school closures due to inclement weather?" body = "Answer: In the event of inclement weather, the school follows a specific policy. Typically, school closures or delays are announced through various communication channels, including the school's website, social media, local news, and automated phone calls to parents. It's important to be familiar with the school's specific inclement weather policy to ensure the safety of students and staff." />
                </div>
            </section>
        </>
    );
};

export default Faq;