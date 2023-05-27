import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginPT } from "../../../redux/apiRequest";
import * as Yup from "yup";
import axios from "axios";

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //google login
  const [loginData, setLoginData] = useState("");

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Không được bỏ trống mục này"),
      // .min(4, "Phải nhiều hơn 4 ký hoặc hơn"),
      password: Yup.string().required("Không được bỏ trống mục này"),
      // .matches(
      //   /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
      //   "Mật khẩu phải từ 7-19 ký tự và có ít nhất 1 từ, 1 số và 1 ký tự đặc biệt"
    }),
    onSubmit: async (values) => {
      const newUser = {
        username: formik.values.username,
        password: formik.values.password,
      };
      loginPT(newUser, dispatch, navigate);
      setLoginData(formik.values.username);
      const response = await axios.post("/auth/login", {
        username: formik.values.username,
        password: formik.values.password,
      });
      window.alert("Đăng nhập thành công");
      if (Storage !== undefined) {
        localStorage.setItem("token", response.data);
      }
      const form = new FormData();
      form.append("jwt", response.data);
      const userInfo = await axios.post("/auth/getUserInfo", form);
      if (userInfo.status === 200) {
        console.log(userInfo.data);
        localStorage.setItem("address", userInfo.data.address);
        localStorage.setItem("avatar", userInfo.data.avatar);
        localStorage.setItem("email", userInfo.data.email);
        localStorage.setItem("enable", userInfo.data.enable);
        localStorage.setItem("id", userInfo.data.id);
        localStorage.setItem("name", userInfo.data.name);
        localStorage.setItem("phone", userInfo.data.phone);
        localStorage.setItem("username", userInfo.data.username);
        localStorage.setItem("role", userInfo.data.role);
        navigate("/home");
      }
    },
  });
  return (
    <>
      {loginData ? (
        navigate("/home")
      ) : (
        <div className="max-w-[1920px] mx-auto bg-page overflow-hidden relative">
          <section className="bg-gradient-to-tl from-pink-300 to-indigo-500 dark:bg-gray-900">
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
                    Đăng nhập
                  </h1>
                  <form
                    className="space-y-4 md:space-y-6"
                    action="#"
                    onSubmit={formik.handleSubmit}
                  >
                    <div>
                      <label
                        htmlFor="username"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Tài khoản
                      </label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="abcde"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                        autoComplete="off"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.username && (
                        <p className="max-w-full text-xs text-red-500">
                          {formik.errors.username}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Mật khẩu
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                        autoComplete="off"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.password && (
                        <p className="max-w-full text-xs text-red-500">
                          {formik.errors.password}
                        </p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Đăng nhập
                    </button>
                    {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      <Link
                        to={"/getCode"}
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Quên mật khẩu?
                      </Link>
                    </p>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Bạn chưa có tài khoản đăng nhập?{" "}
                      <Link
                        to={"/ptRegister"}
                        className="font-medium text-orange-500 hover:underline dark:text-primary-500"
                      >
                        Đăng ký ngay
                      </Link>
                    </p> */}
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default AdminLogin;
