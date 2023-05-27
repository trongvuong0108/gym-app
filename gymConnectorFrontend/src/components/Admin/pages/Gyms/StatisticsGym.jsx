import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExportSheet from "../../../Features/ExportSheet";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";

const StatisticsGym = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [bills, setBills] = useState([]);
  const params = useParams();
  const headers = {
    Authorization: "Bearer " + localStorage.getItem("token"),
  };

  const handleOnCLickExport = () => {
    if (bills) {
      ExportSheet.exportExcel(bills, "Thống kê phòng tập", "StatisticsGym");
    }
  };

  function formateDay(date) {
    return (
      date[3] +
      ":" +
      date[4] +
      ":" +
      date[5] +
      "-" +
      date[2] +
      "-" +
      date[1] +
      "-" +
      date[0]
    );
  }

  const getBill = () => {
    axios
      .get(
        `http://localhost:8080/admin/billPayment/getBillByGym/${params.id}`,
        {
          headers: headers,
        }
      )
      .then((response) => {
        setBills(response.data);
        console.log(response.data);
      });
  };

  useEffect(() => {
    getBill();
  }, []);

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
                <h1 className="text-center text-2xl text-black font-bold mb-4">
                  Thống kê đăng ký phòng tập
                </h1>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="py-3 px-6">
                        Tên Người tập
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Địa chỉ
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Hotline
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Combo
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Ngày Bắt đầu
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Ngày Kết thúc
                      </th>
                    </tr>
                  </thead>
                  {bills.map((bill) => {
                    return (
                      <tbody>
                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                          <th
                            scope="row"
                            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {bill.user.name}
                          </th>
                          <td className="py-4 px-6">{bill.user.address}</td>
                          <td className="py-4 px-6">
                            {bill.user.account.phone}
                          </td>
                          <td className="py-4 px-6">{bill.combo.name}</td>
                          <td className="py-4 px-2">
                            {formateDay(bill.dayStart)}
                          </td>
                          <td className="py-4 px-2">
                            {formateDay(bill.dayEnd)}
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StatisticsGym;
