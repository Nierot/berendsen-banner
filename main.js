const d = new Date();
d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
document.cookie = `CookieAge=18;expires=${d.toUTCString()};path=/`

window.sessionStorage.setItem('isExecuted', true)
window.localStorage.setItem('Slijterij', 'Winkel')