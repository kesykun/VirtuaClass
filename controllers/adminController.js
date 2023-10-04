const path = require('path');
const bcrypt = require('bcrypt');
const AdminModel = require(path.join(__dirname, '..', 'models', 'Admin.js'));


const getAllAdmins = (req, res) => {
    AdminModel.find().then(result => {
        res.json( result );
    }).catch(err => {
        res.json({ message: 'Error retrieving data' });
        console.error(err);
    });
    
};

const createNewAdmin = async (req, res) => {
    const duplicate = await AdminModel.findOne({ firstname: req.body.firstname, lastname: req.body.lastname }).exec();
    if (duplicate) {
        res.status(409);
        res.json({ message: 'Duplicate firstname or lastname' });
        return;
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const result = await AdminModel.create(
        {
            email: req.body.email,
            password: hashedPassword,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            account_type: req.body.account_type
        }
    );
    res.json( result );
};

const updateAdmin = (req, res) => {

};

const deleteAdmin = (req, res) => {

};

const getAdmin = (req, res) => {
    AdminModel.findById(req.params.id).then(result => {
        res.json( result );
    }).catch(err => {
        res.json({ message: 'Error retrieving data' });
        console.err( err );
    });
}

module.exports = {
    getAllAdmins,
    createNewAdmin,
    updateAdmin,
    deleteAdmin,
    getAdmin
};