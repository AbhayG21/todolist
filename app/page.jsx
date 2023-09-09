"use client";

//prevent default: when we click on submit button it will refresh the page and we dont want that so we use prevent default
//useState: it is used to store the value of the input field
//onChange: it is used to change the value of the input field
//value: it is used to get the value of the input field

import React, { useState } from "react";

const page = () => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const [mainTask, setmainTask] = useState([]);
    const submitHandeler = (e) => {
        console.log(title, desc);
        e.preventDefault();
        setmainTask([...mainTask, { title, desc }]);
        setdesc("");
        settitle("");
    };
    let renderTask = <h2>No Task Available</h2>;
    if (mainTask.length > 0) {
        renderTask = mainTask.map((t, i) => {
            return (
                <li>
                    <div className="flex justify-between mb-5">
                        <h5 className="text-2xl font-semibold">{t.title}</h5>
                        <h6 className="text-xl font-semibold">{t.desc}</h6>
                    </div>
                </li>
            );
        });
    }

    return (
        <>
            <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
                Abhay's To-DO List
            </h1>
            <form onSubmit={submitHandeler}>
                <input
                    type="text"
                    className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
                    placeholder="Enter your title here"
                    value={title}
                    onChange={(e) => {
                        settitle(e.target.value);
                    }}
                />
                <input
                    type="text"
                    className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
                    placeholder="Enter your description here"
                    value={desc}
                    onChange={(e) => {
                        setdesc(e.target.value);
                    }}
                />
                <button className="bg-black text-white px-4 py-3 m-5 text-2xl font-bold rounded">
                    Add Task
                </button>
            </form>
            <hr />
            <div className="p-8 bg-slate-200">
                <ul>{renderTask}</ul>
            </div>
        </>
    );
};

export default page;
