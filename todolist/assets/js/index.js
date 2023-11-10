document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
            <input type="checkbox"  class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <span>
                <button class="delete">X</button>  
                </span>  
            </div> 
        `};

        const current_tasks = document.querySelectorAll(".delete");
        for(let i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.parentNode.remove();
            }
        }

        const tasks = document.querySelectorAll(".task");
        for(let i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#newtask input").value = "";
    }
