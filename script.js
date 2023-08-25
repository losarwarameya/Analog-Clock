function updateClock() {
    const now = new Date();

    const hours = now.getHours()%12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hours * 30) + (0.5 * minutes);
    const minuteDeg = (minutes * 6) + (0.1 * seconds);
    const secondDeg = seconds * 6;

    const hourHand = document.querySelector('.hr');
    const minuteHand = document.querySelector('.mn');
    const secondHand = document.querySelector('.sc');

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;

}

updateClock();
setInterval(updateClock, 1000);