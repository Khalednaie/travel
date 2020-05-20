
 // ul.onclick=function(event){
 //   event.target.classList.toggle("completed");
 //   }
 // $('ul').click(function(event){
 //   $(event.target).toggleClass("completed");
 // })

 var btn2 = document.createElement("a");
  document.getElementById("a").appendChild(btn2);
   btn2.innerHTML="flight";
   btn2.setAttribute("id","fligth");
   btn2.setAttribute("href" , "pro2-2.html")


  var btn3 = document.createElement("a");
  document.getElementById("a").appendChild(btn3);
   btn3.innerHTML="hotel";
   btn3.setAttribute("id","hotel");  
   btn3.setAttribute("href" , "pro2-3.html");

var btn4 = document.createElement("a");
  document.getElementById("a").appendChild(btn4);
   btn4.innerHTML="Tourism trips";
   btn4.setAttribute("id","Tourism-trips");
   btn4.setAttribute("href" , "pro2-4.html");


    var btn1 = document.createElement("BUTTON");

  document.getElementById("diva").appendChild(btn1);
   btn1.innerHTML="remove";
   btn1.setAttribute("id","Tourism-trips");





// Flight A
function flightA() {
  alert('You are registerd in Flight A');

  var li = document.createElement("li");
    li.innerHTML= "Flight A";
    var ul =document.getElementById("Flight")
    ul.appendChild(li);

}

function flightB() {
  alert('You are registerd in Flight B');

  var li = document.createElement("li");
    li.innerHTML= "Flight B";
    var ul =document.getElementById("Flight")
    ul.appendChild(li);
}

/////pg3
function hotelA() {
  alert('You are registerd in hotelA');

  var li = document.createElement("li");
    li.innerHTML= "hotelA ";
    var ul =document.getElementById("myhotel")
    ul.appendChild(li);

}

function hotelB() {
  alert('You are registerd in hotelB');

  var li = document.createElement("li");
    li.innerHTML= "hotelB";
    var ul =document.getElementById("myhotel")
    ul.appendChild(li);
}

///bg4

function tourismA() {
  alert('You are registerd in tourismA');

  var li = document.createElement("li");
    li.innerHTML= "tourismA ";
    var ul =document.getElementById("mytourism")
    ul.appendChild(li);

}

function tourismB() {
  alert('You are registerd in hotelB');

  var li = document.createElement("li");
    li.innerHTML= "tourismB";
    var ul =document.getElementById("mytourism")
    ul.appendChild(li);
}
// ////

// var ul=document.getElementById("Flight")
// function kh() {
//   if (li.length===0){
//    alert('You are registerd in hotelB');
//  }else{
//           var tasks=ul.getElementsByTagName("li");
//     var last=tasks[tasks.length-1];
//     ul.removeChild(last);
//   }
 

//   var li = document.createElement("li");
//     li.innerHTML= "tourismB";
//     var ul =document.getElementById("mytourism")
//     ul.appendChild(li);
// }

//  
   
   // var btn=document.createElement("BUTTON");
   // btn.innerHTML="remove completed"
   // document.getElementById("remov").appendChild(btn);
   
   // var lis=document.getElementsByTagName("li");
   // btn.onclick=function(){
   //  for (var i = 0; i< lis.length; i++) {
   //    if(lis[i].classList.contains("completed")){
   //      li.removeChild(lis[i]);
   //    }
   //  }
   // }


   // var remove = document.createElement("BUTTON");
   //  document.getElementById("diva").appendChild(remove);
   //  remove.innerHTML="remove";
   //  remove.setAttribute("id","remove-task");
 //   var remove=$('<button>remove</button>'); //creation for an element
 // $('.diva').append(remove);
 // remove.attr('id','remove-task');