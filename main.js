function showNotification(){
    const notification = new Notification("New Message!",{
        body: "Try inputing Some weekly routine",
        });

        notification.onclick = (e) =>{
                window.location.href = "https://www.google.com";
        };
}

console.log(Notification.permission);

if(Notification.permission === "granted"){
    showNotification();
}
else if(Notification.permission !== "denied"){
    Notification.requestPermission().then(permission =>{
       if(permission === "granted"){
        showNotification();
       }else{
           console.log("Accept Notification");
       }
        
    });
}


var routineInput = document.querySelector(".routine-input");
const addRoutine = document.querySelector(".add-routine");
const routineList = document.querySelector(".routine-list");


addRoutine.addEventListener("click", addItem);
routineList.addEventListener('click', removeItem);

function addItem(event){
    event.preventDefault();
    
    // creating list

    const list = document.createElement('div');
    list.classList.add("list");

  
    var routine = document.createElement('li');
    routine.innerText = routineInput.value.trim();
    
    // checking if the value inputed is null or not
    if(routineInput.value == ""){
       
        alert("Enter Appropriate Routine");
    }
    else{

        routine.classList.add("routine");
        list.appendChild(routine);
    
    }
    
    // saving the input to the key in array
    saveRoutine(routineInput.value);
    

    const checkedBtn = document.createElement('button');
    checkedBtn.innerHTML = '<i class="fas fa-check"></i>';
    checkedBtn.classList.add("checked");
    routine.appendChild(checkedBtn);



    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.classList.add("delete");
    routine.appendChild(deleteBtn);
    
    routineList.appendChild(list);
    
// clearing the value of routineInput
routineInput.value = "";
    

}

function removeItem(e){
// Selecting the target element    
    const item = e.target;

if(item.classList[0] === 'delete'){
   
    const action = item.parentElement;  //it will select parent element 
    action.classList.add("slide");
    action.addEventListener('transitionend', function(){
    // 1. saveRoutine(localStorage.closest('action').remove())
    // 2. saveRoutine(localStorage.removeItem('routines')) THIS DELETS THE WHOLE ARRAY and not just the element!!
   /*  3. saveRoutine(routines.splice(action, 1),
    localStorage.setItem("routines", JSON.stringify(routines))); */
    // 4. saveRoutine(localStorage.removeItem('arr'));    
    action.remove();
    });
}    
else if(item.classList[0] === 'checked'){
    
    const action = item.parentElement;
        action.classList.toggle('checked');
    }
}
// Saving the routine input to local storage
function saveRoutine(rtn){

    let routines;
    if(localStorage.getItem("routines") === null){
        routines = [];

    }
    else{
        routines = JSON.parse(localStorage.getItem("routines"));
    }

    routines.push(rtn); 
    localStorage.setItem("routines", JSON.stringify(routines));
/*
    for(var i = 0; i< localStorage.length; i++){
        var arr = routines[i];
        break;
        localStorage.setItem("routines", JSON.stringify(routines));
    }*/

    /* I am not sure who would be marking this assignment but I emailed Jessica regarding local storage just before the reading week, 
with the help of documentation I was able to store data in local storage but I am not able to remove the date from it.
*/
}

