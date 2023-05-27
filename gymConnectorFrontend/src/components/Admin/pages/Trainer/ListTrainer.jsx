import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ExportSheet from "../../../Features/ExportSheet";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";

const ListTrainer = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [data, setData] = useState([]);
  const headers = {
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  const getData = () => {
    axios
      .get("http://localhost:8080/admin/personalTrainer/getALlPT", {
        headers: headers,
      })
      .then((response) => {
        setData(response.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const handleOnCLickExport = () => {
    if (data) {
      ExportSheet.exportExcel(data, "Danh sách thông tin HLV", "ListPT");
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                <button
                  onClick={() => handleOnCLickExport()}
                  className="btn bg-lime-600 hover:bg-lime-800 text-white rounded-xl"
                >
                  <span className="m-1.5">Xuất excel</span>
                </button>
              </div>
            </div>
            <div className="table-list">
              {/* Table list */}
              <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="py-3 px-6">
                        Tên HLV
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Địa chỉ
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Số điện thoại
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Đơn giá
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Các thao tác
                      </th>
                    </tr>
                  </thead>
                  {data.map((trainer) => (
                    <tbody>
                      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {trainer.name}
                        </th>
                        <td className="py-4 px-6">{trainer.address}</td>
                        <td className="py-4 px-6">{trainer.phone}</td>
                        <td className="py-4 px-6">{trainer.fee}</td>
                        <td className="py-4 px-6">
                          {trainer.enable ? (
                            <button
                              onClick={() => {
                                axios.get(
                                  "http://localhost:8080/admin/personalTrainer/disablePT/" +
                                    trainer.id,
                                  { headers: headers }
                                );
                                window.location.reload();
                              }}
                              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              Vô hiệu hóa
                            </button>
                          ) : (
                            <button
                              onClick={() => {
                                axios.get(
                                  "http://localhost:8080/admin/personalTrainer/enablePT/" +
                                    trainer.id,
                                  { headers: headers }
                                );
                                window.location.reload();
                              }}
                              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              Mở khóa
                            </button>
                          )}
                          |{" "}
                          <Link
                            to={"/admin/listTrainer/listUserByPt/" + trainer.id}
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Xem danh sách học viên
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ListTrainer;
