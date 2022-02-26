setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation= 30*htime + mtime/2;
    mrotation= 6*mtime;
    srotation= 6*stime;

    // Hourhand.style.tranform = 'rotate(${hrotation}deg)';
    Hourhand.style.transform = `rotate(${hrotation}deg)`;
    // Minutehand.style.tranform = 'rotate(${mrotation}deg)';
    Minutehand.style.transform = `rotate(${mrotation}deg)`;
    // Secondhand.style.tranform = 'rotate(${srotation}deg)';
    Secondhand.style.transform = `rotate(${srotation}deg)`;
}, 1000) ;
