import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
import * as Yup from "yup";
import PreviewImage from "../../../Features/PreviewImage";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateGym = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const headers = {
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      address: "",
      email: "",
      avatar: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Không được bỏ trống mục này")
        .min(4, "Phải nhiều hơn 4 ký hoặc hơn"),
      phone: Yup.string()
        .required("Không được bỏ trống mục này")
        .matches(
          /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          "Vui lòng điền đúng định dạng số điện thoại"
        ),
      address: Yup.string().required("Không được bỏ trống mục này"),
      email: Yup.string().required("Không được bỏ trống mục này"),
      avatar: Yup.mixed()
        .required("Không được bỏ trống mục này")
        .test(
          "FILE_SIZE",
          "Ảnh quá lớn",
          (value) => value && value.size < 1280 * 1280
        )
        .test(
          "FILE_TYPE",
          "Không tồn tại hoặc không đúng định dạng",
          (value) =>
            value &&
            ["image/png", "image/jpg", "image/jpeg"].includes(value.type)
        ),
    }),
    onSubmit: async (values) => {
      //create gym api call
      console.log(values.name);
      const addGym = await axios.post(
        "http://localhost:8080/admin/gym/addGym",
        {
          name: formik.values.name,
          email: formik.values.email,
          address: formik.values.address,
          phone: formik.values.phone,
        },
        { headers: headers }
      );
      if (addGym.status === 200) {
        const imgFormData = new FormData();
        imgFormData.append("image", values.avatar);
        imgFormData.append("idGym", parseInt(addGym.data.id));
        const addGymIMG = await axios.post(
          "http://localhost:8080/admin/gym/addGymImg",
          imgFormData,
          { headers: headers }
        );
        if (addGymIMG.status === 200) {
          navigate("/admin/listGym");
        }
      }
    },
  });

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
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Tên phòng tập
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
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required=""
                    autoComplete="off"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.email && (
                    <p className="max-w-full text-xs text-red-500">
                      {formik.errors.email}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Địa chỉ
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required=""
                    autoComplete="off"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.address && (
                    <p className="max-w-full text-xs text-red-500">
                      {formik.errors.address}
                    </p>
                  )}
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Hotline
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required=""
                    autoComplete="off"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.phone && (
                    <p className="max-w-full text-xs text-red-500">
                      {formik.errors.phone}
                    </p>
                  )}
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Hình ảnh
                  </label>
                  <input
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    id="avatar"
                    type="file"
                    name="avatar"
                    onChange={(e) =>
                      formik.setFieldValue("avatar", e.target.files[0])
                    }
                  />
                  {formik.errors.avatar && (
                    <p className="max-w-full text-xs text-red-500">
                      {formik.errors.avatar}
                    </p>
                  )}
                  {formik.values.avatar && (
                    <PreviewImage file={formik.values.avatar} />
                  )}
                </div>
                <button
                  type="submit"
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

export default CreateGym;
