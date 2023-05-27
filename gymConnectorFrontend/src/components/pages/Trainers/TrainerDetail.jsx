import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../Features/Footer";
import Header from "../../Features/Header";
import "./trainerDetail.css";
import DetailIcn from "./detail.svg";
import Currency from "currency-formatter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDongSign,
  faDumbbell,
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import ReactStars from "react-rating-stars-component";
import ModalTrainer from "../../Modal/ModalTrainer";

const TrainerDetail = () => {
  // image slider
  const [currentImage, setCurrentImage] = React.useState(0);

  const [data, setData] = useState([]);
  const [dataComment, setDataComment] = useState([]);
  const params = useParams();
  const [comment, setComment] = useState([]);
  const [pic, setPic] = useState([]);
  const [vote, setVote] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [trainerModal, setTrainerModal] = useState({});
  const ratingBar = {
    size: 40,
    count: 5,
    isHalf: false,
    value: 0,
    color: "black",
    activeColor: "yellow",
    onChange: (newValue) => {
      setVote(newValue);
    },
  };

  const getData = () => {
    axios.get("http://localhost:8080/home/getPT").then((response) => {
      setData(response.data);
    });
  };

  const getComment = () => {
    axios
      .get(`http://localhost:8080/home/getRateByPT/${params.id}`)
      .then((response) => {
        setDataComment(response.data);
      });
  };

  const getPic = () => {
    axios
      .get(`http://localhost:8080/home/getPicByPt/${params.id}`)
      .then((response) => {
        setPic(response.data);
        console.log(response.data);
      });
  };

  const headers = {
    Authorization: "Bearer " + localStorage.getItem("token"),
  };

  const writeComment = async () => {
    await axios.post(
      "http://localhost:8080/client/comment/addPtComment",
      {
        content: comment,
        vote: vote,
        ptId: data.id,
        userId: parseInt(localStorage.getItem("id")),
      },
      {
        headers: headers,
      }
    );
  };

  useEffect(() => {
    getData();
    getComment();
    getPic();
  }, []);

  const arr = data.filter((item) => {
    return item.id.toString() === params.id;
  });

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
      <div
        className="section-title-group max-w-[600px] mx-auto px-4 lg:px-0"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img src={DetailIcn} alt="" />
        <h2 className="h2 section-title">
          Thông tin chi tiết về Huấn luyện viên
          <span className="text-primary-200">.</span>
        </h2>
      </div>
      <section className="section">
        <ModalTrainer
          showModal={showModal}
          onClose={() => setShowModal(false)}
          trainer={trainerModal}
        />
        {arr.map((trainer, idx) => {
          return (
            <div data-aos="fade-up" data-aos-delay="300" key={idx}>
              <div className="trainer-container">
                <div className="trainer-wrapper">
                  <div className="flex justify-around items-center flex-wrap w-full mt-6 mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className="m-2">
                      <div className="flex justify-center w-screen md:w-[500px] items-center">
                        <div className="relative w-full">
                          <div className="flex items-center carousel">
                            {sliderControl(true)}
                            {pic.map((img, i) => (
                              <div
                                className="w-full flex-shrink-0"
                                key={i}
                                ref={refs[i]}
                              >
                                <img
                                  src={
                                    img.img === "" ? trainer.avatar : img.img
                                  }
                                  className="w-full h-full rounded-full object-contain"
                                  alt=""
                                />
                              </div>
                            ))}
                            {sliderControl()}
                            {/* <img
                              src={trainer.avatar}
                              className="w-full h-full rounded-full object-contain"
                              alt=""
                            /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pr-2">
                      <div className="trainer-details">
                        <div className="trainer-details-texts">
                          <span className="trainer-price-highlight">
                            Hãy để tôi giúp bạn thực hiện tốt các bài tập
                          </span>
                          <div className="flex items-center">
                            <FontAwesomeIcon
                              icon={faUser}
                              className="mr-3 w-3 h-3"
                            ></FontAwesomeIcon>
                            <p className="trainer-title">{trainer.name}</p>
                          </div>
                          <div className="flex items-center">
                            <FontAwesomeIcon
                              icon={faPhoneVolume}
                              className="mr-3 w-3 h-3"
                            ></FontAwesomeIcon>
                            <span>{trainer.phone}</span>
                          </div>
                          <div className="flex items-center">
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              className="mr-3 w-3 h-3"
                            ></FontAwesomeIcon>
                            <span>{trainer.address}</span>
                          </div>
                          <div className="flex items-center">
                            <FontAwesomeIcon
                              icon={faDongSign}
                              className="mr-3 w-3 h-3"
                            ></FontAwesomeIcon>
                            <span>
                              {Currency.format(trainer.fee, { code: "VND" })}
                            </span>
                          </div>
                          <div className="w-full mt-6 mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                            <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800 flex flex-col">
                              <span className="mb-4 text-rose-700">
                                Thông tin phòng tập đang tác nghiệp
                              </span>
                              <div className="flex items-center mb-2">
                                <FontAwesomeIcon
                                  icon={faDumbbell}
                                  className="mr-3 w-3 h-3"
                                ></FontAwesomeIcon>
                                <span>{trainer.gym.name}</span>
                              </div>
                              <div className="flex items-center mb-2">
                                <FontAwesomeIcon
                                  icon={faLocationDot}
                                  className="mr-3 w-3 h-3"
                                ></FontAwesomeIcon>
                                <span>{trainer.gym.address}</span>
                              </div>
                              <div className="flex items-center mb-2">
                                <FontAwesomeIcon
                                  icon={faEnvelope}
                                  className="mr-3 w-3 h-3"
                                ></FontAwesomeIcon>
                                <span>{trainer.gym.email}</span>
                              </div>
                              <div className="flex items-center mb-2">
                                <FontAwesomeIcon
                                  icon={faPhoneVolume}
                                  className="mr-3 w-3 h-3"
                                ></FontAwesomeIcon>
                                <span>{trainer.gym.phone}</span>
                              </div>
                              <div className="flex items-center mb-2">
                                <FontAwesomeIcon
                                  icon={faImage}
                                  className="mr-3 w-3 h-3"
                                ></FontAwesomeIcon>
                                <img
                                  className="w-10/12 h-10/12"
                                  src={trainer.gym.avatar}
                                  alt="ảnh phòng gym"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="trainer-details-price">
                          <button
                            onClick={() => {
                              setShowModal(true);
                              setTrainerModal(trainer);
                            }}
                          >
                            Đặt ngay!!!
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* comment */}
                  <form>
                    <div className="w-full mt-6 mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                      <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                        <label className="sr-only">Bình luận</label>
                        <textarea
                          id="comment"
                          rows="4"
                          className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                          placeholder="Viết bình luận của bạn..."
                          required
                          onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                      </div>
                      <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                        <ReactStars {...ratingBar} />
                        <button
                          type="submit"
                          onClick={writeComment}
                          className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                        >
                          Đăng lên
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="ml-auto text-xs text-gray-500 dark:text-gray-400">
                    Mọi người bình luận văn minh và cư xử đúng mực.
                  </p>
                  {/* list comments */}
                  <div className="w-full mt-6 mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                      {dataComment.map((comment) => {
                        return (
                          <div
                            className="w-full h-full bg-white dark:bg-gray-800"
                            key={comment.id}
                          >
                            <div className="w-full bg-white dark:bg-gray-800 text-black dark:text-gray-200 p-4 antialiased flex max-w-4xl">
                              <img
                                className="rounded-full h-8 w-8 mr-2 mt-1 "
                                src={comment.avatar}
                                alt="avatar"
                              />
                              <div>
                                <div className="bg-gray-100 dark:bg-gray-700 rounded-3xl px-4 pt-2 pb-2.5">
                                  <div className="font-semibold text-sm leading-relaxed">
                                    {comment.name}
                                  </div>
                                  <div className="flex items-center">
                                    <svg
                                      aria-hidden="true"
                                      className="w-5 h-5 text-yellow-400"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <title>Rating star</title>
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                    <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                                      {comment.vote}
                                    </p>
                                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                                      {comment.content}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <Footer />
    </div>
  );
};

export default TrainerDetail;
