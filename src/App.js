
import './App.css';
import PostForm from './component/PostForm';
import PostList from './component/PostList';
import ClassCount from './Hooks/ClassCount';
import HookCounter from './Hooks/HookCounter';
import HooksCounterTwo from './Hooks/HookCounterTwo';
import HookCounterThree from './Hooks/HooksCounterThree';

function App() {
  return (
    <div className="App">
       {/* <PostList/> */}
       {/* <PostForm/> */}
       {/* <ClassCount/> */}
       {/* <HookCounter/> */}
       {/* <HooksCounterTwo/> */}
       <HookCounterThree/>
    </div>
  );
}

export default App;
