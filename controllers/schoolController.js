
const path = require('path');
const SchoolModel = require(path.join(__dirname, '..', 'models', 'School.js'));


const getAllSchoolInfo = async (req, res) => {
    SchoolModel.find().then(result => {
        res.json( result[0] );
    }).catch(err => {
        res.json({ message: 'Error retrieving data' });
        console.error(err);
    });
    
};

const createNewSchoolInfo = async (req, res) => {
    const result = await SchoolModel.create(
        {
            schoolName: req.body.schoolName,
            mission: req.body.mission,
            vision: req.body.vision,
            objectives: req.body.objectives,
            faq: req.body.faq,
            contactInformation: req.body.contactInformation
        }
    );
    res.json( result );
};

const updateSchoolInfo = async (req, res) => {
    
};

module.exports = {
    getAllSchoolInfo,
    createNewSchoolInfo,
    updateSchoolInfo
};