var nameList = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
function whosBuyingLunch() {
    var nameListPosition = nameList.length;
    buyLunch = Math.random(nameListPosition);
    buyLunch = buyLunch + " is going to buy lunch today!"
    return buyLunch;
}

whosBuyingLunch();