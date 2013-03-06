document.addEventListener("click",function(e) {
  if(e.target) {
    var target_url = e.target.getAttribute("href");
    if(target_url)
    {
      window.location = target_url;
    }
  }
});
