
import './App.css';
import Profile from './profile/Profile';

function App() {
  const handleName=(name)=>{
    alert(`Hello ${name}`)
  }
  return (
    <div className="App">
      
      <Profile fullName="BEN HLIMA Yessine" bio="30" profession="Ingénieur" handleName={handleName}>
      <img src="/profilePhoto.jpg" alt="" width="150px" height="150px"/>
      </Profile>      
    </div>
  );
 
}

export default App;
