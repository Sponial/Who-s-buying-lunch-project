var nameList = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
function whosBuyingLunch(buyLunch) {
    var nameListPosition = nameList.length;
    buyLunch = Math.random(nameListPosition);
    return buyLunch;
}

whosBuyingLunch