


export function isWeekend(dayJS) {
  if (dayJS === 'Saturday' || dayJS === 'Sunday') {
    return 'Its Weekend';
  }
  else {return dayJS};
  }

  export function skipWeekend(dayJS) {
    const deliveryDateCheck = dayJS.format('dddd');

    if (deliveryDateCheck === 'Saturday'){
      
      return dayJS.add(2,'days').format('dddd, MMMM D');
      
    }
    else if (deliveryDateCheck === 'Sunday') {
      return dayJS.add(1,'days').format('dddd, MMMM D');
    }
    else {
      return dayJS.format('dddd, MMMM D');
    }
     
  }

 