window.addEventListener("load", (event) => {
    const openClass = "open";
    const searchIconElm = document.getElementById("search-icon");
    const searchContainer = document.getElementsByClassName("search-container")[0];
    searchIconElm.addEventListener("click",(event)=>{
        if(searchContainer.classList.contains(openClass)){
            searchContainer.classList.remove(openClass);
        }else{
            searchContainer.classList.add(openClass);
        }
    });
});