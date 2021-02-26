const puppeteer = require("puppeteer");
const $ = require("cheerio");
const CronJob = require("cron").CronJob;
const nodemailer = require("nodemailer");

const run = async (url) => {
  //
  //  -------------browser--------------------

  const browser = await puppeteer.launch({
    headless: true,
    // slowMo: 10,
    // devtools: true,
    defaultViewport: {
      width: 1920,
      height: 1080,
    },
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
  });
  browser.close();

  // -------------------------------------------
};

// -----------------Test only-------------------

const urls = [
  "https://www.amazon.in/Logitech-Wireless-Cross-Computer-Control-Sharing/dp/B071YZJ1G1",
  "https://www.amazon.in/TP-Link-TL-UH700-7-Port-USB-Black/dp/B00LI4O9EA/ref=pd_ys_c_rfy_976392031_3?_encoding=UTF8&pd_rd_i=B00LI4O9EA&pd_rd_r=N163D2A3G2NAZ4CJW71S&pd_rd_w=Iex6l&pd_rd_wg=MaPb3&pf_rd_p=a48c231b-e90e-4225-8c14-1ea8f540ac4f&pf_rd_r=N163D2A3G2NAZ4CJW71S&psc=1&refRID=MWW42Z8FMYJJXHC1742H",
  "https://www.amazon.in/Cosmic-Byte-Sirius-Mechanical-Blue/dp/B0859LMY97/ref=pd_di_sccai_5?pd_rd_w=lF9Yr&pf_rd_p=a477d781-9034-48be-b0b0-a72199c56506&pf_rd_r=RPB4PSXP60WM400Z62EB&pd_rd_r=44914599-da34-4aed-ae7a-00beed292a28&pd_rd_wg=mBZUx&pd_rd_i=B0859LMY97&psc=1",
];

// ----------------------------------------------

const checkPrices = () => {
  urls.map((url) => run(url));
};

const startTracking = () => {
  let job = new CronJob(
    "*/5 * * * *",
    () => {
      checkPrices();
    },
    null,
    true,
    null,
    null,
    true
  );
  job.start();
}; // cron

startTracking();
