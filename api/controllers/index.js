export const getAmzn = (req, res) => {
  res.json([
    {
      url:
        "https://www.amazon.in/Logitech-Wireless-Cross-Computer-Control-Sharing/dp/B071YZJ1G1",
      targetPrice: 200,
      channelId: 79800,
    },
    {
      url:
        "https://www.amazon.in/TP-Link-TL-UH700-7-Port-USB-Black/dp/B00LI4O9EA/ref=pd_ys_c_rfy_976392031_3?_encoding=UTF8&pd_rd_i=B00LI4O9EA&pd_rd_r=N163D2A3G2NAZ4CJW71S&pd_rd_w=Iex6l&pd_rd_wg=MaPb3&pf_rd_p=a48c231b-e90e-4225-8c14-1ea8f540ac4f&pf_rd_r=N163D2A3G2NAZ4CJW71S&psc=1&refRID=MWW42Z8FMYJJXHC1742H",
      targetPrice: 200,
      channelId: 79800,
    },
    {
      url:
        "https://www.amazon.in/Cosmic-Byte-Sirius-Mechanical-Blue/dp/B0859LMY97/ref=pd_di_sccai_5?pd_rd_w=lF9Yr&pf_rd_p=a477d781-9034-48be-b0b0-a72199c56506&pf_rd_r=RPB4PSXP60WM400Z62EB&pd_rd_r=44914599-da34-4aed-ae7a-00beed292a28&pd_rd_wg=mBZUx&pd_rd_i=B0859LMY97&psc=1",
      targetPrice: 200,
      channelId: 79800,
    },
  ]);
};

export const postAmzn = (req, res) => {
  console.log(req.body);
  res.status(200).send("Created Users");
};
