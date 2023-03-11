import { connect, useSelector,useDispatch } from "react-redux"
import { decrement, increment } from "../redux/dynamicCounter/action";



function DynamicHooksCounter(){
    const count = useSelector((state)=> state.dynamicCounter.value);
    const dispatch = useDispatch();
    
    const incrementHandler=(value)=>{
        dispatch(increment(value));
    }
    const decrementHandler=(value)=>{
        dispatch(decrement(value));
    }

    //comments
  return (
    <div
    class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
>
    <div class="text-2xl font-semibold" id="counter">{count}</div>
     <div class="flex space-x-3">
        <button
            class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
            id="increment"onClick={()=>incrementHandler(5)}
        >
            Increment
        </button>
        <button
            class="bg-red-400 text-white px-3 py-2 rounded shadow"
            id="decrement"onClick={()=>decrementHandler(5)}
        >
            Decrement
        </button>
    </div> 

    
   

    
</div>
  )
}

//---------- OLD WAY ----------

// const mapStateToProps = (state)=>{
//    return {
//     count: state.value,
//    };
// };
// const mapDispatchToProps = (dispatch)=>{
//    return {
//     increment:(value) => dispatch(increment(value)),
//     decrement:(value) => dispatch(decrement(value)),
//    };
// };

// export default connect(mapStateToProps,mapDispatchToProps)(HooksCounter);
//--------------------------------------------------

export default DynamicHooksCounter;