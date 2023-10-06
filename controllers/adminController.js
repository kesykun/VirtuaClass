const path = require('path');
// const bcrypt = require('bcrypt');
const AdminModel = require(path.join(__dirname, '..', 'models', 'Admin.js'));
const AccountController = require(path.join(__dirname, 'accountController.js'));
const accountTypes = require(path.join(__dirname, 'constants', 'accountTypes.js'));

const getAllAdmins = async (req, res) => {
    try {
        const admins = await AdminModel.find({}).sort({ createdAt: -1 });
        res.json( admins );
    } catch (err) {
        res.json({ message: 'Error retrieving admins' });
        console.error(err);
    }
};

const createNewAdmin = async (req, res) => {
    const conflict = await AdminModel.findOne({ email: req.body.email }).exec();
    if (conflict) {
        res.status(409);
        res.json({
            message: 'Email conflict',
            conflict: true
        });
        return;
    }

    // const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newAdmin = await AdminModel.create(
        {
            email: req.body.email,
            password: req.body.password,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            account_type: accountTypes.admin
        }
    );
    await AccountController.createNewAccount( newAdmin );
    res.json( newAdmin );
};

const updateAdmin = async (req, res) => {

};

const deleteAdmin = async (req, res) => {

};



const getAdmin = async (req, res) => {
    try {
        const admin = await AdminModel.findById(req.params.id);
        res.json( admin );
    } catch (err) {
        res.json({ message: 'Error retrieving admin' });
        console.err( err );
    }
}

module.exports = {
    getAllAdmins,
    createNewAdmin,
    updateAdmin,
    deleteAdmin,
    getAdmin
};