'use strict'
let wage;
        wage = +prompt('Какой размер вашей зарплаты?', wage);
        alert(wage);

     let bonus = (15 * wage / 100);

     let sum = (wage + bonus);

       let taxes = (10 * sum / 100);

        const spending = 190;

       
       let balance = (sum - taxes - spending);

        
       let wife = (balance * 40 / 100);

        
       let husband = (balance - wife);
       
        
    alert('Ваш остаток') + husband;
        alert(husband);