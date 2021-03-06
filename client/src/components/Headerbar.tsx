import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { openModal } from '../modules/modal';
import { Link } from 'react-router-dom';
import Googlelogout from './Googlelogout';

const Sidebar = styled.div`
  /* display: flex;
  background-color: #ffff;
  color: black;
  font-weight: semi-bold;
  font-size: 40px;
  text-decoration: none;
  align-items: center;
  padding: 10px; */
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
  const dispatch = useDispatch(); // ???????????? ????????? ???????????????
  // ??? ???????????? ?????????????????? ???????????? ??????????????????
  const handleModal = () => {
    dispatch(openModal());
  };
  // Modal?????? ???????????? ???????????? ????????? ???????????? ??????
  // ???????????? ??????????????? ?????????????????????
  const checkedModal = () => {
    check ? dispatch(openModal()) : null;
    isgooglelogin || islogincheck ? null : alert('???????????? ?????? ????????????');
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
        {/* ????????????????????? ?????????????????? ??????????????? ????????? ???????????? ????????? */}
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
      {/* ?????????????????? ?????? ????????????????????? ????????? ?????????????????? ?????? ?????????????????? ????????? ?????? */}
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
