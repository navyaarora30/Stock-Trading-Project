import React from 'react';

function Pricing() {
    return ( 
        <div className='container'>
            <div className='row align-items-start'>
                <div className='col-md-5'>
                    <h1 className=' ms-5 mb-3 fs-2 '>Unbeatable pricing</h1>
                    <p className='ms-5'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' className='ms-5'  style={{textDecoration:"none"}}>See Pricing <i class="fa fa-long-arrow-right ms-1" aria-hidden="true"></i></a>
                </div>
                <div className='col-md-7 d-flex justify-content-between text-start mt-3'>
                    <div className='d-flex align-items-center gap-1'>
                        <img src='media/images/pricing0.svg' style={{ width: "60%" }} />
                        <p className="text-muted" style={{ fontSize: '0.9rem'}}>Free account <br /> opening</p>
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                        <img src='media/images/pricing0.svg' style={{ width: "50%" }} />
                        <p className='text-muted' style={{ fontSize: '0.8rem'}}>Free equity delivery<br/> and direct mutual funds</p>
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                        <img src='media/images/intradayTrades.svg' style={{ width: "60%" }} />
                        <p className='text-muted' style={{ fontSize: '0.9rem'}}>Intraday and F&O</p>
                    </div>
                </div>
             </div>
         </div> 
    );
}

 export default Pricing;


