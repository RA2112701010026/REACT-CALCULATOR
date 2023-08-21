function Keypad(props) {
    return (
        <div className="keypad">
            <div className="row">
                <button onClick={() => props.handleClick("7")} className="num">7</button>
                <button onClick={() => props.handleClick("8")} className="num">8</button>
                <button onClick={() => props.handleClick("9")} className="num">9</button>
                <button onClick={() => props.handleClick("/")} className="sign">/</button>
            </div>
            <div className="row">
                <button onClick={() => props.handleClick("4")} className="num">4</button>
                <button onClick={() => props.handleClick("5")} className="num">5</button>
                <button onClick={() => props.handleClick("6")} className="num">6</button>
                <button onClick={() => props.handleClick('*')} className="sign">*</button>
            </div>
            <div className="row">
                <button onClick={() => props.handleClick("1")} className="num">1</button>
                <button onClick={() => props.handleClick("2")} className="num">2</button>
                <button onClick={() => props.handleClick("3")} className="num">3</button>
                <button onClick={() => props.handleClick("-")} className="sign">-</button>
            </div>
            <div className="row">
                <button onClick={() => props.handleClick("0")} className="num">0</button>
                <button onClick={() => props.calculate("=")} className="fun-key">=</button>
                <button onClick={() => props.handleClear("c")} className="fun-key">C</button>
                <button onClick={() => props.handleClick("+")} className="sign">+</button>
            </div>
        </div>
    );
}

export default Keypad;
