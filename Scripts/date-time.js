months = ['January','February','March','April','May','June',
          'July','August','September','October','November','December']

days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

var date_data = new Date();

current_day = date_data.getDay();
current_month = date_data.getMonth();
current_date = date_data.getDate();
current_year = date_data.getFullYear();


document.querySelector(".day").innerText = 
    days[current_day] + ",  ";

document.querySelector(".date").innerText = 
    `${months[current_month]} ${current_date}, ${current_year}`;

setInterval(time, 500)
function time() {
    var d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

    var amPm = ( h < 12 ) ? "AM" : "PM";
    h = (h > 12) ? h - 12 : h;

    h = ("0" + h).slice(-2);
    m = ("0" + m).slice(-2);
    s = ("0" + s).slice(-2);

    document.querySelector(".time").innerHTML = 
    h + " : " + m +" : " + s + " " + amPm;

    
}

