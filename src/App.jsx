import Nav from "./component/Nav";
import './App.scss'
import Sidebar from "./component/Sidebar";
import Middlebar from "./component/Middlebar";
import Feeds from "./component/Feeds";
import './j.css'
function App() {
  return (
<>
<Nav/>
<div className="row">
  <div className="col lineright devider" style={{width:"5%"}}><Sidebar/></div>
  <div className="col devider" style={{width:"25%"}}><Middlebar/></div>
  <div className="col devider" style={{width:"70%"}}><Feeds/></div>
</div>

</>
  );
}

export default App;
