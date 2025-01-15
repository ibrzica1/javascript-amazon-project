


export function isWeekend(dayJS) {
  if (dayJS === 'Saturday' || dayJS === 'Sunday') {
    return 'Its Weekend';
  }
  else {return dayJS};
  }

  export function skipWeekend(dayJS) {
    
    if (dayJS === 'Saturday'){
      return dayJS.add(2,'days');
    }
    else if (dayJS === 'Sunday') {
      return dayJS.add(1,'days');
    }
    else {
      return dayJS;
    }
  }

 