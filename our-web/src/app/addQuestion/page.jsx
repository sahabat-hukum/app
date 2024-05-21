import Link from 'next/link'
import React from 'react'


const AddQuestion = () => {
  return (
    <div>
         <div
        className="main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
        style={{ background: "rgba(0,0,0,.7)" }}
      >
        <div className="border border-blue-500  modal-container bg-white w-4/12 md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto">
          <div className="modal-content py-4 text-left px-6">
            <div className="flex justify-between items-center pb-3">
              <p className="text-2xl font-bold text-gray-500">Tambah Pertanyaan</p>
            </div>
            <div className="my-5 mr-5 ml-5 flex justify-center">
              <form >
                <div className="">
                  <div className="">
                    <label htmlFor="names" className="text-md text-gray-600">
                      Judul
                    </label>
                  </div>
                  <div className="">
                    <input
                      type="text"
                      id="name"
                      autoComplete="off"
                      name="name"
                      className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                      placeholder="Judul"
                     
                    />
                  </div>
                  <div>
                    <div className="">
                      <label htmlFor="phone" className="text-md text-gray-600">
                        Nama
                      </label>
                    </div>
                    <div className="">
                      <input
                        type="text"
                        id="phone"
                        autoComplete="off"
                        name="price"
                        className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                        placeholder="Nama"
                       
                      />
                    </div>
                  </div>
                  <div className="">
                    <label
                      htmlFor="id_number"
                      className="text-md text-gray-600"
                    >
                      Content
                    </label>
                  </div>
                  <div className="">
                    <textarea                   
                      rows="4" 
                      cols="50"         
                      name="Content"
                      className="p-4 w-full border-2 border-gray-300 mb-5 rounded-md"                        
                    />
                  </div>  
                  <div className='justify-between flex'>
                  <button className='bg-blue-700 px-6 py-3 text-white rounded-md hover:bg-blue-800'>Tambahkan</button>         
                <Link href="/diskusi">  <button className='bg-slate-500 px-6 py-3 text-white rounded-md hover:bg-slate-600'>Kembali</button>    </Link>

                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>




    </div>
  )
}

export default AddQuestion