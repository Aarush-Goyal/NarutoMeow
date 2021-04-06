const puppeteer = require("puppeteer");
const $ = require("cheerio");
const CronJob = require("cron").CronJob;
const axios = require("axios");
const { DOMAIN } = require("./config");
const io = require("socket.io-client");
const socket = io(DOMAIN);

console.log(
  "h/////////////////////////////////////////////////////////////////////////////////////////////o+ \nh                                                                                             -+ \nh                                                                                             -+ \nh                                                                                             -+ \nh                                                                                             -+ \nh             ``                                                                              -+ \nh         `/yhddhy/`                                                                          -+ \nh         yMMm+omNNy   .:+oo+-`  `+++`-+-  -/oo/.:++-  +++.:+o+:`    .:+oo/-`  .+++`:+.       -+ \nh         hMMm+---..  omMNdmMMd: -MMMdMM/`yNMNmmmNMMs `MMMmmdmMMm/ `yNMmddNMh- :MMMdMM/       -+ \nh         `+hmNMNdy- :MMM-``/++/ -MMMs:-`oMMm-``-NMMs `MMMs.`.oMMN`sMMm+/+hMMm :MMMo:-`       -+ \nh         --:-.:yMMN`/MMN`  .--- -MMM`   yMMd`  `dMMs `MMM/   :MMM.yMMmoooyyys :MMM           -+ \nh         sNMNsodMMd``hMMdsymNN+ -MMM`   -mMMdyymMMMs `MMMNhshNMMs .mMNyoymmd: :MMM           -+ \nh          -oyhhhs/`  `:shhhyo-  .hhh     `+yhhy/ohh+ `MMM+shhhs:   `/shhhy+.  -hhh           -+ \nh                                                     `MMM-                                   -+ \nh                                                     `MMM-                                   -+ \nh                                                      ...                                    -+ \nh                                                                                             -+ \nh                                                                                             -+ \nh/////////////////////////////////////////////////////////////////////////////////////////////++ \n                                                                                                "
);

const run = async (url, targetPrice) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-accelerated-2d-canvas",
      "--disable-gpu",
    ],
    executablePath: "google-chrome-stable",
  });

  const page = await browser.newPage(); // page

  await page.setViewport({ height: 960, width: 1200 }); // setting viewport h,w
  await page.goto(`${url}`); // redirecting to url
  let html = await page.evaluate(() => document.body.innerHTML); //html

  $("#priceblock_ourprice", html).each(function () {
    let price = $(this).text();
    let currentPrice = Number(price.replace(/[^0-9.-]+/g, ""));
    console.log(currentPrice);
    socket.emit("message", currentPrice);
  });

  $("#priceblock_dealprice", html).each(function () {
    let price = $(this).text();
    let currentPrice = Number(price.replace(/[^0-9.-]+/g, ""));
    console.log(currentPrice);
    socket.emit("message", currentPrice);
  });
  await page.close();
  await browser.close();
};

const checkPrices = (urls) => {
  urls.map((url) => run(url.url, url.targetPrice));
};

const startTracking = (urls) => {
  let job = new CronJob(
    // "* * * * *",
    "*/5 * * * *",
    () => {
      checkPrices(urls);
    },
    null,
    true,
    null,
    null,
    true
  );
  job.start();
}; // cron

// -----------------Test only-------------------

axios
  .get(`${DOMAIN}/api/v1/amzn`)
  .then((res) => res.data)
  .then((res) => startTracking(res))
  .catch((err) => console.log(err));

// ----------------------------------------------
