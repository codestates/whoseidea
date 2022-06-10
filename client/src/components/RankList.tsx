import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';

const RankContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 697px;
  height: 135px;
  left: 10%;
  top: 40%;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 50px;
  color: #0f0f0e;
  .nickname {
    color: #f1960d;
    font-size: 30px;
  }
  & img {
    height: 10%;
    width: 10%;
  }
  & button {
    position: relative;
    left: 3%;
    height: 80px;
    width: 100px;

    background: rgb(6, 14, 131);
    background: linear-gradient(
      0deg,
      rgba(6, 14, 131, 1) 0%,
      rgba(12, 25, 180, 1) 100%
    );
    border: none;
    border-radius: 1rem;
    color: #e7edf3;
    font-weight: bold;
    :hover {
      color: yellow;
      background: rgb(0, 3, 255);
      background: linear-gradient(
        0deg,
        rgba(0, 3, 255, 1) 0%,
        rgba(2, 126, 251, 1) 100%
      );
    }
  }
`;

const Best1 = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  left: 360px;
  top: 160px;
  background: url(first.png);
  .title {
    position: absolute;
    width: 400px;
    height: 56px;
    left: 35px;
    top: 270px;
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
  .nickname {
    position: absolute;
    width: 261px;
    height: 50px;
    left: 100px;
    top: 320px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 24px;
    /* or 96% */
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
  }
  & button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 24px;
    font-size: 18px;
    font-weight: 600;
    gap: 8px;
    position: absolute;
    width: 120px;
    height: 50px;
    left: 70px;
    top: 370px;
    /* M3/read-only/light/surface1 */
    background: #f9e68c;
    /* M3/Elevation Light/1 */
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
      0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
  }
`;
const Best2 = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  left: 60px;
  top: 280px;
  background: url(second.png);
  .title {
    position: absolute;
    width: 400px;
    height: 56px;
    left: 75px;
    top: 260px;
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
  .nickname {
    position: absolute;
    width: 261px;
    height: 50px;
    left: 20px;
    top: 300px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 24px;
    /* or 96% */
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
  }
  & button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 24px;
    font-size: 18px;
    font-weight: 600;
    gap: 8px;
    position: absolute;
    width: 120px;
    height: 50px;
    left: 65px;
    top: 355px;
    /* M3/read-only/light/surface1 */
    background: #e9e8ea;
    /* M3/Elevation Light/1 */
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
      0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
  }
`;
const Best3 = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  left: 680px;
  top: 280px;
  background: url(third.png);
  border-radius: 150px;
  .title {
    position: absolute;
    width: 400px;
    height: 56px;
    left: -35px;
    top: 280px;
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
  .nickname {
    position: absolute;
    width: 261px;
    height: 50px;
    left: 120px;
    top: 320px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 24px;
    /* or 96% */
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
  }
  & button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 24px;
    font-size: 18px;
    font-weight: 600;
    gap: 8px;
    position: absolute;
    width: 120px;
    height: 50px;
    left: 60px;
    top: 365px;
    /* M3/read-only/light/surface1 */
    background: #f7f4e7;
    /* M3/Elevation Light/1 */
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
      0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
  }
`;
const Rank4 = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 780px;
  height: 120px;
  left: 10%;
  top: 40%;
  background: #f9feff;
  border: 0.5px solid #eeedef;
  border-radius: 50px;
  text-align: center;
  align-items: center;
  .rank {
    position: absolute;
    width: 80px;
    height: 50px;
    left: 20px;
    top: 40%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 24px;
    /* or 80% */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 24px;
  }
  .title {
    position: absolute;
    width: 400px;
    height: 56px;
    left: 150px;
    right: 558px;
    top: 20%;
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
  .nickname {
    position: absolute;
    width: 261px;
    height: 50px;
    left: 150px;
    top: 68px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 24px;
    /* or 96% */
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
  }
  & button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 24px;
    font-size: 18px;
    font-weight: 600;
    gap: 8px;
    position: absolute;
    width: 120px;
    height: 50px;
    left: 630px;
    top: 42px;
    /* M3/read-only/light/surface1 */
    background: #f1fcff;
    /* M3/Elevation Light/1 */
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
      0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
  }
`;
const Rank5 = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 780px;
  height: 120px;
  left: 10%;
  top: 48%;
  background: #f9feff;
  border: 0.5px solid #eeedef;
  border-radius: 50px;
  text-align: center;
  align-items: center;
  .rank {
    position: absolute;
    width: 80px;
    height: 50px;
    left: 20px;
    top: 48%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 24px;
    /* or 80% */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 24px;
  }
  .title {
    position: absolute;
    width: 400px;
    height: 56px;
    left: 150px;
    top: 23%;
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
  .nickname {
    position: absolute;
    width: 261px;
    height: 50px;
    left: 150px;
    top: 76px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 24px;
    /* or 96% */
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
  }
  & button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 24px;
    font-size: 18px;
    font-weight: 600;
    gap: 8px;
    position: absolute;
    width: 120px;
    height: 50px;
    left: 630px;
    top: 43px;
    /* M3/read-only/light/surface1 */
    background: #f1fcff;
    /* M3/Elevation Light/1 */
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
      0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
  }
`;
const Rank6 = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 780px;
  height: 120px;
  left: 10%;
  top: 56%;
  background: #f9feff;
  border: 0.5px solid #eeedef;
  border-radius: 50px;
  text-align: center;
  align-items: center;
  .rank {
    position: absolute;
    width: 80px;
    height: 50px;
    left: 20px;
    top: 48%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 24px;
    /* or 80% */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 24px;
  }
  .title {
    position: absolute;
    width: 400px;
    height: 56px;
    left: 150px;
    top: 23%;
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
  .nickname {
    position: absolute;
    width: 261px;
    height: 50px;
    left: 150px;
    top: 71px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 24px;
    /* or 96% */
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
  }
  & button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 24px;
    font-size: 18px;
    font-weight: 600;
    gap: 8px;
    position: absolute;
    width: 120px;
    height: 50px;
    left: 630px;
    top: 44px;
    /* M3/read-only/light/surface1 */
    background: #f1fcff;
    /* M3/Elevation Light/1 */
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
      0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    align-items: center;
  }
`;
const Rank7 = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 780px;
  height: 120px;
  left: 10%;
  top: 64%;
  background: #f9feff;
  border: 0.5px solid #eeedef;
  border-radius: 50px;
  text-align: center;
  align-items: center;
  .rank {
    position: absolute;
    width: 80px;
    height: 50px;
    left: 20px;
    top: 48%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 24px;
    /* or 80% */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 24px;
  }
  .title {
    position: absolute;
    width: 400px;
    height: 56px;
    left: 150px;
    top: 18%;
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
  .nickname {
    position: absolute;
    width: 261px;
    height: 50px;
    left: 150px;
    top: 60px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 24px;
    /* or 96% */
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
  }
  & button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 24px;
    font-size: 18px;
    font-weight: 600;
    gap: 8px;
    position: absolute;
    width: 120px;
    height: 50px;
    left: 630px;
    top: 38px;
    /* M3/read-only/light/surface1 */
    background: #f1fcff;
    /* M3/Elevation Light/1 */
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
      0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
  }
`;
const Rank8 = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 780px;
  height: 120px;
  left: 10%;
  top: 72%;
  background: #f9feff;
  border: 0.5px solid #eeedef;
  border-radius: 50px;
  text-align: center;
  align-items: center;
  .rank {
    position: absolute;
    width: 80px;
    height: 50px;
    left: 20px;
    top: 48%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 24px;
    /* or 80% */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 24px;
  }
  .title {
    position: absolute;
    width: 400px;
    height: 56px;
    left: 150px;
    top: 18%;
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
  .nickname {
    position: absolute;
    width: 261px;
    height: 50px;
    left: 150px;
    top: 60px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 24px;
    /* or 96% */
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
  }
  & button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 24px;
    font-size: 18px;
    font-weight: 600;
    gap: 8px;
    position: absolute;
    width: 120px;
    height: 50px;
    left: 630px;
    top: 38px;
    /* M3/read-only/light/surface1 */
    background: #f1fcff;
    /* M3/Elevation Light/1 */
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
      0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
  }
`;
const Rank9 = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 780px;
  height: 120px;
  left: 10%;
  top: 80%;
  background: #f9feff;
  border: 0.5px solid #eeedef;
  border-radius: 50px;
  text-align: center;
  align-items: center;
  .rank {
    position: absolute;
    width: 80px;
    height: 50px;
    left: 20px;
    top: 48%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 24px;
    /* or 80% */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 24px;
  }
  .title {
    position: absolute;
    width: 400px;
    height: 56px;
    left: 150px;
    top: 18%;
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
  .nickname {
    position: absolute;
    width: 261px;
    height: 50px;
    left: 150px;
    top: 60px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 24px;
    /* or 96% */
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
  }
  & button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 24px;
    font-size: 18px;
    font-weight: 600;
    gap: 8px;
    position: absolute;
    width: 120px;
    height: 50px;
    left: 630px;
    top: 38px;
    /* M3/read-only/light/surface1 */
    background: #f1fcff;
    /* M3/Elevation Light/1 */
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
      0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
  }
`;
const Rank10 = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 780px;
  height: 120px;
  left: 10%;
  top: 88%;
  background: #f9feff;
  border: 0.5px solid #eeedef;
  border-radius: 50px;
  text-align: center;
  align-items: center;
  .rank {
    position: absolute;
    width: 80px;
    height: 50px;
    left: 20px;
    top: 48%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 24px;
    /* or 80% */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 24px;
  }
  .title {
    position: absolute;
    width: 400px;
    height: 56px;
    left: 150px;
    top: 18%;
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
  .nickname {
    position: absolute;
    width: 261px;
    height: 50px;
    left: 150px;
    top: 60px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 24px;
    /* or 96% */
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
  }
  & button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 24px;
    font-size: 18px;
    font-weight: 600;
    gap: 8px;
    position: absolute;
    width: 120px;
    height: 50 550px;
    top: 38px;
    left: 630px;
    /* M3/read-only/light/surface1 */
    background: #f1fcff;
    /* M3/Elevation Light/1 */
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
      0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
  }
`;
const Line4 = styled.div`
  position: absolute;
  width: 100px;
  height: 0px;
  left: 65px;
  top: 47%;
  border: 1px solid #f4f2f4;
  transform: rotate(90deg);
`;
const Line41 = styled.div`
  position: absolute;
  width: 100px;
  height: 0px;
  left: 550px;
  top: 47%;
  border: 1px solid #f4f2f4;
  transform: rotate(90deg);
`;
const Line5 = styled.div`
  position: absolute;
  width: 100px;
  height: 0px;
  left: 60px;
  top: 57%;
  border: 1px solid #f4f2f4;
  transform: rotate(90deg);
`;
const Line51 = styled.div`
  position: absolute;
  width: 100px;
  height: 0px;
  left: 550px;
  top: 57%;
  border: 1px solid #f4f2f4;
  transform: rotate(90deg);
`;
const Line6 = styled.div`
  position: absolute;
  width: 100px;
  height: 0px;
  left: 60px;
  top: 53%;
  border: 1px solid #f4f2f4;
  transform: rotate(90deg);
`;
const Line61 = styled.div`
  position: absolute;
  width: 100px;
  height: 0px;
  left: 550px;
  top: 53%;
  border: 1px solid #f4f2f4;
  transform: rotate(90deg);
`;
const Line7 = styled.div`
  position: absolute;
  width: 100px;
  height: 0px;
  left: 60px;
  top: 51%;
  border: 1px solid #f4f2f4;
  transform: rotate(90deg);
`;
const Line71 = styled.div`
  position: absolute;
  width: 100px;
  height: 0px;
  left: 550px;
  top: 51%;
  border: 1px solid #f4f2f4;
  transform: rotate(90deg);
`;
const Line8 = styled.div`
  position: absolute;
  width: 100px;
  height: 0px;
  left: 60px;
  top: 52%;
  border: 1px solid #f4f2f4;
  transform: rotate(90deg);
`;
const Line81 = styled.div`
  position: absolute;
  width: 100px;
  height: 0px;
  left: 550px;
  top: 52%;
  border: 1px solid #f4f2f4;
  transform: rotate(90deg);
`;
const Line9 = styled.div`
  position: absolute;
  width: 100px;
  height: 0px;
  left: 60px;
  top: 52%;
  border: 1px solid #f4f2f4;
  transform: rotate(90deg);
`;
const Line91 = styled.div`
  position: absolute;
  width: 100px;
  height: 0px;
  left: 550px;
  top: 52%;
  border: 1px solid #f4f2f4;
  transform: rotate(90deg);
`;
const Line10 = styled.div`
  position: absolute;
  width: 100px;
  height: 0px;
  left: 60px;
  top: 53%;
  border: 1px solid #f4f2f4;
  transform: rotate(90deg);
`;
const Line101 = styled.div`
  position: absolute;
  width: 100px;
  height: 0px;
  left: 550px;
  top: 53%;
  border: 1px solid #f4f2f4;
  transform: rotate(90deg);
`;

const MobileContainer = styled.div`
  position: absolute;
  top: 70%;

  & img {
    width: 30%;
    height: 30%;
  }
`;

const MobileRank1 = styled.div`
  border-bottom: 3px solid black;
  font-weight: bold;
  font-size: xx-large;
  & button {
    position: relative;
    left: 1%;
    height: 70px;
    background-color: gray;
    width: 70px;
    border: none;
    border-radius: 1rem;
    :hover {
      background-color: yellow;
      color: black;
      transition: 0.5s;
    }
  }
`;
const MobileRank2 = styled.div`
  border-bottom: 3px solid black;
  font-weight: bold;
  font-size: xx-large;
  & button {
    position: relative;
    left: 0.8%;
    height: 70px;
    background-color: gray;
    width: 70px;
    border: none;
    border-radius: 1rem;
    :hover {
      background-color: yellow;
      color: black;
      transition: 0.5s;
    }
  }
`;
const MobileRank3 = styled.div`
  border-bottom: 3px solid black;
  font-weight: bold;
  font-size: xx-large;
  & button {
    position: relative;
    left: 1%;
    height: 70px;
    background-color: gray;
    width: 70px;
    border: none;
    border-radius: 1rem;
    :hover {
      background-color: yellow;
      color: black;
      transition: 0.5s;
    }
  }
`;

export default function RankList() {
  // 최소너비가 768px이 되면 반응형 웹 실행
  const isPc = useMediaQuery({
    query: '(min-width:768px)',
  });
  const [rankData, setrankData] = useState<any[]>([]);
  // useEffect로 랭크데이터를 화면에 좋아요 순으로 렌더링
  useEffect(() => {
    axios
      .get('https://whoseidea.ml:8080/post/all?limit=10&order=desc')
      .then(data => setrankData(data.data));
  }, []);

  return (
    <div>
      {/* isPc가 true일때 데스크톱화면, false일때 모바일 화면으로 렌더링 */}
      {isPc ? (
        <div>
          <Best1>
            <div>
              {rankData[0] !== undefined ? (
                <span>
                  <span className="title">{rankData[0].caption}</span>
                  <span className="nickname">{rankData[0].nickname}</span>
                  <Link to={`/ideaview/${rankData[0].id}`}>
                    <button>바로가기</button>
                  </Link>
                </span>
              ) : null}
            </div>
          </Best1>
          <Best2>
            <div>
              {rankData[1] !== undefined ? (
                <span>
                  <span className="title">{rankData[1].caption}</span>
                  <span className="nickname">{rankData[1].nickname}</span>
                  <Link to={`/ideaview/${rankData[1].id}`}>
                    <button>바로가기</button>
                  </Link>
                </span>
              ) : null}
            </div>
          </Best2>
          <Best3>
            <div>
              {rankData[2] !== undefined ? (
                <span>
                  <span className="title">{rankData[2].caption}</span>
                  <span className="nickname">{rankData[2].nickname}</span>
                  <Link to={`/ideaview/${rankData[2].id}`}>
                    <button>바로가기</button>
                  </Link>
                </span>
              ) : null}
            </div>
          </Best3>
          <Rank4>
            <div className="rank">4</div>
            {rankData[3] !== undefined ? (
              <span>
                <span className="title">{rankData[3].caption}</span>
                <span className="nickname">{rankData[3].nickname}</span>
                <Link to={`/ideaview/${rankData[3].id}`}>
                  <button>바로가기</button>
                </Link>
              </span>
            ) : null}
            <Line4>
              <div></div>
            </Line4>
            <Line41>
              <div></div>
            </Line41>
          </Rank4>
          <Rank5>
            <div className="rank">5</div>
            {rankData[4] !== undefined ? (
              <span>
                <span className="title">{rankData[4].caption}</span>
                <span className="nickname">{rankData[4].nickname}</span>
                <Link to={`/ideaview/${rankData[4].id}`}>
                  <button>바로가기</button>
                </Link>
              </span>
            ) : null}
            <Line5>
              <div></div>
            </Line5>
            <Line51>
              <div></div>
            </Line51>
          </Rank5>
          <Rank6>
            <div className="rank">6</div>
            {rankData[5] !== undefined ? (
              <span>
                <span className="title">{rankData[5].caption}</span>
                <span className="nickname">{rankData[5].nickname}</span>
                <Link to={`/ideaview/${rankData[5].id}`}>
                  <button>바로가기</button>
                </Link>
              </span>
            ) : null}
            <Line6>
              <div></div>
            </Line6>
            <Line61>
              <div></div>
            </Line61>
          </Rank6>
          <Rank7>
            <div className="rank">7</div>
            {rankData[6] !== undefined ? (
              <span>
                <span className="title">{rankData[6].caption}</span>
                <span className="nickname">{rankData[6].nickname}</span>
                <Link to={`/ideaview/${rankData[6].id}`}>
                  <button>바로가기</button>
                </Link>
              </span>
            ) : null}
            <Line7>
              <div></div>
            </Line7>
            <Line71>
              <div></div>
            </Line71>
          </Rank7>
          <Rank8>
            <div className="rank">8</div>
            {rankData[7] !== undefined ? (
              <span>
                <span className="title">{rankData[7].caption}</span>
                <span className="nickname">{rankData[7].nickname}</span>
                <Link to={`/ideaview/${rankData[7].id}`}>
                  <button>바로가기</button>
                </Link>
              </span>
            ) : null}
            <Line8>
              <div></div>
            </Line8>
            <Line81>
              <div></div>
            </Line81>
          </Rank8>
          <Rank9>
            <div className="rank">9</div>
            {rankData[8] !== undefined ? (
              <span>
                <span className="title">{rankData[8].caption}</span>
                <span className="nickname">{rankData[8].nickname}</span>
                <Link to={`/ideaview/${rankData[8].id}`}>
                  <button>바로가기</button>
                </Link>
              </span>
            ) : null}
            <Line9>
              <div></div>
            </Line9>
            <Line91>
              <div></div>
            </Line91>
          </Rank9>
          <Rank10>
            <div className="rank">10</div>
            {rankData[9] !== undefined ? (
              <span>
                <span className="title">{rankData[9].caption}</span>
                <span className="nickname">{rankData[9].nickname}</span>
                <Link to={`/ideaview/${rankData[9].id}`}>
                  <button>바로가기</button>
                </Link>
              </span>
            ) : null}
            <Line10>
              <div></div>
            </Line10>
            <Line101>
              <div></div>
            </Line101>
          </Rank10>
        </div>
      ) : (
        <MobileContainer>
          <MobileRank1>
            <div>
              <img src="1등.png"></img>
              {rankData[0] !== undefined ? (
                <span>
                  <span>{rankData[0].caption}</span>
                  <span className="nickname">
                    작성자: {rankData[0].nickname}
                  </span>
                  <Link to={`/ideaview/${rankData[0].id}`}>
                    <button>바로가기</button>
                  </Link>
                </span>
              ) : null}
            </div>
          </MobileRank1>
          <MobileRank2>
            <div>
              <img src="2등.png"></img>
              {rankData[1] !== undefined ? (
                <span>
                  <span>{rankData[1].caption}</span>
                  <span className="nickname">
                    작성자: {rankData[1].nickname}
                  </span>
                  <Link to={`/ideaview/${rankData[1].id}`}>
                    <button>바로가기</button>
                  </Link>
                </span>
              ) : null}
            </div>
          </MobileRank2>
          <MobileRank3>
            <div>
              <img src="3등.png"></img>
              {rankData[1] !== undefined ? (
                <span>
                  <span>{rankData[2].caption}</span>
                  <span className="nickname">
                    작성자: {rankData[2].nickname}
                  </span>
                  <Link to={`/ideaview/${rankData[2].id}`}>
                    <button>바로가기</button>
                  </Link>
                </span>
              ) : null}
            </div>
          </MobileRank3>
        </MobileContainer>
      )}
    </div>
  );
}
