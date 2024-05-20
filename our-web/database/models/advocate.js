const { z } = require("zod")
const { database } = require("../config/index")
const advocateCollection = database.collection('advocates')

export const registerAdvocateSchema = z.object({
    NIA: z.string().nonempty("NIA tidak boleh kosong"),
    name: z.string().nonempty("Nama tidak boleh kosong"),
    city: z.string().nonempty("Kota tidak boleh kosong"),
    experience: z.string(),
    education: z.string().nonempty("Pendidikan tidak boleh kosong"),
    category: z.array(z.string()).nonempty("Kategori tidak boleh kosong"),
    about: z.string(),
    imgUrl: z.string()
})

export default class Advocate {
    static collection() {
        return database.collection("advocates")
    }

    static async findByNIA(NIA) {
        const user = await this.collection().findOne({ NIA })
        return user
    }

    static async addAdvocate(newAdvocate) {
        const result = registerSchema.safeParse(newAdvocate);
        if (!result.success) {
            throw result.error;
        }

        const existingNIA = await this.findByNIA(newAdvocate.NIA);
        if (existingNIA) {
            throw new Error("NIA sudah terdaftar");
        }

        const user = await this.collection().insertOne(newAdvocate);

        return {
            _id: user.insertedId,
            ...newAdvocate,
        };

    }
    static async getAdvocates() {
        return await advocateCollection.find({}).toArray()
    }

    static async getAdvocateById(_id) {
        return await advocateCollection.findOne({ _id: ObjectId(_id) })
    }
}