import GymDetail from "../components/pages/Gyms/GymDetail";
import Gyms from "../components/pages/Gyms/Gyms";
import Home from "../components/pages/Home";
import Login from "../components/pages/InfoSign/Login";
import Register from "../components/pages/InfoSign/Signup";
import Trainers from "../components/pages/Trainers/Trainers";
import TrainerDetail from "../components/pages/Trainers/TrainerDetail";
import ForgotPass from "../components/pages/InfoSign/ForgotPass";
import UserInfo from "../components/pages/User/UserInfo";
import ListGym from "../components/Admin/pages/Gyms/ListGym";
import CreateGym from "../components/Admin/pages/Gyms/CreateGym";
import EditGym from "../components/Admin/pages/Gyms/EditGym";
import ListUser from "../components/Admin/pages/User/ListUser";
import ListTrainer from "../components/Admin/pages/Trainer/ListTrainer";
import ListCombo from "../components/Admin/pages/Combo/ListCombo";
import EditCombo from "../components/Admin/pages/Combo/EditCombo";
import CreateCombo from "../components/Admin/pages/Combo/CreateCombo";
import GetCode from "../components/pages/InfoSign/GetCode";
import FillCode from "../components/pages/InfoSign/FillCode";
import ChangePass from "../components/pages/InfoSign/ChangePass";
import Payment from "../components/pages/Payment/Payment";
import QuestionLogin from "../components/pages/InfoSign/QuestionLogin";
import TrainerLogin from "../components/pages/Trainers/TrainerLogin";
import RegisterTrainer from "../components/pages/Trainers/RegisterTrainer";
import AdminLogin from "../components/Admin/pages/AdminLogin";
import TrainerInfo from "../components/pages/Trainers/TrainerInfo";
import ListUserByPT from "../components/pages/Trainers/ListUserByPT";
import ListUserByPt from "../components/Admin/pages/Trainer/ListUserByPt";
import StatisticsCombo from "../components/Admin/pages/Combo/StatisticsCombo";
import StatisticsGym from "../components/Admin/pages/Gyms/StatisticsGym";
import FillCodePT from "../components/pages/Trainers/FillCodePT";
import ToastMessage from "../components/Features/ToastMessage";
import ListGymImg from "../components/Admin/pages/Gyms/ListGymImg";
export const routes = {
  publicRoutes: [
    { path: "/", component: Home },
    { path: "/home", component: Home },
    { path: "/login", component: Login },
    { path: "/questLogin", component: QuestionLogin },
    { path: "/ptLogin", component: TrainerLogin },
    { path: "/ptRegister", component: RegisterTrainer },
    { path: "/adminLogin", component: AdminLogin },
    { path: "/register", component: Register },
    { path: "/forgotPass", component: ForgotPass },
    { path: "/changePass", component: ChangePass },
    { path: "/getCode", component: GetCode },
    { path: "/fillCode/:username", component: FillCode },
    { path: "/fillCodePT/:username", component: FillCodePT },
    { path: "/gyms", component: Gyms },
    { path: "/trainers", component: Trainers },
    { path: "/gyms/:id", component: GymDetail },
    { path: "/trainers/:id", component: TrainerDetail },
    { path: "/userInfo", component: UserInfo },
    { path: "/trainerInfo", component: TrainerInfo },
    { path: "/admin", component: ListGym },
    { path: "/admin/listGym", component: ListGym },
    { path: "/admin/createGym", component: CreateGym },
    { path: "/admin/editGym/:id", component: EditGym },
    { path: "/admin/listUser", component: ListUser },
    { path: "/admin/listTrainer", component: ListTrainer },
    { path: "/admin/listCombo", component: ListCombo },
    { path: "/admin/createCombo", component: CreateCombo },
    { path: "/admin/editCombo/:id", component: EditCombo },
    { path: "/payment", component: Payment },
    { path: "/userByTrainer/:id", component: ListUserByPT },
    {
      path: "/admin/listCombo/statisticsCombo/:id",
      component: StatisticsCombo,
    },
    { path: "/admin/listTrainer/listUserByPt/:id", component: ListUserByPt },
    {
      path: "/admin/listGym/statisticsGym/:id",
      component: StatisticsGym,
    },
    {
      path: "/toast",
      component: ToastMessage,
    },
    {
      path: "/admin/listGym/listGymImg/:id",
      component: ListGymImg,
    },
  ],
};
