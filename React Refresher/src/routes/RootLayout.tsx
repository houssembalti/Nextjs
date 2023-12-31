import MainHeader from "../components/ModalHeader";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <MainHeader oncreatePost={() => {}} />
      <Outlet />
    </>
  );
};

export default RootLayout;
