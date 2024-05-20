import database from "../../../../../database/models/advocate"
import { NextResponse } from "next/server";


export async function GET({ slug }) {
    try {
        const slug = params.slug
        const advocate = await database.collections("advocates").findOne({ slug })

        if (!advocate) {
            return NextResponse.json(
                {
                    message: "Data not found"
                },
                {
                    status: 404
                }
            )
        }
        return NextResponse.json(
            {
                message: "Data retrieved",
                advocate: advocate
            },
            {
                status: 200
            }
        )

    } catch (error) {
        console.log(error)
    }



}