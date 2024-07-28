import { useDispatch } from "react-redux";
import MyHeader from "./Header/MyHeader";
import MyMainSection from "./Main/MyMainSection";
import { getRefreshDay } from "../../redux/actions";
import { useEffect } from "react";

const MyHome = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRefreshDay());
  }, []);

  return (
    <>
      <MyHeader />
      <MyMainSection />
    </>
  );
};
export default MyHome;
