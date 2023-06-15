import moment from 'moment';
import './App.css';
import PrevNextButtons from './components/PrevNextButtons';
import SelectTimeZone from './components/SelectTimeZone';
// import DaysAndTime from './components/calender/DaysAndTime';
import WeeklyCalender from './components/calender/WeeklyCalender';

function App() {
  // const currentDate = moment().format();
  // const gwt = currentDate.utcOffset(0)
  // console.log('green withc time:', moment().zone(660));
  // console.log('all timezoned:', moment.tz.setDe fault("America/New_york"));
  console.log()
  return (
   <div className='border border-slate-400 rounded  mx-2 my-2'>
   <PrevNextButtons/>
   <SelectTimeZone/>
   <WeeklyCalender/>
   </div>
  );
}

export default App;


//render DateAndDay from current date in sidebar
//change DateAndDay according to the current date- set up redux or context 
//Switching between timezone, setup redux for global timezone