// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
function show(el)
{
el.getElementsByTagName("span")[0].style.display="block"
}
function hide(el)
{
el.getElementsByTagName("span")[0].style.display="none"
}
function showform(el)
{
  el.style.display="none";
  inp=el.parentNode.getElementsByTagName("form")[0].getElementsByTagName("input")[3];
  inp.style.display="inline";
  inp.focus();
  inp.value=inp.value;
}
function hideform(el)
{
el.style.display="none";
el.parentNode.parentNode.getElementsByTagName("div")[0].style.display="inline";
el.parentNode.parentNode.getElementsByTagName("div")[0].innerText=el.value;
$(".subm").click();
}