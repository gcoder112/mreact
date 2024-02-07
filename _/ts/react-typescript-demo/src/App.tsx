import { Greet } from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name='Alex' messageCount={20} isLoggedIn={false}/>
    </div>
  );
}

export default App;
