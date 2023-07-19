import React from 'react'
import {Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import fb from '../assets/icon/fb.png'
import TheCASLogo from '../assets/img/TheCASLogo.png'
import gm from '../assets/icon/gm.png'
import ig from '../assets/icon/ig.png'
import line from '../assets/icon/line.png'
import tiktok from '../assets/icon/tiktok.png'
import tw from '../assets/icon/tw.png'
import yt from '../assets/icon/yt.png'
import logoPartfun from '../assets/img/logo_partfun.png'




const Footer = () => {
  return (
    <React.Fragment>
    <Row>
        <Col md={6} sm={12} className='d-flex p-0 align-items-center'>
            <div>
                <img src={logoPartfun} alt="" style={{width: '100px'}} />
            </div>
            <div className='d-flex align-items-center'>
                <span>152 Phetchaburi Road,
                    <br />Ratchathewi, Bangkok 10400 
                    <br /> The Creative Art Space .co
                </span>
            </div>
        </Col>
        <Col md={6} sm={12} className='d-flex mt-3'>
        <Row>
            <Col  md={12} className='d-flex align-items-center justify-content-end'>
                <img src={gm} alt="" className='widthIcon' />
                <a href="mailto: thepoczy2013@gmail.com" style={{textDecoration: 'none'}}>
                    <span>
                        thepoczy2013@gmail.com
                    </span>
                </a>
            </Col>
            <Col md={12} className='d-flex justify-content-sm-center justify-content-md-end'>
                <ul className='d-flex'>
                    <li style={{ listStyle: 'none', margin: '1px' }}>
                        <a href="">
                            <img src={fb} alt="" className='widthIcon' />
                        </a>
                    </li>
                    <li style={{ listStyle: 'none', margin: '1px' }}>
                        <a href="">
                            <img src={ig} alt="" className='widthIcon' />
                        </a>
                    </li>
                    <li style={{ listStyle: 'none', margin: '1px' }}>
                        <a href="">
                            <img src={line} alt="" className='widthIcon' />
                        </a>
                    </li>
                    <li style={{ listStyle: 'none', margin: '1px' }}>
                        <a href="">
                            <img src={tiktok} alt="" className='widthIcon' />
                        </a>
                    </li>
                    <li style={{ listStyle: 'none', margin: '1px' }}>
                        <a href="">
                            <img src={tw} alt="" className='widthIcon' />
                        </a>
                    </li>
                    <li style={{ listStyle: 'none', margin: '1px' }}>
                        <a href="">
                            <img src={yt} alt="" className='widthIcon' />
                        </a>
                    </li>
                </ul>
            </Col>
        </Row>
    </Col>
    </Row>
    </React.Fragment>
  )
}

export default Footer