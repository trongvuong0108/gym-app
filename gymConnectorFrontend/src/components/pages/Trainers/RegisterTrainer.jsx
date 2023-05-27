import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import PreviewImage from "../../Features/PreviewImage";

const RegisterTrainer = () => {
  const navigate = useNavigate();
  //const dispatch = useDispatch();
  const [gyms, setGyms] = useState([]);
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      address: "",
      avatar: "", //ngay này phải là 1 object media thì mở gửi ảnh lên dc
      username: "",
      password: "",
      confirmedPassword: "",
      gym: 0,
      fee: 0,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Không được bỏ trống mục này")
        .min(4, "Phải nhiều hơn 4 ký hoặc hơn"),
      email: Yup.string()
        .required("Không được bỏ trống mục này")
        .matches(
          /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Vui lòng điền địa chỉ email đúng định dạng"
        ),
      username: Yup.string()
        .required("Không được bỏ trống mục này")
        .min(4, "Phải nhiều hơn 4 ký hoặc hơn"),
      password: Yup.string().required("Không được bỏ trống mục này"),
      // .matches(
      //   /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
      //   "Mật khẩu phải từ 7-19 ký tự và có ít nhất 1 từ, 1 số và 1 ký tự đặc biệt"
      // ),
      confirmedPassword: Yup.string()
        .required("Không được bỏ trống mục này")
        .oneOf([Yup.ref("password"), null], "Mật khẩu không trùng khớp"),
      phone: Yup.string().required("Không được bỏ trống mục này"),
      // .matches(
      //   /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      //   "Vui lòng điền đúng định dạng số điện thoại"
      // ),
      address: Yup.string().required("Không được bỏ trống mục này"),
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
      fee: Yup.string().required("Không được bỏ trống mục này"),
      gym: Yup.string().required("Không được bỏ trống mục này"),
    }),
    onSubmit: async (values) => {
      try {
        const newPT = {
          username: formik.values.username,
          password: formik.values.password,
          email: formik.values.email,
          address: formik.values.address,
          name: formik.values.name,
          phone: formik.values.phone,
          gymId: formik.values.gym,
          price: formik.values.fee,
        };
        console.log(newPT);
        //registerUser(newUser, dispatch, navigate);
        const res = await axios.post(
          "http://localhost:8080/signInPersonalTrainer/signIn",
          newPT
        );
        console.log(res);
        sendCode(newPT.username);
        upImg();
        navigate("/fillCodePT/" + newPT.username);
      } catch (error) {
        console.log(error);
      }
    },
  });

  const getGym = () => {
    axios.get("http://localhost:8080/home/getGym").then((response) => {
      setGyms(response.data);
    });
  };
  useEffect(() => {
    getGym();
  }, []);

  const sendCode = async (username) => {
    const sendForm = new FormData();
    sendForm.append("username", username);
    const sendResponse = await axios.post(
      "http://localhost:8080/signInPersonalTrainer/sendToken",
      sendForm
    );
    console.log(sendResponse.data);
  };

  const upImg = () => {
    const imgFormData = new FormData();
    imgFormData.append("username", formik.values.username);
    imgFormData.append("avatar", formik.values.avatar);

    const imgResponse = axios({
      method: "post",
      url: "http://localhost:8080/signInPersonalTrainer/uploadAvatar",
      data: imgFormData,
    });
    console.log(imgResponse);
  };

  return (
    <div className="max-w-[1920px] mx-auto bg-page overflow-hidden relative">
      <section className="bg-gradient-to-tl from-pink-300 to-indigo-500 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto max-h-max lg:py-0">
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
                Đăng ký tài khoản
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={formik.handleSubmit}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Họ & tên
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Nguyễn Văn A"
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
                <div>
                  <label
                    htmlFor="address"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Địa chỉ
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Số nhà, tên đường, phường/huyện/quận,TP/tỉnh"
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
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Số điện thoại
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="0123456789"
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
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
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
                <div>
                  <label
                    htmlFor="confirmedPassword"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Xác nhận mật khẩu
                  </label>
                  <input
                    type="password"
                    name="confirmedPassword"
                    id="confirmedPassword"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    autoComplete="off"
                    value={formik.values.confirmedPassword}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.confirmedPassword && (
                    <p className="max-w-full text-xs text-red-500">
                      {formik.errors.confirmedPassword}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Hình ảnh (đuôi file là .png, .jpeg, .jpg)
                  </label>
                  <input
                    type="file"
                    name="avatar"
                    id="avatar"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    autoComplete="off"
                    onChange={(e) =>
                      formik.setFieldValue("avatar", e.target.files[0])
                    }
                  />
                  {formik.values.avatar && (
                    <PreviewImage file={formik.values.avatar} />
                  )}
                  {formik.errors.avatar && (
                    <p className="max-w-full text-xs text-red-500">
                      {formik.errors.avatar}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Phòng tập tác nghiệp
                  </label>
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="gym"
                    value={formik.values.gym}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option selected disabled hidden>
                      Chọn phòng gym
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

                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Chi phí
                  </label>
                  <input
                    type="number"
                    name="fee"
                    id="fee"
                    placeholder="abcde"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    autoComplete="off"
                    value={formik.values.fee}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.username && (
                    <p className="max-w-full text-xs text-red-500">
                      {formik.errors.username}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Tạo tài khoản
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Bạn đã có tài khoản đăng nhập?{" "}
                  <Link
                    to={"/ptLogin"}
                    className="font-medium text-orange-500 hover:underline dark:text-primary-500"
                  >
                    Đăng nhập ngay
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterTrainer;
