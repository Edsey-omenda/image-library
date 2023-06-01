import { useState } from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ImageLIst = ({ images }) => {

    const [modal, setModal] = useState(false);
    const [newUrl, setNewUrl] = useState("");

    const popImage = (imageUrl) => {
        console.log(imageUrl)
        setNewUrl(imageUrl)
        setModal(true)
    }

    return (
        <div className='imagelist'>
        <div className={modal ? "modal open" : "modal"}>
                <TransformWrapper
            initialScale={1}
            initialPositionX={200}
            initialPositionY={100}
            >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <div className='modal-level'>
                <div className="tools">
                    <button onClick={() => zoomIn()}>zoomIn +</button>
                    <button onClick={() => zoomOut()}>zoomOut -</button>
                    <button onClick={() => resetTransform()}>Reset ↻</button>
                    <button onClick={() => setModal(false)}>Close ✖</button>
                </div>
                <br/>
                <div>
                  <TransformComponent>
                    <img src={newUrl} />
                  </TransformComponent>
                </div>
                </div>
            )}
            </TransformWrapper>
        </div>
        <ul className='images'>
         {images.map((image) => (
           <li
                key={image.id}
                image={image}
                className="pics"
                onClick={() => popImage(image.imageUrl)}
           >
            <h3>{image.name}</h3>
            <img 
                src={image.imageUrl}
                style={{width: "100%", height: "75%"}}
            />
           </li>
        ))} 
        </ul>
        </div>
    );
}

export default ImageLIst;
