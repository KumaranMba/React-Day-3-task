import React, { useState } from 'react';                // creating a child component   

function Card({detail,count,setCount}) {                // passing data props from parent component and hook state                 
    console.log(detail);                                 
      
    const[switchButton,setSwitchButton] = useState(false);          // useing hook to  create and manage state for switch button

     let handleRemoveFromCart  = ()=>{                              //  button function name Remove from cart by using onClick
       setSwitchButton(!switchButton);                              // setting setter  to opposite of current value
       setCount(count-1);                                           // setting setter to the cart
     }

     
     let handleAddToCart  = ()=>{                                    // button function name Add to cart
        setSwitchButton(!switchButton);                              // setting setter  to opposite of current value
        setCount(count+1);                                           // setting setter to the cart
      }
     
  return (                                                            // HTML code
    <div>
 
         <div className="col mb-5">
                        <div className="card h-100">

                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                           
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">{detail.title}</h5>
                                   
                                    <span className="text-muted text-decoration-line-through">{detail.price1}</span>
                                    {detail.price2}
                                </div>
                            </div>
                           
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">{switchButton?(<button className="btn btn-outline-dark mt-auto" onClick={handleRemoveFromCart}>Remove from cart</button>):
                                 (<button className="btn btn-outline-dark mt-auto" onClick={handleAddToCart}>Add to cart</button>)}</div>
                            </div>
                        </div>
                    </div>
    
    </div>
  )
}

export default Card;