import React from "react";
import TitleDescCard from "../cards/TitleDescCard";
import "./Character.scss";

const Character = () => {
  const items = [
    {
      image: "https://picsum.photos/100",
      title: "Physicality",
      description: "Relevant & Perceptible",
      alt: "Image 1",
    },
    {
      image: "https://picsum.photos/100",
      title: "Innovation",
      description: "Live-Tracking & Personalizing your Services",
      alt: "Image 2",
    },
    {
      image: "https://picsum.photos/100",
      title: "Emotionality",
      description: "Convenience & Reduce Decision Fatigue",
      alt: "Image 3",
    },
    {
      image: "https://picsum.photos/100",
      title: "Sociability",
      description: "Collaborative & Acceptance",
      alt: "Image 4",
    },
    {
      image: "https://picsum.photos/100",
      title: "Personability",
      description: "Connectivity & Exposure",
      alt: "Image 4",
    },
    {
      image: "https://picsum.photos/100",
      title: "Moral-ability",
      description: "Data Integrity & Protection",
      alt: "Image 4",
    },
  ];
  return (
    <div className="character-container">
      <div className="content">Header - Skip QQ's Character</div>
      <div className="description">Description</div>
      <div className="card-container">
        {items.map((item, index) => (
          <TitleDescCard
            key={item.title}
            image={item.image}
            title={item.title}
            description={item.description}
            alt={item.alt}
            style={index % 2 === 0 ? styles.left : styles.right}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  left: {
    backgroundColor: "transparent",
  },
  right: {
    backgroundColor: "#eee",
    flexDirection: "row-reverse",
  },
};

export default Character;
