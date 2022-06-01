import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import Login from '../components/Login';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = styled.div`
  font-weight: bold;
  font-size: 100px;
  text-align: center;
  position: absolute;
  color: black;
  border-radius: 1rem;
  left: 25%;
  font-family: 'Courier New', Courier, monospace;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
`;
const Writer = styled.div`
  position: relative;
  top: 150px;
  left: 20%;
  font-weight: bold;
  font-family: sans-serif;
`;

const Data = styled.div`
  position: relative;
  top: 170px;
  left: 20%;
  font-weight: bold;
  font-family: sans-serif;
  font-size: xx-large;

  & a {
    color: #f00101;
    text-decoration: none;
  }
`;

const OnlyData = styled.div`
  :hover {
    background-color: yellow;
    transition: 0.5s;
    width: 500px;
    color: Black;
    cursor: pointer;
  }
`;

export default function Mypost({ postData }: any) {
  // 나의 포스트보기 페이지
  // postData를 이용해서 내가 쓴 게시글을 map으로 뿌려서 볼 수 있다.
  // 클릭 시 해당 게시글 페이지로 이동한다.
  const check = useSelector((state: RootState) => state.modal.check);
  return (
    <div>
      <Title>
        <div> 내가 쓴 게시글</div>
      </Title>
      {postData === null || postData.data.length === 0 ? null : (
        <div>
          <Writer>
            <div>작성자 : {postData.data[0].nickname}</div>
          </Writer>
          <Data>
            <div>
              {postData.data.map((el: any, index: number) => (
                <Link to={`/ideaview/${el.id}`}>
                  <OnlyData>
                    <div className={`postNum${index}`}>{el.caption}</div>
                  </OnlyData>
                </Link>
              ))}
            </div>
          </Data>
        </div>
      )}
      {check ? <Login /> : null}
    </div>
  );
}
