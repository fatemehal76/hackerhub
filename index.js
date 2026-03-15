const express=require('express')
const sequelize=require('./database/sequelize_DB')
const path = require('path')
const signUp_route=require('./router/siginUp.route')
const port=55000

const app=express()

app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.use('/',signUp_route)

app.listen(port,async()=>{
    try{
        await sequelize.authenticate()
        await sequelize.sync(
            // {force:true}
        )
        console.log(`we connected to web on port ${port}`)

    }catch(error){
        console.log(error)
        
    }
})