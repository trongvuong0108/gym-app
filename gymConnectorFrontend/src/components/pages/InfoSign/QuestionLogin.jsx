import React from "react";
import { Link } from "react-router-dom";

const QuestionLogin = () => {
  return (
    <div className="max-w-[1920px] mx-auto bg-page overflow-hidden relative">
      <section className="bg-gradient-to-tl from-pink-300 to-indigo-500 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[100vh] lg:py-0">
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
                Tham gia cùng chúng tôi
              </h1>
              <h2 className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Bạn là...
              </h2>
              <form className="space-y-4 md:space-y-6" action="#">
                <div className="flex justify-center">
                  <Link
                    to={"/login"}
                    className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Người dùng
                  </Link>
                </div>
                <div className="flex justify-center">
                  <Link
                    to={"/ptLogin"}
                    className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Huấn luyện viên
                  </Link>
                </div>
                <div className="flex justify-center">
                  <Link
                    to={"/adminLogin"}
                    className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Quản trị viên
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuestionLogin;
