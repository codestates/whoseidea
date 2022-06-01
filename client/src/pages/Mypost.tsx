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
  left: 50%;
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
  left: 220px;
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
  background: #eceef3;
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
  color: #5d449d;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  border-radius: 1px solid black;
  text-decoration: none;
`;
const Data = styled.div`
  position: absolute;
  top: 40%;
  left: 20%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  padding: 8px 24px;
  gap: 8px;
  border-radius: 100px;
  width: 150px;
  height: 40px;
  margin-top: 20px;
  border-radius: 1px solid black;
  background: #eceef3;
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
  color: #5d449d;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  border-radius: 1px solid black;
  text-decoration: none;
`;
const OnlyData = styled.div`
  position: absolute;
  top: 62%;
  left: 10%;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  padding: 8px 24px;
  gap: 8px;
  border-radius: 100px;
  width: 400px;
  height: 50px;
  margin-top: 20px;
  border-radius: 1px solid black;
  background: #eceef3;
  z-index: 30;
  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 1;
  width: 300px;
  height: 40px;
  margin-left: 20%20px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 50px;
  /* identical to box height, or 100% */
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.1px;
  color: #5d449d;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  border-radius: 1px solid black;
  text-decoration: none;
  z-index: 10;
`;

export default function Mypost({ postData }: any) {
  // 나의 포스트보기 페이지
  // postData를 이용해서 내가 쓴 게시글을 map으로 뿌려서 볼 수 있다.
  // 클릭 시 해당 게시글 페이지로 이동한다.
  const check = useSelector((state: RootState) => state.modal.check);
  return (
    <div>
      <All>
        <Headertext>
          <h1>Whose idea?</h1>
        </Headertext>
        <Title>
          <div> 나의 아이디어</div>
        </Title>
        <Body>
          <Bodytext>
            <h1>나의 아이디어</h1>
          </Bodytext>
          {postData === null || postData.data.length === 0 ? null : (
            <div>
              <Writer>
                <img src="frame.png" />
                <div> 작성자 : {postData.data[0].nickname}</div>
              </Writer>
              <Data>
                <div>
                  {postData.data.map((el: any, index: number) => (
                    <Link to={`/ideaview/${el.id}`}>
                      <OnlyData>
                        <img src="frame.png" />
                        <div className={`postNum${index}`}>{el.caption}</div>
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
