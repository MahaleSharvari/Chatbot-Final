function getBotResponse(input) {
    //rock paper scissors
    if (input == "Suggest the best campgrounds in Maharashtra") {
        return "Go through the help menu to know the details";
    } else if (input == "For what age-groups is the campground available") {
        return "For the age-group above 18";
    } else if (input == "Can you tell us the details for the particular campground") {
        return "Please mention the name of the campground";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
        
    }
    else {
        return "Try asking something else!";
    }
}