import React from "react";
import CurrencyFormatter from "currency-formatter";
import ToastMessage from "../Features/ToastMessage";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ModalTrainer({ showModal, onClose, trainer }) {
  const t = new Date();
  const date = ("0" + t.getDate()).slice(-2);
  const month = ("0" + (t.getMonth() + 1)).slice(-2);
  const year = t.getFullYear();
  const fromDate = `${date}/${month}/${year}`;
  const toDate = `${date}/${parseInt(month) + 1}/${year}`;
  const [showToast, setShowToast] = useState(false);
  const [typeM, setTypeM] = useState("");
  const [mess, setMess] = useState("");
  const navigate = useNavigate();
  const headers = {
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  const checkout = async () => {
    const formData = new FormData();
    formData.append("idUser", localStorage.getItem("id"));
    formData.append("idPt", trainer.id);
    const bookTrainer = await axios.post("http://localhost:8080/client/billPt/checkout", formData, { headers: headers },);
    if (bookTrainer.status === 200) {
      localStorage.setItem("trainer", bookTrainer.data.trainer.name)
      setShowToast(true);
      setTypeM("success");
      setMess("Thuê hlv thành công");
      console.log(bookTrainer);
      //navigate("/userInfo");
    }
  }
  return (
    <>
      {showModal ? (
        <>
          <ToastMessage showMess={showToast} typeMes={typeM} message={mess} />;
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Xác nhận chọn gói tập
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => onClose}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}

                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Bạn xác nhận chọn HLV: {trainer.name}
                  </p>

                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Với giá{" "}
                    {CurrencyFormatter.format(trainer.fee, {
                      code: "VND",
                    })}
                  </p>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Từ ngày {fromDate}
                  </p>

                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Tới ngày {toDate}
                  </p>
                </div>

                {/*footer*/}

                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      if (localStorage.getItem("pt") !== null) {
                        setShowToast(true);
                        setTypeM("fail")
                        setMess("Bạn có huấn luyên viên rồi mà")
                      }
                      if (localStorage.getItem("pt") === null) {
                        checkout()
                      }
                    }
                    }
                  >
                    Xác nhận
                  </button>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowToast(false);
                      onClose();
                    }}
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null
      }
    </>
  );
}
