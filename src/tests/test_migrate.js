const sequelize = require('../utils/connection');
const user = require('./createData/user');
require("../models")

const main = async() => {
    try{
        await sequelize.sync();
        await user()
        console.log('me ejecute xd');
        process.exit();
    } catch(error){
        console.log(error);
    }
 }

main();