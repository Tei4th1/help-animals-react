import "./App.css";
import React, { useState } from "react";
import { Title } from "./Title";
import { Container } from "./Container";
import { Subtitle } from "./Subtitle";
import { SliderContainer } from "./SliderContainer";
import { ArrowSlider } from "../Icons/ArrowSlider";
import { NewsContainer } from "./NewsContainer";
import { StyledButton } from "./StyledButton";
import { NewsImage } from "./NewsImage";
import { NotifiedTitle } from "./NotifiedTitle";
import { EmailInput } from "./EmailInput";
import { EmailContainer } from "./EmailContainer";
import { SubmitButton } from "./SubmitButton";

function LatestArticles() {
  const [news, setNews] = useState<string[]>([
    "/news1.jpg",
    "/news2.jpg",
    "/news3.jpg",
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
        <StyledButton onClick={handlePrev}>
          <ArrowSlider direction="left" />
        </StyledButton>
        <NewsContainer>
          {news.map((src, index) => (
            <NewsImage key={index} src={src} alt={`Slide ${index + 1}`} />
          ))}
        </NewsContainer>
        <StyledButton onClick={handleNext}>
          <ArrowSlider direction="right" />
        </StyledButton>
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
