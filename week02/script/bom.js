// Select the HTML elements
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

// Add a click event to the Add Chapter button
button.addEventListener("click", function () {

    // Check that the input is not empty
    if (input.value.trim() !== "") {

        // Create a list item
        const li = document.createElement("li");

        // Create a delete button
        const deleteButton = document.createElement("button");

        // Add the chapter name
        li.textContent = input.value;

        // Add the delete button text
        deleteButton.textContent = "❌";

        // Accessibility label
        deleteButton.setAttribute(
            "aria-label",
            `Remove ${input.value}`
        );

        // Add the delete button to the list item
        li.append(deleteButton);

        // Add the list item to the unordered list
        list.append(li);

        // Delete the chapter when the delete button is clicked
        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
            input.focus();
        });

        // Clear the text box
        input.value = "";

        // Return the cursor to the input field
        input.focus();
    }
});