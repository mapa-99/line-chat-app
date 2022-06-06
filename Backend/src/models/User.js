import mongoose from 'mongoose';
const { Schema } = mongoose

const UserSchema = new Schema({
    userame: {
        type: String,
        required: true,
        unique: true,
        allowNull: false,
    },
    email: {
        type: String,
        allowNull: false,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        allowNull: false,
        required: true,
        min: 6,
    },
    profilePicture: {
        type: String,
        default: "",
    },
    description: {
        type: String,
    },
    city: {
        type: String,
    },

},
    { timestamps: true });

module.exports = mongoose.model('User', UserSchema);

