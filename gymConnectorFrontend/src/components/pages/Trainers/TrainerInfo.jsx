import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import Footer from "../../Features/Footer";
import Header from "../../Features/Header";
import UserIcn from "../../pages/User/user_info.svg";
import * as Yup from "yup";
import axios from "axios";
import Currency from "currency-formatter";
import PreviewImage from "../../Features/PreviewImage";

const TrainerInfo = () => {
  // image slider
  const [currentImage, setCurrentImage] = React.useState(0);
  const [image, setImage] = useState({});
  const [preview, setPreview] = useState("");
  const [pic, setPic] = useState([]);
  const headers = {
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  const user = {
    address: localStorage.getItem("address"),
    avatar: localStorage.getItem("avatar"),
    email: localStorage.getItem("email"),
    enable: localStorage.getItem("enable"),
    fee: localStorage.getItem("fee"),
    id: localStorage.getItem("id"),
    name: localStorage.getItem("name"),
    phone: localStorage.getItem("phone"),
    username: localStorage.getItem("username"),
    role: localStorage.getItem("role"),
    rate: localStorage.getItem("rate"),
    gym: {
      addressGym: localStorage.getItem("addressGym"),
      avatarGym: localStorage.getItem("avatarGym"),
      emailGym: localStorage.getItem("emailGym"),
      idGym: localStorage.getItem("idGym"),
      nameGym: localStorage.getItem("nameGym"),
      phoneGym: localStorage.getItem("phoneGym"),
      rateGym: localStorage.getItem("rateGym"),
    },
  };

  const handlePreviewImage = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const formik = useFormik({
    initialValues: {
      name: user.name,
      address: user.address,
      phone: user.phone,
      email: user.email,
      rate: user.rate,
      fee: user.fee,
      gym: {
        address: user.gym.addressGym,
        avatar: user.gym.avatarGym,
        email: user.gym.emailGym,
        id: user.gym.idGym,
        name: user.gym.nameGym,
        phone: user.gym.phoneGym,
        rate: user.gym.rateGym,
      },
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
    },
  });

  const getPic = () => {
    axios
      .get(`http://localhost:8080/home/getPicByPt/${user.id}`)
      .then((response) => {
        setPic(response.data);
        console.log(response.data);
      });
  };

  useEffect(() => {
    getPic();
  }, []);

  // photo slider when we get a lot of pictures
  const refs = pic.reduce((acc, val, i) => {
    acc[i] = React.createRef();
    return acc;
  }, {});

  const scrollToImage = (i) => {
    setCurrentImage(i);
    refs[i].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const totalImages = pic.length;

  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  const arrowStyle =
    "absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-40 flex items-center justify-center";

  const sliderControl = (isLeft) => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? "left-2" : "right-2"}`}
      style={{ top: "40%" }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
        {isLeft ? "◀" : "▶"}
      </span>
    </button>
  );

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
        <div data-aos="fade-up" data-aos-delay="300">
          <div className="max-w-full flex flex-col justify-center items-center">
            <div
              className="grid md:grid-cols-2 md:gap-16"
              onSubmit={formik.handleSubmit}
            >
              <form>
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
                    name="fee"
                    id="fee"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
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
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Giá thuê
                  </label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                  <input
                    type="text"
                    name="rate"
                    id="rate"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required=""
                    autoComplete="off"
                    value={formik.values.rate}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.rate && (
                    <p className="max-w-full text-xs text-red-500">
                      {formik.errors.rate}
                    </p>
                  )}
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Số sao đánh giá
                  </label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                  <button
                    type="submit"
                    onClick={() => {
                      const updateInfo = axios.post(
                        "http://localhost:8080/client/personalTrainer/update",

                        {
                          id: user.id,
                          name: formik.values.name,
                          phone: formik.values.phone,
                          email: formik.values.email,
                          address: formik.values.address,
                          price: formik.values.fee,
                        },
                        { headers: headers }
                      );
                      if (updateInfo.status === 200) {
                        console.log(updateInfo.data);
                        localStorage.setItem("name", updateInfo.data.name);
                        localStorage.setItem(
                          "address",
                          updateInfo.data.address
                        );
                        localStorage.setItem("fee", updateInfo.data.fee);
                        localStorage.setItem("phone", updateInfo.data.phone);
                      }
                    }}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Cập nhật
                  </button>
                </div>
              </form>
              <div className="spacing-15">
                <img
                  className="mt-3 w-80 h-80 rounded-lg"
                  src={localStorage.getItem("avatar")}
                  alt="Hình ảnh đăng tải"
                />
              </div>
            </div>
          </div>
          <div className="flex my-3 items-center justify-around">
            <div className="max-w-screen-xl flex justify-around items-center">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="relative w-full">
                  <div className="carousel">
                    {sliderControl(true)}
                    {pic.map((img, i) => (
                      <div
                        className="w-full flex-shrink-0"
                        key={i}
                        ref={refs[i]}
                      >
                        <img
                          src={img.img}
                          className="w-full h-full object-contain"
                          alt=""
                        />
                      </div>
                    ))}
                    {sliderControl()}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-8">
            <label
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
              onChange={(e) => {
                handlePreviewImage(e);
              }}
            />
            <p
              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="file_input_help"
            >
              Tải lên file có đuôi .PNG, .JPG, .JPEG
            </p>
            <img
              src={preview}
              alt=""
              className="mt-3 w-50 h-full rounded-lg my-4"
            />
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => {
                const formData = new FormData();
                formData.append("pic", image);
                formData.append("id", user.id);
                axios
                  .post(
                    "http://localhost:8080/client/personalTrainer/addMoreImg",
                    formData,
                    { headers: headers }
                  )
                  .then((response) => {
                    window.location.reload();
                  });
              }}
            >
              Thêm ảnh
            </button>
          </div>
          {/* Thông tin phòng gym */}
          <div className="max-w-full flex flex-col justify-center items-center">
            <h3 className="font-bold text-xl my-4">
              Thông tin phòng tập đang cộng tác
            </h3>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href={"/gyms/" + user.gym.idGym}>
                <img className="rounded-t-lg" src={user.gym.avatarGym} alt="" />
              </a>
              <div className="p-5">
                <a href={"/gyms/" + user.gym.idGym}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {user.gym.nameGym}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {user.gym.addressGym}
                </p>
                <a
                  href={"/gyms/" + user.gym.idGym}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Xem thêm
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TrainerInfo;
