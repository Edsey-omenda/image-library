import { useState, useEffect } from 'react'
import ImageList from "./Components/ImageList"
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {

  const API_URL = "http://localhost:3000/images"

  const[images, setImages] = useState( [
    {
        "id": 1,
        "name": "Win-Desert",
        "imageUrl": "https://images.unsplash.com/photo-1682687220591-cfd91ab5c1b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
      },
      {
        "id": 2,
        "name": "Tech-Savy",
        "imageUrl": "https://images.unsplash.com/photo-1685549925654-e86dcebdd21a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
      },
      {
        "id": 3,
        "name": "Ted-Clobberlang",
        "imageUrl": "https://images.unsplash.com/photo-1685432051879-31fa592be8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
      },
      {
        "id": 4,
        "name": "Under the Sea",
        "imageUrl": "https://images.unsplash.com/photo-1682687982134-2ac563b2228b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      },
      {
        "id": 5,
        "name": "The Road not Taken",
        "imageUrl": "https://images.unsplash.com/photo-1685462576399-d3a3c11e3f79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      },
      {
        "id": 6,
        "name": "Sales at Work",
        "imageUrl": "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      },
      {
        "id": 7,
        "name": "Snap the Dome",
        "imageUrl": "https://images.unsplash.com/photo-1685521454448-0d6850f4dcb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      },
      {
        "id": 8,
        "name": "Breaking Bird",
        "imageUrl": "https://images.unsplash.com/photo-1682686579976-879b74d6d7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      },
      {
        "id": 9,
        "name": "Electric Vehicle",
        "imageUrl": "https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      }
])
  // const[error, setError] = useState("")
  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(() =>{
      
  //   const fetchImages = async () => {
  //     try {
  //         const response = await fetch(API_URL)
  //         if (!response.ok) throw Error("No Data returned")
  //         const listImages = await response.json()
  //         console.log(listImages)
  //         setImages(listImages)
  //         setError(null)
  //     } catch (err) {
  //         setError(err.message)
  //     } finally {
  //       setIsLoading(false)
  //     }
  //   }
  //   setTimeout(() => {
  //     (async () => await fetchImages())()
  //   }, 1000);
    
  // }, [])


  return (
    <>
      <Header  title="Sales At Work Image Library" />
      <ImageList 
        images={images}
      />
      <Footer />
    </>
  )
}

export default App
