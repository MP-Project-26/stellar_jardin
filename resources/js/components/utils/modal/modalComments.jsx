import React from "react";
import ImageUser from "@/assets/user.png";
import { useEffect } from "react";
import { useState } from "react";
import moment from "moment/moment";
import { Link, useForm } from "@inertiajs/react";
import axios from "axios";

export default function ModalComments({ data: dataComment, id }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        note: "",
        createdAt: Date.now(),
    });
    const [item, setItem] = useState([]);
    useEffect(() => {
        setItem(dataComment.comments);
    }, [dataComment]);

    const handleComment = async (e) => {
        e.preventDefault();
        const response = await axios.put(
            `/blog/comment/${id}`,
            {
                id: data.id ? data.id + 1 : 1,
                name: data.name,
                note: data.note,
                createdAt: data.createdAt,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (response.status) {
            window.location.reload();
        }
    };
    return (
        <>
            <dialog
                id="my_modal_2"
                className="modal backdrop-blur-sm border-0 p-[3rem]"
            >
                <div className="lg:w-[60rem] lg:h-[30rem] w-[18rem] h-[30rem] relative rounded-xl bg-white ">
                    <button
                        className=" btn btn-sm btn-circle btn-ghost absolute right-5 top-5 bg-white shadow-xl border border-gray-500 z-[100] select-none"
                        onClick={() => window.my_modal_2.close()}
                    >
                        ✕
                    </button>
                    <div className=" relative ">
                        <div className="comment ">
                            <div className="  overflow-y-scroll scrollModal max-h-[18rem] lg:max-h-[21rem]">
                                {item
                                    ? item.map((data, index) => (
                                          <div
                                              key={index}
                                              className="w-full justify-center rounded-[2rem] flex flex-col gap-6 py-5 max-w-[90%]"
                                          >
                                              <div className="flex flex-row items-center gap-4">
                                                  <img
                                                      src={ImageUser}
                                                      alt=""
                                                      className="w-16"
                                                  />

                                                  <div className="flex flex-col gap-1">
                                                      <p className="font-roboto font-bold text-lg">
                                                          {data.name}
                                                      </p>
                                                      <p className="font-roboto font-normal text-xs ">
                                                          {moment(
                                                              item?.createdAt
                                                          ).fromNow()}
                                                      </p>
                                                  </div>
                                              </div>
                                              <p className="lg:ml-[3rem] m-2 font-roboto font-normal lg:text-lg text-sm bg-gray-200 p-3 rounded-xl shadow-md break-words h-auto">
                                                  {data.note}
                                              </p>
                                          </div>
                                      ))
                                    : null}
                            </div>
                        </div>
                    </div>
                    <div className="send-comment ">
                        <div className=" absolute bg-gray-100 w-full bottom-0 left-0  rounded-b-xl p-5">
                            <form
                                className="flex items-center  gap-[2.5rem] w-full"
                                onSubmit={handleComment}
                            >
                                <div className="flex flex-col w-full gap-3">
                                    <input
                                        type="text"
                                        className="lg:w-[30%] w-full rounded-[1rem] border input-bordered input-success p-2"
                                        placeholder="Name"
                                        onChange={(e) => {
                                            setData("name", e.target.value);
                                        }}
                                        value={data.name}
                                    />
                                    <input
                                        type="text"
                                        className="lg:w-[60%] w-full rounded-[1rem] border input-bordered input-success p-2"
                                        placeholder="Notes"
                                        onChange={(e) => {
                                            setData("note", e.target.value);
                                        }}
                                        value={data.note}
                                    />
                                    <div className="flex w-full items-end justify-end lg:-mt-12 m-0">
                                        <input
                                            type="submit"
                                            value="sumbit"
                                            className="bg-green-custom text-white w-full lg:w-auto rounded-[1rem] px-5 py-2 font-roboto font-bold cursor-pointer hover:bg-cyan-700 transition-all duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    );
}
