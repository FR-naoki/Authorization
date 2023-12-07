const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, `usernameは必須です`]
    },
    password: {
        type: String,
        required: [true, `passwordは必須です`]
    }
})

module.exports = mongoose.model(`User`, userSchema);

// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: [true, 'usernameは必須です']
//     },
//     password: {
//         type: String,
//         required: [true, 'passwordは必須です']
//     }
// });

// userSchema.statics.findAndValidate = async function (username, password) {
//     const foundUser = await this.findOne({ username });
//     const isValid = await bcrypt.compare(password, foundUser.password);
//     return isValid ? foundUser : false;
// }

// userSchema.pre('save', async function (next) {
//     if(!this.isModified('password')) return next();
    
//     this.password = await bcrypt.hash(this.password, 12);
//     next();
// });

// module.exports = mongoose.model('User', userSchema);