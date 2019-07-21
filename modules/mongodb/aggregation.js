db.getCollection('Inventory').aggregate([{
    $group: {
        _id: {
            invType: "$invType",
            brandName: "$brandName"
        },
        _total: {
            $sum: "$total"
        }
    }
}]);