import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import CreationForm from "../components/CreationForm";

export default function Create() {
  return (
    <div className="footer-fix">

    <NavigationBar></NavigationBar>

    <div className="d-flex justify-content-center my-4">
    <CreationForm></CreationForm>
    </div>

    <Footer></Footer>
    
    </div>
  )
}
