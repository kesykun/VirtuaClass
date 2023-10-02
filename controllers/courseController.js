
const path = require('path');
const CourseModel = require(path.join(__dirname, '..', 'models', 'Course.js'));


const getAllCourses = (req, res) => {
    CourseModel.find().then(result => {
        res.json( result );
    }).catch(err => {
        res.json({ message: 'Error retrieving data' });
        console.error(err);
    });
    
};

const createNewCourse = async (req, res) => {
    const duplicate = await CourseModel.findOne({ name: req.body.name }).exec();
    if (duplicate) {
        res.status(409);
        res.json({ message: 'Duplicate Name' });
        return;
    }

    const result = await CourseModel.create(
        {
            name: req.body.name,
            fee: req.body.fee,
            description: req.body.description,
            instructor_id: req.body.instructor_id
        }
    );
    res.json( result );
};

const updateCourse = (req, res) => {

};

const deleteCourse = (req, res) => {
    
};

const getCourse = (req, res) => {
    CourseModel.findById(req.params.id).then(result => {
        res.json( result );
    }).catch(err => {
        res.json({ message: 'Error retrieving data' });
        console.err( err );
    });
}

module.exports = {
    getAllCourses,
    createNewCourse,
    updateCourse,
    deleteCourse,
    getCourse
};