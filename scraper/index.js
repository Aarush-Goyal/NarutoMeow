const $ = require("cheerio");
const CronJob = require("cron").CronJob;
const axios = require("axios");
const { DOMAIN } = require("./config");
const io = require("socket.io-client");
const socket = io(DOMAIN);

const run = (url, targetPrice) => {
  axios
    .get(`${url}`)
    .then((response) => {
      let html = response.data;

      $("#priceblock_ourprice", html).each(function () {
        let price = $(this).text();
        let currentPrice = Number(price.replace(/[^0-9.-]+/g, ""));
        console.log(currentPrice);
        if (currentPrice <= targetPrice) socket.emit("message", currentPrice);
      });

      $("#priceblock_dealprice", html).each(function () {
        let price = $(this).text();
        let currentPrice = Number(price.replace(/[^0-9.-]+/g, ""));
        console.log(currentPrice);
        if (currentPrice <= targetPrice) socket.emit("message", currentPrice);
      });
    })

    .catch((err) => console.log(err));

  // price--------------------------------------

  // -------------------------------------------
};

const checkPrices = (urls) => {
  urls.map((url) => run(url.url, url.targetPrice));
};

const startTracking = (urls) => {
  let job = new CronJob(
    "* * * * *",
    // "*/5 * * * *",
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
