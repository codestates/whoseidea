import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import Login from '../components/Login';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import Slide from '../components/Slidebar';
import { useMediaQuery } from 'react-responsive';
import Footer from '../components/Footer';
import FeatureChat from '../components/FeatureChat';
import FeatureIdea from '../components/FeatureIdea';
axios.defaults.withCredentials = true;

const All = styled.div`
  background-color: #fffafa;
  height: 200vw;
  box-sizing: border-box;
  margin: 0;
  border: 0;
`;

const MainStyle = styled.div`
  background-color: #f1fcff;
  font-weight: bold;
  text-align: center;
  font-size: 1rem;
  border-radius: 1rem;
  display: flex;
  height: 500px;
  justify-content: space-between;
  margin-top: 30px;
  margin-left: 30px;
  padding: 50px;
  width: 1300px;
`;
const Title = styled.div`
  position: flex;
  width: 1440px;
  height: 793px;
  left: 10px;
  top: 0px;
  background: url(mainpage.png), #d9d9d9;
  h1 {
    position: absolute;
    width: 601px;
    height: 100px;
    left: 810px;
    top: 262px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 100px;
    line-height: 117px;
    color: #000000;
    text-shadow: 2px 6px 2px #ffffff;
  }
  p {
    position: absolute;
    width: 694px;
    height: 50px;
    left: 755px;
    top: 438px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 50px;
    line-height: 59px;
    color: #000000;
    text-shadow: 2px 2px 2px #ffffff;
  }
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  & button {
    position: absolute;
    width: 400px;
    height: 150px;
    left: 990px;
    top: 550px;
    background: #2348cd;

    /* 아이디어 작성하기 */

    position: absolute;
    width: 350px;
    height: 50px;
    left: 1000px;
    top: 580px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 35px;
    line-height: 35px;
    color: #ffffff;
  }
`;
const First = styled.div`
  & img {
    position: absolute;
    width: 400px;
    height: 400px;
    left: 250px;
    top: 946px;
    filter: drop-shadow(10px 20px 50px rgba(0, 0, 0, 0.25));
    z-index: 50;
  }
  .back {
    position: absolute;
    width: 402px;
    height: 350px;
    left: 196px;
    top: 1050px;
    background: #f8f1b1;
    box-shadow: 0px 4px 80px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    z-index: 20;
  }
`;
// const Second = styled.div`
//   border: 3px solid none;
//   border-radius: 1rem;
//   color: #ffffff;
//   background-image: url('');
//   background-repeat: no-repeat;
//   background-size: cover;
//   :hover {햇빛.jpg
//     transform: scale(1.2, 1.2);
//     transition: 0.5s;
//     background-color: blue;
//   }
// `;
const Third = styled.div`
  border: 3px solid none;
  border-radius: 1rem;
  color: #0f1a11;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -200px 0px;
  margin-top: 120px;
  left: 50px;
  text-align: left;
  /* :hover {
    transform: scale(1.2, 1.2);
    transition: 0.5s;
    background-color: blue;
  } */
`;
const Container = styled.div`
  position: relative;
  top: 5px;
  display: flex;
  background-color: #f1fcff;
  width: 1410px;
  border-radius: 20px;
  left: 20px;
`;
const PositionContainer = styled.div`
  background-repeat: no-repeat;
  padding: 50px;
  width: 700px;
  left: 5px;
  position: relative;
  overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리합니다.
`;

const Next = styled.button`
  position: absolute;
  top: 80%;
  left: 80%;
  border: 1px solid coral;
  font-weight: bold;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  background-color: black;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;
const Prev = styled.button`
  position: absolute;
  top: 80%;
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  background-color: black;
  font-weight: bold;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;
const SliderContainer = styled.div`
  width: 100%;
  display: flex; //이미지들을 가로로 나열합니다.
`;
const TextContainer = styled.div`
  border-radius: 1rem;
  height: 550px;
  color: #000000;
  font-weight: bold;
  font-size: 30px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  text-shadow: 2px 2px 0px #bdbdbd;
  z-index: 100;
  margin-left: 35px;
  .header1 {
    font-family: 'Anton';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 160px;
    /* identical to box height, or 121% */
    letter-spacing: -0.01em;
    color: #313131;
    margin-left: -10px;
    text-align: center;
  }
  .header2 {
    font-family: 'Anton';
    font-style: normal;
    font-weight: 600;
    font-size: 35px;
    line-height: 160px;
    /* identical to box height, or 121% */
    letter-spacing: -0.01em;
    color: #313131;
    margin-left: 50px;
  }
  .header3 {
    font-family: 'Anton';
    font-style: normal;
    font-weight: 600;
    font-size: 35px;
    line-height: 160px;
    /* identical to box height, or 121% */
    letter-spacing: -0.01em;
    color: #313131;
    margin-left: 70px;
    text-align: center;
  }
  .back4 {
    margin-left: 10px;
    text-align: center;
  }
  & button {
    position: relative;
    left: 180px;
    width: 200px;
    top: 60px;
    height: 80px;
    border-radius: 1rem;
    font-size: xx-large;
    font-weight: bold;
    background-color: #e0d424;
    :hover {
      background-color: #c72121;
      transition: 0.5s;
      cursor: pointer;
    }
  }
  .button2 {
    position: relative;
    left: 220px;
    width: 200px;
    top: 50px;
    height: 80px;
    border-radius: 1rem;
    font-size: xx-large;
    font-weight: bold;
    background-color: #e0d424;
    :hover {
      background-color: #c72121;
      transition: 0.5s;
      cursor: pointer;
    }
  }
`;
const IdeaContainer = styled.div`
  background-color: #aaa2a2;
  background-image: url('mainbulbs.png');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 1rem;
  font-weight: bold;
  margin-top: 1000px;
`;
const ChatContainer = styled.div`
  background-color: #9ca19c;
  border-radius: 1rem;
  font-weight: bold;
  display: flex;
  margin-top: 1000px;
`;
const MobileContainer = styled.div`
  position: absolute;
  top: 108%;
  left: 65%;
  background-color: #000000;
  width: 25%;
  height: 70%;
  color: white;
  font-weight: bold;
  font-size: x-large;
  margin: 10px;
  padding: 10px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  text-shadow: 2px 2px 0px #bdbdbd;
  & button {
    position: relative;
    left: 10%;
    width: 80%;
    height: 100px;
    border-radius: 1rem;
    font-size: xx-large;
    font-weight: bold;
    background-color: #e0d424;
    :hover {
      background-color: #c72121;
      transition: 0.5s;
      cursor: pointer;
    }
  }
`;
const Line = styled.div`
  background-color: #000000;
  width: 100%;
  height: 10px;
`;
const FirstM = styled.div`
  border: 3px solid red;
  border-radius: 1rem;
  color: #020202;
  :hover {
    transition: 0.5s;
    background-color: blue;
    color: white;
  }
`;
const SecondM = styled.div`
  border: 3px solid blue;
  border-radius: 1rem;
  color: #020202;
  :hover {
    transition: 0.5s;
    background-color: blue;
    color: white;
  }
`;
const ThirdM = styled.div`
  border: 3px solid orange;
  border-radius: 1rem;
  color: #0a0a0a;
  :hover {
    transition: 0.5s;
    background-color: blue;
    color: white;
  }
`;
const PositionContainerM = styled.div`
  position: absolute;
  top: 110%;
  left: 10%;
  background-repeat: no-repeat;
`;
type UserProps = {
  handleResponseSuccess(): void;
};
export default function Main({
  handleResponseSuccess,
}: UserProps): React.ReactElement {
  const islogincheck = useSelector(
    (state: RootState) => state.islogincheck.islogin
  );
  const isgooglelogin = useSelector(
    (state: RootState) => state.isgooglelogin.isgooglelogin
  );
  const TOTAL_SLIDES = 2;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  // 슬라이드 기능 제어
  // 총 슬라이드는 0,1,2 로 3개이다.
  // currentSlide는 0부터 시작
  // next 버튼 누를 시 다음 슬라이드로 이동
  // prev 버튼 누를 시 이전 슬라이드로 이동
  // 3번째 슬라이드에서 next누를 시 처음으로 돌아옴
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  // 반응형 웹 부분 : 최소 너비가 768px 아래로 가면 반응형 웹 실행
  const isPc = useMediaQuery({
    query: '(min-width:768px)',
  });
  // 로그인 알람 부분
  const loginalert = () => {
    alert('로그인을 먼저 해주세요!');
  };
  const check = useSelector((state: RootState) => state.modal.check);
  // currentSlide가 변할 때마다 슬라이드 애니메이션 효과 실행
  useEffect(() => {
    slideRef.current!.style.transition = 'all 0.5s ease-in-out';
    slideRef.current!.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);
  return (
    <div>
      {isPc ? (
        <All>
          <Title>
            <h1>Whose idea?</h1>
            <p>당신의 아이디어를 보여주세요</p>
            <Link to="/writeidea">
              <button>아이디어 작성하기</button>
            </Link>
          </Title>
          <MainStyle>
            <First>
              {/* <h1>세상의 모든 아인슈타인분들에게..</h1> */}
              <span className="back"></span>
              <img src="햇빛.jpg" />
            </First>
            {/* <Second>
              <h1>한숨 푹 자고 일어난 아침..</h1>
              <p>
                <div>머리속에 번쩍 아이디어가 떠오르신적 있으신가요?</div>
              </p>
            </Second> */}
            <Third>
              <p>
                <h1>한숨 푹 자고 일어난 아침..</h1>
                <h1>머리속에 번쩍 아이디어가 떠오르신적 있으신가요?</h1>
                <h1>그 소중한 아이디어를 그냥 지나쳐서 잊어먹지 마시고</h1>
                <h1>저희 Whose Idea 에 공유해주세요!</h1>
              </p>
            </Third>
          </MainStyle>
          <Container>
            <PositionContainer>
              <SliderContainer ref={slideRef}>
                <Slide img={'전구카피.png'} />
                <Slide img={'랭킹카피.png'} />
                <Slide img={'독창적인아이디어.png'} />
              </SliderContainer>
              <Prev onClick={prevSlide}>{'⇦'}</Prev>
              <Next onClick={nextSlide}>{'⇨'}</Next>
            </PositionContainer>
            {currentSlide === 0 ? (
              <TextContainer>
                <h2 className="header1">
                  갑자기 생각난 독특한 아이디어가 있으신가요?
                </h2>
                <ul>당신도 최고의 아이디어가 될 수 있습니다!</ul>
                <ul>하나밖에 없는 당신의 아이디어를 써보세요!</ul>
                {isgooglelogin || islogincheck ? (
                  <Link to="/">
                    <button>시작하기</button>
                  </Link>
                ) : (
                  <Link to="/">
                    <button onClick={loginalert}>시작하기</button>
                  </Link>
                )}
              </TextContainer>
            ) : null}
            {currentSlide === 1 ? (
              <TextContainer>
                <h2 className="header2">최고의 아이디어를 보고 싶으신가요?</h2>
                <ul>가장 인기있는 아이디어를 볼 수 있습니다!</ul>
                <ul>유저들의 기발한 아이디어를 구경해보세요!</ul>
                {isgooglelogin || islogincheck ? (
                  <Link to="/rank">
                    <button>구경하기</button>
                  </Link>
                ) : (
                  <Link to="/">
                    <button onClick={loginalert}>구경하기</button>
                  </Link>
                )}
              </TextContainer>
            ) : null}
            {currentSlide === 2 ? (
              <TextContainer>
                <h2 className="header3">아이디어를 활용하고 싶으신가요?</h2>
                <ul className="back4">해당 유저에게 쪽지를 보내보세요!</ul>
                <ul className="back4">
                  당신의 쪽지를 수많은 사람들이 기다립니다!
                </ul>
                <ul className="back4">일단 아이디어를 구경하러 가볼까요?</ul>
                {isgooglelogin || islogincheck ? (
                  <Link to="/idealist">
                    <button className="button2">구경하기</button>
                  </Link>
                ) : (
                  <Link to="/">
                    <button onClick={loginalert}>구경하기</button>
                  </Link>
                )}
              </TextContainer>
            ) : null}
          </Container>
          <ChatContainer>
            <img src="send.jpg" />
            <FeatureChat />
          </ChatContainer>
          <IdeaContainer>
            <FeatureIdea />
          </IdeaContainer>
          <Footer />
          {check ? (
            <Login handleResponseSuccess={handleResponseSuccess} />
          ) : null}
        </All>
      ) : (
        <div>
          <All>
            <Title></Title>
            <FirstM>
              <h1>세상의 모든 아이디어 모음</h1>
            </FirstM>
            <SecondM>
              <h1>당신의 아이디어를 알려주세요!</h1>
            </SecondM>
            <ThirdM>
              <h1>세상을 바꿀 단 하나의 아이디어</h1>
            </ThirdM>
            <Line></Line>
            <PositionContainerM>
              <SliderContainer ref={slideRef}>
                <Slide img={'전구카피.png'} />
                <Slide img={'랭킹카피.png'} />
                <Slide img={'독창적인아이디어.png'} />
              </SliderContainer>
              <Prev onClick={prevSlide}>Prev</Prev>
              <Next onClick={nextSlide}>Next</Next>
            </PositionContainerM>
            {currentSlide === 0 ? (
              <MobileContainer>
                <h3>갑자기 생각난 독특한 아이디어가 있으신가요?</h3>
                <ul>당신도 최고의 아이디어가 될 수 있습니다!</ul>
                <ul>하나밖에 없는 당신의 아이디어를 써보세요!</ul>
                {isgooglelogin || islogincheck ? (
                  <Link to="/idealist">
                    <button>시작하기</button>
                  </Link>
                ) : (
                  <Link to="/">
                    <button onClick={loginalert}>시작하기</button>
                  </Link>
                )}
              </MobileContainer>
            ) : null}
            {currentSlide === 1 ? (
              <MobileContainer>
                <h3>최고의 아이디어를 보고 싶으신가요?</h3>
                <ul>가장 인기있는 아이디어를 볼 수 있습니다!</ul>
                <ul>유저들의 기발한 아이디어를 구경해보세요!</ul>
                {isgooglelogin || islogincheck ? (
                  <Link to="/rank">
                    <button>구경하기</button>
                  </Link>
                ) : (
                  <Link to="/">
                    <button onClick={loginalert}>구경하기</button>
                  </Link>
                )}
              </MobileContainer>
            ) : null}
            {currentSlide === 2 ? (
              <MobileContainer>
                <h3>아이디어를 활용하고 싶으신가요?</h3>
                <ul>해당 유저에게 쪽지를 보내보세요!</ul>
                <ul>일단 아이디어를 구경하러 가볼까요?</ul>
                {isgooglelogin || islogincheck ? (
                  <Link to="/idealist">
                    <button>구경하기</button>
                  </Link>
                ) : (
                  <Link to="/">
                    <button onClick={loginalert}>구경하기</button>
                  </Link>
                )}
              </MobileContainer>
            ) : null}
            <Footer />
            {check ? (
              <Login handleResponseSuccess={handleResponseSuccess} />
            ) : null}
          </All>
        </div>
      )}
    </div>
  );
}
