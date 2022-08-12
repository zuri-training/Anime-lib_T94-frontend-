import { Footer } from "../../components/auth/footer/footer.component";
import { Header } from "../../shared/components/Navigation/AuthenticatedNavbar/AuthenticatedNavbar";

export const DashboardLayout = (props) => {
  return (
    <>
      <Header activityCount={props.activityCount} />
      <main class="main">{props.children}</main>
      <Footer />
    </>
  );
};
