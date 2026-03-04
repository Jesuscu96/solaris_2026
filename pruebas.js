function myReplace(str, before, after) {
    const arrayAllWords = str.split(" ");
    const searchWord = arrayAllWords.findIndex(w => w === before);

    const replaceWord = arrayAllWords.map(w => {
        if (w.charAt(0) === w.charAt(0).toUpperCase() && w === before) {
            w = after.charAt(0).toUpperCase() + after.substring(1).toLowerCase();
        }
        else if (w.charAt(0) === w.charAt(0).toLowerCase() && w === before) {
            w = afterafter.charAt(0).toLowerCase() + after.substring(1).toUpperCase();
        }
        else if (w === before) {
            w = after;
        }
        return w
    });
    return replaceWord.join(" ");
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));