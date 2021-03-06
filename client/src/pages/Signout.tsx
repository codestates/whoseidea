import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import Login from '../components/Login';
import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { islogin } from '../modules/islogin';
import { useMediaQuery } from 'react-responsive';

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
  left: 65%;
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
  width: 300px;
  height: 72px;
  left: 270px;
  top: 200px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
`;
const Input1 = styled.div`
  position: absolute;
  top: 40%;
  left: 18%;
  & input {
    width: 500px;
    height: 50px;
    font-size: 20px;
    text-align: center;
    background: rgba(196, 196, 196, 0.09);
    border: 1px solid #f7f4ba;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
`;
const Input2 = styled.div`
  position: absolute;
  top: 50%;
  left: 18%;
  & input {
    width: 500px;
    height: 50px;
    font-size: 20px;
    text-align: center;
    background: rgba(196, 196, 196, 0.09);
    border: 1px solid #f7f4ba;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
`;
const Btn = styled.div`
  & button {
    position: absolute;
    top: 60%;
    left: 35%;
    display: flex;
    flex-direction: row;
    justify-content: center;
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
    width: 200px;
    height: 40px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
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
  }
`;
const Error = styled.div`
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f7d7da;
  position: absolute;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  top: 60%;
  left: 38%;
  animation: FadeDown 1s;
  font-size: large;
  font-weight: bold;
`;

const TitleM = styled.div`
  font-weight: bold;
  font-size: 60px;
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
const Input1M = styled.div`
  position: absolute;
  top: 20%;
  left: 32%;
  & input {
    width: 300px;
    height: 50px;
    left: 200px;
    font-size: 20px;
    text-align: center;
    background: rgba(196, 196, 196, 0.09);
    border: 1px solid #f7f4ba;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
`;
const Input2M = styled.div`
  position: absolute;
  top: 30%;
  left: 32%;
  & input {
    width: 300px;
    height: 50px;
    left: 200px;
    font-size: 20px;
    text-align: center;
    background: rgba(196, 196, 196, 0.09);
    border: 1px solid #f7f4ba;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
`;
const BtnM = styled.div`
  & button {
    position: absolute;
    top: 40%;
    left: 33%;
    border-radius: 1rem;
    width: 40%;
    height: 40px;
    border: none;
    background-color: #e5f056;
    font-weight: bold;
    :hover {
      background-color: #353333;
      color: white;
      transition: 0.5s;
    }
  }
`;
const ErrorM = styled.div`
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f7d7da;
  position: absolute;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  top: 45%;
  left: 38%;
  animation: FadeDown 1s;
  font-size: large;
  font-weight: bold;
`;

export default function Signout() {
  // ???????????? ??????
  // ????????? ??? ?????? : ?????? ????????? 768px ????????? ?????? ????????? ??? ??????
  const isPc = useMediaQuery({
    query: '(min-width:768px)',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userinfo, setuserinfo] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const check = useSelector((state: RootState) => state.modal.check);
  // userinfo??? ????????? ???????????? ????????? ??????
  const handleInputValue = (key: any, e: any) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
  };
  // ???????????? ??????????????? ???????????? ???????????? ?????? ????????? ???????????? ??????
  const handleSignout = () => {
    const { email, password } = userinfo;
    if (!email || !password) {
      return setErrorMessage('?????? ????????? ???????????????');
    }
    setErrorMessage('');
    const params = { data: userinfo };
    // ???????????? ?????? ??? ???????????? ????????? ????????? ??????
    // ?????? ??? ??????????????? ??????
    axios
      .delete('https://whoseidea.ml:8080/signout', params)
      .then(data => alert(data.data))
      .then(() => navigate('/'))
      .then(() => dispatch(islogin(false)))
      .catch(() => setErrorMessage('????????? ????????? ?????????????????????.'));
  };

  return (
    <div>
      {check ? <Login /> : null}
      {isPc ? (
        <All>
          <div>
            <Headertext>
              <h1>Whose idea?</h1>
            </Headertext>
            <Title>
              <div> ???????????? ?????????</div>
            </Title>
            <Body>
              <Bodytext>
                <h1>?????? ??????</h1>
              </Bodytext>
              <div>
                <Input1>
                  <input
                    type="text"
                    placeholder="?????? ?????????"
                    onChange={e => handleInputValue('email', e)}
                  ></input>
                </Input1>
                <Input2>
                  <input
                    type="password"
                    placeholder="?????? ????????????"
                    onChange={e => handleInputValue('password', e)}
                  ></input>
                </Input2>
                <Btn>
                  <div>
                    <button onClick={() => handleSignout()}>??????</button>
                  </div>
                </Btn>
                {errorMessage === '' ? null : <Error>{errorMessage}</Error>}
              </div>
            </Body>
          </div>
        </All>
      ) : (
        <div>
          <TitleM>
            <div> ???????????? ?????????</div>
          </TitleM>
          <div>
            <Input1M>
              <input
                type="text"
                placeholder="?????? ?????????"
                onChange={e => handleInputValue('email', e)}
              ></input>
            </Input1M>
            <Input2M>
              <input
                type="password"
                placeholder="?????? ????????????"
                onChange={e => handleInputValue('password', e)}
              ></input>
            </Input2M>

            <BtnM>
              <div>
                <button onClick={() => handleSignout()}>??????</button>
              </div>
            </BtnM>
            {errorMessage === '' ? null : <ErrorM>{errorMessage}</ErrorM>}
          </div>
        </div>
      )}
    </div>
  );
}
