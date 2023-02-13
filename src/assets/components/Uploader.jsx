import React from 'react'
import { useState } from 'react'
import { TbFileUpload } from 'react-icons/tb'
import './Uploader.css'

const Uploader = () => {
     const [image, setImage] = useState(null)
     const [fileName, setFileName] = useState("No selected file")

    return(
        <main>
      <form
      onClick={() => document.querySelector(".input-field").click()}
      >
        <input type="file" accept='image/*' className='input-field' hidden 
        onChange={({ target: {files}}) => {
          files[0] && setFileName(files[0].name)
          if(files){
            setImage(URL.createObjectURL(files[0]))
          }
        }}
         />

        {image ?
        <img src={image} width={150} height={150} alt={fileName} />
        : 
        <>
        <TbFileUpload color='#6D6D6D' size={60} />
        <p>Select file to upload</p>
        </>
      }

      </form>

    </main>
    )
}

export default Uploader