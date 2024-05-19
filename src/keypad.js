function Keypad({handle,evaluate,clear}){
    return (
        <div className="keypad">
        <div className="row">
            <button className="digit" onClick={()=>{handle("9");}}>9</button>
            <button className="digit" onClick={()=>{handle("8");}}>8</button>
            <button className="digit" onClick={()=>{handle("7");}}>7</button>
            <button className="operator" onClick={()=>{handle("/");}}>/</button>
        </div>
        <div className="row">
        <button className="digit" onClick={()=>{handle("6");}}>6</button>
            <button className="digit" onClick={()=>{handle("5");}}>5</button>
            <button className="digit" onClick={()=>{handle("4");}}>4</button>
            <button className="operator" onClick={()=>{handle("*");}}>*</button>
        </div>
        <div className="row">
        <button className="digit" onClick={()=>{handle("3");}}>3</button>
            <button className="digit" onClick={()=>{handle("2");}}>2</button>
            <button className="digit" onClick={()=>{handle("1");}}>1</button>
            <button className="operator" onClick={()=>{handle("-");}}>-</button>
        </div>
        <div className="row">
        <button className="digit" onClick={()=>{handle("0");}}>0</button>
            <button className="fun-key" onClick={()=>{evaluate();}}>=</button>
            <button className="fun-key" onClick={()=>{clear();}}>C</button>
            <button className="operator" onClick={()=>{handle("+");}}>+</button>
        </div>




        </div>
    )
}
export default Keypad;