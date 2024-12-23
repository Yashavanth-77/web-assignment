function closeModal() {
    document.getElementById('profileModal').style.display = 'none';
}

function showAssignmentInfo() {
    document.getElementById('assignmentModal').style.display = 'block';
}

function closeAssignmentModal() {
    document.getElementById('assignmentModal').style.display = 'none';
}
function showProfile(profileIndex) {
    switch (profileIndex) {
        case 0:
            window.location.href = "yashwanth.html";
            break;
        case 1:
            window.location.href = "Yashas.html";
            break;
        case 2:
            window.location.href = "Pavan.html";
            break;
        case 3:
            window.location.href = "tejaswi.html";
            break;
        case 4:
            window.location.href = "sudarshan.html";
            break;
        default:
            alert("Profile not available!");
            break;
    }
}


