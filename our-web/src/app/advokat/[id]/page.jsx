import Navbar from "@/components/navbar";
import React from "react";
import Link from "next/link";


const page = () => {
  const advokat = [
    {
      Nama: "Raden Destayoma Anugrah Putra Armanda, S.H.",
      Kota: "Malang",
      Pengalaman: "1 Tahun",
      Pendidikan: "Universitas Muhammadiyah Malang",
      Kategory: [
        "Pidana",
        "Perdata",
        "Pertanahan",
        "Perkawinan",
        "Ketenagakerjaan",
      ],
      Tentang:
        "Raden Destayoma Anugrah Putra Armanda, S.H. merupakan seorang Advokat  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum corporis aspernatur quos molestias, provident aliquam! Fugiat recusandae expedita commodi fuga vitae ad quas. Ipsum, laborum earum obcaecati adipisci corrupti, tempore error qui minima optio facilis similique cum nobis harum? Maxime explicabo consectetur pariatur earum atque vero quam eius quo a.",
      LinkFoto:
        "https://storage.googleapis.com/perqara-public/lawyer/photo_1714634355",
    },
  ];

  return (
    <>
      <div className="pt-20">
        <Navbar />
      </div>

      <div>
        <div className=" h-screen w-full mt-10  justify-center flex px-36 ">
          <div className=" ">
            {advokat.map((item) => {
              return (
                <>
                  <div>
                    <div className="mt-5  gap-3  px-6 py-6 bg-blue-100 rounded-t-md flex border-b-2 border-slate-300 ">
                      <div>
                        <img style={{width:800}}
                          className=" rounded-md "
                          src={item.LinkFoto}
                          alt=""
                        />
                      </div>

                      <div>
                        <p className="font-bold text-md">{item.Nama}</p>
                        <div className="flex gap-4 mt-2 ">
                          <p>{item.Kota}</p>I<p>Pengalaman {item.Pengalaman}</p>
                        </div>
                        <div className="flex gap-2 text-sm font-light mt-5">
                          {item.Kategory.map((category, index) => {
                            return (
                              <>
                                <p
                                  className=" bg-slate-300 px-2 py-1 rounded-sm"
                                  key={index}
                                >
                                  {category}
                                </p>
                              </>
                            );
                          })}
                        </div>
                        <div className="mt-5 flex">
                          <p className="font-bold">Pendidikan :</p>
                          <p>{item.Pendidikan}</p>
                        </div>
                        <div className="font-bold mt-5">Tentang Advokat</div>
                        <div>{item.Tentang}</div>
                      </div>
                    </div>
                    <div className=" bg-blue-100 w-full h-16 py-2  px-4 flex justify-between">
                      <button className="ml-2 bg-blue-800 rounded-md w-64  py-2 text-white px-4 hover:bg-blue-950  ">
                        Konsultasikan
                      </button>
                     <Link href="/advokat" > <button className="ml-2 bg-slate-500 rounded-md w-32  py-2 text-white px-4 hover:bg-slate-600  ">
                        Kembali
                      </button></Link>
                   
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
