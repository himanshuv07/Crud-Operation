let displayUpdateForm = document.querySelector(".display-form-update"); // Select the Add+++ button
let containerPopUp = document.querySelector(".popup-form-container"); // Select the popup form container
let cancelBtn = document.querySelector(".fa-x"); // Select the cancel button (if any)
let addForm = document.querySelector(".form-add-control"); // Select the form

// Function to fetch data and populate the table
async function fetchData() {
    try {
        let data = await fetch("./db.json");
        let finalData = await data.json();
        console.log(finalData);

        if (finalData.users && Array.isArray(finalData.users)) {
            let tbody = document.querySelector("tbody");
            tbody.innerHTML = ""; // Clear table before inserting new data

            finalData.users.forEach((v) => {
                let { id, name, phone, email } = v; // Destructure relevant data
                tbody.innerHTML += `
                <tr>
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${phone}</td>
                    <td>${email}</td>
                    <td>
                        <button>Read</button>
                        <button>Update</button>
                        <button>Delete</button>
                    </td>
                </tr>
                `;
            });
        } else {
            console.error("The data does not contain the expected 'users' array.");
        }

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Call fetchData to load the table initially
fetchData();

// Show the form when Add+++ is clicked
displayUpdateForm.addEventListener("click", () => {
    containerPopUp.style.display = "block"; // Show the popup form
});

// Optional: Close the form when the cancel button is clicked
if (cancelBtn) {
    cancelBtn.onclick = () => {
        containerPopUp.style.display = "none"; // Hide the popup form
    };
}

// Handle form submission to add data
addForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Get values from the form inputs
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    // Append new row to the table
    let tbody = document.querySelector("tbody");
    tbody.innerHTML += `
    <tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${phone}</td>
        <td>${email}</td>
        <td>
            <button>Read</button>
            <button>Update</button>
            <button>Delete</button>
        </td>
    </tr>
    `;

    // Clear form inputs after submission
    addForm.reset();

    // Hide the popup form after submission
    containerPopUp.style.display = "none";
});
