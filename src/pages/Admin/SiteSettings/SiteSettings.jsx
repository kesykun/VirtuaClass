import { useState } from "react";
import './css/SiteSettings.css';
import { useNavigate } from "react-router-dom";

const SiteSettings = () => {
    const [schoolName, setSchoolName] = useState("")
    const [mission, setMission] = useState("")
    const [vision, setVision] = useState("")
    const [objectives, setObjectives] = useState("")
    const [faq, setFaq] = useState("")
    const [contactInformation, setContactInformation] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        
    }

    return (
        <form className="siteSettingsForm">
            <h3>Site Settings</h3>

            <label>School Name</label>
            <input
                type="text"
                onChange={(e) => setSchoolName(e.target.value)}
                value={schoolName}
            />
            <label>Mission</label>
            <input
                type="text"
                onChange={(e) => setMission(e.target.value)}
                value={mission}
            />
            <label>Vision</label>
            <input
                type="text"
                onChange={(e) => setVision(e.target.value)}
                value={vision}
            />
            <label>Objectives</label>
            <input
                type="text"
                onChange={(e) => setObjectives(e.target.value)}
                value={objectives}
            />
            <label>Frequently Asked Questions</label>
            <input
                type="text"
                onChange={(e) => setFaq(e.target.value)}
                value={faq}
            />
            <label>Contact Information</label>
            <input
                type="text"
                onChange={(e) => setFaq(e.target.value)}
                value={faq}
            />
            <button>Save</button>
        </form>
    )
}

export default SiteSettings;