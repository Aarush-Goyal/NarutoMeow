import Price from "../models/Price.js";

export const getAmzn = async (req, res) => {
  const prices = await Price.find();
  if (!prices) {
    return res.send(404).json({ msg: "No memes available" });
  }
  res.status(200).json(prices);
};

export const postAmzn = async (req, res) => {
  const { url, targetPrice, channelId } = req.body;

  // adding the price to db
  const price = new Price({
    url,
    targetPrice,
    channelId,
  });
  try {
    await price.save();
    res.status(201).json({ price });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
  //
};
