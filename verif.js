let day= new Date().getDay();//return current date
let hours= new Date().getHours();//retuen hours

console.log(hours);

function verif(req, res, next){
    if (day> 0 && day < 6 && hours> 8 && hours <17) next();
    else 
    res.send(`<h1> The web application is only available during working hours (Monday to Friday,  from 9 to 17).</h1>`);

}
module.exports = verif;