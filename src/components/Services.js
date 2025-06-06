import React from 'react'
import { services } from '../data'
import Title from './Title'

const Services = () => {
  return (
    <section className='section services' id='services'>
      <div className='section-title'>
        <Title title='Our' subTitle='Services' />
      </div>
      <div className='section-center services-center'>
        {services.map((srv) => {
          const { id, icon, title, text } = srv
          return (
            <article className='service' key={id}>
              <span className='service-icon'>
                <i className={icon}></i>
              </span>
              <div className='service-info'>
                <h4 className='service-title'>{title}</h4>
                <p className='service-text'>{text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
