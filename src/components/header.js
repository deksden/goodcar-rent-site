import PropTypes from 'prop-types'
import React from 'react'
import './header.css'
import logo from '../images/logo.svg'

export function Header (props) {
  function handleclick(e) {
    e.preventDefault()
    const shortTel = document.getElementById('shortTel')
    const fullTel = document.getElementById('fullTel')

    if(fullTel.style.display === 'none') {
      fullTel.style.display = 'block'
      shortTel.style.display = 'none'
    } else {
      fullTel.style.display = 'none'
      shortTel.style.display = 'block'
    }

  }
  return (
    <div className="block100 black_block_000000 black_shadow_block">
      <div className="wrapper">
        <div id="top_line">
          <div className="top_line_left">
            <a href="./" target="_self" title="#">
              <img src={logo} style={{ width: '400px'}} alt="ГудКар - прокат автомобилей в Новосибирске"/>
            </a>
          </div>
          <div className="top_line_right">
            <div className="description">Аренда машины в Новосибирске:</div>
            <div className="phone">
              <a
                id="shortTel"
                href="./"
                target="_self"
                onClick={handleclick}
                title="Позвонить">
                +7 (951) 388-... (показать)
              </a>
              <a
                id="fullTel"
                style={{ display:'none' }}
                href={`tel:${props.siteMeta.tel}`}
                target="_self"
                title="Позвонить">
                {props.siteMeta.tel_formatted ? props.siteMeta.tel_formatted : props.tel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteMeta: PropTypes.shape({
    tel: PropTypes.string,
    tel_formatted: PropTypes.string,
  })
}
