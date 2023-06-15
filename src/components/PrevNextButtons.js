import React, { useState } from 'react'
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux'
import {updateSelectedDate} from '../redux/dateSelectedSlice'
const PrevNextButtons = () => {
    const dispatch = useDispatch()
    const currentDate = useSelector((state) => state.dateSelected.selectedDate)
    const [date, setDate] = useState(currentDate);

    const handlePrevBtn = () => {
        const prevWeek = moment(date).subtract(1, 'week');
        setDate(prevWeek);
        dispatch(updateSelectedDate(prevWeek))

    }
    const handleNextvBtn = () => {
        const nextWeek = moment(date).add(1, 'week');
        setDate(nextWeek);
        dispatch(updateSelectedDate(nextWeek))

    }
    return (
        <div className="px-4 mt-4  flex justify-between mx-auto ">
            <button type="button"
             className="bg-gray-800 text-white rounded-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3"
             onClick={()=>handlePrevBtn()}>
                <div className="flex flex-row align-middle">
                    <svg className="w-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                    </svg>
                    <p className="ml-2">Prev Week</p>
                </div>
            </button>
            <span className='border border-slate-600 rounded-md px-2 py-2 font-medium'>{moment(date).format('MMMM, DD YYYY')} </span>
            <button type="button"
                className="bg-gray-800 text-white rounded-md py-2 border-l border-gray-200 hover:bg-red-700 hover:text-white px-3"
                onClick={() => handleNextvBtn()}
            >
                <div className="flex flex-row align-middle">
                    <span className="">Next Week</span>
                    <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </div>
            </button>
        </div>
    )
}

export default PrevNextButtons