import React, { useState, useRef } from 'react'

const Upload = ({setUrl}) => {
    const [avatar, setAvatar] = useState(null)
    const [error, setError] = useState(false)

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0]

        if (file.size > 5242880) {
            setError(true)
            return
        }

        if (file && file.type.startsWith("image/")) {
            setError(false)
            const imageUrl = URL.createObjectURL(file);
            setAvatar({ file, url: imageUrl });
            setUrl(imageUrl)
        }
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size < 5242880) {
            const imageUrl =  URL.createObjectURL(file)
            setAvatar({ file, url: imageUrl})
            setUrl(imageUrl)

        }

        
    }


    const handleDragOver = (e) => {
        e.preventDefault();

    }

    const handleSearchFile = () => {
        document.getElementById("fileInput").click();
    }

    const handleRemove = () => {
        if (avatar?.url) {
            URL.revokeObjectURL(avatar.url); // Libera la memoria del navegador
        }
        setAvatar(null);
    }

    const handleChange = () => {
        document.getElementById("fileInput").click();
      
    }

    return (
        <div className=''>
            <div className='grid w-[460px] gap-2'>
                <h3 className=' h-[24px] text-[20px] leading-[1.1] tracking-[-0.3px] font-extrabold text-white'>Upload Avatar</h3>
                <input type="file"
                    id="fileInput"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden" />
                <div
                onClick={handleSearchFile}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    className=' bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.20)] backdrop-blur-[5px]  border-dashed border-1 border-[#8784A5] rounded-xl  flex flex-col h-[126px] px-4 py-3 gap-4 justify-center items-center '
                >
                    <button  className='bg-[rgba(255,255,255,0.10)] border-1 border-[#4B4869] rounded-xl w-[50px] h-[50px] flex items-center justify-center shadow-[0px_2px_4px_-2px_#040128] overflow-hidden'>
                        <img src={avatar ? avatar.url : "src/assets/cloud.svg"} alt="" className={avatar ? "object-cover h-full rounded-lg" : 'w-[32px] h-[32px] text-[#F57463] '} />
                    </button>
                    <div>
                        {avatar ? <div className='flex gap-2 text-[12px] font-normal leading-[1.20] tracking-[-0.2px] '>
                            <button onClick={handleRemove} className='px-2 py-1 rounded-sm bg-[#4B4869]  hover:underline cursor-pointer'>Remove image</button>
                            <button onClick={handleChange} className='px-2 py-1 rounded-sm bg-[#4B4869]  hover:underline cursor-pointer'>Change image</button>

                        </div>
                            : <p className='text-[18px] leading-[1.20] font-normal '>Drag and drop or click to upload</p>}

                    </div>
                </div>
                <div className={error ? 'flex gap-2  items-center text-[#F57463]' : 'flex gap-2  items-center '}>
                    <img src={error ? "src/assets/infoRed.svg" : "src/assets/info.svg"} alt="" className='w-4 h-4 ' />
                    {error ? <p>File too large. Please upload a photo under 5MB.</p> : <p>Sube tu foto (JPG o PNG, tamaño máximo: 5MB).</p>}
                </div>
            </div>
        </div>
    )
}

export default Upload