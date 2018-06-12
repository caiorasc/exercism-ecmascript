/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Bob {
  hey(message) {
    var a = message.toUpperCase();
    let value = message.replace(/ /g, '');
    // console.log(a);
    // console.log(message);
    value = value.replace(/,/g,'');
    value = value.replace(/\?/g,'');
    if(a == message && !Number(value) && message.trim()){
      console.log(value);
      return ('Whoa, chill out!');
    }else if(message.slice(-1) === '?'){
      return ('Sure.');
    }else if(message.trim() === ''){
      return ('Fine. Be that way!');
    }
      return ('Whatever.');
  }
}
export default Bob;