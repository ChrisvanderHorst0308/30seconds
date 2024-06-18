function testAlert() {
    alert('De knop werkt!');
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('testButton').addEventListener('click', testAlert);
});
