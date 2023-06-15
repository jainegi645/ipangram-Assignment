import moment from 'moment'
import React from 'react'

const DaysAndTime = ({ day, date }) => {
    const time = [
        8.00,
        8.30,
        9.00,
        9.30,
        10.00,
        10.30,
        11.00,
        11.30,
        12.00,
        1.00,
        1.30,
        2.00,
        2.30,
        3.00,
        3.30,
        4.00,
        4.30,
        5.00,
        5.30,
        6.00,
        6.30,
        7.00,
        7.30,
        8.00,
        8.30,
        9.00,
        9.30,
        10.00,
        10.30,
        11.00,
        11.30

    ]
    return (
        <div className='wrapper  '>
            <div className='border-r border-b border-slate-800'> <div className='grid px-2 py-4'>{day} <span> {date}</span></div> </div>
            <div className='border-b border-slate-800 px-2 py-4'>
                <div>
                    {moment(date).isSameOrAfter(moment().format('M/D')) ? time.map((elem) =>
                        <span className='px-1 space-y-9'>
                            <input type='checkbox' />  {elem}AM
                        </span>

                    ) : 'Past'}

                </div>
            </div>
        </div>
    )
}

export default DaysAndTime