const {Sequelize}=require('sequelize')

const sequelize=new Sequelize('hackerhub','fatemeh','123456',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize