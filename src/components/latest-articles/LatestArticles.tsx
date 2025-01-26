import React, { useState } from "react";
import {
  Title,
  Container,
  Subtitle,
  SliderContainer,
  NewsContainer,
  NotifiedTitle,
  EmailInput,
  EmailContainer,
  SubmitButton,
} from "./";
import { ArrowBtn } from "../arrow-button";
import { Card } from "../card";

interface CardProps {
  title: string;
  subtitle: string;
  imagePath: string;
}

function LatestArticles() {
  const [cards, setCards] = useState<CardProps[]>([
    {
      title: "Deer",
      subtitle: "Naturalist investigation",
      imagePath: "img/news1.jpg",
    },
    {
      title: "Squirrel",
      subtitle: "Kamikaze squirrels",
      imagePath: "img/news2.jpg",
    },
    {
      title: "Bird",
      subtitle: "Birds Fight club",
      imagePath: "img/news3.jpg",
    },
  ]);
  const [email, setEmail] = useState<string>("");
  const handleNext = () => {
    setCards((prevCards) => [...prevCards.slice(1), prevCards[0]]);
  };
  const handlePrev = () => {
    setCards((prevCards) => [
      prevCards[prevCards.length - 1],
      ...prevCards.slice(0, -1),
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`You successfully send message to ${email}!`);
      setEmail("");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <Container>
      <Title>
        <a id="articles">Latest articles</a>
      </Title>
      <Subtitle>Breaking news from the wild</Subtitle>
      <SliderContainer>
        <ArrowBtn direction="left" onClick={handlePrev} />
        <NewsContainer>
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              imagePath={card.imagePath}
            />
          ))}
        </NewsContainer>
        <ArrowBtn direction="right" onClick={handleNext} />
      </SliderContainer>
      <NotifiedTitle id="email">
        Get notified about new amazing articles
      </NotifiedTitle>
      <form onSubmit={handleSubmit}>
        <EmailContainer>
          <EmailInput
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <SubmitButton type="submit">Send</SubmitButton>
        </EmailContainer>
      </form>
    </Container>
  );
}
export default LatestArticles;
