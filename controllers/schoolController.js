
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
            email: req.body.email,
            name: req.body.name,
            mission: req.body.mission,
            vision: req.body.vision
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