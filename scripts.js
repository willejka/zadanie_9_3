var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';

var dinosaurUpperCase = dinosaur.toUpperCase();
console.log(dinosaurUpperCase);

var changeInText = text.replace('Velociraptor', (dinosaurUpperCase));
console.log(changeInText);

console.log(changeInText.length/2);

var halfChangedText = changeInText.slice(0,(changeInText.length/2));
console.log(halfChangedText);