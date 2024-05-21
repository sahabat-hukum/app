"use client";
import Navbar from "@/components/navbar";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = ({ item }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_BASE_URL + `/api/advocates`,
          {
            method: "GET",
            cache: "no-store",
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        const { data } = await res.json();
        console.log(data);

        setData(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <>
      <div className="pt-20">
        <Navbar />
      </div>

      <div className="fixed bg-white w-full py-5">
        <div className="mt-20 w-full">
          <h1 className="flex justify-center font-bold text-4xl text-blue-950">
            Temukan Advokat Pilihanmu
          </h1>
        </div>
        {/* -----search---- */}
        <div className="flex justify-center bg-white ">
          <form className="flex gap-3 mt-3">
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
      </div>

      <div className="h-screen w-full  px-20 ">
        {/* --------Card--------- */}

        <div className=" h-screen w-full mt-52 justify-center flex ">
          <div className=" ">
            {data.map((item, index) => {
              return (
                <>
                  <Link href={`/advokat/${item._id}`}>
                    <div key={index}>
                      <div className="mt-5  gap-3  px-6 py-6 bg-blue-100 rounded-t-md flex border-b-2 border-slate-300 ">
                        <div>
                          <img
                            className="w-24 rounded-md "
                            src={item.imgUrl}
                            alt=""
                          />
                        </div>

                        <div>
                          <p className="font-bold text-md">{item.name}</p>
                          <div className="flex gap-4 mt-2 ">
                            <p>{item.city}</p>I
                            <p>Pengalaman {item.experience}</p>
                          </div>
                          <div className="flex gap-2 text-sm font-light mt-5">
                            {item.category
                              .split(", ", 3)
                              .map((category, index) => {
                                return (
                                  <>
                                    <div key={index}>
                                      <p className=" bg-slate-300 px-2 py-1 rounded-sm">
                                        {category}
                                      </p>
                                    </div>
                                  </>
                                );
                              })}
                          </div>
                          <div className="mt-5 flex">
                            <p className="font-bold">Pendidikan :</p>
                            <p>{item.education}</p>
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
