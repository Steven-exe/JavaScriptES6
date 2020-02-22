"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
    const arr = [1, 5, 3, 2, 6];
      const newArr = arr.map(function(item, index){
    return item+index;
    });
      console.log(newArr)
      const somaArr = arr.reduce(function(total, next) {
        return total+next;
    })
      console.log(somaArr);
      const filter = arr.filter(function(item){
        return item%2 === 0;
    })
      console.log(filter);
      const find = arr.find(function(item){
        return item === 6;
    });
      console.log(find)
      */
var usuario = {
  nome: 'Estevan',
  idade: '20',
  endereco: {
    cidade: "brasilia",
    estado: "DF"
  }
};

var nome = usuario.nome,
    resto = _objectWithoutProperties(usuario, ["nome"]);

console.log(nome);
console.log(resto);
var arr = [1, 2, 3, 4];
var a = arr[0],
    b = arr[1],
    c = arr.slice(2);
console.log(a);
console.log(b);
console.log(c);

function soma(a, b) {
  for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    params[_key - 2] = arguments[_key];
  }

  return params;
}

console.log(soma(1, 2, 6, 234)); // Spread

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2);
console.log(arr3);
var usuario1 = {
  nome: "Estevan",
  idade: 20,
  empresa: "Nenhuma"
};
usuario1.endereco = "teste";
console.log(usuario1);
var dormindo = true;
var novo = {
  dormindo: dormindo,
  teste: "teste"
};
console.log(novo);
