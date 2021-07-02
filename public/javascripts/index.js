window.addEventListener("load", (event)=>{
    console.log("hello from javascript!")

    const deleteBtn = document.querySelector('.delete-btn');
    if (deleteBtn) {
        document.querySelector('.review-container').style.visibility = "hidden";
        document.querySelector('.review-container').style.padding = "0px";
        deleteBtn.addEventListener('click', (event) => {
            document.querySelector('.review-container').style.visibility = "visible";

        });
    }

    const editBtn = document.querySelector('.edit-btn');
    if (editBtn) {
        editBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const id = event.target.id
            let area = document.querySelector(`#text-${id}`);
            area.parentElement.innerHTML = `<textarea id="review-text">${area.innerText}</textarea> <button id="save-btn">Save</button>`;
            let body;
            const saveBtn = document.querySelector('#save-btn');
            console.log(saveBtn);
            if (saveBtn) {
                saveBtn.addEventListener('click', async (event) => {
                    const review = await fetch(`http://localhost:8080/review/${id}`, {
                        method: "PUT",
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({body}),
                    });
                    const update = await review.json();
                    window.location.href = `/trail/${update.trailId}`
                });
            }
            const updateValue = async (event) => {
                body = event.target.value;
                console.log(body);
            }
            let areaThing = document.querySelector(`#review-text`);
            areaThing.addEventListener('change', updateValue)
            console.log(areaThing);
        })
    }
});
