const dayjs = require('dayjs');
const weekOfYear = require('dayjs/plugin/weekOfYear')
require('dayjs/locale/th');
const { bookings } = require('./data/booking-js');

dayjs.extend(weekOfYear)



const getBookingForWeek = (roomId, weekNo) => {
   const targetRoom = bookings.filter(room => room.roomId === roomId);
   const allDay = targetRoom
      .filter(day => dayjs(day.startTime).format("YYYY-MM-DD") === dayjs(weekNo).format("YYYY-MM-DD"));
   const thisWeek = targetRoom
      .filter(day => dayjs(day.startTime).week() === dayjs(weekNo).week());
   const nextWeek = targetRoom
      .filter(day => dayjs(day.startTime).week() === dayjs(weekNo).week() + 1);
   const wholeMonth = targetRoom
      .filter(day => dayjs(day.startTime).month() === dayjs(weekNo).month());



   return { allDay, thisWeek, nextWeek, wholeMonth }
}

const {wholeMonth } =  getBookingForWeek("A101", "2019-09-28")
// console.log(wholeMonth); 

const result = {};
for (let i=0;i<wholeMonth.length;i++) {
   const start =dayjs(wholeMonth[i].startTime).format('YYYY-MM-DD');
   if (result[start]) {
      result[start].push(wholeMonth[i])
   } else {
      result[start] = [wholeMonth[i]]
   }
}
console.log(result);
// console.log(result);
 
// console.log(groupByDate)
 


// const today = "2019-09-28";

// const todayData = bookings.map(booking => {
//    if (dayjs(booking.startTime).format('DD-MM-YY') === dayjs(today).format('DD-MM-YY'))
//       return { start: booking.startTime, end: booking.endTime }
// })
// const todayResult = todayData.filter(today => today !== undefined)

// const { wholeMonth } = getBookings("A101", today);

// for (let i = 0; i < wholeMonth; i++) {
//    console.log([]);

//}
// console.log(todayData);
// console.log(todayResult);

//  const {thisWeek} = getBookings("A101","2019-09-29 13:00:00")

// const today = dayjs("2021-01-25");
// console.log(today.add(1,'week').startOf('week').format('DD-MM-YYYY'));

// console.log(dayjs("2021-01-12").add(1,'week').endOf('week').locale('th').format('dddd-MMMM-YYYY'));

