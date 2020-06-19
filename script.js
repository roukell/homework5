// display current time and date on schedule
const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(currentTime);

const timeDisplay = $("<p>");
timeDisplay.text(currentTime);
$(currentDay).append(timeDisplay);

// create rows and columns from 09:00 to 17:00
for (let hour = 9; hour <= 17; hour++) {
    let index = hour - 9;

    const rows = $("<div>");
    rows.addClass("row");
    rows.addClass("plannerRow");
    rows.attr("hour-index", hour);
    $(".container").append(rows);
    // rows.css("background-color","pink");

    // create a box that contains time
    const hourBlocks = $("<div>");
    hourBlocks.addClass("col");
    rows.append(hourBlocks);

    const timeBoxSpn = $("<span>");
    timeBoxSpn.attr("class", "timeBox");
    hourBlocks.append(timeBoxSpn);

    // create hours thats going to be displayed
    let displayedHour = 0;
    let ampm = "";
    if (hour > 12) {
        displayedHour = hour - 12;
        ampm = "pm";
    }
    else {
        displayedHour = hour;
        ampm = "am";
    }

    // put 9am - 5pm into timeBox
    timeBoxSpn.text(`${displayedHour} ${ampm}`);

    // create input portion for user to type in plans
    const inputBox = $("<input>");
    inputBox.attr("id",`input-${index}`);
    inputBox.attr("hour-index", index);
    inputBox.attr("type", "text");
    inputBox.attr("class", "inputBox");

    // access index from data array for hour
    // inputBox.val(planTextArr[index]);

    // create col to put inputBox
    let inputBoxDiv = $("<div>");
    inputBoxDiv.addClass("col-9");

    // // put inputBoxDiv and inputBox into row
    rows.append(inputBoxDiv);
    inputBoxDiv.append(inputBox);

    // // create button to save input
    const saveBtn = $("<button>")
    const saveIcon = "Assets/save-icon.png";
    saveBtn.attr("id", `saveid-${index}`);
    saveBtn.attr("save-id", index);
    saveBtn.attr("class", "far fa-save saveIcon");
    saveBtn.css("font-size", "48px");
    
    

    // // append saveBtn
    rows.append(saveBtn);




}

