var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;
var UserSchema = new Schema({

    name: {
        type: String,
        unique: true,
        
    },
    
     email: {
         type: String,
         unique: true,
         required: true,
         lowercase: true
     },
    password: {
        type: String,
        required: true
    },
    
    logged: {
        type: Number,
        //default:0
    }

});
UserSchema.pre('save', function (next) {
    var user = this;
    // user.contact = "0" + user.contact;
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(5, function (err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, null, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});
////////////comparing passwords//////

UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('Users', UserSchema)//mongoose.model('collectionName',SchemaName)


