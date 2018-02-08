var AllocationsDAO = require("../data/allocations-dao").AllocationsDAO;

function AllocationsHandler(db) {
    "use strict";

    var allocationsDAO = new AllocationsDAO(db);


    this.displayAllocations = function(req, res, next) {
        var userId = req.params.userId;

        allocationsDAO.getByUserIdAndThreshold(userId, req.query.threshold, function(err, allocations) {
            if (err) return next(err);

            return res.render("allocations", {
                userId: userId,
                allocations: allocations
            });
        });
    };
}

module.exports = AllocationsHandler;
