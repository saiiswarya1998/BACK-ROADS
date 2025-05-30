import React from 'react'
import { pageLinks, socialLinks } from '../data'

const Footer = () => {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {pageLinks.map((page) => {
          return (
            <li key={page.id}>
              <a href={page.href} className='footer-link'>
                {page.text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className='footer-icons'>
        {socialLinks.map((soc) => {
          return (
            <li key={soc.id}>
              <a href={soc.href} target='_blank' className='footer-icon'>
                <i className={soc.icon} />
              </a>
            </li>
          )
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer
