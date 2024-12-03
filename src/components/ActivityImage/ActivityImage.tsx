import React from "react";
import "./ActivityImage.scss";
import FocusImage from "../../assets/svg/focus.svg";
import ShortRestImage from "../../assets/svg/short-rest.svg";
import LongRestImage from "../../assets/svg/long-rest.svg";

type ActivityType = "focus" | "short-rest" | "long-rest";

interface ActivityImageProps {
  type: ActivityType;
}

const ActivityImage: React.FC<ActivityImageProps> = ({ type }) => {
  const getImageData = () => {
    switch (type) {
      case "focus":
        return { src: FocusImage, alt: "Imagem de foco" };
      case "short-rest":
        return { src: ShortRestImage, alt: "Imagem de descanso curto" };
      case "long-rest":
        return { src: LongRestImage, alt: "Imagem de descanso longo" };
      default:
        return { src: FocusImage, alt: "Imagem padrão de foco" };
    }
  };

  const { src, alt } = getImageData();

  return (
    <div className="activity-image">
      <img src={src} alt={alt} />
    </div>
  );
};

export default ActivityImage;
