const database = require("../config/index")
export default class User {
    static collection () {
        return database.collection("users")
    }

    static async findByEmail(email) {
        const user = await this.collection.findOne({
            email
        })

        return user
    }
}