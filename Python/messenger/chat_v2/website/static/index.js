  
$(function() {
  $('#btnSend').bind('click', function() {
    var value = document.getElementById("msg")
    var value = msg.value
    msg.value = ""

    $.getJSON('/run', 
      {value:value},
      function(data) {
      
      });
    return false;
  })
})

window.onload = function() {
  var update_loop = setInterval(update, 100);
  update();
};

function update() {
  fetch('/get_messages')
    .then(function(response) {
      return response.json();
    }).then(function(text) {
      var messages = "";
      for (value of text["messages"]) {
        messages = messages + "<br>" + value
      }
      console.log(text)
      document.getElementById("msgs").innerHTML = messages;
    });
}