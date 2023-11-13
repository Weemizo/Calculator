import './Calculator.scss';

export default function Calculator() {
    return <div className='main'>
        <h1>calc</h1>
        
        <div className='result'>

        </div>

        <div className='input'>
            <button className='num'>7</button>
            <button className='num'>8</button>
            <button className='num'>9</button>
            <button className='del'>DEL</button>
            <p className='break'></p>
            <button className='num'>4</button>
            <button className='num'>5</button>
            <button className='num'>6</button>
            <button className='num'>+</button>
            <p className='break'></p>

            <button className='num'>1</button>
            <button className='num'>2</button>
            <button className='num'>3</button>
            <button className='num'>-</button>
            <p className='break'></p>

            <button className='num'>.</button>
            <button className='num'>0</button>
            <button className='num'>/</button>
            <button className='num'>x</button>
            <p className='break'></p>

            <button className='reset'>RESET</button>
            <button className='enter'>=</button>
        </div>

    </div>
}