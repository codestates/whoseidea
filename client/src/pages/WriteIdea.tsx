import axios from 'axios';
import styled from 'styled-components';
import { useEffect } from 'react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
axios.defaults.withCredentials = true;

const Main = styled.div``;
const Line1 = styled.div`
  position: absolute;
  width: 1300px;
  height: 1px;
  left: 89px;
  top: 102px;
  background: #ffffff;
`;
const Line2 = styled.div`
  position: absolute;
  width: 1300px;
  height: 1px;
  left: 89px;
  top: 764px;
  background: #ffffff;
`;
const Line3 = styled.div`
  position: absolute;
  width: 899px;
  height: 0px;
  left: 0px;
  top: 220px;
  border: 1px solid #3a5ccc;
`;
const MainStyle = styled.div`
  position: relative;
  width: 1440px;
  height: 2200px;
  background: #071341;
  top: 1px;

  .head-text {
    position: absolute;
    width: 801px;
    height: 100px;
    left: 780px;
    top: 243px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 60px;
    line-height: 94px;
    color: #ffffff;
  }
  .head-text1 {
    position: absolute;
    width: 794px;
    height: 50px;
    left: 720px;
    top: 441px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 59px;
    color: #ffffff;
  }
  .back1 {
    position: absolute;
    width: 400px;
    height: 453px;
    left: 138px;
    top: 157px;
    background: #8fa6c9;
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    z-index: 30;
  }
  .back2 {
    position: absolute;
    width: 402px;
    height: 430px;
    left: 196px;
    top: 230px;
    background: #f8f1b1;
    box-shadow: 0px 4px 80px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    z-index: 20;
  }
  .back3 {
    position: absolute;
    width: 130px;
    height: 105px;
    left: 267px;
    top: 271px;
    background: #f4ff74;
    box-shadow: 0px -11px 50px #ffffff;
    z-index: 40;
    border-radius: 50px 50px 50px 50px;
  }
  & img {
    position: absolute;
    width: 318px;
    height: 318px;
    left: 180px;
    top: 246px;
    filter: drop-shadow(10px 20px 50px rgba(0, 0, 0, 0.25));
    z-index: 50;
  }
`;
const Homebutton = styled.div`
  display: flex;
  background-color: #ffff;
  color: black;
  font-weight: semi-bold;
  font-size: 40px;
  text-decoration: none;
  align-items: center;
  padding: 10px;
  .home {
    position: absolute;
    height: 57px;
    left: 920px;
    right: 691px;
    top: 50px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 24px;
    /* or 80% */
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
  }
`;
const Rankbutton = styled.div`
  display: flex;
  background-color: #ffff;
  color: black;
  font-weight: semi-bold;
  font-size: 40px;
  text-decoration: none;
  align-items: center;
  padding: 10px;
  .rank {
    position: absolute;
    height: 57px;
    left: 1040px;
    right: 530px;
    top: 50px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 24px;
    /* or 80% */
    display: flex;
    align-items: center;
    text-align: center;
    text-decoration: none;
    color: #ffffff;
    .link {
      text-decoration: none;
      color: black;
    }
  }
`;
const Listbutton = styled.div`
  display: flex;
  background-color: #ffff;
  color: black;
  font-weight: semi-bold;
  font-size: 40px;
  text-decoration: none;
  align-items: center;
  padding: 10px;
  .list {
    position: absolute;
    height: 57px;
    left: 1150px;
    right: 530px;
    top: 50px;
    width: 130px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 24px;
    /* or 80% */
    display: flex;
    align-items: center;
    text-align: center;
    text-decoration: none;
    color: #ffffff;
    .link {
      text-decoration: none;
      color: black;
    }
  }
`;
const Containerbox = styled.div`
  display: flex;
  font-weight: semi-bold;
  font-size: 40px;
  text-decoration: none;
  align-items: center;
  color: #ffffff;
  padding: 10px;
  margin-left: 20px;
  .container-box {
    position: absolute;
    width: 204px;
    height: 67px;
    left: 320px;
    top: 981px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 24px;
    /* or 69% */
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
  }
`;
const BodyStyle = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 900px;
  height: 880px;
  left: 306px;
  top: 978px;
  /* 071341 */
  background: linear-gradient(
    0deg,
    rgba(254, 250, 250, 0.2),
    rgba(254, 250, 250, 0.2) #1f2c5c
  );
  border: 1px solid #3a5ccc;
  box-sizing: border-box;
  .body-title .title {
    box-sizing: border-box;
    position: absolute;
    width: 716px;
    height: 65px;
    left: 292px;
    top: 100px;
    background: #ffffff;
    border: 1px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    /* 제목을 입력해주세요 */
    position: absolute;
    width: 600px;
    height: 60px;
    left: 150px;
    right: 150px;
    top: 100px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 24px;
    /* or 80% */
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
  }
  .body-write .write-text {
    position: absolute;
    width: 500px;
    height: 50px;
    left: 218px;
    top: 432px;
    font-size: 20px;
    background: #ffffff;
    border: 1px solid #000000;
    box-sizing: border-box;
    left: calc(105% - 1198px / 2 + 11px);
    top: calc(40% - 650px / 2 + 150px);
  }
  .file {
    position: absolute;
    width: 320px;
    height: 61px;
    left: 170px;
    top: 528px;
    background: #ffffff;
    border-radius: 20px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    /* or 80% */
    align-items: center;
    text-align: center;
    color: #000000;
    input[type='file'] {
      position: absolute;
      width: 300px;
      height: 61px;
      left: 170px;
      top: 528px;
      background: #ffffff;
      border-radius: 50px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 24px;
      /* or 80% */
      align-items: center;
      text-align: center;
      color: #000000;
    }
  }
  .main-text {
    box-sizing: border-box;
    position: absolute;
    width: 750px;
    height: 509px;
    left: 75px;
    right: 75px;
    top: 30%;
    background: #ffffff;
    border: 1px solid #3a5ccc;
    /* 내용을 입력해 주세요 */
  }
  .maintext1 {
    box-sizing: border-box;
    width: 750px;
    height: 509px;
    left: 75px;
    right: 75px;
    top: 30%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 24px;
    /* or 80% */
    display: flex;
    align-items: center;
    text-align: left;
    color: #000000;
    top: 10px;
    background: #ffffff;
    border: 1px solid #3a5ccc;
  }
  & button {
    position: absolute;
    width: 172px;
    height: 61px;
    left: 570px;
    top: 528px;
    background: #ffffff;
    border-radius: 50px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 24px;
    margin-top: 10px;
    /* or 80% */
    align-items: center;
    text-align: center;
    color: #000000;
  }
  & img {
    position: absolute;
    width: 50px;
    height: 50px;
    left: 423px;
    top: 535px;
    z-index: 30;
  }
`;
export default function WriteIdea() {
  // 아이디어 쓰기 페이지
  // 게시글 , 첨부파일 기능 제공
  const [filename, setFileName] = useState('');
  const [selectedFile, setselectedFile] = useState('');
  const [data, setData] = useState({
    caption: '',
    context: '',
    nickname: '',
  });
  const [nickname, setNickname] = useState('');
  // 권한을 검사해서 유저 닉네임을 세팅
  useEffect(() => {
    axios
      .get('https://whoseidea.ml:8080/auth')
      .then(data => setNickname(data.data.nickname));
  }, []);
  const handleInputValue = (key: string, e: any) => {
    setData({
      ...data,
      [key]: e.target.value,
    });
  };
  // FormData 에 넣을 파일 이름과 파일을 세팅
  const handleFileInput = (event: any) => {
    setselectedFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  // FormData와 data를 서버에 보내기
  const handlePost = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    axios
      .post('https://whoseidea.ml:8080/post', data, {
        headers: {
          'Content-Type': `application/json`,
          withCredentials: true,
        },
      })
      .then(() => {
        alert('성공');
      })
      .catch(() => {
        alert('실패');
      });
    axios.get('https://whoseidea.ml:8080/post/last').then((lastPost: any) => {
      axios.post(
        `https://whoseidea.ml:8080/post/image?postId=${lastPost.data.id + 1}`,
        formData,
        {
          headers: {
            'Content-Type': `multipart/form-data`,
            withCredentials: true,
          },
        }
      );
    });
  };
  return (
    <Main>
      <div className="main">
        <MainStyle>
          <div>
            <Line1></Line1>
          </div>
          <div>
            <Line2></Line2>
          </div>
          <div className="head-text">
            <h2>Whose idea?</h2>
          </div>
          <span className="back1"></span>
          <span className="back2"></span>
          <span className="back3"></span>
          <div className="head-text1">
            <h2>아이디어를 작성해 주세요</h2>
          </div>
          <img src="led.png" />
        </MainStyle>
        <Homebutton>
          <Link to="/">
            <div className="home">Home</div>
          </Link>
        </Homebutton>
        <Rankbutton>
          <Link to="/rank">
            <div className="rank">Rank</div>
          </Link>
        </Rankbutton>
        <Listbutton>
          <Link to="/idealist">
            <div className="list">Idea list</div>
          </Link>
        </Listbutton>
        <BodyStyle>
          <div className="body" />
          <div className="body-title">
            <span>
              <Containerbox>
                <div className="container">
                  <span className="contianer-box">New Idea</span>
                </div>
              </Containerbox>
              <input
                type="text"
                className="title"
                placeholder="제목을 입력해주세요"
                onChange={e => handleInputValue('caption', e)}
                name="title"
              ></input>
            </span>
          </div>
          <div className="body-write">
            <div>
              <Line3></Line3>
            </div>
            <div className="main-text">
              <span>
                <textarea
                  className="maintext1"
                  placeholder="내용을 입력해 주세요"
                  onChange={e => handleInputValue('context', e)}
                ></textarea>
                <div>
                  <button
                    className="button1"
                    type="button"
                    onClick={() => handlePost()}
                  >
                    확인
                  </button>
                </div>
                <img src="file.png" />
                <input
                  type="file"
                  className="file"
                  accept="image/*"
                  onChange={event => handleFileInput(event)}
                />
              </span>
            </div>
          </div>
        </BodyStyle>
      </div>
    </Main>
  );
}
