var icon = document.getElementById('d');
var list = document.getElementById('list');
var ms;
ms = 'c';
icon.onclick =function(){
if(ms=='c'){
    icon.src = 'close.png';
    list.style.display = 'block';
    ms='o';}
   else{
    icon.src = 'list%20(1).png';
    list.style.display = 'none';
    ms='c';}
}    
    
    
    
    
    
