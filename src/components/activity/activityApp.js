function copyEvent(id)
{
    var str = document.getElementById(id);
    window.getSelection().selectAllChildren(str);
    document.execCommand("Copy")
};
// text = "bounce"

// document.getElementById("bounce").innerHTML = 'Flip'


// function x() {
//     document.getElementById("bounce").innerHTML = ''
// }