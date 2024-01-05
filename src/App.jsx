import Header from "./Component/Header"
import Rout from "./Component/Rout"
import Sidebar from "./Component/Sidebar"
import Footer from "./Component/Footer"



function App() {


  return (
    <>
     <Header/>
     <div style={{display:"flex", flexDirection:"row"}}>

     <Sidebar/>
     <Rout/>
     </div>
     <Footer/>
    </>
  )
}

export default App
