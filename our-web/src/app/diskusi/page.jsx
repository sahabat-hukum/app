"use client";
import Navbar from "@/components/navbar";
import Tambah from "@/components/tambah";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_BASE_URL + `/api/post`,
          {
            method: "GET",
            cache: "no-store",
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        const data = await res.json();
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
      <div>
        <div
          style={{ marginLeft: 300, width: 900 }}
          className=" text-center    pb-5 bg-white pt-10  z-5 fixed   "
        >
          <h1 className="font-bold text-4xl text-blue-950 mr-32">
            Pertanyaan paling populer
          </h1>
          <Link href="/addQuestion">
            {" "}
            <div className=" flex justify-start ml-40 mt-5 text-white">
              <button className=" bg-blue-950 px-3 py-2 rounded-md">
                Tambaha Pertanyaan
              </button>
            </div>
          </Link>
        </div>

        <div
          style={{ marginLeft: 460 }}
          className="  h-screen mt-3 pt-36 flex-col "
        >
          {data?.map((item, index) => {
            return (
              <>
                <Link href={`/diskusi/${item.slug}`}>
                  {" "}
                  <div
                    key={index}
                    style={{ width: 600 }}
                    className="  bg-slate-100 border-b-4 border-slate-600 h-44 mt-10 px-5 pt-3 rounded-md hover:bg-slate-200  "
                  >
                    <p className="bg-blue-50 inline-block px-2 py-1 rounded-sm font-bold text-slate-700">
                      {item.title}
                    </p>
                    <p className="mt-5 font-bold">
                      {item.answers.length} Comment
                    </p>
                    <button className="bg-blue-100 px-2 py-1 rounded-md hover:bg-blue-200">
                      <p className="font-light">{item.vote} ❤</p>
                    </button>
                    <div className="flex gap-4  text-sm justify-end">
                      <p className="font-light">{item.user.name}</p>
                      <p className="font-light">{item.createdAt}</p>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
