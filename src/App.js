
import './App.css';
import PostForm from './component/PostForm';
import PostList from './component/PostList';
import ClassCount from './Hooks/ClassCount';
import HookCounter from './Hooks/HookCounter';

function App() {
  return (
    <div className="App">
       {/* <PostList/> */}
       {/* <PostForm/> */}
       {/* <ClassCount/> */}
       <HookCounter/>
    </div>
  );
}

export default App;
