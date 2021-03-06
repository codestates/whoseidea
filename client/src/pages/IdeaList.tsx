import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

axios.defaults.withCredentials = true;

const Main = styled.div`
  position: relative;
  width: 1440px;
  height: 1976px;
  background: #fbf9f2;
`;
const Title = styled.div`
  position: absolute;
  left: 500px;
  top: 80px;
  width: 700px;
  font-family: 'Anton';
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 160px;
  /* identical to box height, or 160% */
  letter-spacing: -0.01em;
  color: #2f4baa;
  text-shadow: 4px 4px 4px #f8f1b1;
`;

const MainStyle = styled.div`
  position: absolute;
  width: 1200px;
  height: 465px;
  left: 126px;
  top: 78px;
  background: #dbeef6;
  border-radius: 10px;
`;
const HeaderContainer = styled.div`
  .back1 {
    position: absolute;
    width: 300px;
    height: 300px;
    left: 80px;
    top: 130px;
    background: #fef4c3;
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    z-index: 20;
  }
  .back2 {
    position: absolute;
    width: 300px;
    height: 300px;
    left: 120px;
    top: 90px;
    background: #798ba5;
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    z-index: 30;
  }
  .back3 {
    position: absolute;
    width: 125px;
    height: 100px;
    left: 210px;
    top: 125px;
    background: #f4ff74;
    box-shadow: 0px -11px 50px #ffffff;
    z-index: 40;
    border-radius: 50px 50px 50px 50px;
  }
  & img {
    position: absolute;
    width: 300px;
    height: 300px;
    left: 130px;
    top: 100px;
    background: url(LED-Bulb-PNG-Transparent.png);
    filter: drop-shadow(10px 20px 50px rgba(0, 0, 0, 0.25));
    z-index: 50;
  }
`;
const HeaderContainertext = styled.div``;
const HeaderContainertext1 = styled.div`
  position: absolute;
  width: 85%;
  height: 125px;
  left: 8%;
  top: 60%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 21px;
  line-height: 48px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
`;

const HeaderContainer1 = styled.div``;

const Title2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 24px 10px 16px;
  gap: 8px;

  position: relative;
  width: 315px;
  height: 59px;

  background: #2348cd;
  border: 1px solid #fbf1b1;
  /* M3/Elevation Light/1 */

  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
   0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  border-radius: 100px;
`;
const Ideabox = styled.div`
  .container .card-content {
    display: flex;
    background-color: #ffff;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    position: relative;
    width: 250px;
    height: 420px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row-gap: 50px;
    grid-column-gap: 50px;
    margin-left: 15%;
    margin-top: 32%;
    text-align: center;
    background-position: center;
    border: 2px solid #000000;
    border-radius: 20px;
  }
  & img {
    position: static;
    width: 250px;
    height: 200px;
    left: 0px;
    top: 0px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 0px;
    border-radius: 10px 10px 10px 10px;
    border: 1px solid #000000;
  }
  .main-button {
    display: block;
    margin-left: 10%;
    margin-top: 8%;
    align-items: center;
    text-align: center;
    width: 200px;
    height: 40px;
    background: black;
    color: white;
    border: 2px solid #ffff;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 20px;
    transition: 0.5s ease;
  }
  & button:hover {
    transition: 0.5s ease;
    border: 2px solid #0000;
    background: transparent;
    color: black;
  }
`;

const Box1 = styled.div`
  --border-color: #ffff;
  .follow-buttons {
    position: absolute;
    display: relative;
    margin-left: 45%;
    margin-top: 5%;
    border-radius: 1px soild black;
  }
  .follow {
    border: 2px solid var(--border-color);
    border-radius: 25px 0 0 25px;
    color: var(--body-color);
    padding: 8px 16px;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    background-color: transparent;
    width: 100px;
    left: 100px;
    &:hover {
      background-color: var(--header-bg-color);
    }
  }
  .follow-option {
    border-radius: 0 25px 25px 0;
    left: 100px;
    width: 100px;
  }
`;
const MobileIdeabox = styled.div`
  .container .card-content {
    background-color: #ffff;
    padding: 0px;
    position: relative;
    width: 250px;
    height: 420px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 50px;
    grid-column-gap: 50px;
    margin-left: 20%;
    margin-top: 30%;
    text-align: center;
    background-position: center;
    border: 2px solid #000000;
    border-radius: 20px;
  }
  & img {
    position: static;
    width: 250px;
    height: 200px;
    left: 10px;
    top: 0px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 0px;
    border-radius: 10px 10px 10px 10px;
    border: 1px solid #000000;
  }
  .main-button {
    display: block;
    margin-left: 10%;
    margin-top: 8%;
    align-items: center;
    text-align: center;
    width: 200px;
    height: 40px;
    background: black;
    color: white;
    border: 2px solid #ffff;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 20px;
    transition: 0.5s ease;
  }
  & button:hover {
    transition: 0.5s ease;
    border: 2px solid #0000;
    background: transparent;
    color: black;
  }
`;
const MobileContainer = styled.div`
  position: relative;
  top: 20%;
`;
const More = styled.div`
  height: 300px;
  width: 100px;
`;
type UserProps = {
  handleToView(post: string[]): void;
};
export default function IdeaList({ handleToView }: UserProps) {
  const pageEnd = document.querySelector('.more');
  const [offset, setOffset] = useState(0);
  const [hasnext, sethasnext] = useState(false);
  const [post, setPost] = useState<string[]>([]);
  const [pagenum, setPageNum] = useState(1);
  const [mobilePost, setMobilePost] = useState<string[]>([]);

  const handleIdealist = (post: string[]) => {
    handleToView(post);
  };

  // offset?????? ?????????????????? ??????
  // next?????? ????????? 9?????? ????????? ???????????? pagenum 1??????

  const handleback = () => {
    setOffset(offset - 9);
    setPageNum(pagenum - 1);
  };
  const handlefront = () => {
    setOffset(offset + 9);
    setPageNum(pagenum + 1);
  };
  const isPc = useMediaQuery({
    query: '(min-width:768px)',
  });

  const fetchData = (items: any[]) => {
    setMobilePost([...mobilePost, ...items]);
  };

  const loadMore = () => {
    setPageNum(pagenum + 1);
  };

  // pagenum ??? 1??? ?????????????????? ????????? ????????? ????????? 9?????? ?????????
  // ????????? ???????????? ???????????? ????????? ??? map??? ???????????? ???????????? ??????
  // ???????????? ????????? ???????????? default ???????????? ??????
  // ????????? ???????????? post ??? ??????
  useEffect(() => {
    axios.get(`https://whoseidea.ml:8080/post?page=${pagenum}`).then(data => {
      Promise.all(
        data.data.map((item: { id: number; data: string[] }) =>
          axios.get(`https://whoseidea.ml:8080/post/image?postId=${item.id}`)
        )
      ).then(requests => {
        const urls = requests.map(item => {
          return item.data[0]
            ? item.data[0]
            : 'https://whoseidea-image.s3.ap-northeast-2.amazonaws.com/post_default_image.png';
        });

        const items = [];

        for (let i = 0; i < data.data.length; i++) {
          items.push({
            ...data.data[i],
            url: urls[i],
          });
        }
        setPost(items);
        sethasnext(!!items);
        fetchData(items);
      });
    });
  }, [pagenum]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: any) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 0.5 }
    );
    if (pageEnd !== null) {
      observer.observe(pageEnd);
    }
  }, [pageEnd]);

  return (
    <div>
      {isPc ? (
        <Main>
          <div className="wrap">
            <MainStyle>
              <Title>
                <div>
                  <h1>Whose idea?</h1>
                </div>
              </Title>
              <div>
                <HeaderContainer>
                  <div className="header-container" />
                  <span className="back1"></span>
                  <span className="back2"></span>
                  <span className="back3"></span>
                  <img src="led.png" />
                  <HeaderContainertext>
                    <div className="headercontainertext"></div>
                  </HeaderContainertext>
                </HeaderContainer>
                <div className="container" />
                <HeaderContainer1>
                  <HeaderContainertext1>
                    <div className="header-container" />
                    <div className="container" />
                    <div className="headercontainertext1">
                      ???????????? ????????????
                    </div>
                  </HeaderContainertext1>
                </HeaderContainer1>
              </div>
              <div>
                <Title2>
                  <div className="container">
                    <Link to="/writeidea">
                     <button>???????????? ????????????</button>
                    </Link>
                  </div>
                </Title2>
              </div>
              <Box1>
                <div className="button">
                  <div className="follow-buttons">
                    {offset === 0 ? null : (
                      <button className="follow" onClick={handleback}>
                        ??????
                      </button>
                    )}
                    {hasnext ? (
                      <button
                        className="follow follow-option active"
                        onClick={handlefront}
                      >
                        ??????
                      </button>
                    ) : null}
                  </div>
                </div>
              </Box1>
              <Ideabox>
                <div className="container">
                  <div className="card-content">
                    {post.map((post: any) => {
                      return (
                        <div>
                          <img src={post?.url} />
                          <h3>{post?.caption}</h3>
                          <p>{post?.nickname}</p>
                          <p>Like:{post?.likes}</p>
                          <Link to={`/ideaview/${post?.id}`} className="text">
                            <button
                              className="main-button"
                              onClick={() => handleIdealist(post)}
                            >
                              Read more
                            </button>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Ideabox>
            </MainStyle>
          </div>
        </Main>
      ) : (
        <div>
          <MobileContainer>
            <Title>
              <div>
                <h1>Newest</h1>
              </div>
            </Title>

            <div>
              <HeaderContainer>
                <div className="header-container" />
                <HeaderContainertext>
                  <div className="headercontainertext">
                    ????????? ??????????????? ???????????????
                  </div>
                </HeaderContainertext>
              </HeaderContainer>
              <div className="container" />
              <HeaderContainer1>
                <HeaderContainertext1>
                  <div className="header-container" />
                  <div className="container" />
                  <div className="headercontainertext1"> ???????????? ??????</div>
                </HeaderContainertext1>
              </HeaderContainer1>
            </div>
            <div>
              <Title2>
                <div className="container">
                  <Link to="/writeidea">
                    <img src="add.png"></img>
                  </Link>
                </div>
              </Title2>
            </div>
            <MobileIdeabox>
              <div className="container">
                <div className="card-content">
                  {mobilePost.map((post: any) => {
                    return (
                      <div>
                        <img src={post?.url} />
                        <h3>{post?.caption}</h3>
                        <p>{post?.nickname}</p>
                        <p>Like:{post?.likes}</p>
                        <Link to={`/ideaview/${post?.id}`} className="text">
                          <button
                            className="main-button"
                            onClick={() => handleIdealist(post)}
                          >
                            Read more
                          </button>
                        </Link>
                      </div>
                    );
                  })}
                  <More>
                    <div className="more"> ????????? </div>
                  </More>
                </div>
              </div>
            </MobileIdeabox>
          </MobileContainer>
        </div>
      )}
    </div>
  );
}
