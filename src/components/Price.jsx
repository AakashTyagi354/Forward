import React, { useEffect } from 'react'
import './price.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import AOS from 'aos'
import 'aos/dist/aos.css'



function Price() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, [])
  return (
    <div className='price'>
      <div className="main">
        <div className="one" data-aos="fade-left">
          <div className="top">
            <ArrowDropDownIcon className='arrayDown' />
            NATURALGAS
          </div>
          <div className="down">
            <div className="first">-0.5%</div>
            <div className="second">-46.40</div>
            <div className="third">31,338.15</div>
          </div>
        </div>

        <div className="one" data-aos="fade-right"><div className="top">
          <ArrowDropDownIcon className='arrayDown' />
          CRUDEOIL
        </div>
          <div className="down">
            <div className="first">-0.08%</div>
            <div className="second">-3.34</div>
            <div className="third">3,899.45</div>
          </div></div>
        <div className="one" data-aos="fade-up"><div className="top">
          <ArrowDropUpIcon className='arrowUp' />
          COPPER
        </div>
          <div className="down">
            <div className="first" style={{ color: "green" }}>+0.14%</div>
            <div className="second">-46.40</div>
            <div className="third">31,338.15</div>
          </div></div>

        <div className="one" data-aos="fade-down"><div className="top">
          <ArrowDropUpIcon className='arrowUp' />
          GOLD
        </div>
          <div className="down">
            <div className="first" style={{ color: "green" }}>+0.5%</div>
            <div className="second">-46.40</div>
            <div className="third">31,338.15</div>
          </div></div>
        <div className="one" data-aos="fade-left"><div className="top">
          <ArrowDropUpIcon className='arrowUp' />
          COPPER
        </div>
          <div className="down">
            <div className="first" style={{ color: "green" }}>+2.67%</div>
            <div className="second">-46.40</div>
            <div className="third">31,338.15</div>
          </div></div>
        <div className="one" data-aos="fade-right"><div className="top">
          <ArrowDropDownIcon className='arrayDown' />
          COTTON
        </div>
          <div className="down">
            <div className="first">-1.58%</div>
            <div className="second">-46.40</div>
            <div className="third">31,338.15</div>
          </div></div>
      </div>
    </div>
  )
}

export default Price