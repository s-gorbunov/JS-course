var event, ok;
var answers_save = true;
var answers = [];

function answer(text, answer) {
    this.text = text;
    this.answer = answer;
}

function screenView(text, count_answer) {
    do {
        ok = false;
        event = +prompt(text + '-1 - Выход из игры');

        if (event == -1) {
            break;
        } else {
            ok = isAnswer(count_answer, event);
        }
    }while (!ok);

    if(answers_save) {
        answers.push(new answer(text, event));
    }
}

screenView(works.a00 + works.a1 + works.a2, works.a0);

switch(event) {
    case 1: 
        screenView(works.b00 + works.b1 + works.b2, works.b0);
        switch(event) {
            case 1:
            case 2:
                screenView(works.d00 + works.d1 + works.d2, works.d0);
                break;
            case -1:
                break;
            default:
                alert('Error');
        }
        break;
    case 2:
        screenView(works.c00 + works.c1 + works.c2, works.c0);
        switch (event) {
            case 1:
            case 2:
                screenView(works.d00 + works.d1 + works.d2, works.d0);
                break;
            case -1:
                break;
            default:
                alert('Error');
        }
        break;
    case -1:
        break;
    default:
        alert('Error');
}

alert('Спасибо за игру!');

answers_save = false;

do {
    screenView('Хотите посмотреть свои ответы? Введите номер вопроса (n) из ' + answers.length + '. ', answers.length);
    if (event != -1) {
        alert(answers[event-1].text + '\nВы выбрали ответ: ' + answers[event-1].answer);
    }
}while (event != -1);

alert('До свидания!')

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
}