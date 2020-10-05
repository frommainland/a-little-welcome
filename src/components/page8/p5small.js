import React, { Component } from "react";
import Sketch from "react-p5";


export default class P5small extends Component {

    setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.windowWidth * .083, p5.windowWidth * .083).parent(canvasParentRef);
        // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
    };

    windowResized = p5 => {
        p5.resizeCanvas(p5.windowWidth * .083, p5.windowWidth * .083)
    };

    draw = p5 => {
        let p5StartTime = p5.millis()
        // console.log(`***${this.props.animateStartTime}`);
        if (p5StartTime > this.props.animateStartTime) {
            p5.clear()
            // Stroke only with a specific join style and thickness
            p5.noFill();
            p5.stroke(104);
            p5.strokeJoin(p5.MITER);
            p5.strokeWeight(p5.width * .15);

            // Get time in seconds
            const time = (p5.millis() - this.props.animateStartTime) / 1000;


            // Get a value that ping-pongs from 0 ... 1
            const pingPong = p5.sin(time * 0.75 - p5.PI / 2) * 0.5 + 0.5;

            // Get a number of points, using pow() to skew to one end
            const points = p5.lerp(2, 50, p5.pow(pingPong, 2.5));

            // Size of shape
            const radius = p5.windowWidth * .05 / 2;

            // Draw shape with an angle offset
            const angle = pingPong * p5.PI * 2;
            polygon(p5.width / 2, p5.height / 2, radius, points, angle);


            function polygon(x, y, radius, sides = 3, angle = 0) {
                p5.beginShape();
                for (let i = 0; i < sides; i++) {
                    const a = angle + p5.TWO_PI * (i / sides);
                    let sx = x + p5.cos(a) * radius;
                    let sy = y + p5.sin(a) * radius;
                    p5.vertex(sx, sy);
                }
                p5.endShape(p5.CLOSE);
            }
        }


        // NOTE: Do not use setState in draw function or in functions that is executed in draw function... pls use normal variables or class properties for this purposes
    };

    render() {
        return <Sketch setup={this.setup} draw={this.draw} mousePressed={this.mousePressed} windowResized={this.windowResized} mouseReleased={this.mouseReleased} />
    }
}