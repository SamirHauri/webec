let selectedTag = null;

// Listen to tag buttons
document.querySelectorAll('.tagButton').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.tagButton').forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
        selectedTag = this.getAttribute('data-tag');
    });
});

document.getElementById('achievementForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const achievementInput = document.getElementById('achievementInput');
    const achievementsList = document.getElementById('achievementsList');
    const datePicker = document.getElementById('datePicker');

    if (achievementInput.value.trim() !== "" && selectedTag) {
        const dateParts = datePicker.value.split('-'); // ["YYYY", "MM", "DD"]
        const europeanDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;

        const entryDiv = document.createElement('div');
        entryDiv.classList.add(selectedTag);

        const dateTitle = document.createElement('h3');
        dateTitle.textContent = `${europeanDate} - ${selectedTag}`;

        const listItem = document.createElement('li');
        listItem.textContent = achievementInput.value;

        entryDiv.appendChild(dateTitle);
        entryDiv.appendChild(listItem);
        achievementsList.appendChild(entryDiv);

        achievementInput.value = "";
    } else {
        window.alert("invalid input");
    }
});
