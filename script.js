let String = "";
let buttons =document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML =='='){
          String = eval(String);
         document.getElementById('screen').innerHTML = String;
          // document.getElementsByClassName('screen').innerHTML = String;
        }
        else if(e.target.innerHTML =="esc"){
            String = "";
           document.getElementById('screen').innerHTML = String;
          }
          else if(e.target.innerHTML =="del"){
          if(String.length !=0){
           String = String.substring(0,String.length-1);
           document.getElementById('screen').innerHTML = String;}
          }
        else{
        console.log(e.target)
        String = String + e.target.innerHTML;
       document.getElementById('screen').innerHTML = String;}
    })
})