import styled from "styled-components";

import db from "../db.json";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import QuizBackground from "../src/components/QuizBackground";
import Widget from "../src/components/Widget";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

// const BackgroundImage = styled.div`
//   background: url(${db.bg});
//   background-repeat: no-repeat;
//   background-size: cover;
//   flex: 1;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>The Legend of Zelda</h1>
            </Widget.Header>

            <Widget.Content>
              <p>Lorem ipsum dolor sit a met...</p>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quizes da Galera</h1>

              <p>Lorem ipsum dolor sit a met...</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/1prestes" />
    </QuizBackground>
  );
}
