import { useFormik } from "formik";
import React from "react";
import Footer from "../../Features/Footer";
import Header from "../../Features/Header";
import UserIcn from "../../pages/User/user_info.svg";
import * as Yup from "yup";
import PreviewImage from "../../Features/PreviewImage";
import axios from "axios";

const UserInfo = () => {
  const avatar = localStorage.getItem("avatar");
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  const formik = useFormik({
    initialValues: {
      name: localStorage.getItem("name"),
      address: localStorage.getItem("address"),
      phone: localStorage.getItem("phone"),
      email: localStorage.getItem("email"),
      avatar: localStorage.getItem("avatar"),
      gym: localStorage.getItem("gym"),
      pt: localStorage.getItem("pt"),
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
      phone: Yup.string()
        .required("Không được bỏ trống mục này")
        .matches(
          /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          "Vui lòng điền đúng định dạng số điện thoại"
        ),
      address: Yup.string().required("Không được bỏ trống mục này"),
    }),
    onSubmit: async () => {
      console.log(formik.values);
      const data = {
        id: localStorage.getItem("id"),
        name: formik.values.name,
        phone: formik.values.phone,
        email: formik.values.email,
        address: formik.values.address,
      };
      const update = await axios.post(
        "http://localhost:8080/client/user/update",
        data,
        { headers: headers }
      );
      console.log(update);
      if (update.status === 200) {
        if (window.confirm("Press a button!")) {
          window.location.reload();
        }
        localStorage.setItem("address", update.data.address);
        localStorage.setItem("avatar", update.data.avatar);
        localStorage.setItem("email", update.data.email);
        localStorage.setItem("enable", update.data.enable);
        localStorage.setItem("id", update.data.id);
        localStorage.setItem("name", update.data.name);
        localStorage.setItem("phone", update.data.phone);
        localStorage.setItem("username", update.data.username);
        localStorage.setItem("role", update.data.role);
      }
    },
  });

  return (
    <div className="max-w-[1920px] mx-auto bg-page overflow-hidden relative">
      <Header />
      <section className="bg-neutral-500 h-[100px]">
        <div className="container mx-auto h-full"></div>
      </section>
      <section className="section">
        {/* section title */}
        <div
          className="section-title-group max-w-[540px] mx-auto px-4 lg:px-0"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img src={UserIcn} alt="" />
          <h2 className="h2 section-title">
            Thông tin cá nhân <span className="text-primary-200">.</span>
          </h2>
        </div>
        {
          <div data-aos="fade-up" data-aos-delay="300">
            <div className="max-w-full flex flex-col justify-center items-center">
              <div
                className="grid md:grid-cols-2 md:gap-16"
                onSubmit={formik.handleSubmit}
              >
                <form>
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
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
                    <label
                      htmlFor="email"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Địa chỉ email
                    </label>
                  </div>
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
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
                    <label
                      htmlFor="name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Họ & Tên
                    </label>
                  </div>
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="tel"
                      pattern="[0-9]{10}"
                      name="phone"
                      id="phone"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
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
                    <label
                      htmlFor="phone"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Số điện thoại
                    </label>
                  </div>
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
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
                    <label
                      htmlFor="address"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Địa chỉ
                    </label>
                  </div>

                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="text"
                      name="gym"
                      id="gym"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required=""
                      autoComplete="off"
                      value={
                        formik.values.gym ? formik.values.gym : "chưa có HLV"
                      }
                      onChange={formik.handleChange}
                      disabled
                    />
                    <label
                      htmlFor="gym"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Phòng gym đang tập
                    </label>
                  </div>

                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="text"
                      name="pt"
                      id="pt"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required=""
                      autoComplete="off"
                      value={
                        formik.values.pt ? formik.values.pt : "chưa có HLV"
                      }
                      disabled
                    />
                    <label
                      htmlFor="pt"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Huấn luyện viên đang hướng dẫn
                    </label>
                  </div>
                  <div className="relative z-0 mb-6 w-full group">
                    {/* <Link
                      to={"/changePass"}
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Đổi mật khẩu
                    </Link> */}
                  </div>
                  <div className="relative z-0 mb-6 w-full group">
                    <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Cập nhật
                    </button>
                  </div>
                </form>
                <div className="spacing-15">
                  {formik.values.avatar !== avatar ? (
                    <PreviewImage file={formik.values.avatar} />
                  ) : (
                    <img
                      className="mt-3 w-80 h-80 rounded-lg"
                      src={formik.values.avatar}
                      alt="Hình ảnh đăng tải"
                    />
                  )}

                  {/* <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    htmlFor="avatar"
                  >
                    Đăng tải hình ảnh
                  </label>
                  <input
                    className="block h-7 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="file_input_help"
                    id="avatar"
                    name="avatar"
                    type="file"
                    onChange={(e) =>
                      formik.setFieldValue("avatar", e.target.files[0])
                    }
                  />
                  {formik.errors.avatar && (
                    <p className="max-w-full text-sm text-red-500">
                      {formik.errors.avatar}
                    </p>
                  )}
                  <p
                    className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                    id="file_input_help"
                  >
                    Tải lên file có đuôi .PNG, .JPG, .JPEG
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        }
      </section>
      <Footer />
    </div>
  );
};

export default UserInfo;
