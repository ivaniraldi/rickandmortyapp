import NavigationBar from "../components/NavigationBar"
import Footer from "../components/Footer"
export default function NotFound() {
  return (
    <div className="footer-fix">
    <NavigationBar></NavigationBar>

    <h2 className="text-center my-4"> ⚠ Error! Pagina no encontrada </h2>

    <Footer></Footer>
    </div>
  )
}
