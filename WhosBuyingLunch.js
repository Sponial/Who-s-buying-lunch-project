var nameList = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
function whosBuyingLunch() {
    var nameListPosition = nameList.length;
    var buyLunch = Math.random() * 6;
    var whosBuying = nameList[buyLunch];
    var message = whosBuying + " is going to buy lunch today!"
    return message;

    //Okay, so chatchiputti confirmed that decimals won't work for passing into an array. And also math.random doesn't accept anything outside of integers, so name list position won't work there. 
    //I need to have a way of turning that decimal into a full number. I believe I can do that just by timesing it by the range of number that I want it to go up to + 1
}

whosBuyingLunch();

//Okay, so the code works, however it's printing the number rather than the string with the name, which means we need to get the positional correct as a start and we should probably create a separate variable which is called a message in hindsight
//Also after working on that code, I needed to make sure that I have created vars for each of these different variables I was creating to use. 