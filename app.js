        const toDoInputEl= document.querySelector(".todo__input");
        const toDoListEl = document.querySelector(".todo__list");
        const toDoItemEls = document.querySelectorAll(".todo__item");
        


        function addlistitem(){
            toDoInputEl .addEventListener("keypress", function(event){
                if(event.keyCode === 13){
                    let newListitem = createNewList(toDoInputEl.value)
                    toDoListEl.appendChild(newListitem);
                    toDoInputEl.value= "";

                    
                    
                }

            

            })


        }

        function createNewList(text){
            const newListitem = document.createElement("li");
            newListitem.textContent = text;
            newListitem.setAttribute("class" , "todo__item")

            return newListitem;
            


        }
        
        // this is the static code static 

        /*
        function toggledone(){
            for(let elms of toDoItemEls ){
                elms.addEventListener("click", function(){
                    elms.classList.toggle("done")
                })
            }


        }
        */
        
        // make it dynamic code

        function toggledone(){
            toDoListEl.addEventListener("click", function(event){
               // console.log(event.target.parentNode.children.classList)
              //  console.log(event.target.parentNode.classList)
                if(event.target.classList.contains("todo__item")) {
                 event.target.classList.toggle("done")
               }
            })
       }

        
        addlistitem();

        createNewList();
        toggledone();




