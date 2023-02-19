import logo from './logo.svg';
import './App.css';
import Counter from './Component/Counter';

function App() {
  return (
    <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">
    
    <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
    </h1>

    
    <div class="max-w-md mx-auto mt-10 space-y-5">
        <Counter></Counter>
        </div>
        </div>
  );
}

export default App;
