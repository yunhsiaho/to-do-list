console.log('start');

// click button to get input value
document.querySelector('button.add-task').addEventListener("click",()=>{
    let input =  document.querySelector('.searchbar');
    console.log(input.value);

    //ADDING TASK
    if(input.value != ""){
        // if searchbar is not empty, create a new task line in task container
        //create task content
        let taskContainer = document.querySelector('.task-container');
        let task = document.createElement('div');//one task unit
        task.className = 'task-line';

        //create checkbox
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'task-checkbox';
        checkbox.className = 'task-checkbox';

        //create input value as p text
        let taskLabel = document.createElement('label');
        taskLabel.innerHTML = input.value;

        //create delete button
        let deleteButton = document.createElement('p');
        deleteButton.innerHTML = 'delete';
        deleteButton.className = 'delete-btn btn';
        deleteButton.addEventListener("click", ()=>{
            if(confirm("Do you really want to delete this task?")){
                deleteButton.parentNode.remove();
            }            
        })

        //modify
        let modBtn = document.createElement('p');
        modBtn.innerHTML = 'modify';
        modBtn.className = 'modify-btn btn';
        modBtn.addEventListener("click", ()=>{
            let modVal = prompt("Modify the task : ", input.value);
            taskLabel.innerHTML = modVal; 
        })


        //create hr line
        let hr = document.createElement('hr');

        //APPEND all the element to task
        task.append(checkbox,taskLabel,modBtn,deleteButton, hr);
        //APPEND to task container
        taskContainer.append(task);
    }

    // clear the searchbar after adding task
    input.value = "";
    console.log(input.value);

})

//clear all
document.querySelector('button.clear-all').addEventListener("click", ()=>{
    console.log('remove all!');
    
    let taskContainer = document.querySelector('.task-container');
    while (taskContainer.firstChild) {
        taskContainer.removeChild(taskContainer.firstChild);
    }
})


// modify the task
let darkMode = document.querySelector(".dark-mode input");

darkMode.addEventListener("change",()=>{
    if(darkMode.checked){
        console.log('dark');
        document.querySelector('body').className = "dark";
        document.querySelector('form').className = "darkArea";
        document.querySelector('.task-container').style.background = "#000";
        document.querySelector('.task-container').style.boxShadow = "-4px 6px 7px 0px rgb(30 14 78) inset";

    }else{
        console.log('light');
        document.querySelector('body').removeAttribute("class");
        document.querySelector('form').removeAttribute("class");
        document.querySelector('.task-container').style.background = "#D9D9D980";
        document.querySelector('.task-container').style.boxShadow = "0px 6px 7px 0px rgba(0,0,0,0.25) inset";
    }
}
)
