const Poll = require("../models/pollModel");

exports.createPoll = async (pollData) => {
  let newPoll = await Poll(pollData);
  newPoll.save();
  return newPoll;
};

exports.voteOnOption = async (pollId, optionText) => {
  try {
    const poll = await Poll.findOneAndUpdate(
      { _id: pollId, "options.text": optionText },
      { $inc: { "options.$.votes": 1 } },
      { new: true }
    );

    console.log("Vote registered successfully:", poll);
  } catch (error) {
    console.error("Error registering vote:", error);
  }
};

exports.getPolls = async (req, res) => {
  let { teacherUsername } = req.params;
  let data = await Poll.find({ teacherUsername });
  res.status(200).json({
    data,
  });
};
