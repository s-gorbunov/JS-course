// 1) Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е.
//     чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
// 2) Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К - король, Ф – ферзь и тп.,
//    причем все фигуры должны стоять на своих местах и быть соответственно черными и белыми.
// 3) * Заменить буквы, обозначающие фигуры картинками.


function chessboard() {
    var newTable = document.createElement( 'table' ),
        lets = [ '','A','B','C','D','E','F','G','H','' ],
        blackFigs1 = [ '8','Л','K','С','Ф','К','С','К','Л','8' ],
        whiteFigs1 = [ '1','Л','K','С','Ф','К','С','К','Л','1' ],
        blackFigs2 = [ '7','П','П','П','П','П','П','П','П','7' ],
        whiteFigs2 = [ '2','П','П','П','П','П','П','П','П','2' ];
    for ( var i = 0, a = 9; i < 10, a >= 0; i++, a-- ) {
        var newTr = newTable.insertRow(i);//i - номер строки с нуля
        for ( var j = 0; j < 10; j++ ) {//j - номер столбца
            var newTd = newTr.insertCell( j );//в строку вставляем ячейку
            switch (i) {
                case 0:
                    newTd.innerText = lets[ j ];
                    break;
                case 1:
                    newTd.innerHTML = blackFigs1[ j ];
                    break;
                case 2:
                    newTd.innerHTML = blackFigs2[ j ];
                    break;
                case 7:
                    newTd.innerHTML = whiteFigs2[ j ];
                    break;
                case 8:
                    newTd.innerHTML = whiteFigs1[ j ];
                    break;
                case 9:
                    newTd.innerText = lets[ j ];
                    break;
                default:
                    if ( j == 0 || j == 9 ) {
                        newTd.innerHTML = a;
                    }
                    break;
            }
        }
    }
    document.body.append( newTable );
}
chessboard();