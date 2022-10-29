const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');
const UserSchema = new Schema({//esquema de usuario
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    timestamps:true,
});

UserSchema.methods.encryptPassword = async password =>{//aplicar hash a contraseña antes de guardarla en la db
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password,salt);
};

UserSchema.methods.matchPassword = async function(password) {//compara credencial de contraseña al iniciar sesion
    return await bcrypt.compare(password, this.password);
};

model.exports = model('User', UserSchema);

