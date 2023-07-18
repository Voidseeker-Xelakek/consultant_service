import React from 'react'
import './Calculator.css'
import store from './store'
import Header from './Header'

class Calculator extends React.Component{
    constructor(){
        super()
        this.state={
            out:'0'
        }
        this.refOutput= React.createRef()
    }

    tapeNumber(value){
        let currentValue = value
        let output = this.refOutput.current
        this.setState({
            out:currentValue
        })
        if(output.value === '0'){output.value=''}
        output.value += currentValue
    }

    tapeOperation(value){
        let output = this.refOutput.current
        if(value === 'CE'){
            output.value.length ===1 ? output.value ='0' : output.value = output.value.substring(0,output.value.length-1)
        }
        else if (value==='C'){output.value='0'}
        else if (value==='='){
            try{
                let result = eval(output.value)
                if(result === Infinity || result === -Infinity){
                    output.value ='Недопустимое значение'
                    setTimeout(()=>{
                        output.value ='0'
                    },1500)
                }
                else{
                    output.value = result
                }
            }
            catch{
                output.value ='Недопустимое значение'
                setTimeout(()=>{
                    output.value ='0'
                },1500)
            } 
        }
    }

    render(){
        return(
            <div className="container">
                <div className="output">
                    <input ref={this.refOutput} type="text" defaultValue={this.state.out}></input>
                </div>
                <div className="buttons">
                    {store.buttons.map((item,index) => <button
                    key={index}
                    onClick={()=>{this.tapeNumber(item.val)}}
                    >{item.val}</button>)}

                    {store.operations.map((item,index) => <button
                    key={index}
                    onClick={()=>{this.tapeOperation(item.val)}}
                    >{item.val}</button>)}
                
                </div>
            </div>
        )
    }

}
export default Calculator