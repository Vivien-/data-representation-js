define(function (require) {
    var canvasUtils = require('./canvasUtils');

    var conf = {
        "getThickness": 50,
        "padding": 1,
        "initialRadius": 50,
        "maxDepth": 6,
        "globalAlpha": 1
    };

    var canvas = document.getElementById('sunburstCanvas');
    canvasUtils.setConf(conf);

    var arcs = [];
    var addArc = function (arcRadius, angleStart, angleEnd, arcColor, id) {
        arcs.push({
            cx: canvas.width / 2,
            cy: canvas.height / 2,
            radius: arcRadius,
            start: angleStart,
            end: angleEnd,
            color: arcColor,
            hash: id
        });
    }

    /**
     * [Draw the arc of every children in the model]
     * @param  {Javascript Object} current  [the model.current object describing the current context]
     * @param  {[Integer]} depth [the level of children (0 for root children, 1 for root grandchildren)]
     * @param  {[Integer]} beginAngle [The angle of the first arc to be drawn]
     * @param  {[Integer]} endAngle [The angle of the last arc to be drawn]
     */
     var drawArcs = function (current, depth, beginAngle, endAngle) {
        if(typeof current === 'undefined' || typeof current.children === 'undefined') {
            console.debug("No children found. No arc will be created.");
            return;
        }

        if(depth >= conf.maxDepth) {
            console.debug("Maximum depth reached. Not creating any more arc, you can change the maximum depth in the conf variable.");
            return;
        }

        var sortedChildren = current.children.sort(function(a, b) {
            return a.size < b.size;
        });

        var totalSize = current.size;
        var angleBegin = beginAngle;
        var angleTaken = 0;
        var anglePadding = 1 / (depth+1);

        for (var i = 0; i < sortedChildren.length; ++i) {
            // Compute usefull datas to draw the arc
            angleTaken = ((sortedChildren[i].size * 100) / totalSize) * ((endAngle-beginAngle) / 100);
            var color = canvasUtils.getColor(angleBegin, depth);
            var radius = conf.initialRadius + depth * (conf.getThickness + conf.padding);

            // Draw the current arc
            canvasUtils.drawArc(radius, angleBegin, angleBegin+angleTaken - anglePadding, color);
            addArc(radius, angleBegin, angleBegin+angleTaken - anglePadding, color, sortedChildren[i].hash);

            // Recursively call this function to draw the current arc's children arcs
            drawArcs(current.children[i], depth + 1, angleBegin, angleBegin+angleTaken);

            // Add the created arc to the controller so we can manage mouseover/mouseclick event on arcs
            angleBegin += angleTaken;
        }
    };

    /**
    * Create the infos arround the sunburst
    * @param {Javascript Object} model the model describing the sunburst.
    */
    var addContext = function (model) {
        if(typeof model === 'undefined') {
            console.debug("No context found.");
            return;
        }

        // TODO
        // Display the path names, size, etc..
    };

    return {
        drawSunburst: function (model) {
            drawArcs(model.current, 0, 0, 360);
            addContext(model);
        },
        getArcs: function() {
            return arcs;
        },
        deleteArcs: function() {
            arcs = [];
        }
    };
});
