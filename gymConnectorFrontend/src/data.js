// images
import Logo from "../src/assets/img/header/logo.svg";
import ResistanceImg from "../src/assets/img/workouts/resistance.png";
import BoxingImg from "../src/assets/img/workouts/boxing.png";
import BodyPumpImg from "../src/assets/img/workouts/body-pump.png";
import YogaImg from "../src/assets/img/workouts/yoga.png";
import FullBodyImg from "../src/assets/img/workouts/full-body.png";
import FitnessImg from "../src/assets/img/workouts/fitness.png";
import BattleRopeImg from "../src/assets/img/workouts/battle-rope.png";
import CommunityImg1 from "../src/assets/img/community/img1.png";
import CommunityImg2 from "../src/assets/img/community/img2.png";
import CommunityImg3 from "../src/assets/img/community/img3.png";
import CommunityImg4 from "../src/assets/img/community/img4.png";
import JoinImg from "../src/assets/img/join/woman.png";
import HlvDatImg from "../src/assets/img/trainers/hlv-dat.jpg";
// icons
import UsersIcn from "../src/assets/img/about/icons/users-icn.svg";
import CalendarIcn from "../src/assets/img/workouts/icons/calendar.svg";
import PriceIcn from "../src/assets/img/pricing/icons/price.svg";
import CommunityIcn from "../src/assets/img/community/icons/community-icn.svg";
import QuestionMarkIcn from "../src/assets/img/faq/icons/question-mark.svg";
import ListIcn from "../src/assets/img/workouts/icons/list.svg";
import CartIcn from "../src/assets/img/workouts/icons/cart.svg";

export const header = {
  logo: Logo,
  btnLoginText: "Đăng nhập",
  btnSignupText: "Đăng ký",
};

export const nav = [
  { name: "Trang chủ", href: "/home" },
  { name: "Phòng tập", href: "/gyms" },
  { name: "Huấn luyện viên", href: "/trainers" },
  { name: "Thông tin cá nhân", href: "/userInfo" },
];

export const banner = {
  titlePart1: "Fitness & Gym",
  titlePart2: "– vui khỏe mỗi ngày",
  subtitle:
    "Chúng tôi cung cấp dịch vụ về fitness đa dạng, môi trường tập luyện vui vẻ và năng lượng.",
  textBtn: "Tham gia ngay",
  img: "",
};

export const about = {
  icon: UsersIcn,

  title: "Công việc và trách nhiệm của chúng tôi",
  subtitle1:
    "Chúng tôi nổi bật nhờ bầu không khí thúc đẩy vượt trội," +
    " đội ngũ huấn luyện viên am hiểu và thiết bị tập thể dục hàng đầu," +
    " hỗ trợ các thành viên của chúng tôi đạt được các mục tiêu thể dục cá nhân của họ.",
  subtitle2:
    "Sức mạnh được cảm nhận từ trái tim của chúng tôi được sử dụng để truyền cảm hứng cho mọi người bước chân vào phòng tập thể dục của chúng tôi để hoàn thiện bản thân hơn.",
  link: "Tham gia ngay",
};

export const workouts = {
  icon: CalendarIcn,
  title: "Các chương trình tập luyện bài bản",
  programs: [
    {
      image: ResistanceImg,
      name: "Resistance",
    },
    {
      image: BoxingImg,
      name: "Boxing",
    },
    {
      image: BodyPumpImg,
      name: "Body Pump",
    },
    {
      image: YogaImg,
      name: "Yoga",
    },
    {
      image: FullBodyImg,
      name: "Full Body",
    },
    {
      image: FitnessImg,
      name: "Fitness",
    },
    {
      image: BattleRopeImg,
      name: "Battle Rope",
    },
  ],
};

export const gymss = {
  icon: ListIcn,
  title: "Thông tin phòng tập",
  programs: [
    {
      id: 1,
      image: ResistanceImg,
      name: "Khỏe đẹp Fitness",
      subtitle: "Vị trí đẹp rộng rãi thoáng mát",
      feature: "Có khu vực tập yoga và nhà tắm.",
      address: "456 Xa lộ Hà Nội",
      cancelOpt: "Hủy đặt miễn phí",
      cancelOptSubt:
        "Nếu bỏ qua lựa chọn này là bạn đã bỏ qua một nơi tuyệt vời.",
      comment: "Rất là tuyệt vời",
      ratingStar: "4.5",
      price: 2000000,
    },
    {
      id: 2,
      image: BoxingImg,
      name: "Boxing Khang",
      subtitle: "Vị trí đẹp rộng rãi thoáng mát",
      feature: "Có khu vực tập yoga và nhà tắm.",
      address: "123 Xa lộ Hà Nội",
      cancelOpt: "Hủy đặt miễn phí",
      cancelOptSubt:
        "Nếu bỏ qua lựa chọn này là bạn đã bỏ qua một nơi tuyệt vời.",
      comment: "Rất là tuyệt vời",
      ratingStar: "4.5",
      price: 4000000,
    },
    {
      id: 3,
      image: BodyPumpImg,
      name: "BuildupBody",
      subtitle: "Vị trí đẹp rộng rãi thoáng mát",
      feature: "Có khu vực tập yoga và nhà tắm.",
      address: "800 Đông Tây",
      cancelOpt: "Hủy đặt miễn phí",
      cancelOptSubt:
        "Nếu bỏ qua lựa chọn này là bạn đã bỏ qua một nơi tuyệt vời.",
      comment: "Rất là tuyệt vời",
      ratingStar: "4.5",
      price: 5000000,
    },
    {
      id: 4,
      image: YogaImg,
      name: "Yoga&Fitness",
      subtitle: "Vị trí đẹp rộng rãi thoáng mát",
      feature: "Có khu vực tập yoga và nhà tắm.",
      address: "789 Xa lộ Hà Nội",
      cancelOpt: "Hủy đặt miễn phí",
      cancelOptSubt:
        "Nếu bỏ qua lựa chọn này là bạn đã bỏ qua một nơi tuyệt vời.",
      comment: "Rất là tuyệt vời",
      ratingStar: "4.5",
      price: 6000000,
    },
    {
      id: 5,
      image: FullBodyImg,
      name: "Body Gym",
      subtitle: "Vị trí đẹp rộng rãi thoáng mát",
      feature: "Có khu vực dành cho yoga và thiền riêng.",
      address: "123 Xa lộ Hà Nội",
      cancelOpt: "Hủy đặt miễn phí",
      cancelOptSubt:
        "Nếu bỏ qua lựa chọn này là bạn đã bỏ qua một nơi tuyệt vời.",
      comment: "Rất là tuyệt vời",
      ratingStar: "4.5",
      price: 3000000,
    },
    {
      id: 6,
      image: FitnessImg,
      name: "Fitness tươi tắn",
      subtitle: "Vị trí nằm ở trung tâm với view đẹp rộng rãi thoáng mát",
      feature: "Có khu vực tập yoga và nhà tắm.",
      address: "123 Xa lộ Hà Nội",
      cancelOpt: "Hủy đặt miễn phí",
      cancelOptSubt:
        "Nếu bỏ qua lựa chọn này là bạn đã bỏ qua một nơi tuyệt vời.",
      comment: "Rất là tuyệt vời",
      ratingStar: "4.5",
      price: 3000000,
    },
    {
      id: 7,
      image: BattleRopeImg,
      name: "Fitness khỏe",
      subtitle: "Vị trí đẹp rộng rãi thoáng mát",
      feature: "Có khu vực tập yoga và nhà tắm.",
      address: "123 Xa lộ Hà Nội",
      cancelOpt: "Hủy đặt miễn phí",
      cancelOptSubt:
        "Nếu bỏ qua lựa chọn này là bạn đã bỏ qua một nơi tuyệt vời.",
      comment: "Rất là tuyệt vời",
      ratingStar: "4.5",
      price: 3000000,
    },
  ],
};

export const trainerss = {
  icon: ListIcn,
  title: "Thông tin Huấn luyện viên",
  programs: [
    {
      id: 1,
      image: ResistanceImg,
      name: "Trần Văn A",
      subtitle: "Sở hữu body và lượng kiến thức tốt về thể hình.",
      feature: "Huy chương vàng Thể hình năm 2021.",
      address: "347 Bình Thạnh, TPHCM",
      cancelOpt: "Hủy đặt miễn phí",
      cancelOptSubt: "Tôi sẽ giúp bạn trở nên mạnh mẽ nếu bạn đừng bỏ qua tôi",
      comment: "Rất tâm lý và thường xuyên đưa ra lời khyên tốt",
      ratingStar: "4.9",
      price: 1000000,
    },
    {
      id: 2,
      image: BoxingImg,
      name: "Nguyễn Văn B",
      subtitle: "Có nhiều kiến thức nền về dinh dưỡng cho phù hợp từng cơ thể.",
      feature: "Là một người thân thiện dễ gần so với vẻ bề ngoài.",
      address: "564 Quận 2 thành phố Thủ Đức",
      cancelOpt: "Hủy đặt miễn phí",
      cancelOptSubt: "Tôi sẽ giúp bạn trở nên mạnh mẽ nếu bạn đừng bỏ qua tôi",
      comment: "Huấn luyện viên chăm chỉ nhất năm",
      ratingStar: "5.0",
      price: 1000000,
    },
    {
      id: 3,
      image: BodyPumpImg,
      name: "Phạm Hoàng C",
      subtitle: "Sở hữu body và khả năng tổng hợp tạo ra các bài tập tốt",
      feature:
        "Huy chương vàng Thể hình năm 2021, Huy chương bạc Gym-Training 2022",
      address: "564 Quận 2 thành phố Thủ Đức",
      cancelOpt: "Hủy đặt miễn phí",
      cancelOptSubt: "Tôi sẽ giúp bạn trở nên mạnh mẽ nếu bạn đừng bỏ qua tôi",
      comment: "Huấn luyện viên chăm chỉ nhất năm",
      ratingStar: "5.0",
      price: 1000000,
    },
    {
      id: 4,
      image: YogaImg,
      name: "Vương Văn D",
      subtitle: "Sở hữu body và khả năng tổng hợp tạo ra các bài tập tốt",
      feature:
        "Huy chương vàng Thể hình năm 2021, Huy chương bạc Gym-Training 2022",
      address: "564 Quận 2 thành phố Thủ Đức",
      cancelOpt: "Hủy đặt miễn phí",
      cancelOptSubt: "Tôi sẽ giúp bạn trở nên mạnh mẽ nếu bạn đừng bỏ qua tôi",
      comment: "Huấn luyện viên chăm chỉ nhất năm",
      ratingStar: "5.0",
      price: 1000000,
    },
    {
      id: 5,
      image: FullBodyImg,
      name: "Nguyễn Hoàng E",
      subtitle: "Sở hữu body và khả năng tổng hợp tạo ra các bài tập tốt",
      feature:
        "Huy chương vàng Thể hình năm 2021, Huy chương bạc Gym-Training 2022",
      address: "564 Quận 2 thành phố Thủ Đức",
      cancelOpt: "Hủy đặt miễn phí",
      cancelOptSubt: "Tôi sẽ giúp bạn trở nên mạnh mẽ nếu bạn đừng bỏ qua tôi",
      comment: "Huấn luyện viên chăm chỉ nhất năm",
      ratingStar: "5.0",
      price: 1000000,
    },
    {
      id: 6,
      image: FitnessImg,
      name: "Trần Minh G",
      subtitle: "Sở hữu body và khả năng tổng hợp tạo ra các bài tập tốt",
      feature:
        "Huy chương vàng Thể hình năm 2021, Huy chương bạc Gym-Training 2022",
      address: "564 Quận 2 thành phố Thủ Đức",
      cancelOpt: "Hủy đặt miễn phí",
      cancelOptSubt: "Tôi sẽ giúp bạn trở nên mạnh mẽ nếu bạn đừng bỏ qua tôi",
      comment: "Huấn luyện viên chăm chỉ nhất năm",
      ratingStar: "5.0",
      price: 1000000,
    },
    {
      id: 7,
      image: HlvDatImg,
      name: "Phạm Huỳnh Tiến Đạt",
      subtitle: "Sở hữu body và khả năng tổng hợp tạo ra các bài tập tốt",
      feature:
        "Huy chương vàng Thể hình năm 2021, Huy chương bạc Gym-Training 2022",
      address: "564 Quận 2 thành phố Thủ Đức",
      cancelOpt: "Hủy đặt miễn phí",
      cancelOptSubt: "Tôi sẽ giúp bạn trở nên mạnh mẽ nếu bạn đừng bỏ qua tôi",
      comment: "Huấn luyện viên chăm chỉ nhất năm",
      ratingStar: "5.0",
      price: 1000000,
    },
  ],
};

export const carts = {
  icon: CartIcn,
  title: "Đơn hàng của bạn",
  programs: [],
};

export const photoGym = {
  photo: [
    {
      src: "https://ptfitness.vn/wp-content/uploads/2022/06/thiet-ke-phong-tap-the-hinh-dep.jpg",
    },
    { src: "https://maytapgym.vn/wp-content/uploads/2018/11/21-1.jpg" },
    {
      src: "https://mbhfit.vn/wp-content/uploads/2018/03/thiet-ke-phong-tap-gym.jpg",
    },
    {
      src: "https://cuonggym.com/wp-content/uploads/2019/03/Setup-mo-phong-tap-Kien-Gym-DNG-04.jpg",
    },
    {
      src: "https://setupphonggym.vn/wp-content/uploads/2020/09/mau-thiet-ke-phong-gym-dep.jpg",
    },
    {
      src: "https://ptfitness.vn/wp-content/uploads/2022/06/thiet-ke-phong-tap-the-hinh-dep.jpg",
    },
  ],
};

export const pricing = {
  icon: PriceIcn,
  title: "Pricing plan",
  plans: [
    {
      name: "Basic",
      price: "20",
      list: [
        { name: "unlimited gym access" },
        { name: "1 training programs" },
        { name: "free fitness consultation" },
      ],
      delay: 600,
    },
    {
      name: "Premium",
      price: "35",
      list: [
        { name: "unlimited gym access" },
        { name: "5 training programs" },
        { name: "free fitness consultation" },
        { name: "personal trainer" },
      ],
      delay: 800,
    },
    {
      name: "Elite",
      price: "49",
      list: [
        { name: "unlimited gym access" },
        { name: "all training programs" },
        { name: "free fitness consultation" },
        { name: "personal trainer" },
        { name: "50% off drinks" },
      ],
      delay: 1000,
    },
  ],
};

export const community = {
  icon: CommunityIcn,
  title: "Community",
  testimonials: [
    {
      image: CommunityImg1,
      name: "Mark A.",
      message:
        "“Great location, great price and great, helpful people. What to want more?”",
    },
    {
      image: CommunityImg2,
      name: "Lauren K.",
      message:
        "“Gymme changed my life. Not only physically but mentally as well. I’m a better mother, and all around better human being because of this gym.”",
    },
    {
      image: CommunityImg3,
      name: "Jhon D.",
      message:
        "“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”",
    },
    {
      image: CommunityImg4,
      name: "Anne R.",
      message:
        "“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”",
    },
  ],
};

export const faq = {
  icon: QuestionMarkIcn,
  title: "FAQ",
  accordions: [
    {
      question: "How can I book a workout class?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
    },
    {
      question: "Can I pay by cash for my membership?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
    },
    {
      question: "What age do I need to be to join?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
    },
    {
      question: "Are there any lockers?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
    },
    {
      question: "How do I cancel my membership?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
    },
    {
      question: "Is there water available at the gym?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
    },
  ],
};

export const join = {
  image: JoinImg,

  title: "Tìm kiếm niềm vui với chúng tôi!",
  subtitle: "Chúng tôi có những điều bạn cần cho việc tập luyện",
  btnText: "Tham gia ngay",
};

export const footer = {
  copyrightText: "Bản quyền thuộc Khang - Trọng, 2022",
};
