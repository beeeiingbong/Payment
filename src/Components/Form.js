import React from 'react'
import {useState} from 'react'
import '../Styles/style.css'

export default function Form({  creditCardNumber,creditCardName,
                                creditCardExpiryDate,creditCardCvv,
                                save}) {
    const [cardNumber,setCardNumber] = useState()
    const [cardName,setCardName] = useState()
    const [expiryDate,setExpiryDate] = useState()
    const [cvv,setCvv] = useState()
    const [pic,setPic] =useState(false)

    function retreiveNumber(number){
        if(number.length<=19 && number !==undefined){
            number=number.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()
        console.log("In the form",cardNumber)
        setCardNumber(number)
        creditCardNumber(number)
        }
    }

    function retrieveName(name){
        if(name!==undefined){
            console.log("In the form",name)
            setCardName(name.toUpperCase())
            creditCardName(name.toUpperCase())
        }
    }

    function retrieveExpiryDate(date){
        if(date.length<=5 && date !==undefined){
            date=date.replace(
                /[^0-9]/g, '' // To allow only numbers
            ).replace(
                /^([2-9])$/g, '0$1' // To handle 3 > 03
            ).replace(
                /^(1{1})([3-9]{1})$/g, '0$1/$2' // 13 > 01/3
            ).replace(
                /^0{1,}/g, '0' // To handle 00 > 0
            ).replace(
                /^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, '$1/$2' // To handle 113 > 11/3
            );
            console.log("In the form",date)
            setExpiryDate(date)
            creditCardExpiryDate(date)
        }
    }

    function retrieveCVV(cvv){
        if(cvv.length<=3 && cvv!==undefined){
            cvv=cvv.replace(/[^\dA-Z]/g, '')
            console.log("in the form",cvv)
            setCvv(cvv)
            creditCardCvv(cvv)
        }
    }

    function takeScreenshot(e){
        e.preventDefault()
        save(!pic)
        console.log("take a screenshot")
        setPic(false)
    }

  return (
    <div className='container form'>
        <div className='space'></div>
        <div className="formData">
            <form onSubmit={(e)=>takeScreenshot(e)}>
                <div className="form-group">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input  type="text"
                           className="form-control" 
                           id="cardNumber"  
                           placeholder="1234 5678 9012 3456"
                           value={cardNumber}
                           onChange={(e)=>{
                            retreiveNumber(e.target.value)
                            }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="cardHolder">Card Holder</label>
                    <input type="text"
                           className="form-control" 
                           id="cardHolder" 
                           placeholder="John Doe"
                           value={cardName}
                           style={{textTransform:"uppercase"}}
                           onChange={(e)=>{
                                retrieveName(e.target.value)
                            }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="expiryDate">Expiry Date</label>
                    <input type="text"
                           className="form-control" 
                           id="expiryDate" 
                           placeholder="20/13"
                           value={expiryDate}
                           onChange={(e)=>{
                            retrieveExpiryDate(e.target.value)    
                        }}/>      
                </div>
                <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input type="text"
                           className="form-control" 
                           id="cvvForm" 
                           placeholder="255"
                           value={cvv}
                           maxLength="3"
                           onChange={(e)=>{
                            retrieveCVV(e.target.value)
                            }}/> 
                </div>
                <div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}
