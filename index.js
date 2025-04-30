function addtask(){
    let newtask=document.createElement('li');
    let tasklist=document.getElementById("tasklist");
    tasklist.appendChild(newtask);
    newtask.textContent=document.getElementById("inputask").value
    document.getElementById("inputask").value=""
    deletetask(newtask);


}
function  deletetask(newtask){
    const deletebtn=document.createElement('button');
    deletebtn.textContent="delete"
    newtask.appendChild(deletebtn);
deletebtn.onclick=function(){
    newtask.remove();
}
}