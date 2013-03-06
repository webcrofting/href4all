function follow_link(elem) {
    var target_url = elem.getAttribute("href");
    if(target_url)
    {
      window.location = target_url;
    }
}
document.addEventListener("click",function(e) {
  if(e.target) {
      follow_link(e.target);
  }
});
document.addEventListener("keydown",function(e) {
  if(e.target && e.keyCode == 13) {
      follow_link(e.target);
  }
});
