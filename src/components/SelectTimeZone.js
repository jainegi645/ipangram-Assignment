import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import moment from 'moment';
import {updateTimeZone} from '../redux/dateSelectedSlice'

const SelectTimeZone = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.dateSelected.selectedDate)

  return (
    <div className='grid px-4 pt-6'>
          <span className='font-medium'> Timezone:</span>  
        <select className='border rounded border-slate-800 p-1.5'> 
            <option selected onClick={()=> dispatch(updateTimeZone(moment(selectedDate).format()))}> Indian Standard Time UTC+5:30</option>
            <option onClick={()=> dispatch(updateTimeZone(moment(selectedDate).utcOffset(-660)))}>Samoa Standard Time UTC-11:00</option>
        </select>
    </div>
  )
}

export default SelectTimeZone