import Benifits from "./Benefits"
import Footer from "./Footer"
import Home_page from "./Home_page"
import Swiggy_app from "./Swiggy_app"

const Login_page = () => {
  return (
    <div className="max-w-[1970px] items-center justify-center mx-auto">
        <Home_page/>
        <Benifits/>
        <Swiggy_app/>
        <Footer/>
    </div>
  )
}

export default Login_page