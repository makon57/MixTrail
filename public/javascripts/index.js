window.addEventListener("load", (event)=>{
    console.log("hello from javascript!")

    const editBtn = document.querySelector('.edit-btn');
    if (editBtn) {
        editBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const id = event.target.id
            let area = document.querySelector(`#text-${id}`);
            area.parentElement.innerHTML = `<textarea>${area.innerText}</textarea> <button id="save-btn">Save</button>`;

            const saveBtn = document.querySelector('#save-btn');
            console.log(saveBtn);
            if (saveBtn) {
                saveBtn.addEventListener('click', async (event) => {
                    // event.preventDefault();
                    // const id = event.target.id
                    // console.log(id);

                });
            }

            const updateValue = async (event) => {
                const body = event.target.value;
                console.log(body);
                // area.parentElement.innerHTML = `<textarea>${area.innerText}</textarea>`;

                // const review = await fetch(`http://localhost:8080/review/${id}`, {
                //     method: "PUT",
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify({body}),
                // });
                // const update = await review.json();

            }

            area.addEventListener('change', updateValue)


        })
    }


});
