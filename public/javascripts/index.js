window.addEventListener("load", (event)=>{
    console.log("hello from javascript!")

    const editBtn = document.querySelector('.edit-btn');

    editBtn.addEventListener('click', (event) => {
        // event.preventDefault();
        const area = document.querySelector('.review-text');
        area.innerHTML = `<textarea>${review.text}</textarea>`;
        editBtn.appendChild(area)
    })
})
