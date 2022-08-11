import { Footer } from "../../components/auth/footer/footer.component";
import { Header } from "../../components/auth/header/header.component";

export const DashboardLayout = (props) => {
  return (
    <>
      <Header activityCount={props.activityCount} />
      <main class="main">{props.children}</main>
      <Footer />
    </>
  );
};
