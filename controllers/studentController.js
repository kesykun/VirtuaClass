const path = require('path');
const bcrypt = require('bcrypt');
const StudentModel = require(path.join(__dirname, '..', 'models', 'Student.js'));


const getAllStudents = (req, res) => {
    StudentModel.find().then(result => {
        res.json( result );
    }).catch(err => {
        res.json({ message: 'Error retrieving data' });
        console.error(err);
    });
    
};

const createNewStudent = async (req, res) => {
    const duplicate = await StudentModel.findOne({ firstname: req.body.firstname, lastname: req.body.lastname }).exec();
    if (duplicate) {
        res.status(409);
        res.json({ message: 'Duplicate firstname or lastname' });
        return;
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const result = await StudentModel.create(
        {
            email: req.body.email,
            password: hashedPassword,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            age: req.body.age,
            courses_taken_id: req.body.courses_taken_id
        }
    );
    res.json( result );
};

const updateStudent = (req, res) => {

};

const deleteStudent = (req, res) => {

};

const getStudent = (req, res) => {
    AdminModel.findById(req.params.id).then(result => {
        res.json( result );
    }).catch(err => {
        res.json({ message: 'Error retrieving data' });
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