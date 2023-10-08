const path = require('path');
const { async } = require('q');
// const bcrypt = require('bcrypt');
const StudentModel = require(path.join(__dirname, '..', 'models', 'Student.js'));
const AccountController = require(path.join(__dirname, 'accountController.js'));
const accountTypes = require(path.join(__dirname, 'constants', 'accountTypes.js'));


const insertNewStudent = async (stundentData) => {
    // const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newStudent = await StudentModel.create(
        {
            email: stundentData.email,
            password: stundentData.password,
            firstname: stundentData.firstname,
            lastname: stundentData.lastname,
            account_type: accountTypes.student,
            courses_taken_id: stundentData.courses_taken_id
        }
    );
    await AccountController.createNewAccount( newStudent );
    return newStudent;
};

const getAllStudents = async (req, res) => {
    try {
        const students = await StudentModel.find({}).sort({ createdAt: -1 });
        res.json( students );
    } catch (err) {
        res.json({ message: 'Error retrieving students' });
    }
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

    const newStudent = await insertNewStudent(req.body);
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
    getStudent,

    insertNewStudent
};