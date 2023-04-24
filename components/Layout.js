import Navbar from "./Navbar";


const Layout = (props) => {
    return (
    <div>

        <Navbar />
        <div style={{marginTop: '100px'}}>
            { props.children }
        </div>
        
    </div>
        )
} 
export default Layout;