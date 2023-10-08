
const path = require('path');
const CourseModel = require(path.join(__dirname, '..', 'models', 'Course.js'));


const getAllCourses = async (req, res) => {
    try {
        const courses = await CourseModel.find().sort({ createdAt: -1 });
        res.json( courses );
        return;
    } catch (err) {
        res.json({ message: 'Error retrieving courses' });
        return;
    }
};

const createNewCourse = async (req, res) => {
    try {
        const conflict = await CourseModel.findOne({ name: req.body.name }).exec();
        if (conflict) {
            res.status(409);
            res.json({
                message: 'Name conflict',
                conflict: true
            });
            return;
        }

        const newCourse = await CourseModel.create(
            {
                name: req.body.name,
                fee: req.body.fee,
                description: req.body.description,
                instructor_id: req.body.instructor_id
            }
        );
        res.json( newCourse );
        return;
    } catch(err) {
        res.json({ message: err.message });
        return;
    }
};

const updateCourse = async (req, res) => {

};

const deleteCourse = async (req, res) => {
    
};

const getCourse = async (req, res) => {
    CourseModel.findById(req.params.id).then(result => {
        res.json( result );
        return;
    }).catch(err => {
        res.json({ message: 'Error retrieving course' });
        console.error( err );
        return;
    });
}

module.exports = {
    getAllCourses,
    createNewCourse,
    updateCourse,
    deleteCourse,
    getCourse
};