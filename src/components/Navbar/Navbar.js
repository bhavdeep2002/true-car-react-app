import React from 'react'
import Loginbutton from '../Loginbutton/Loginbutton'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../style/style.css"

export default function Navbar (){
    return(
        <>
        <div className='container-flex'>
            <div className='row'>
                <div className='col-md-6'>
    
                </div>
                <div className='col-md-1 navfont'>
                Search City
                </div>
                <div className='col-md-1 navfont'>
                About us
                </div>
                <div className='col-md-1 navfont'>
                Finance
                </div>
                <div className='col-md-1 navfont'>
                True Value Hub
                </div>
                <div className='col-md-1 navfont'>
                Call Us 1800 102 1800
                </div>
                <div className='col-md-1' style={{marginTop: '14px'}}>
                <Loginbutton />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'><hr /></div>
            </div>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 brand'>
                    <div>True Car</div>
                    <div><img className='suzuki-logo' src="/images/suzuki logo.png" alt='suzuki logo'></img>MARUTI SUZUKI</div>
                </div>
            </div>
        </div>
        </>
    )
}