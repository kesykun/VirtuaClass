const path = require('path');
const AccountModel = require(path.join(__dirname, '..', 'models', 'Account.js'));


const getAccount = async (req, res) => {
    try {
        const Accounts = await AccountModel.find({}).sort({ createdAt: -1 });
        res.json( Accounts );
    } catch (err) {
        res.json({ message: 'Error retrieving Accounts' });
        console.error(err);
    }
};

const createNewAccount = async (newAccountData) => {
    const conflict = await AccountModel.findOne({ email: newAccountData.email }).exec();
    if (conflict) {
        console.error('Email conflict');
        return;
    }

    const newAccount = await AccountModel.create(
        {
            email: newAccountData.email,
            password: newAccountData.password,
            account_type: newAccountData.account_type,
            user_id: newAccountData._id,
        }
    );
    console.log( newAccount );
};

const updateAccount = async () => {

};

const deleteAccount = async () => {

};


module.exports = {
    getAccount,
    createNewAccount,
    updateAccount,
    deleteAccount
};