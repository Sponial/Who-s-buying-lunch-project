var nameList = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
function whosBuyingLunch() {
    var nameListPosition = nameList.length;
    var buyLunch = Math.random(nameListPosition);
    var whosBuying = nameList[buyLunch];
    var message = whosBuying + " is going to buy lunch today!"
    return message;
}

whosBuyingLunch();

//Okay, so the code works, however it's printing the number rather than the string with the name, which means we need to get the positional correct as a start and we should probably create a separate variable which is called a message in hindsight
//Also after working on that code, I needed to make sure that I have created vars for each of these different variables I was creating to use. 