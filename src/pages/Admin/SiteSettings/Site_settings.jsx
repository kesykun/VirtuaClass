import React from 'react'
import Site from './Site'
import Calendar from 'react-calendar'

const Site_settings = () => {
  return (
    <div className='dashboard'>
        <div>
            <Site/>
        </div>
        <div>
            <Calendar />
        </div>

    </div>
  )
}

export default Site_settings