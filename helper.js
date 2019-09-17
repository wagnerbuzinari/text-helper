openFile = function () {
    let file = document.getElementById('fileToUpload').files[0]
    var reader = new FileReader();
    reader.onload = function () {
        var text = reader.result;
        var node = document.getElementById('output');
        node.innerText = replaceString(text);
    };
    reader.readAsText(file);
};

function replaceString(string){
    console.log(string);
    let text = '';
    text = string.replace(/;/g, '')
    text = text.replace(/-/g, '')
    return text;
}