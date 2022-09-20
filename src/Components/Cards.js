import React,{useState, useRef,useEffect } from 'react'
import '../Styles/style.css'
import { saveAsPng } from 'save-html-as-image';

export default function Cards({data,saved}) {
    // console.log("in the card", data.name," ",data.number, " ", data.date," ",data.cvv)
    
    const [savePic,setSavepic]= useState(false)

    const number=useRef()
    const name = useRef();
    const date =useRef();
    const cvv = useRef();

    useEffect(()=>{
        if(data.number!==undefined && data.number !=="")
            number.current.innerHTML = data.number
        else
            number.current.innerHTML ='1234 5678 9067 9075'    
        if(data.name !== undefined && data.name !== '')
            name.current.innerHTML = data.name;
        else
            name.current.innerHTML ="John Doe"    
        if(data.date !== undefined && data.date !== "" )
            date.current.innerHTML = data.date 
        else
            date.current.innerHTML ="11/29"
        if(data.cvv !== undefined && data.cvv !=='')
            cvv.current.innerHTML = data.cvv       
        else
            cvv.current.innerHTML = "240"  
        
        console.log("In the card",saved)    
        if(saved === true){
            setSavepic(true)
            // const downloadImage=()=>{
            console.log("In the true block")    
            const node = document.getElementById('front');
            saveAsPng(node);
            // setSavepic(false)
            // }
        }    
    })

  return (
    <div className='container'>
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front" id="front">
                    <div className='top'>
                        <div className='chip'>
                            <div id="chip"></div>
                        </div>
                        <div className='mastercard-image'>
                            <img className="mastercard" src='https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png' alt="" />
                        </div>
                    </div>
                    <div className='cardNumber'>
                        <h1 ref={number}> 1234 5678 9067 9075</h1>
                    </div>
                    <div className='bottom'>
                        <div className='holderName'>
                            <span><h6>Card Holder</h6></span>
                            <div><h4 ref={name}>John Doe</h4></div>
                        </div>
                        <div className='expiryDate'>
                            <span><h6>Expires</h6></span>
                            <div><h4 ref={date}>11/29</h4></div>
                        </div>
                    </div>
                    
                </div>
                <div className="flip-card-back">
                    <div className='blackRectangle'></div>
                    <h5>CVV</h5>
                    <div id="cvv"><h6 ref={cvv}>240</h6></div>
                    <div className='mastercard-image'>
                        <img className="mastercardBack" src='https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png' alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
