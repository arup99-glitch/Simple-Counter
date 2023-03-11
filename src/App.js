import logo from './logo.svg';
import './App.css';
import Counter from './Component/Counter';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCounter from './Component/HooksCounter';
import DynamicHooksCounter from './Component/DynamicHooksCounter';
import VariableCounter from './Component/variableCounter';

function App() {
  return (
    <Provider store={store}>
    <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">
    
    <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
    </h1>

    
    <div class="max-w-md mx-auto mt-10 space-y-5">
        <HooksCounter id="1"></HooksCounter>
        <DynamicHooksCounter></DynamicHooksCounter>
        <VariableCounter></VariableCounter>
        <VariableCounter dynamic></VariableCounter>
        </div>
        </div>
        </Provider>
  );
}

export default App;
