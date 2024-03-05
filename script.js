var names = ['Arturo','Benicio','Igna','Jyoro','Mj-404'];


function createPage() {
    for(var i = 0; i < (names.length); i++) {
    var doc = document.implementation.createHTMLDocument(names[i]);
    doc.body.innerHTML = '<h1>' + names[i] + '</h1>';
    doc.write('<p>My name is ' + names[i] + '</p>');
    doc.close();
    }
}

console.log(createPage());
