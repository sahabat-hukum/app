"use client";
import Navbar from "@/components/navbar";
import Link from "next/link";
import React from "react";

const page = ({item}) => {
  const advokat = [
    {
      Id: "000000090999",
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
        "Raden Destayoma Anugrah Putra Armanda, S.H. merupakan seorang Advokat ",
      LinkFoto:
        "https://storage.googleapis.com/perqara-public/lawyer/photo_1714634355",
    },
    {
      Id: "000000090999",
      Nama: "Raden Destayoma Anugrah Putra Armanda, S.H.",
      Kota: "Malang",
      Pengalaman: "1 Tahun",
      Pendidikan: "Universitas Muhammadiyah Malang",
      Kategory: [
        "Pidana",
        "Perdata",
        "Pertanahan",
        "Perkawinan ",
        "Ketenagakerjaan",
      ],
      Tentang:
        "Raden Destayoma Anugrah Putra Armanda, S.H. merupakan seorang Advokat ",
      LinkFoto:
        "https://storage.googleapis.com/perqara-public/lawyer/photo_1714634355",
    },
    {
      Id: "000000090999",
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
        "Raden Destayoma Anugrah Putra Armanda, S.H. merupakan seorang Advokat ",
      LinkFoto:
        "https://storage.googleapis.com/perqara-public/lawyer/photo_1714634355",
    },
    {
      Id: "000000090999",
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
        "Raden Destayoma Anugrah Putra Armanda, S.H. merupakan seorang Advokat ",
      LinkFoto:
        "https://storage.googleapis.com/perqara-public/lawyer/photo_1714634355",
    }, {
        Id: "000000090999",
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
          "Raden Destayoma Anugrah Putra Armanda, S.H. merupakan seorang Advokat ",
        LinkFoto:
          "https://storage.googleapis.com/perqara-public/lawyer/photo_1714634355",
      }, {
        Id: "000000090999",
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
          "Raden Destayoma Anugrah Putra Armanda, S.H. merupakan seorang Advokat ",
        LinkFoto:
          "https://storage.googleapis.com/perqara-public/lawyer/photo_1714634355",
      }, {
        Id: "000000090999",
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
          "Raden Destayoma Anugrah Putra Armanda, S.H. merupakan seorang Advokat ",
        LinkFoto:
          "https://storage.googleapis.com/perqara-public/lawyer/photo_1714634355",
      }, {
        Id: "000000090999",
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
          "Raden Destayoma Anugrah Putra Armanda, S.H. merupakan seorang Advokat ",
        LinkFoto:
          "https://storage.googleapis.com/perqara-public/lawyer/photo_1714634355",
      }, {
        Id: "000000090999",
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
          "Raden Destayoma Anugrah Putra Armanda, S.H. merupakan seorang Advokat ",
        LinkFoto:
          "https://storage.googleapis.com/perqara-public/lawyer/photo_1714634355",
      },
  ];

  return (
    <>
      <div className="pt-20">
        <Navbar />
      </div>

      <div className="mt-24  text-center">
        <h1 className="font-bold text-4xl text-blue-950 mr-32 ">
          Temukan Advokat Pilihanmu
        </h1>
      </div>
      <div className="h-screen w-full  px-20 ">
        {/* -----search---- */}
        <div className=" flex ml-80 pl-12 sticky top-24   pb-3 pt-5 bg-white ">
          <form className=" flex gap-3 ">
            <div>
              <input
                style={{ width: 535 }}
                className="h-10  px-3 outline outline-1 outline-blue-950 rounded-md"
                type="text"
              />
            </div>
            <button className="bg-blue-950 px-3 py-1 rounded-md text-white">
              <p>Search</p>
            </button>
          </form>
        </div>

        {/* --------Card--------- */}

        <div className=" h-screen w-full mt-10  justify-center flex ">
          <div className=" ">
            {advokat.map((item,index) => {
              return (
                <>
             <Link href={`/advokat/${item.Id}`}>
                    <div key={index}>
                      <div className="mt-5  gap-3  px-6 py-6 bg-blue-100 rounded-t-md flex border-b-2 border-slate-300 ">
                        <div>
                          <img
                            className="w-24 rounded-md "
                            src={item.LinkFoto}
                            alt=""
                          />
                        </div>

                        <div>
                          <p className="font-bold text-md">{item.Nama}</p>
                          <div className="flex gap-4 mt-2 ">
                            <p>{item.Kota}</p>I
                            <p>Pengalaman {item.Pengalaman}</p>
                          </div>
                          <div className="flex gap-2 text-sm font-light mt-5">
                            {item.Kategory.map((category, index) => {
                              return (
                                <>
                                <div key={index}>
                                  <p
                                    className=" bg-slate-300 px-2 py-1 rounded-sm"
                                  
                                  >
                                    {category}
                                  </p>
                                  </div>
                                </>
                              );
                            })}
                          </div>
                          <div className="mt-5 flex">
                            <p className="font-bold">Pendidikan :</p>
                            <p>{item.Pendidikan}</p>
                          </div>
                        </div>
                      </div>
                      <div className=" bg-blue-100 w-full h-16 py-2 text-end px-4">                        
                        <button className="bg-blue-800 rounded-md  py-2 text-white px-4 hover:bg-blue-950  ">
                          Konsultasikan
                        </button>
                      </div>
                    </div> 
                    </Link>              
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
