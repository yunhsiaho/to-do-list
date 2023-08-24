console.log('start');

// click button to get input value
document.querySelector('button.add-task').addEventListener("click",()=>{
    let input =  document.querySelector('.searchbar');
    console.log(input.value);

    if(input.value != ""){
            // if searchbar is not empty, create a new task line in task container
        let taskContainer = document.querySelector('.task-container');
        let task = document.createElement('div');
        let hr = document.createElement('hr');
        task.className = 'task-line';

        task.innerHTML = input.value;
        task.append(hr);
        taskContainer.append(task);
    }

    // clear the searchbar after adding task
    input.value = "";
    console.log(input.value);
})

//clear all
document.querySelector('button.clear-all').addEventListener("click", ()=>{
    console.log('remove!');
    
    let taskContainer = document.querySelector('.task-container');
    while (taskContainer.firstChild) {
        taskContainer.removeChild(taskContainer.firstChild);
    }
})
