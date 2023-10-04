const path = require('path');
const bcrypt = require('bcrypt');
const StudentModel = require(path.join(__dirname, '..', 'models', 'Student.js'));


const getAllStudents = async (req, res) => {
    StudentModel.find().then(result => {
        res.json( result );
    }).catch(err => {
        res.json({ message: 'Error retrieving students' });
        console.error(err);
    });
    
};

const createNewStudent = async (req, res) => {
    const conflict = await StudentModel.findOne({ firstname: req.body.firstname, lastname: req.body.lastname }).exec();
    if (conflict) {
        res.status(409);
        res.json({
            message: 'Email conflict',
            conflict: true
    });
        return;
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newStudent = await StudentModel.create(
        {
            email: req.body.email,
            password: hashedPassword,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            age: req.body.age,
            courses_taken_id: req.body.courses_taken_id
        }
    );
    res.json( newStudent );
};

const updateStudent = async (req, res) => {

};

const deleteStudent = async (req, res) => {

};

const getStudent = async (req, res) => {
    AdminModel.findById(req.params.id).then(result => {
        res.json( result );
    }).catch(err => {
        res.json({ message: 'Error retrieving student' });
        console.err( err );
    });
}

module.exports = {
    getAllStudents,
    createNewStudent,
    updateStudent,
    deleteStudent,
    getStudent
};