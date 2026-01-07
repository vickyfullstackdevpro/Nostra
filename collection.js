var container = document.getElementById("products")
var search = document.getElementById("search")
var product_list = container.querySelectorAll("div")
var search_input = ""

search.addEventListener("keyup", function (event) {
    var entered_text = event.target.value.toLowerCase()
    
    for (i = 0; i < product_list.length; i++) {
        
        var product_name = product_list[i].querySelector("p").textContent.toLowerCase()

        if (product_name.indexOf(entered_text) < 0) {
            product_list[i].style.display = "none"
        }
        else {
            product_list[i].style.display = "block"
        }

    }

})

var sidebar=document.querySelector(".side-navbar")

function shownavbar(){
    sidebar.style.left="0"
}

function closenavbar(){
    sidebar.style.left="-60%"
}

