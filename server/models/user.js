/* SONG MALISA SE, student number: 301233051, 26 oct 2022 */

// require modules for the User Model
let mongoose = require('mongoose');
let passportLocationMongoose = require('passport-local-mongoose');


let User = mongoose.Schema
(
    {
        username:
        {
            type: String,
            default: '',
            trim:true,
            required: 'username is required'
        },
        /*
        password:
        {
            type: String,
            default: '',
            trim: true,
            required: 'password is required'
        }
        */
       email:
       {
        type: String,
        default: '',
        trim: true,
        required: 'email address is required'

       },

       displayName:
       {
        type: String,
        default: '',
        trim: true,
        required: 'Display name is required'

       },

       created:
       {
        type: Date,
        default: Date.now,

       },
       update:
       {
        type: Date,
        default: Date.now,

       }

    },
    {
        collection: "users"
    }
);

// configure options for user model

let options = ({ missingPasswordError: 'Wrong / Missing Password'});

User.plugin(passportLocationMongoose, options);

module.exports.User = mongoose.model('User', User);
