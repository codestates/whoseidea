import { useEffect, useState } from 'react';
import Main from './pages/Main';
import Headerbar from './components/Headerbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signup from './pages/Signup';
import IdeaList from './pages/IdeaList';
import Rank from './pages/Rank';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './modules';
import Mypage from './pages/Mypage';
import Updatepro from './pages/Updatepro';
import { islogin } from './modules/islogin';
import Signout from './pages/Signout';
import Mypost from './pages/Mypost';
import ChangePassword from './pages/ChangePassword';
import Chat from './pages/Chat';
import Mychat from './pages/Mychat';

import IdeaView from './pages/IdeaVIew';

import WriteIdea from './pages/WriteIdea';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [usernickname, setusernickname] = useState('');
  const [postData, setpostData] = useState<AxiosResponse | null | void>(null);
  const [commentData, setcommentData] = useState<AxiosResponse | null | void>(
    null
  );
  const [chatData, setchatData] = useState<AxiosResponse | null | void>(null);
  const [writerdata, serwriterdata] = useState('');
  const isAuthenticated = () => {
    axios.get('https://localhost:8080/auth').then(data => {
      setusernickname(data.data.nickname);
      dispatch(islogin(true));
      navigate('/');
    });
  };
  const handleResponseSuccess = () => {
    isAuthenticated();
  };

  const handleMypost = () => {
    axios
      .get(`https://localhost:8080/user/my-post?nickname=${usernickname}`)
      .then(data => setpostData(data));
  };
  const handleMycomment = () => {
    axios
      .get(`https://localhost:8080/user/my-comment?nickname=${usernickname}`)
      .then(data => setcommentData(data));
  };
  const handleMychat = () => {
    axios
      .get(`https://localhost:8080/user/my-post?nickname=${usernickname}`)
      .then(data => setchatData(data));
  };
  const handleLogout = () => {
    axios.post('https://localhost:8080/logout').then(res => {
      dispatch(islogin(false));
      navigate('/');
    });
  };

  const handleIdeaView = (name: string) => {
    serwriterdata(name);
  };

  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <div>
      <Headerbar handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={<Main handleResponseSuccess={handleResponseSuccess} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/idealist" element={<IdeaList />} />
        <Route path="/writeidea" element={<WriteIdea />} />
        <Route
          path="/mypage"
          element={
            <Mypage
              handleMypost={handleMypost}
              handleMycomment={handleMycomment}
              handleMychat={handleMychat}
            />
          }
        />
        <Route path="/updatepro" element={<Updatepro />} />
        <Route path="/signout" element={<Signout />} />
        <Route
          path="/mypost"
          element={<Mypost postData={postData} commentData={commentData} />}
        />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/chat" element={<Chat writerdata={writerdata} />} />
        <Route path="/mychat" element={<Mychat chatData={chatData} />} />
        <Route
          path="/ideaview/:id"
          element={<IdeaView handleIdeaView={handleIdeaView} />}
        />
      </Routes>
    </div>
  );
}

export default App;
