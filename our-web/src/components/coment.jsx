import React from "react";

const Coment = ({ id }) => {
  const handleComment = async (formData) => {
    const input = {
      content: formData.get("content"),
    };
    input.postId = id;

    await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/login", {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(input),
    });
  };
  return (
    <div id="#up" className="mt-4">
      <form action={handleComment}>
        <div>
          <textarea
            placeholder="tambahkan komen"
            className=" p-2 outline outline-2 outline-gray-700 rounded-md border-b-4 border-slate-600 ml-5"
            name="content"
            rows="4"
            cols="105"
            id=""
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="ml-5 bg-blue-200 hover:bg-blue-300 rounded-sm px-2 py-1"
          >
            Kirim
          </button>
        </div>
      </form>
    </div>
  );
};

export default Coment;
