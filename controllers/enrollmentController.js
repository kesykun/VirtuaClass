const path = require('path');
const EnrollmentModel = require(path.join(__dirname, '..', 'models', 'Enrollment.js'));



const getAllEnrollments = async (req, res) => {
    try {
        const Enrollments = await EnrollmentModel.find({}).sort({ createdAt: -1 });
        res.json( Enrollments );
    } catch (err) {
        res.json({ message: 'Error retrieving enrollments' });
        console.error(err);
    }
};

const createNewEnrollment = async (req, res) => {
    const conflict = await EnrollmentModel.findOne({ email: req.body.email }).exec();
    if (conflict) {
        res.status(409);
        res.json({
            message: 'Email conflict', // Not Final (Should not be in conflict with emails in Students, Instructors, Admins)
            conflict: true
        });
        return;
    }
    const newEnrollment = await EnrollmentModel.create(
        {
            firstname: req.body.firstname,
            middleInitial: req.body.middleInitial,
            lastname: req.body.lastname,
            email: req.body.email,
            
            guardianFirstname: req.body.guardianFirstname,
            guardianMiddleInitial: req.body.guardianMiddleInitial,
            guardianLastname: req.body.guardianLastname,
            guardianContactNumber: req.body.guardianContactNumber
        }
    );
    res.json( newEnrollment );
};

const updateEnrollment = async (req, res) => {

};

const deleteEnrollment = async (req, res) => {
    const result = await EnrollmentModel.deleteOne({ _id: req.body.id });
    res.json( result );
};



const getEnrollment = async (req, res) => {
    try {
        const Enrollment = await EnrollmentModel.findById(req.params.id);
        console.err( err );console.err( err );
    } catch (err) {
        res.json({ message: 'Error retrieving enrollment' });
        console.err( err );
    }
}

module.exports = {
    getAllEnrollments,
    createNewEnrollment,
    updateEnrollment,
    deleteEnrollment,
    getEnrollment
};