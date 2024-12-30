import { call, put, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { enableaddBlog, enableblog, enablelogin, enableSignup, enableuserblog, setBlog, setContent, setEmail, setisLoading, setLoading, setloginSuccess, setPassword,setrole,setsignupEmail,setsignupPassword, setSuccess, setTitle, setuserblog} from './slice';
function* loginCheck() {
  const email = yield select((state) => state.login.email);
  const password = yield select((state) => state.login.password);
  try {
    const response = yield call(axios.post, "http://localhost:8080/login", {
      email: email,
      password: password,
    },{
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    yield call([localStorage, 'setItem'], "Token", response.data.token);
    yield put(setEmail(''));
    yield put(setPassword(''));
    yield put(setloginSuccess(true));

  } catch (error) {
    alert("invalid credentials");
  }
}
function* LogincheckSaga() {
  yield call(loginCheck);
}

//////
function* signupCheck(){
    const email = yield select((state)=>state.signup.email);
    const password = yield select((state)=>state.signup.password);
    const role = yield select((state)=>state.signup.role);
    try{
       const response = yield call(axios.post,"http://localhost:8080/signup",{
        email:email,
        password:password,
        role:role,
       },{
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      yield call([localStorage, 'setItem'], "Token", response.data.token);
      yield put(setsignupEmail(''));
      yield put(setsignupPassword(''));
      yield put(setrole(''));
      yield put(setSuccess(true));
      // navigate();
    }
    catch(e){
         alert("user already exists")
    }
}
export function* Signupchecksaga(){
  yield call(signupCheck);
}
//////
function* blogRequest(){
  try{
    const response = yield call(axios.get,"http://localhost:8080/getallBlogs",{
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    yield put(setBlog(response.data.blogs));
    yield put(setLoading(false));
  }
  catch(e){
     alert("no blogs to display");
  }

}
export function* Blogpage(){
  yield call (blogRequest);
}
///

function* Addblog(){
    const title = yield select((state)=>state.AddBlog.Title);
    const content = yield select((state)=>state.AddBlog.Content);
    try{
       const res = yield call (axios.post,"http://localhost:8080/addBlog",{
        title:title,
        content:content,
       },{
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('Token')}`
        }
      });
      yield put(setTitle(''));
      yield put(setContent(''));
      alert("blog added successfully");
    }
    catch(e){
      alert("un authorized");
    }
}

export function* callAddblog(){
  yield call(Addblog);
}
/////
export function* fetchuserblog(){
  try{
     const response = yield call(axios.get,"http://localhost:8080/getBlogs",{
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('Token')}`
      }
    });
    yield put(setuserblog(response.data.blogs));
    yield put(setisLoading(false));

  }catch(e){
      console.log(e);
      alert("no blogs posted");
  }
}

export function* userblogcheck(){
  yield call(fetchuserblog);
}
export function* Loginsaga(){
  yield takeLatest(enablelogin.type, LogincheckSaga);
}
export function* Signupsaga(){
  yield takeLatest(enableSignup.type,Signupchecksaga);
}
export function* blogsaga(){
  yield takeLatest(enableblog.type,Blogpage);
}
export function* Addblogsaga(){
  yield takeLatest(enableaddBlog.type,callAddblog);
}
export function* userblogsaga(){
  yield takeLatest(enableuserblog.type,userblogcheck);
}