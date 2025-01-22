import React, { useState } from "react";
import {
  Title,
  Container,
  Subtitle,
  SliderContainer,
  NewsContainer,
  NewsImage,
  NotifiedTitle,
  EmailInput,
  EmailContainer,
  SubmitButton,
} from "./";
import { ArrowBtn } from "../arrow-button";

function LatestArticles() {
  const [news, setNews] = useState<string[]>([
    "img/news1.jpg",
    "img/news2.jpg",
    "img/news3.jpg",
  ]);
  const [email, setEmail] = useState<string>("");
  const handleNext = () => {
    setNews((prevNews) => [...prevNews.slice(1), prevNews[0]]);
  };
  const handlePrev = () => {
    setNews((prevNews) => [
      prevNews[prevNews.length - 1],
      ...prevNews.slice(0, -1),
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
          {news.map((src, index) => (
            <NewsImage key={index} src={src} alt={`Slide ${index + 1}`} />
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
