import database from "../../../../database/config/index"
import Advocate from "../../../../database/models/advocate"
import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const inputValidation = z.object({
    name: z.string(),
    slug: z.string(),
    city: z.string(),
    experience: z.string(),
    education: z.string(),
    category: z.array(z.string()),
    about: z.string(),
    imgUrl: z.string()
})

export async function GET() {
    try {
        const data = await Advocate.getAdvocates()
        return NextResponse.json(
            data
        )

    } catch (error) {
        console.log(error)
    }
}

