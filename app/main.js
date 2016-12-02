define(function (require) {
    var sunburst = require('./sunburst');
    var sunburstEventsController = require('./sunburstEventsController');

    var model = {
        "current": {
            "path": "/hdfs",
            "size": 100,
            "hash": 1,
            "children": [{
                "path": "/hdfs/olebreton",
                "size": 10,
                "hash": 2,
                "children":[{
                    "path": "/hdfs/olebreton/1",
                    "size": 3,
                    "hash": 5
                }, {
                    "path": "/hdfs/olebreton/1",
                    "size": 3,
                    "hash": 6
                }, {
                    "path": "/hdfs/olebreton/1",
                    "size": 4,
                    "hash": 7
                }]
            }, {
                "path": "/hdfs/melmoumni",
                "size": 14,
                "hash": 3,
                "children":[{
                    "path": "/hdfs/melmoumni/1",
                    "size": 13,
                    "hash": 5,
                    "children": [{
                        "path": "/hdfs/melmoumni/1/1",
                        "size": 13,
                        "hash": 5,
                        "children": [{
                            "path": "/hdfs/melmoumni/1/1/1",
                            "size": 13,
                            "hash": 5,
                            "children": [{
                                "path": "/hdfs/melmoumni/1/1/1",
                                "size": 13,
                                "hash": 5
                            }]
                        }]
                    }]
                },{
                    "path": "/hdfs/melmoumni/2",
                    "size": 1,
                    "hash": 5
                }]
            }, {
                "path": "/hdfs/vachet",
                "size": 13,
                "hash": 4
            }, {
                "path": "/hdfs/melmoumni",
                "size": 12,
                "hash": 3,
                "children":[{
                    "path": "/hdfs/melmoumni/1",
                    "size": 12,
                    "hash": 5,
                    "children": [{
                        "path": "/hdfs/melmoumni/1/1",
                        "size": 5,
                        "hash": 5
                    }, {
                        "path": "/hdfs/melmoumni/1/1/1",
                        "size": 5,
                        "hash": 5
                    }, {
                        "path": "/hdfs/melmoumni/1/1/1",
                        "size": 2,
                        "hash": 5
                    }]
                }]

            }, {
                "path": "/hdfs/vachet",
                "size": 11,
                "hash": 4,
                "children":[{
                    "path": "/hdfs/melmoumni/1",
                    "size": 5,
                    "hash": 5,
                    "children": [{
                        "path": "/hdfs/melmoumni/1/1",
                        "size": 2,
                        "hash": 5
                    }, {
                        "path": "/hdfs/melmoumni/1/1/1",
                        "size": 2,
                        "hash": 5
                    }, {
                        "path": "/hdfs/melmoumni/1/1/1",
                        "size": 2,
                        "hash": 5
                    }]
                },{
                    "path": "/hdfs/melmoumni/1",
                    "size": 5,
                    "hash": 5,
                    "children": [{
                        "path": "/hdfs/melmoumni/1/1",
                        "size": 1,
                        "hash": 5
                    }, {
                        "path": "/hdfs/melmoumni/1/1/1",
                        "size": 1,
                        "hash": 5
                    },{
                        "path": "/hdfs/melmoumni/1/1",
                        "size": 1,
                        "hash": 5
                    }, {
                        "path": "/hdfs/melmoumni/1/1/1",
                        "size": 1,
                        "hash": 5
                    }, {
                        "path": "/hdfs/melmoumni/1/1/1",
                        "size": 1,
                        "hash": 5
                    }]
                },{
                    "path": "/hdfs/melmoumni/1",
                    "size": 1,
                    "hash": 5,
                    "children": [{
                        "path": "/hdfs/melmoumni/1",
                        "size": 1,
                        "hash": 5,
                        "children": [{
                            "path": "/hdfs/melmoumni/1",
                            "size": 1,
                            "hash": 5
                        }]
                    }]
                }]
            }, {
                "path": "/hdfs/melmoumni",
                "size": 10,
                "hash": 3,
                "children":[{
                    "path": "/hdfs/melmoumni/1",
                    "size": 3,
                    "hash": 5,
                    "children":[{
                        "path": "/hdfs/melmoumni/1",
                        "size": 1,
                        "hash": 5
                    }, {
                        "path": "/hdfs/melmoumni/1",
                        "size": 1,
                        "hash": 5
                    }, {
                        "path": "/hdfs/melmoumni/1",
                        "size": 1,
                        "hash": 5
                    }]
                }, {
                    "path": "/hdfs/melmoumni/1",
                    "size": 3,
                    "hash": 5,
                    "children":[{
                        "path": "/hdfs/melmoumni/1",
                        "size": 1,
                        "hash": 5
                    }, {
                        "path": "/hdfs/melmoumni/1",
                        "size": 0.5,
                        "hash": 5
                    }, {
                        "path": "/hdfs/melmoumni/1",
                        "size": 0.5,
                        "hash": 5
                    }, {
                        "path": "/hdfs/melmoumni/1",
                        "size": 0.5,
                        "hash": 5
                    }, {
                        "path": "/hdfs/melmoumni/1",
                        "size": 0.5,
                        "hash": 5
                    }]
                }, {
                    "path": "/hdfs/melmoumni/1",
                    "size": 3,
                    "hash": 5
                }, {
                    "path": "/hdfs/melmoumni/1",
                    "size": 1,
                    "hash": 5
                }]
            }, {
                "path": "/hdfs/vachet",
                "size": 9,
                "hash": 4,
                "children":[{
                    "path": "/hdfs/melmoumni/1",
                    "size": 3,
                    "hash": 5
                }, {
                    "path": "/hdfs/melmoumni/1",
                    "size": 3,
                    "hash": 5
                }, {
                    "path": "/hdfs/melmoumni/1",
                    "size": 3,
                    "hash": 5
                }]
            }, {
                "path": "/hdfs/melmoumni",
                "size": 8,
                "hash": 3,
                "children":[{
                    "path": "/hdfs/melmoumni/1",
                    "size": 3,
                    "hash": 5,
                    "children": [{
                        "path": "/hdfs/melmoumni/1/1",
                        "size": 1,
                        "hash": 5
                    }, {
                        "path": "/hdfs/melmoumni/1/1/1",
                        "size": 1,
                        "hash": 5
                    }, {
                        "path": "/hdfs/melmoumni/1/1/1",
                        "size": 1,
                        "hash": 5
                    }]
                },{
                    "path": "/hdfs/melmoumni/1",
                    "size": 5,
                    "hash": 5,
                    "children": [{
                        "path": "/hdfs/melmoumni/1/1",
                        "size": 1,
                        "hash": 5
                    }, {
                        "path": "/hdfs/melmoumni/1/1/1",
                        "size": 1,
                        "hash": 5
                    },{
                        "path": "/hdfs/melmoumni/1/1",
                        "size": 1,
                        "hash": 5
                    }, {
                        "path": "/hdfs/melmoumni/1/1/1",
                        "size": 1,
                        "hash": 5
                    }, {
                        "path": "/hdfs/melmoumni/1/1/1",
                        "size": 1,
                        "hash": 5
                    }]
                }]
            }, {
                "path": "/hdfs/vachet",
                "size": 7,
                "hash": 4
            }, {
                "path": "/hdfs/vachet",
                "size": 6,
                "hash": 4
            }]
        },
        "cache" : [{
            "path": "/hdfs/melmoumni",
            "size": 10,
            "hash": 3,
            "children":[{
                "path": "/hdfs/melmoumni/1",
                "size": 3,
                "hash": 5,
                "children":[{
                    "path": "/hdfs/melmoumni/1",
                    "size": 1,
                    "hash": 5
                }, {
                    "path": "/hdfs/melmoumni/1",
                    "size": 1,
                    "hash": 5
                }, {
                    "path": "/hdfs/melmoumni/1",
                    "size": 1,
                    "hash": 5
                }]
            }, {
                "path": "/hdfs/melmoumni/1",
                "size": 3,
                "hash": 5,
                "children":[{
                    "path": "/hdfs/melmoumni/1",
                    "size": 1,
                    "hash": 5
                }, {
                    "path": "/hdfs/melmoumni/1",
                    "size": 0.5,
                    "hash": 5
                }, {
                    "path": "/hdfs/melmoumni/1",
                    "size": 0.5,
                    "hash": 5
                }, {
                    "path": "/hdfs/melmoumni/1",
                    "size": 0.5,
                    "hash": 5
                }, {
                    "path": "/hdfs/melmoumni/1",
                    "size": 0.5,
                    "hash": 5
                }]
            }, {
                "path": "/hdfs/melmoumni/1",
                "size": 3,
                "hash": 5
            }, {
                "path": "/hdfs/melmoumni/1",
                "size": 1,
                "hash": 5
            }]
        }]
    };

    sunburst.drawSunburst(model);
    sunburstEventsController.manageMouseoverArcs();
    sunburstEventsController.manageMouseclickArcs();
});
