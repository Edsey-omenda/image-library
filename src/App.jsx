import { useState, useEffect } from 'react'
import ImageList from "./Components/ImageList"
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {

  const API_URL = "http://localhost:3000/images"

  const[images, setImages] = useState([])
  const[error, setError] = useState("")

  useEffect(() =>{
      
    const fetchImages = async () => {
      try {
          const response = await fetch(API_URL)
          if (!response.ok) throw Error("No Data returned")
          const listImages = await response.json()
          console.log(listImages)
          setImages(listImages)
          setError(null)
      } catch (err) {
          setError(err.message)
      } 
    }
    
    fetchImages()
    
  }, [])


  return (
    <>
      <Header  title="Sales At Work Image Library" />
      {/* <ImageList 
        images={images}
        
      /> */}
      <Footer />
    </>
  )
}

export default App
