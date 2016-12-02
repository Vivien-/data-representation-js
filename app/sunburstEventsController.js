define(function (require) {
    var canvasUtils = require('./canvasUtils');
    var sunburst = require('./sunburst');

    var toRadian = canvasUtils.toRadian;

    var canvas = document.getElementById('sunburstCanvas');

    var offsetX = canvas.offsetLeft;
    var offsetY = canvas.offsetTop;
    var context = canvas.getContext('2d');

    var increaseLuminance = function(hslString) {
        var l = hslString.split(',')[2].slice(0, -2);
        var increasedLuminance = parseFloat(l) * 1.5;
        var color = hslString.split(',')[0] + "," + hslString.split(',')[1] + "," + increasedLuminance + "%)";
        return color;
    }

    var getSelectedArc = function(x,y, arcs) {
        for (var i = 0; i < arcs.length; i++) {
            defineArc(arcs[i]);
            if (context.isPointInStroke(x, y)) {
                return arcs[i];
            }
        }
        return;
    }

    var handleMouseMove = function (e) {
        // get mouse position
        var arcs = sunburst.getArcs();
        var mouseX = parseInt(e.clientX - offsetX);
        var mouseY = parseInt(e.clientY - offsetY);

        var overArc = getSelectedArc(mouseX, mouseY, arcs);

        if(typeof overArc !== 'undefined') {
            canvasUtils.drawArc(overArc.radius, overArc.start, overArc.end, increaseLuminance(overArc.color), 'source-atop');
        }

        for (var i = 0; i < arcs.length; i++) {
            // define one arc (set it in context)
            defineArc(arcs[i]);

            // test that one arc
            if (!context.isPointInStroke(mouseX, mouseY)) {
                canvasUtils.drawArc(arcs[i].radius, arcs[i].start, arcs[i].end, arcs[i].color, 'source-atop');
            }

        }
    }

    var handleMouseClick = function(e) {
        var arcs = sunburst.getArcs();
        var mouseX = parseInt(e.clientX - offsetX);
        var mouseY = parseInt(e.clientY - offsetY);
        var clickedArc = getSelectedArc(mouseX, mouseY, arcs);

        if(typeof clickedArc !== 'undefined') {
            canvasUtils.clearSunburst();
            sunburst.updateSunburst(clickedArc.hash);
            sunburst.deleteArcs();
        }
    }

    // define BUT NOT VISIBLY DRAW an arc
    var defineArc = function (arc) {
        context.beginPath();
        context.arc(canvas.width / 2, canvas.height / 2, arc.radius, toRadian(arc.start), toRadian(arc.end), false);
        context.lineWidth = 50;
    }

    return {
        manageMouseoverArcs: function () {
            document.getElementById("sunburstCanvas").addEventListener("mousemove", function (e) {
                handleMouseMove(e);
            })
        },
        manageMouseclickArcs: function () {
            document.getElementById("sunburstCanvas").addEventListener("click", function (e) {
                handleMouseClick(e);
            })
        }
    };

});
