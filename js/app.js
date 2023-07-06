const endDate = "7 July 2023 1:28:20 AM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

// const clock = () => {

// }

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    // console.log("Difference " + diff);
    if (diff < 0) {
        // confirm("Hello confirm please");
        // if (confirm) {
        //     return;
        // }
        return;
    }

    inputs[0].value = Math.floor(diff / 3600 / 24); //Days
    inputs[1].value = Math.floor((diff / 3600) % 24); //Hours
    inputs[2].value = Math.floor((diff / 60) % 60); //Minutes
    inputs[3].value = Math.floor((diff) % 60); //Sec
}

clock()

setInterval(() => {
    clock()
}, 1000);