window.addEventListener("load", (event)=>{
    console.log("hello from javascript!")

    const editBtn = document.querySelector('.edit-btn');
    if (editBtn) {
        editBtn.addEventListener('click', (event) => {
        // event.preventDefault();
            console.log("asjkbvkaj");
            const id = event.target.id
            let area = document.querySelector(`#text-${id}`);
            area.parentElement.innerHTML = `<textarea>${area.innerText}</textarea> <button>Save</button>`;
            // editBtn.appendChild(area);
        })
    } 



})
