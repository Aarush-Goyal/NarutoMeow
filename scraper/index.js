const puppeteer = require("puppeteer");
const $ = require("cheerio");
const CronJob = require("cron").CronJob;
const axios = require("axios");
const { DOMAIN } = require("./config");
const io = require("socket.io-client");
const socket = io(DOMAIN);

console.log("\n ------------- \n   Scraper \n -------------");

const run = async (url, targetPrice, channelId) => {
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
    if (currentPrice <= targetPrice) {
      console.log(currentPrice);
      data = {
        prodLink: url,
        currentPrice,
        targetPrice,
        channelId,
      };
      socket.emit("price_under", data);
    }
  });

  $("#priceblock_dealprice", html).each(function () {
    let price = $(this).text();
    let currentPrice = Number(price.replace(/[^0-9.-]+/g, ""));
    if (currentPrice <= targetPrice) {
      console.log(currentPrice);
      data = {
        prodLink: url,
        currentPrice,
        targetPrice,
        channelId,
      };
      socket.emit("price_under", data);
    }
  });
  await page.close();
  await browser.close();
};

const checkPrices = (urls) => {
  urls.map((url) => run(url.url, url.targetPrice, url.channelId));
};

// -----------------Test only-------------------

let job = new CronJob(
  // "* * * * *",
  "*/5 * * * *",
  () => {
    axios
      .get(`${DOMAIN}/api/v1/amzn`)
      .then((res) => res.data)
      .then((res) => checkPrices(res))
      .catch((err) => console.log(err));
  },
  null,
  true,
  null,
  null,
  true
);
job.start();

// ----------------------------------------------
