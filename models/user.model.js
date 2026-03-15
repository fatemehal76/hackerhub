const {
    Sequelize,
    DataTypes
} = require('sequelize')
const sequelize = require('../database/sequelize_DB')


const user = sequelize.define('User', ({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            
            allowNull: false
        }

    }), {
        hooks: {
            beforeCreate: (user, options) => {
                if (user.userName) user.userName = user.userName.toLowerCase()
            }
        }
    }

)

module.exports = user