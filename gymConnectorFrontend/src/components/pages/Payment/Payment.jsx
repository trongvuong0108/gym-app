import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Features/Header";
import PaymentIcn from "../Payment/payment.svg";
const Payment = () => {
  return (
    <div className="max-w-[1920px] mx-auto bg-page overflow-hidden relative">
      <Header />
      <section className="bg-neutral-500 h-[100px]">
        <div className="container mx-auto h-full"></div>
      </section>
      <section className="section mx-auto max-w-screen-2xl w-10/12">
        <div
          className="section-title-group max-w-[600px] mx-auto px-4 lg:px-0"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img src={PaymentIcn} alt="" />
          <h2 className="h2 section-title">
            Thanh toán<span className="text-primary-200">.</span>
          </h2>
        </div>
        <div data-aos="fade-left" data-aos-delay="300">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-2xl">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Product name
                </th>
                <th scope="col" className="py-3 px-6">
                  Color
                </th>
                <th scope="col" className="py-3 px-6">
                  Category
                </th>
                <th scope="col" className="py-3 px-6">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="py-4 px-6">Sliver</td>
                <td className="py-4 px-6">Laptop</td>
                <td className="py-4 px-6">$2999</td>
              </tr>
              <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Microsoft Surface Pro
                </th>
                <td className="py-4 px-6">White</td>
                <td className="py-4 px-6">Laptop PC</td>
                <td className="py-4 px-6">$1999</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Magic Mouse 2
                </th>
                <td className="py-4 px-6">Black</td>
                <td className="py-4 px-6">Accessories</td>
                <td className="py-4 px-6">$99</td>
              </tr>
              <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Google Pixel Phone
                </th>
                <td className="py-4 px-6">Gray</td>
                <td className="py-4 px-6">Phone</td>
                <td className="py-4 px-6">$799</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex justify-around mt-7"
        >
          <div>
            <h4 className="h4">Tổng tiền: {}</h4>
            <h5 className="h5">Số lượng: </h5>
          </div>
          <div>
            <h4 className="h4">Thanh toán</h4>
            <Link className="border-slate-400 border-t-2 border-b-2 flex justify-around items-center mt-3">
              <img
                src={require("../Payment/momo.png")}
                alt="Hình ảnh momo"
                className="w-11/12 max-w-[30px] my-2 mr-3"
              />
              <span>Thanh toán bằng MoMo</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;
