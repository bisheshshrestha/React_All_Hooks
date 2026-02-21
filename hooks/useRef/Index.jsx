import React, { useRef, useState } from "react";

const Index = () => {
  const imageRef = useRef(null);
  const [isFirstImage, setIsFirstImage] = useState(true);

  const handleImageChange = () => {
    if (imageRef.current) {
      imageRef.current.src = isFirstImage
        ? "https://cdn.pixabay.com/photo/2017/08/07/22/10/lake-2608425_1280.jpg"
        : "https://cdn.pixabay.com/photo/2023/11/06/09/52/mountain-8369262_1280.jpg";

      setIsFirstImage(!isFirstImage);
    }
  };

  return (
    <div>
      <h1>Change Image using useRef</h1>
      <img
        ref={imageRef}
        src="https://cdn.pixabay.com/photo/2024/04/18/21/28/jplenio-forest-8705064_1280.jpg"
        alt=""
      />

      <button onClick={handleImageChange}>Change Image</button>
    </div>
  );
};

export default Index;
