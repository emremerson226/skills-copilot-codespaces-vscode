function skillsMember() {
    // Get the member ID from the URL
    var query = window.location.search.substring(1);
    var vars = query.split("=");
    var memberID = vars[1];

    // Get the member's skills
    $.ajax({
        url: '/skills/member/' + memberID,
        type: 'get',
        success: function (data) {
            // Display the member's skills
            var skills = JSON.parse(data);
            var skillsList = document.getElementById("skillsList");
            for (var i = 0; i < skills.length; i++) {
                var skill = document.createElement('li');
                skill.appendChild(document.createTextNode(skills[i].name));
                skillsList.appendChild(skill);
            }
        }
    });
}