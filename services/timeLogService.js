const { getTimeLogCollection } = require("../models/timeLogModel");

const getTimelogdetails = async () => {
  const collection = await getTimeLogCollection();
  return collection.find({}).toArray();
};

const getOnlytimelogsdetails = async () => {
  const collection = await getTimeLogCollection();
  return collection.aggregate([
    {
      $project: {
        _id:0,
        diff: 1,
        rop:1,
        gamma_ray:1,
        mfi:1,
        flow_out:1,
        spp:1,
        tor:1,
        simplifiedmse:1,
        spm1:1,
        spm2:1,
        spm3:1,
        dbtm:1,
        dmea:1,
        tvd:1,
        activitycode:1,
        stickslipindex:1,
        depthofcut:1,
        washoutindex:1,
        gainloss:1,
        stickslip:1,
        washout:1,
        time:1
      },
    }
  ]).toArray();
};

module.exports = {
  getTimelogdetails,
  getOnlytimelogsdetails
};
