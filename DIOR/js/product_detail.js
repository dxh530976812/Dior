$("ul.tabs").click(function(e){
    if(e.target.nodeName=="A"){
      $(e.target).parent().addClass("active")
      .siblings().removeClass("active")
    }
  })