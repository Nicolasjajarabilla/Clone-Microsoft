import { useEffect, useState } from "react";

export const Carrousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const images = [
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-MultiCanvas-Microsoft-Copilot-App-3screens:VP5-1920x600",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSS-Hero-Xbox-Series-S:VP5-1920x600",
  ];
  const totalImages = images.length;

  // reproduce las imagenes automaticas
  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === totalImages - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
    return () => clearInterval(intervalId);
  }, [isPlaying, totalImages]);

  // botones anterior
  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  //buton posterior
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };

  // boton de pausa
  const handlePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <span className="img">
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex}`}
          />
        </span>
      </div>
      <div className="indicators">
        <button className="play-pause-button" onClick={handlePlayPause}>
          {isPlaying ? <i class="bi bi-pause-circle"></i> : <i class="bi bi-play-circle"></i>}
        </button>
        <button className="nav-button prev" onClick={goToPreviousImage}>
        <i class="bi bi-chevron-left"></i>
        </button>
        <button className="nav-button next" onClick={goToNextImage}>
        <i class="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};
