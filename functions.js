// function Ride(el) {
//     const display = document.getElementById(el).style.display;
//     if (display == "block")
//         document.getElementById(el).style.display = 'none';
//     else
//         document.getElementById(el).style.display = 'none';
// }

// function Show(el) {
//     const display = document.getElementById(el).style.display;
//     if (display == "none")
//         document.getElementById(el).style.display = 'block';
//     else
//         document.getElementById(el).style.display = 'block';
// }

function showRide(el1, el2) {
    const display = document.getElementById(el1).style.display;
    const background = document.getElementById(el2).style.backgroundColor;
    const color = document.getElementById(el2).style.color;
    console.log('display ->', display)
    console.log('background ->', background)
    if (display == "none") {
        return document.getElementById(el1).style.display = 'block',
            document.getElementById(el2).style.background = '#ffffff',
            document.getElementById(el2).style.color = '#8a8a8a';
    } else {
        return document.getElementById(el1).style.display = 'none',
            document.getElementById(el2).style.background = '#6f6f6f',
            document.getElementById(el2).style.color = '#fbfbfb'
    }
}