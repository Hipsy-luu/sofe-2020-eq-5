

//PROBLEMA 1
var nList = [-5, -4, -3, 1, 2, 6, 7, 10, 11, 12]
var result = ''
var menor = 0
var num = 0

for(var i = 0; i < nList.length; i++){
    var first = nList[i]
    var sec = nList[i + 1]
    var third = nList[i + 2]

    if(first + 1 == sec && (first + 2) == third){
        if(third+1 != nList[i + 3]){
            result = result + first + '-' + third + ",";
        }else{
            for(var j = i + 1; j < nList.length; j++){
                var prev = nList[j]
                var curr = nList[j + 1]
                if(prev + 1 != curr) {
                    i = j
                    menor = nList[i]
                    j = nList.length;
                    num = nList[j - 2]
                    result = result + nList[i] + '-' + nList[j - 2] + ",";
                }
            }
        }
    }else if(nList[i] > num /*&& nList[i] < menor*/){
        result = result + ',' + nList[i]
    }
}

 //console.log(result) 



//PROBLEMA 3
/*
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];*/

var matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]


var matrixFix = JSON.parse(JSON.stringify(matrix));

for(var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[0].length; j++) {
        //var temp = matrix[i][j]
        matrix[i][j] = matrixFix[j][i]
        //matrix[j][i] = temp
    }
}

//console.log((matrix.length / 2).toFixed(0));
for (let i = 0; i < (matrix.length); i++) {
    for (var j = 0; j < (matrix[0].length); j++) {
        //var temp = matrix[i][j]
        matrix[i][j] = matrixFix[matrix.length - 1 - j][i]
        //matrix[j][i] = temp
    }
}

for (let index = 0; index < matrix.length; index++) {
    //const element = array[index];
    //console.log(matrix[index]);
}
//console.log(Math.floor((matrix.length / 2)))

//PROBLEMA 2
var solucion = [
    [ "O" , "0" ],
    [ "M" , "1" ],
    [ "Y" , "2" ],
    [ "E" , "5" ],
    [ "N" , "6" ],
    [ "D" , "7" ],
    [ "R" , "8" ],
    [ "S" , "9" ]
];
var hash = [];

var crypt = [ "SEND" , "MORE" ,"MONEY"];
var cryptFixed = [ "" , "" ,""];
var cryptFixedNum = [ 0 , 0 ,0];

for (let index = 0; index < solucion.length; index++) {
    hash[solucion[index][0]] = solucion[index][1];
};

for (let index = 0; index < crypt.length; index++) {
    const palabraActual = crypt[index];

    for (let i = 0; i < palabraActual.length; i++) {
        const char = palabraActual[i];
        cryptFixed[index] = cryptFixed[index] + hash[char];
    }
}


for (let index = 0; index < cryptFixed.length; index++) {
    cryptFixedNum[index] = Number.parseInt(cryptFixed[index])
}

if( cryptFixedNum[0] + cryptFixedNum[1] == cryptFixedNum[2]){
    //console.log(true);
}


/*
hash = {'O': '0', 'M': '1'}
  for( i = 0; matrix ) {
      hash[matrix[i][0]] = matrix[i][1]
  }
    
*/


//PROBLEMA 4

var list = [1, 2, 3]
var m = 2
var aux = []
aux.push([])

var list2 = [
    [1],
    [2],
    [3],
    [1, 2],
    [2, 3],
    [1, 2, 3]
]

for(var i = 0; i < list.length; i++){
    for(var j = 0; j < aux.length; j++){
        console.log()
    }  
}

console.log(aux)

/*
    [1] + [2] = [1, 2]
        if(j < 0){
            aux[j] = []
        }

        var arregloAux = []
        arregloAux[]
        var curr = list[j]
        aux.push(list[i])
        */

//console.log(aux)

/*
aux = [[], [1], [2], [1, 2], ]
list = [1, 2, 3]

for(i = 0; list) {
    # 3
    for (j = 0; aux) {
        # [[], [1], [2], [1, 2]]
        currentE = aux[j]
        aux.append([1, 2])
    }
}

*/

//[[],[1],[2],[1,2]]
//1,2,3