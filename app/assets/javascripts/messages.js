Pusher.logToConsole = true;

var pusher = new Pusher('3bd6868fd1034baf277c', {
  cluster: 'us2',
  encrypted: true
});

var channel = pusher.subscribe('my-channel');
channel.bind('my-event', function(data) {
  // $( "#the-message" ).append( document.createTextNode( data.text ) ); 
  // $( "#the-user" ).append( document.createTextNode( data.user_name ) ); 
  // $("#the-message").append("<div id='object1'> + data.text +</div>");   
  $("#the-user").append('<p>' + data.user_name + '</p>' + '<p>' + data.text + '</p>');  
  // $("#the-message").append('<p>' + data.text + '</p>'); 
  $('#message_text').val(''); 
});