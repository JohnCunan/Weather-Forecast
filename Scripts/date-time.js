months = ['January','February','March','April','May','June',
          'July','August','September','October','November','December']

days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

date_data = new Date();

current_day = date_data.getDay();
current_month = date_data.getMonth();
current_date = date_data.getDate();
current_year = date_data.getFullYear();

document.querySelector(".day").innerText = days[current_day - 1];
document.querySelector(".date").innerText = `${months[current_month]} ${current_date}, ${current_year}`;