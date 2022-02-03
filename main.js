const veri = document.querySelector("#add");
const btn = document.querySelector("#todo-btn");
const list = document.querySelector("#list");

btn.addEventListener("click",onClick);
list.addEventListener("click",onClickRemove);

function onClick() {
    var entry = veri.value;
    if (entry == "") {
        alert("Lütfen Boş Bırakmayınız!");
    }
    else {
        var li = document.createElement("li");
        li.innerHTML = entry;
        li.classList.add("todo-list-group","px-5","mb-3");
        list.insertBefore(li, list.childNodes[0]);

        veri.value = "";
    }
}

list.appendChild(li);

function onClickRemove(){
    list.removeChild(li);
}