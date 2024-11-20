import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import ScrollToTop from "../components/ScrollToTop";

export default function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Header></Header>
      <Outlet></Outlet>
    </>
  )
}