const User = require("../../models/User")

const user = async()=> {

    const userCreate = {
            firstName: "julian",
            lastName: "capi",
            email: "nomires@outlook.com",
            password: "CAPILLITO",
            phone: "996703615"
    }
    await User.create(userCreate)
}

module.exports = user