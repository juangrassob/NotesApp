const {Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},

}, {
    tymestamps:true
});

UserSchema.methods.encrypPasswprd = async password =>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

UserSchema.method.matchPassword = function(password) {
    //Es un metodo de UserSchema, por lo que this.password hace referencia a la pass que esta guardada en la db
    return await bcrypt.compare(password, this.password) ; 
}

madule.exports = model('User', UserSchema);