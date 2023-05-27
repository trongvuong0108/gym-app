import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";

const FillCodePT = () => {
  const data = useParams();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: Yup.object({
      code: Yup.string()
        .required("Không được bỏ trống mục này")
        .min(4, "Phải nhiều hơn 4 ký hoặc hơn"),
    }),
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("token", formik.values.code);
      formData.append("username", data.username);
      const confirmToken = await axios.post(
        "http://localhost:8080/signInPersonalTrainer/confirmToken",
        formData
      );
      if (confirmToken.data === "OK") navigate("/questLogin");
    },
  });

  return (
    <div className="max-w-[1920px] mx-auto bg-page overflow-hidden relative">
      <section className="bg-gradient-to-tl from-pink-400 to-indigo-500 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="/home"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-36 h-36"
              src={require("../../images/logo-g.png")}
              alt="logo"
            />
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Điền mã xác nhận
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={formik.handleSubmit}
              >
                <div>
                  <label
                    htmlFor="code"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Mã xác nhận
                  </label>
                  <input
                    type="text"
                    name="code"
                    id="code"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="abcd"
                    required=""
                    autoComplete="off"
                    value={formik.values.code}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.code && (
                    <p className="max-w-full text-xs text-red-500">
                      {formik.errors.code}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="mt-8 w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Tiếp tục
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FillCodePT;
