document.getElementById('page-heading').innerHTML= "SimpleStat"
document.getElementById('page-overview').innerHTML= "A tool for statistical calculations and visiulization"

var navigation = '<div id="sidebar-wrapper"><ul class="sidebar-nav"><li class="sidebar-brand"><a href="#">Start Bootstrap</a></li><li><a href="#">Dashboard</a></li><li><a href="#">Shortcuts</a></li><li><a href="#">Overview</a></li><li><a href="#">Events</a></li><li><a href="#">About</a></li><li><a href="#">Services</a></li><li><a href="#">Contact</a></li></ul></div>'

$(document).ready(function () {
  $('#open-navbar').click(function(){
    $('#open-navbar').is(":visible") ? "Collapse" : "Expand"
    $('#navbar-main').html(navigation)
  })
})
