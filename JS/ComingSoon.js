window.addEventListener('load' , () => {

    const computeDates = () => {

        var date_future = new Date(new Date().getFullYear() +1, 0, 1);
        const date_now = new Date();

        var delta = Math.abs(date_future - date_now ) / 1000; 

        //calculate days
        var days = Math.floor(delta/86400);
        delta -= days  * 86400;

        //calculate hours
        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours  * 3600;

        //calculate minutes
        var menutes = Math.floor(delta /60) % 24;
        delta -= menutes  * 60;

        //calculate seconds
        var seconds = delta % 60;

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minute").innerHTML = menutes;
        document.getElementById("second").innerHTML = Math.floor(seconds);

    };

   setInterval(() => {
    computeDates();
   }, 1000);

   computeDates();
})