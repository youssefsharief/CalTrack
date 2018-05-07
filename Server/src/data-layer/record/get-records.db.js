const usersModel = require('models/users.model')
const ObjectId = require('mongodb').ObjectID;

module.exports = (userId, limit, skip, startDate, endDate, startTime, endTime) => {
    return usersModel.aggregate([
        {
            $match: {
                _id: ObjectId(userId),
            }
        },
        { $unwind: "$meals" },
        { $replaceRoot: { newRoot: "$meals" } },
        {
            "$redact": {
                "$cond": [
                    {
                        "$and": [
                            startDate ? { "$gte": ["$date", new Date(startDate)] } : {},
                            endDate ? { "$lt": ["$date", new Date(endDate)] } : {},
                            startTime ? {
                                "$gte": [
                                    {
                                        "$dateToString": {
                                            "format": "%H:%M",
                                            "date": "$date"
                                        }
                                    },
                                    startTime
                                ]
                            } : {},
                            endTime ? {
                                "$lte": [
                                    {
                                        "$dateToString": {
                                            "format": "%H:%M",
                                            "date": "$date"
                                        }
                                    },
                                    endTime
                                ]
                            } : {}
                        ]
                    },
                    "$$KEEP",
                    "$$PRUNE"
                ]
            }
        },
        {
            $facet: {
                meals: [
                    { $skip: skip },
                    { $limit: limit },
                    { $sort : { date : -1 } }
                ],
                pageInfo: [
                    { $group: { _id: null, count: { $sum: 1 } } },
                ],
            },
        },
    ]
    ).exec().then(x => {
        return {
            meals: x[0].meals,
            count: x[0].pageInfo[0] ? x[0].pageInfo[0].count : 0,
            skip,
            limit
        }
    })
}
