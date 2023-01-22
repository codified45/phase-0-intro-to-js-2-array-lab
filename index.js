
const cats = ["Milo", "Otis", "Garfield"];
const destructivelyAppendCat = function(name){
cats.push(name);
}

const destructivelyPrependCat = function(name){
cats.unshift(name);
}

const destructivelyRemoveLastCat = function(){
cats.pop();
}

const destructivelyRemoveFirstCat = function(){
cats.shift();
}

const appendCat = function(name){
const newCats = [...cats, name];
return newCats;
}

const prependCat = function(name){
const newCats = [name, ...cats];
return newCats;
}

const removeLastCat = function(){
const newCats = cats.slice(0, -1);
return newCats;
}

const removeFirstCat = function(){
const newCats = cats.slice(1);
return newCats;
}
