$(document).ready(function() {
    //active first child
    $(".slider li:first").addClass("active");

    var change = function() {
      //change class active
      //console.log("hi");
      var currentElement = $(".slider li.active");
      var nextElement = currentElement.next();

      //   nextElement.addClass("active");
      //   currentElement.removeClass("active");
      if (!nextElement.length) {
        nextElement = $(".slider li:first");
        nextElement.addClass("active");
        currentElement.removeClass("active");
      } else {
        nextElement.addClass("active");
        currentElement.removeClass("active");
      }
    };
    setInterval(change, 3000);
       //var i=1;
       //var j=parseInt(prompt("enter number"));
      // var userval=parseInt(prompt("enter number"));
       //function sum(a){
        //   total=a+7+4;
          // console.log(total);

        //}
        //sum(userval);
   // while(i<=10){
     //   sum=j*i;
       // console.log(sum);
        //i++;
    var un ="bince";
    var pswd="biince";
    var inputuser =prompt("entr un");
    var inputpswd =prompt("")
    if(un===inputuser && pswd===inputpswd){
        console.log("you have logeed in");
    }else{
        console.log("u have no pass");
    }
  });