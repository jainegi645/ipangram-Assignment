import React, { useEffect, useState } from 'react'
import DaysAndTime from './DaysAndTime'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'


const WeeklyCalender = () => {
    // const currentDate = moment().format();
    const currentDate = useSelector((state) => state.dateSelected.selectedDate)
    const [DateAndDay, setDateAndDay] = useState([]);
    useEffect(() => {
        // console.log('weeklyCalender', currentDate);
        const updatedDates = [];
        const monday = moment(currentDate).startOf('isoWeek')
        // console.log('monday', monday);
        for (let i = 0; i <= 4; i++) {
            const futureDate = moment(monday).add(i, 'day');
            const dayName = moment(futureDate).format('ddd');
            updatedDates.push({ day: dayName, date: moment(futureDate).format('M/DD') });

        }
        setDateAndDay(updatedDates);
    }, [currentDate])


    return (
        <div className='border border-slate-700 mx-4 rounded my-6'>
            {DateAndDay.map((item) => <DaysAndTime date={item.date} day={item.day} />)}

        </div>
    )
}

export default WeeklyCalender