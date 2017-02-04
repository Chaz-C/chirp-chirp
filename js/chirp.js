// jshint esversion: 6
function chirp(n){
  let text = '';
  if ( n === 0 ) {
    return  text;
  }
  text += 'chirp ';
  return text += chirp(--n);
}

$(document).ready(function(){
  $("#result").html(chirp(3));
});