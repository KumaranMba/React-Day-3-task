import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';


let datas =[{id:1,
            title:"Fancy Product",
            importance: false,
            price1: "$40.00",
            price2:" $80.00"},
            {id:2,
            title:"Special Item",
            importance: true,
            price1: "$20.00",
            price2:"$18.00"},
            {id:3,
            title:"Sale Item",
            importance: false,
             price1: "$50.00",
             price2: "$25.00"},
             {id:4,
             title:"Popular Item",
             importance: true,
             price1: "$40.00"},
             {id:5,
             title:"Sale Item",
             importance: false,
             price1: "$50.00",
             price2:"$25.00" },
             {id:6,
             title:"Fancy Product",
             importance: false,
             price1: "$120.00",
             price2: "$280.00"
             },
             {id:7,
             title:"Special Item",
             importance: true,
             price1: "$20.00",
             price2:"$18.00"
             },{id:8,
             title:"Popular Item",
             importance: true,
             price: "$40.00"
             }];

ReactDOM.createRoot(document.getElementById('root')).render(
  <App datas ={datas} />)
