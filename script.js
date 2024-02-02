const item = document.querySelector("#item")
const toDo = document.querySelector("#toDo");

item.addEventListener(
    "keyup",
    function(event){
        if(event.key == "Enter"){

            addtoDO(this.value)
            this.value = ""
        }
    }
)
const addtoDO = (item)=>{
     const listItem =  document.createElement("li") 
     listItem.innerHTML= `
     ${item}
     <img class="img" src="cross.svg" alt="">
     `;
     listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done")
        }
     )
     listItem.querySelector("img").addEventListener(
        "click",
        function(){
            listItem.remove()
        }
     )
toDo.appendChild(listItem)

}