function myFunction() {
  
    document.getElementById("search_bar").style.display='block';
   

    
  }
  function go()
  {
    var name=document.getElementById("search_input").value;
    window.location.href=`${name}.html`
  }
  function search2(e){
   
    if(e.key=="Enter")
    {
        go();
    }
}
document.querySelector("#search_input").addEventListener("keydown",search2)

