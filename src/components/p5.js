import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Sketch from "react-p5";
import './p5.css'

let px, py

export default class P5 extends Component {

    setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight * 5).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
        px = p5.width / 2;
        py = p5.height / 2;
        p5.mouseX = p5.width / 2;
        p5.mouseY = p5.height / 2


    };

    windowResized = p5 => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
    };

    draw = p5 => {
        p5.clear();
        p5.background(255, 255, 255, 0);
        // Black background
        // p5.background(0);
        const dt = p5.deltaTime / 200;

        // Spring toward mouse position
        const power = 1;
        px = spring(px, p5.mouseX, power, dt);
        py = spring(py, p5.mouseY, power, dt);

        let redColor = 'rgb(254,59,18)'
        // Draw the circle
        p5.noFill();
        p5.stroke(redColor);
        p5.strokeWeight(2);
        const r0 = 50;
        p5.ellipse(px, py, r0, r0);

        p5.fill(redColor);
        // p5.stroke('green');
        // p5.strokeWeight(dim * 0.015);
        const r1 = 36;
        p5.ellipse(p5.mouseX, p5.mouseY, r1, r1);

        function spring(a, b, power, dt) {
            return p5.lerp(a, b, 1 - Math.exp(-power * dt));
        }

        // NOTE: Do not use setState in draw function or in functions that is executed in draw function... pls use normal variables or class properties for this purposes
    };

    render() {
        return <Sketch setup={this.setup} draw={this.draw} mousePressed={this.mousePressed} windowResized={this.windowResized} mouseReleased={this.mouseReleased} />;
    }
}