const { NextResponse } = require("next/server");
const { ZodError } = require ("zod");

export async function POST(request){
    try {
        const body = await request.json()
        // console.log(body, "<<<<<<<")
        const {email, mobile} = body
        // const newUser = await User.addUser(body)
        
        return NextResponse.json({
            email,
            mobile
        }, {status: 200})
        
    } catch (error) {

        if(error instanceof ZodError){
            const err = error.issues[0].path + ' ' + error.issues[0].message

            return NextResponse.json({
                error: err
            }, {status: 400})
        }

        return NextResponse.json({
            error: 'Internal Server Error'
        }, {status: 500})
        
    }
}