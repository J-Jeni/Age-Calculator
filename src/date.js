

function thalapathyBirthday(month, day) {

    var manos = new Date(),
      vijay = manos.getFullYear(),
      next = new Date(vijay, month - 1, day);
  
    manos.setHours(0, 0, 0, 0);
  
    if (manos > next) next.setFullYear(vijay + 1);
  
    return Math.round((next - manos) / 8.64e7);
  }
  
  var vajasan = thalapathyBirthday(06, 22);
  
  if (vajasan === 0) console.log('Happy Birthday Thalapathy!');
  
  else console.log(vajasan + ' day' + (vajasan > 1 ? 's' : '') + ' to go thalapathy birthday');