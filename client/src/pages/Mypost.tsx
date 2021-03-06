import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import Login from '../components/Login';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const All = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: 18.75%;
  right: 18.75%;
  top: 9.96%;
  bottom: 21.68%;
  width: 900px;
  height: 1150px;
  top: 204px;
  left: 270px;
  background: rgba(13, 52, 112, 0.8);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 20px;
`;
const Title = styled.div`
  position: absolute;
  width: 500px;
  height: 72px;
  left: 70%;
  top: 30px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;
const Body = styled.div`
  position: absolute;
  width: 750px;
  height: 900px;
  left: 80px;
  right: 20px;
  top: 150px;
  background: #fafafa;
  border-radius: 55px;
`;
const Headertext = styled.div`
  position: absolute;
  width: 500px;
  height: 72px;
  left: 50px;
  top: 30px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;
const Bodytext = styled.div`
  position: absolute;
  width: 400px;
  height: 72px;
  left: 225px;
  top: 150px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
`;
const Writer = styled.div`
  position: absolute;
  top: 30%;
  left: 26%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  padding: 8px 24px;
  gap: 8px;
  border-radius: 100px;
  width: 80px;
  height: 40px;
  margin-top: 20px;
  border-radius: 1px solid black;
  background: #0d3470;
  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 1;
  width: 320px;
  height: 50px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 20px;
  /* identical to box height, or 100% */
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.1px;
  color: #eceef3;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  border-radius: 1px solid black;
  text-decoration: none;
`;
const Data = styled.div`
  position: absolute;
  top: 42%;
  left: 15%;
  width: 500px;
  font-weight: bold;
  font-family: sans-serif;
  font-size: xx-large;
  line-height: 50px;
  background-color: #0d3470;
  padding: 8px 24px;
  margin-top: 20px;
  border-radius: 20px;
  text-align: left;
  align-items: center;
  display: flex;
  flex-direction: row;
  & a {
    color: #ffffff;
    text-decoration: none;
  }
`;
const OnlyData = styled.div`
  :hover {
    background-color: #eceef3;
    transition: 0.5s;
    width: 450px;
    color: #5d449d;
    cursor: pointer;
  }
`;

export default function Mypost({ postData }: any) {
  // ?????? ??????????????? ?????????
  // postData??? ???????????? ?????? ??? ???????????? map?????? ????????? ??? ??? ??????.
  // ?????? ??? ?????? ????????? ???????????? ????????????.
  const check = useSelector((state: RootState) => state.modal.check);
  return (
    <div>
      <All>
        <Headertext>
          <h1>Whose idea?</h1>
        </Headertext>
        <Title>
          <div> ?????? ????????????</div>
        </Title>
        <Body>
          <Bodytext>
            <h1>?????? ????????????</h1>
          </Bodytext>
          {postData === null || postData.data.length === 0 ? null : (
            <div>
              <Writer>
                <img src="frame.png" />
                <div> ????????? : {postData.data[0].nickname}</div>
              </Writer>
              <Data>
                <div>
                  {postData.data.map((el: any) => (
                    <Link to={`/ideaview/${el.id}`}>
                      <OnlyData>
                        {/* <img src="frame.png" /> */}
                        <div>{el.caption}</div>
                      </OnlyData>
                    </Link>
                  ))}
                </div>
              </Data>
            </div>
          )}
          {check ? <Login /> : null}
        </Body>
      </All>
    </div>
  );
}
