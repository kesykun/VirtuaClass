const path = require('path');
const bcrypt = require('bcrypt');
const fsPromise = require('fs').promises;
const qr = require('qr-image');
const { v4: uuid } = require('uuid');
const InstructorModel = require(path.join(__dirname, '..', 'models', 'Instructor.js'));





const getAllInstructors = async (req, res) => {
    InstructorModel.find().then(result => {
        res.json( result );
    }).catch(err => {
        res.json({ message: 'Error retrieving instructors' });
        console.error(err);
    });
    
};

const createNewInstructor = async (req, res) => {
    const conflict = await InstructorModel.findOne({ email: req.body.email }).exec();
    if (conflict) {
        res.status(409);
        res.json({
            message: 'Email conflict',
            conflict: true
        });
        return;
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newInstructor = await InstructorModel.create(
        {
            email: req.body.email,
            password: hashedPassword,
            gcash_account_id: req.body.gcash_account_id,
            qr_code: `___${uuid()}.svg`,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            age: req.body.age
        }
    );
    const svgQR = qr.imageSync(newInstructor.gcash_account_id, { type: 'svg' });
    await fsPromise.writeFile(path.join(__dirname, '..', 'public', 'svg', newInstructor.qr_code), svgQR);
    res.json( newInstructor );
};

const updateInstructor = async (req, res) => {
    const result = await InstructorModel.updateOne({ _id: req.body._id }, { $set: { age: req.body.age } });
    res.json( result );
};

const deleteInstructor = async (req, res) => {

};

const getInstructor = async (req, res) => {
    InstructorModel.findById(req.params.id).then(result => {
        res.json( result );
    }).catch(err => {
        res.json({ message: 'Error retrieving instructor' });
        console.err( err );
    });
}

module.exports = {
    getAllInstructors,
    createNewInstructor,
    updateInstructor,
    deleteInstructor,
    getInstructor
};