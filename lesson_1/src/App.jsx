import './App.css'
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./card.jsx";

function App() {

  return (
      <div className={"container"}>
          <Header/>
          <hr style={{marginTop:"20px",marginBottom:"20px"}}/>
          <div style={{display: 'flex', justifyContent: 'center',alignItems:"center",gap:"100px", marginBottom: '40px',marginTop: '20px'}}>
              <Card w={400} h={400} bgColor="black"/>
              <Card w={400} h={400} bgColor="black"/>
          </div>
          <hr/>
          <div style={{display: 'flex', gap: 40, alignItems: 'center', justifyContent: 'center'}}>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
          </div>
          <hr/>
          <Footer/>
      </div>
  )
}

export default App
