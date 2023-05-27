import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
import * as Yup from "yup";
import axios from "axios";

const CreateCombo = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [gyms, setGyms] = useState([]);
  const formik = useFormik({
    initialValues: {
      gym: 0,
      name: "",
      fee: 0,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Không được bỏ trống mục này"),
      fee: Yup.string().required("Không được bỏ trống mục này"),
      gym: Yup.string().required("Không được bỏ trống mục này"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const headers = {
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  const getGym = () => {
    axios
      .get("http://localhost:8080/admin/gym/getAll", { headers: headers })
      .then((response) => {
        setGyms(response.data);
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
                    Phòng tập
                  </label>
                  <select
                    name="gym"
                    value={formik.values.gym}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option
                      value="Chọn phòng gym nè"
                      key="Chọn phòng gym nè"
                      selected
                    >
                      ----------Chọn phòng gym nè----------
                    </option>
                    {gyms.map((gym) => {
                      return (
                        <option value={gym.id} key={gym.id}>
                          {gym.name}
                        </option>
                      );
                    })}
                  </select>
                  {formik.errors.gym && (
                    <p className="max-w-full text-xs text-red-500">
                      {formik.errors.gym}
                    </p>
                  )}
                </div>
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
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.name && (
                    <p className="max-w-full text-xs text-red-500">
                      {formik.errors.name}
                    </p>
                  )}
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
                    value={formik.values.fee}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.fee && (
                    <p className="max-w-full text-xs text-red-500">
                      {formik.errors.fee}
                    </p>
                  )}
                </div>
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    console.log(formik.values);
                    axios.post(
                      "http://localhost:8080/admin/combo/addCombo",
                      {
                        name: formik.values.name,
                        price: formik.values.fee,
                        gymId: formik.values.gym,
                      },
                      {
                        headers: headers,
                      }
                    );
                  }}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Tạo mới
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreateCombo;
