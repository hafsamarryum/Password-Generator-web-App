import React, { useState } from 'react'
import {LC,UC,SC,NC} from './data/PassChar'
import '../src/App.css'

const PswdGenerator = () => {

    // let p ='Wscubetech';
    // let n= p.charAt(3)  //display value of index 3
    // let n= p.charAt(Math.floor(Math.random()*p.length))  //convert decimal value into interger

    let [uppercase,setuppercase] =useState(false)
    let [lowercase,setlowercase] =useState(false)
    let [number,setnumber] =useState(false)
    let [symbols,setsymbols] =useState(false)
    let [passwordlen,setpasswordlen] =useState(10)
    let [fPass,setPass] =useState('')

   let createPassword=()=>{
    let finalPass=''
    let charSet=''
    if(uppercase || lowercase || number  || symbols){
      if(uppercase) charSet+=UC; // which checkbox is true
      if(lowercase) charSet+=LC;
      if(number) charSet+=NC;
      if(symbols) charSet+=SC;
      for(let i=0; i<passwordlen; i++){
        finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
      }
      setPass(finalPass)
    }
    else{
        alert("Please one ChechBox!......")
    }
   }

   let copyPass=()=>{
     navigator.clipboard.writeText(fPass)
   }

    return (
        <>
            <div className='passwordBox'>
                <h2>Password Generator</h2>
                <div className='passwordBoxin'>
                    <input type='text' readOnly  value={fPass}/> <button onClick={copyPass}>Copy</button>
                </div>
                <div className='passLength'>
                    <label>Password length</label>
                    <input type='number' max={20} min={10}  value={passwordlen} onChange={(event)=>setpasswordlen(event.target.value)}/>
                </div>

                <div className='passLength'>
                    <label>Include uppercase letters</label>
                    <input type='checkbox' checked={uppercase} onChange={()=>setuppercase(!uppercase)} />
                </div>
                <div className='passLength'>
                    <label>Include lowercase letters</label>
                    <input type='checkbox' checked={lowercase} onChange={()=>setlowercase(!lowercase)}/>
                </div>
                <div className='passLength'>
                    <label>Include numbers</label>
                    <input type='checkbox' checked={number} onChange={()=>setnumber(!number)}/>
                </div>
                <div className='passLength'>
                    <label>Include symbols</label>
                    <input type='checkbox' checked={symbols} onChange={()=>setsymbols(!symbols)} />
                </div>
               <button className='btn' onClick={createPassword}>
                Generate password
               </button>





            </div>
        </>
    )
}

export default PswdGenerator
