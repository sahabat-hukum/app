import User from "../../../../database/models/user"

export async function POST(request) {
    try {
        const body = await request.json()
        console.log(body, "<<<")

        const userByEmail = await User.findByEmail(body.email)
        const userByMobile = await User.findByMobile(body.mobile)

        if(!userByEmail && !userByMobile) {
            throw new Error("Invalid email or phone number")
        }
        // console.log(userByEmail, "<<<<<<")  


    } catch (error) {
        console.log(error)
    }
}