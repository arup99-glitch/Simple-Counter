import { connect } from "react-redux"
import { decrement, increment } from "../redux/counter/actions";


function Counter({count,increment,decrement}) {
    

    //comments
  return (
    <div
    class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
>
    <div class="text-2xl font-semibold" id="counter">{count}</div>
    <div class="flex space-x-3">
        <button
            class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
            id="increment"onClick={increment}
        >
            Increment
        </button>
        <button
            class="bg-red-400 text-white px-3 py-2 rounded shadow"
            id="decrement"onClick={decrement}
        >
            Decrement
        </button>
    </div>

    
   

    
</div>
  )
}

const mapStateToProps = (state)=>{
   return {
    count: state.value,
   };
};
const mapDispatchToProps = (dispatch)=>{
   return {
    increment:(value) => dispatch(increment(value)),
    decrement:(value) => dispatch(decrement(value)),
   };
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
