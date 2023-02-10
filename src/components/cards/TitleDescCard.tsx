import React from "react";
import "./TitleDescCard.scss";
interface ICard {
  image?: any;
  title?: string;
  description: string;
  alt?: any;
  style?: any;
}
const TitleDescCard = ({ image, title, description, alt, style }: ICard) => (
  <div className="card" style={style}>
    <img src={image} alt={alt} className="img" />
    <div className="content-container">
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </div>
  </div>
);

export default TitleDescCard;
