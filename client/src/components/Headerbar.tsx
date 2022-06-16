import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { openModal } from '../modules/modal';
import { Link } from 'react-router-dom';
import Googlelogout from './Googlelogout';

const Sidebar = styled.div`
  display: flex;
  background-color: #ffff;
  color: black;
  font-weight: semi-bold;
  font-size: 40px;
  text-decoration: none;
  align-items: center;
  padding: 10px;
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
    left: 680px;
    right: 691px;
    top: 4%;
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
`;
const Rankbutton = styled.div`
  position: absolute;
  height: 57px;
  left: 800px;
  right: 530px;
  top: 4%;
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
  color: #000000;
  .link {
    text-decoration: none;
    color: black;
  }
`;
const Listbutton = styled.div`
  position: absolute;
  height: 57px;
  left: 950px;
  right: 530px;
  width: 200px;
  top: 4%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 24px;
  /* or 80% */
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 1rem;
  .link {
    text-decoration: none;
    color: black;
  }
`;
const Mypagebutton = styled.div`
  position: absolute;
  height: 57px;
  left: 1100px;
  right: 217px;
  top: 4%;
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
  border-radius: 1rem;
  .link {
    text-decoration: none;
    color: black;
  }
`;
const Loginbutton = styled.div`
  position: absolute;
  height: 57px;
  left: 1254px;
  right: 82px;
  top: 4%;
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
  border-radius: 1rem;
  .link {
    text-decoration: none;
    color: black;
  }
`;

export default function Headerbar({ handleLogout }: any): React.ReactElement {
  const islogincheck = useSelector(
    (state: RootState) => state.islogincheck.islogin
  );
  const isgooglelogin = useSelector(
    (state: RootState) => state.isgooglelogin.isgooglelogin
  );

  const check = useSelector((state: RootState) => state.modal.check);
  const dispatch = useDispatch(); // 디스패치 함수를 가져옵니다
  // 각 액션들을 디스패치하는 함수들을 만들어줍니다
  const handleModal = () => {
    dispatch(openModal());
  };
  // Modal창을 체크해서 페이지가 바뀌면 안나오는 함수
  // 로그인이 안되있으면 페이지이동불가
  const checkedModal = () => {
    check ? dispatch(openModal()) : null;
    isgooglelogin || islogincheck ? null : alert('로그인을 먼저 해주세요');
  };
  return (
    <Sidebar>
      <Homebutton>
        <Link to="/">
          <div className="home" onClick={checkedModal}>
            Home
          </div>
        </Link>
      </Homebutton>
      <Rankbutton>
        {/* 구글로그인이나 일반로그인이 안되있으면 눌러도 메인으로 돌아옴 */}
        {isgooglelogin || islogincheck ? (
          <Link to="/rank" className="link">
            <div onClick={checkedModal}>Ranking</div>
          </Link>
        ) : (
          <Link to="/" className="link">
            <div onClick={checkedModal}>Ranking</div>
          </Link>
        )}
      </Rankbutton>
      <Listbutton>
        {isgooglelogin || islogincheck ? (
          <Link to="/idealist" className="link">
            <div onClick={checkedModal}>Idea List</div>
          </Link>
        ) : (
          <Link to="/" className="link">
            <div onClick={checkedModal}>Idea List</div>
          </Link>
        )}
      </Listbutton>
      {islogincheck ? (
        <Mypagebutton>
          <Link to="/mypage" className="link">
            <div onClick={checkedModal}>My page</div>
          </Link>
        </Mypagebutton>
      ) : null}
      {/* 일반로그인이 되면 로그아웃버튼이 나오고 구글로그인이 되면 구글로그아웃 버튼이 나옴 */}
      <Loginbutton>
        {isgooglelogin ? (
          <Googlelogout />
        ) : islogincheck ? (
          <div>
            <div onClick={() => handleLogout()}>Log out</div>
          </div>
        ) : (
          <div onClick={() => handleModal()}>Log in</div>
        )}
      </Loginbutton>
    </Sidebar>
  );
}
