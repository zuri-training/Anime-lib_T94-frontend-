import Footer from "../../shared/components/Footer";
import Navbar from "../../shared/components/Navbar";

export const DefaultLayout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};
