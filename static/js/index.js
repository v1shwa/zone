
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
    return false;
}


function checkIfCreatedMessage() {
    var record_id = getQueryVariable('created');
    console.log(record_id);
    if (record_id) {
        const createdMessage = document.querySelector('#createdMessage');
        createdMessage.innerHTML = '<span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span>';
        createdMessage.innerHTML += 'Record created: <a target="_blank" href="' + record_id + '">' + window.location.protocol + '//' + window.location.host + '/' + record_id +'</a>';
        createdMessage.style.display = '';

    }
}
