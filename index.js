const myvalidate = (obj) => {

    if (obj.value == "" || obj.value.length < 8)
        obj.classList.add("is-invalid");
    else
        obj.classList.remove("is-invalid");

}

const validateTaskForm = () => {
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    let formAssigned = document.getElementById("formAssigned");
    //let formatDate = document.getElementById("date").value;
    var dueDate = document.getElementById("date").value;
    //var dueDate = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
    let status = document.getElementById("status");
    //Validate Name 
    if (name === "") {
        alert("Please enter your name");
        document.getElementById("validateName").innerHTML = "Please enter your name";
    } else if (name.length < 8) {
        let text = "Please enter more than 8 characters."
        document.getElementById("validateName").innerHTML = "Please enter more than 8 characters";
    } else {
        document.getElementById("name").innerHTML = name;
    }
    //Validate Description
    if (description === "") {
        alert("Please enter description");
        document.getElementById("validateDescription").innerHTML = "Please enter description";
    } else if (description.length < 15) {
        let textdesc = "Please enter more than 15 characters."
        document.getElementById("validateDescription").innerHTML = textdesc;
    } else {
        document.getElementById("description").innerHTML = description;
    }
    //Validate Assigned to
    if (formAssigned.selectedIndex == 0) {
        alert("Please Assign a Task Owner!!");
        document.getElementById("formAssigned").innerHTML = "Assign a task owner";
        // document.getElementById("formAssigned").focus();
        return false;
    } else {
        document.getElementById("formAssigned").innerHTML = formAssigned;
    }

    //validatation for duedate
    //    let UserDate = document.getElementById("userdate").value;
    let theDate = new Date().getTime();
    let anotherDate = new Date(document.getElementById("date").value).getTime();

    if (theDate > anotherDate) {
        alert("You've entered a date that has already been!")
        document.getElementById("formAssigned").innerHTML = "Please select duedate that is bigger or Equal to today";
    }
    //     let toDate = null;
    //     toDate = new Date(); 
    //    if (toDate !== '' || new Date(dueDate).getTime() <= toDate.getTime()) {
    //           alert("Please select duedate that is bigger or Equal to today");
    //           return false;
    //      } 

    //Validate Status new Date ('2022-04')
    if (status.selectedIndex == 0) {
        alert("Please select Status of project");
        document.querySelector('#status').innerHTML = "Please select Status of project";
        // document.getElementById("formAssigned").focus();
    }
    //included the function in taskmanager.js to store values

    homeworkTask.storeValue()

    year = dueDate.getFullYear();
    month = dueDate.getMonth() + 1;
    day = dueDate.getDate();
    formattedDate = day + "/" + month + "/" + year;
    console.log("formatted date" + formattedDate);
};

// Display Date
// let dt = new Date();
//    document.getElementById("dateTime").innerHTML=dt;

// {let dt = new Date();
//    document.getElementById('displayDate').innerHTML = dt;}

// displayDate = new Date().toLocaleDateString();
// document.write(displayDate);
