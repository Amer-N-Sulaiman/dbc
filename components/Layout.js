import Navbar from "./Navbar";
import Footer from "./Footer"


const Layout = (props) => {
    return (
    <div>

        <Navbar />
        <div style={{marginTop: '100px'}}>
            { props.children }
        </div>
        <Footer />
    </div>
        )
} 
export default Layout;