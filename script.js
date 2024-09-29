let questions = ["Вы любите свою маму?","А папу любите?","У вас есть лучший друг?","У вас есть брат или сестра?","Вы старший в семье?"];
let answers =[];
for(let i=0;i<5;i++) {
    answers[i] = prompt(questions[i]+"\n"+"Да/Нет");
}
for(let i=0;i<questions.length;i++) {
    alert(questions[i]+"\n"+answers[i]);
}