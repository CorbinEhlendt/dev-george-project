$(document).ready(function(){
 
    $("#saveInput").on("click", function(){
      
         let statusText = underConstruction("Not Ready");    
         $("#saveInput").text(statusText).prop("disabled",true);     
});
          
    function underConstruction(status){    
      return "Not yet ready"};  
  }
);
