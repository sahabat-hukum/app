const {z} = require ("zod")

export const registerAdvocateSchema=z.object({
    NIA: z.string().nonempty("NIA tidak boleh kosong"),
    name: z.string().nonempty("Nama tidak boleh kosong"),
    location: z.string().nonempty("Lokasi tidak boleh kosong"),
    experience: z.string(),
    lawCategory: z.string().nonempty("Kategori tidak boleh kosong"),
    institutionName: z.string().nonempty("Institusi tidak boleh kosong"),
    education: z.string(),
})

export default class Advocate {
    static collection() {
        return database.collection("advocates")
    }

    static async findByNIA (NIA) {
        const user = await this.collection().findOne({NIA})
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
}