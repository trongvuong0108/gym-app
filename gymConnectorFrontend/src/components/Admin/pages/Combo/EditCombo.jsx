import React from "react";
import { useState } from "react";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const EditCombo = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [comboId, setComboId] = useState(0);
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");
  const headers = {
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  const params = useParams();
  const navigate = useNavigate();
  const getGym = () => {
    axios
      .get(`http://localhost:8080/admin/combo/getComboById/` + params.id, {
        headers: headers,
      })
      .then((response) => {
        setComboId(response.data.id);
        setPrice(response.data.price);
        setName(response.data.name);
      });
  };
  useEffect(() => {
    getGym();
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
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <span className="hidden xs:block ml-2">Add view</span>
                </button>
              </div>
            </div>

            <div className="">
              <form>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Tên combo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required=""
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Đơn giá
                  </label>
                  <input
                    type="text"
                    id="fee"
                    name="fee"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required=""
                    autoComplete="off"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <button
                  onClick={async (event) => {
                    event.preventDefault();

                    const updateCombo = await axios.post(
                      "http://localhost:8080/admin/combo/updateCombo",
                      { id: comboId, name: name, price: price },
                      {
                        headers: headers,
                      }
                    );
                    console.log(updateCombo);
                    if (updateCombo.status === 200) {
                      navigate("/admin/listCombo");
                    }
                  }}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Cập nhật
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EditCombo;
