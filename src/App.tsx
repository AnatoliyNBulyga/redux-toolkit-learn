import React, {useEffect} from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import {useAppSelector} from "./hooks/redux";
import {userSlice} from "./store/reducers/UserSlice";
import {fetchUsers} from "./store/reducers/ActionCreators"
import PostContainer from './components/PostContainer';
import PostContainer2 from './components/PostContainer2';

const App = () => {
    // const dispatch = useDispatch();
    // const {users, error, isLoading} = useAppSelector(state => state.userReducer);
    // useEffect(() => {
    //   dispatch(fetchUsers())
    // }, [])
    // if (error) return <h1>{error}</h1>
  return (
    <div className="App" style={{display: 'flex'}}>
        {/*{isLoading && <h1>Идет загрузка...</h1>}*/}
        {/*{JSON.stringify(users, null, 2)}*/}
      <PostContainer />
      {/*<PostContainer2 />*/}
    </div>
  );
}

export default App;

