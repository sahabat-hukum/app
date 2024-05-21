import Navbar from "@/components/navbar";
import Link from "next/link";
import React from "react";

const page = () => {
  const diskusi = [
    {
      id: "23",
      title:
        "There are two more RenderTextures running when UseHDR is enabled in GraphicsSettings in unity",
      name: "Dea siti mutmainah",
      vote: "100",
      createdAt: "20-05-2024",
      jumlahComent: "3000",
      comment: [
        {
          nama: "dea puspita sari",
          comment:"Lorem ipsum dolor sit amet, asi a cupiditate quae architecto dolores enim aut Dolores pariatur doloremque minus"
        },
        {
          nama: "dea puspita sari1",
          comment:
            "Lorem ipsum dolor sit amet, asi a cupiditate quae architecto dolores enim aut Dolores pariatur doloremque pariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lore minus"
        },
        {
          nama: "dea puspita sari2",
          comment:"Lorem ipsum dolor sit amet, asi a cupiditate quae architecto dolores enim aut Dolores pariatur dolorem lore pariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lore pariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lore",
        },
        {
          nama: "dea puspita sari1",
          comment:
            "Lorem ipsum dolor sit amet, asi a cupiditate quae architecto dolores enim aut Dolores pariatur doloremque pariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lore minus"
        },
        {
          nama: "dea puspita sari1",
          comment:
            "Lorem ipsum dolor sit amet, asi a cupiditate quae architecto dolores enim aut Dolores pariatur doloremque pariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lore minus"
        },
        {
          nama: "dea puspita sari1",
          comment:
            "Lorem ipsum dolor sit amet, asi a cupiditate quae architecto dolores enim aut Dolores pariatur doloremque pariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lore minus"
        },
        {
          nama: "dea puspita sari1",
          comment:
            "Lorem ipsum dolor sit amet, asi a cupiditate quae architecto dolores enim aut Dolores pariatur doloremque pariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lore minus"
        },
        {
          nama: "dea puspita sari1",
          comment:
            "Lorem ipsum dolor sit amet, asi a cupiditate quae architecto dolores enim aut Dolores pariatur doloremque pariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lore minus"
        },
        {
          nama: "dea puspita sari1",
          comment:
            "Lorem ipsum dolor sit amet, asi a cupiditate quae architecto dolores enim aut Dolores pariatur doloremque pariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lore minus"
        },
        {
          nama: "dea puspita sari1",
          comment:
            "Lorem ipsum dolor sit amet, asi a cupiditate quae architecto dolores enim aut Dolores pariatur doloremque pariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lore minus"
        },
        {
          nama: "dea puspita sari1",
          comment:
            "Lorem ipsum dolor sit amet, asi a cupiditate quae architecto dolores enim aut Dolores pariatur doloremque pariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lore minus"
        },
        {
          nama: "dea puspita sari1",
          comment:
            "Lorem ipsum dolor sit amet, asi a cupiditate quae architecto dolores enim aut Dolores pariatur doloremque pariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lore minus"
        },
        {
          nama: "dea puspita sari1",
          comment:
            "Lorem ipsum dolor sit amet, asi a cupiditate quae architecto dolores enim aut Dolores pariatur doloremque pariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lore minus"
        },
        {
          nama: "dea puspita sari1",
          comment:
            "Lorem ipsum dolor sit amet, asi a cupiditate quae architecto dolores enim aut Dolores pariatur doloremque pariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lore minus"
        },
        {
          nama: "dea puspita sari1",
          comment:
            "Lorem ipsum dolor sit amet, asi a cupiditate quae architecto dolores enim aut Dolores pariatur doloremque pariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lore minus"
        },
        {
          nama: "dea puspita sari1",
          comment:
            "Lorem ipsum dolor sit amet, asi a cupiditate quae architecto dolores enim aut Dolores pariatur doloremque pariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lore minus"
        },
        {
          nama: "dea puspita sari1",
          comment:
            "Lorem ipsum dolor sit amet, asi a cupiditate quae architecto dolores enim aut Dolores pariatur doloremque pariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lore minus"
        },
        {
          nama: "dea puspita sari1",
          comment:
            "Lorem ipsum dolor sit amet, asi a cupiditate quae architecto dolores enim aut Dolores pariatur doloremque pariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lore minus"
        },
        {
          nama: "dea puspita sari1",
          comment:
            "Lorem ipsum dolor sit amet, asi a cupiditate quae architecto dolores enim aut Dolores pariatur doloremque pariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lorepariatur dolorem lore minus"
        }
      ],
    },
  ];

  return (
    <>
      <div className="pt-20">
        <Navbar />
      </div>

      <div
        style={{ marginLeft: 250 }}
        className=" h-screen mt-3 flex-col "
      >
        {diskusi.map((item, index) => {
          return (
            <>
              <div>
              <div
                key={index}
                style={{ width: 1000 }}
                className="  bg-slate-100 border-b-4 border-slate-600 h-44 mt-20 px-5 pt-3 rounded-md sticky top-24   "
              >

                <p className="bg-blue-50 inline-block px-2 py-1 rounded-sm font-bold text-slate-700">
                  {item.title}
                </p>
                <p className="mt-5 font-bold">{item.jumlahComent} Comment</p>
                <button className="bg-blue-100 px-2 py-1 rounded-md hover:bg-blue-200">
                  <p className="font-light">{item.vote} ❤</p>
                </button>
                <div className="flex gap-4  text-sm justify-end">
                  <p className="font-light">{item.name}</p>
                  <p className="font-light">{item.createdAt}</p>
                </div>

                </div>


                <div style={{ width: 1000 }} className="">             

                <a href="#up"><div  className="mt-16 text-blue-950 text-xl font-bold">
                  Semua Komen
                </div></a>

                {item.comment.map((item) => {
                  return (
                    <>
                      <div className="px-2 py-4 mt-5 rounded-sm bg-slate-200">
                        <p className="font-bold bg-blue-200 text-slate-800 px-3 py-2 inline-block rounded-sm">{item.nama}</p>
                        <p className="mt-5">{item.comment}</p>
                      </div>
                      
                    </>
                  );
                })}
              </div>            
            
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default page;
