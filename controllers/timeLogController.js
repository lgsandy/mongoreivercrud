const timeLogService = require('../services/timeLogService');

const getTimeogs = async (req, res) => {
    try {
        const timeLog = await timeLogService.getTimelogdetails();
        res.status(200).json(timeLog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getRequiredTlogs = async (req,res)=>{
    try {
        const timeLog = await timeLogService.getOnlytimelogsdetails()
        res.status(200).json(timeLog)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    getTimeogs,
    getRequiredTlogs
};
