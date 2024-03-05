import React, { useState } from 'react';

function Card({detail,count,setCount}) {
    console.log(detail);
      
    const[switchButton,setSwitchButton] = useState(false);
     console.log(switchButton);

     let handleRemoveFromCart  = ()=>{
       setSwitchButton(!switchButton);
       setCount(count-1);
     }

     
     let handleAddToCart  = ()=>{
        setSwitchButton(!switchButton);
        setCount(count+1);
      }
     
  return (
    <div>
 
         <div className="col mb-5">
                        <div className="card h-100">
                          
                            {/* <div className="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div> */}
                       
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                           
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">{detail.title}</h5>
                                   
                                    <span className="text-muted text-decoration-line-through">{detail.price1}</span>
                                    {detail.price2}
                                </div>
                            </div>
                           
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">{switchButton?(<button className="btn btn-outline-dark mt-auto" onClick={handleRemoveFromCart}>Remove from cart</button>):(<button className="btn btn-outline-dark mt-auto" onClick={handleAddToCart}>Add to cart</button>)}</div>
                            </div>
                        </div>
                    </div>
       
    </div>
  )
}

export default Card;