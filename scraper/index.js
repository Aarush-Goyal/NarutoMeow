const puppeteer = require("puppeteer");
const $ = require("cheerio");
const CronJob = require("cron").CronJob;
const axios = require("axios");
const { DOMAIN } = require("./config");
const io = require("socket.io-client");
const socket = io(DOMAIN);

const run = async (url) => {
  //
  //  -------------browser--------------------

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

  // ------------------------------------------

  const page = await browser.newPage(); // page

  await page.setViewport({ height: 960, width: 1200 }); // setting viewport h,w
  await page.goto(`${url}`); // redirecting to url
  let html = await page.evaluate(() => document.body.innerHTML); //html

  // price--------------------------------------

  $("#priceblock_ourprice", html).each(function () {
    let price = $(this).text();
    let currentPrice = Number(price.replace(/[^0-9.-]+/g, ""));
    console.log(currentPrice);
    socket.emit("message", currentPrice);
  });
  await page.close();
  await browser.close();

  // -------------------------------------------
};

const checkPrices = (urls) => {
  urls.map((url) => run(url.url));
};

const startTracking = (urls) => {
  let job = new CronJob(
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
