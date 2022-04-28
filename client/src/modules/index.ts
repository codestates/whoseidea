import { combineReducers } from 'redux';
import counter from './counter';
import modal from './modal';
import login from './login';
import error from './errormessage';
import signup from './signup';
import islogincheck from './islogin';
import functions from './function';

const rootReducer = combineReducers({
  counter,
  modal,
  login,
  error,
  signup,
  islogincheck,
  functions,
});

// 루트 리듀서를 내보내주세요.
export default rootReducer;

// 루트 리듀서의 반환값를 유추해줍니다
// 추후 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야 하므로 내보내줍니다.
export type RootState = ReturnType<typeof rootReducer>;
