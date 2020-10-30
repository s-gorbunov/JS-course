var userAnswer, rightAnswers = 0, wrongAnswer = 0; money = 0; 
for (var i = 0; i < questions.length; i++) {
    userAnswer = +prompt("Вопрос №"+(i+1)+"  "+questions[i].q+"\n"+"Варианты ответов:"+"\n"+questions[i].a1+"\n"+questions[i].a2+"\n"+questions[i].a3+"\n"+questions[i].a4+"\nВведите номер правильного ответа.\n\nДля выхода из игры введите -1");
    if (userAnswer == -1) {
        alert("Возвращайтесь, будем Вас ждать.")
        break;
    }
    if (userAnswer === questions[i].correct) {
        money += (i+1)*1000;
        alert("Поздравляем вы ответили правильно и получаете за ответ "+((i+1)*1000)+" рублей");
        rightAnswers++;
    }else {
        wrongAnswer++;
        alert("К сожалению вы ответили неверно\n У вас осталось "+(3-wrongAnswer)+" попытки");
        if (wrongAnswer==3) {
            break;
        }
    }
}
alert("Вы  ответиили правильно на "+rightAnswers+" вопросов из "+ (i+1) +" и заработали за игру "+money+" рублей");