import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";

const ListGymImg = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [data, setData] = useState([]);
  const [image, setImage] = useState({});
  const [preview, setPreview] = useState("");
  const [currentImage, setCurrentImage] = useState(0);
  const headers = {
    Authorization: "Bearer " + localStorage.getItem("token"),
  };

  const handlePreviewImage = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
    console.log(preview);
  };

  const params = useParams();
  const getPic = () => {
    axios
      .get(`http://localhost:8080/home/getPicByGym/${params.id}`)
      .then((response) => {
        setData(response.data);
        console.log(data);
      });
  };
  useEffect(() => {
    getPic();
  }, []);

  const refs = data.reduce((acc, val, i) => {
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

  const totalImages = data.length;

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
    "absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-60 flex items-center justify-center";

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
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="p-4 flex justify-center w-screen md:w-[1024px] items-center content-center mx-auto">
              <div className="relative w-full">
                <div className="carousel">
                  {sliderControl(true)}
                  {data.map((img, i) => (
                    <div
                      className="w-full flex-shrink-0"
                      key={img.id}
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
                  formData.append("idGym", params.id);
                  formData.append("image", image);
                  console.log(image);
                  axios
                    .post(
                      `http://localhost:8080/admin/gym/addMoreGymImg/`,
                      formData,
                      {
                        headers: headers,
                      }
                    )
                    .then((response) => {
                      window.location.reload();
                    });
                }}
              >
                Thêm ảnh
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ListGymImg;
