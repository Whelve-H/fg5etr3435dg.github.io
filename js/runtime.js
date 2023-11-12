var now = new Date();
function createtime() {
  now.setTime(now.getTime() + 1e3);
  var e = new Date("11/11/2023 17:00:00"),
    t = Math.trunc(234e8 + ((now - e) / 1e3) * 17),
    a = (t / 1496e5).toFixed(6),
    o = new Date("11/09/2023 12:00:00"),
    n = (now - o) / 1e3 / 60 / 60 / 24,
    r = Math.floor(n),
    i = (now - o) / 1e3 / 60 / 60 - 24 * r,
    s = Math.floor(i);
  1 == String(s).length && (s = "0" + s);
  var d = (now - o) / 1e3 / 60 - 1440 * r - 60 * s,
    l = Math.floor(d);
  1 == String(l).length && (l = "0" + l);
  var g = (now - o) / 1e3 - 86400 * r - 3600 * s - 60 * l,
    b = Math.round(g);
  1 == String(b).length && (b = "0" + b);
  let c = "";
  (c =
    s < 18 && s >= 9
      ? `<img class='boardsign' src='https://img.shields.io/badge/%E5%B0%8F%E9%BB%84%E5%90%8C%E5%AD%A6-%E7%A7%91%E7%A0%94%E6%91%B8%E9%B1%BC%E4%B8%AD%F0%9F%90%9F-blue?style=flat&logo=1001tracklists' title='什么时候能够实现财富自由呀~'><br> <div style="font-size:16px;font-weight:bold">本站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i  id="heartbeat" class='fas fa-heartbeat' style='font-size: 24px;'></i> <br><div style='font-size: 18px;font-family: 'mac', sans-serif;'> Don't lose your dreams just because there's no applause.</div>`
      : `<img class='boardsign' src='https://img.shields.io/badge/%E5%B0%8F%E9%BB%84%E5%90%8C%E5%AD%A6-%E7%A7%91%E7%A0%94%E6%91%B8%E9%B1%BC%E4%B8%AD%F0%9F%90%9F-blue?style=flat&logo=1001tracklists' title='下班了就该开开心心地玩耍~'><br> <div style="font-size:16px;font-weight:bold">本站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i heartbeat" class='fas fa-heartbeat' style='font-size: 24px;'></i> <br> <div style='font-size: 18px;'mac', sans-serif;'>
      May the roses bloom warmly on your way to the next life!</div>`),
    document.getElementById("workboard") &&
      (document.getElementById("workboard").innerHTML = c);
}
setInterval(() => {
  createtime();
}, 1e3);