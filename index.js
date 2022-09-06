function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                name: userName,
                email: userEmail,
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            const newId = document.createElement("p");
            newId.innerHTML = `New ID: ${data.id}`;
            document
                .querySelector("script")
                .insertBefore(newId, document.querySelector("script").childNodes[0]);
        })
        .catch(function(error) {
            document.querySelector(
                "body"
            ).innerHTML = `<p> error: ${error.message} </p>`;
        });
}