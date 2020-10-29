
import React, { Component } from "react";
import Sketch from "react-p5";

let streams = []
let stream
function Symbol(p5, x, y, speed) {
    this.x = x
    this.y = y
    this.value = 0
    this.speed = speed

    this.setToRandomSymbol = function () {
        this.value = p5.round(p5.random(0, 9))
    }

    this.rain = function () {
        this.y = this.y < p5.windowHeight ? this.y += this.speed : 0
    }
}

function Stream(p5, x, y, total) {
    this.total = total
    this.totalSymbol = []
    this.speed = p5.round(p5.random(2, 5))
    this.symbolSize = p5.round(p5.random(12, 30))
    this.generateSymbol = function () {
        for (let index = 0; index < this.total; index++) {
            let symbol = new Symbol(p5, x, y, this.speed)
            symbol.setToRandomSymbol()
            this.totalSymbol.push(symbol)
            y = y - this.symbolSize
        }
    }
    this.render = function () {
        this.totalSymbol.forEach(element => {
            p5.fill(14, 69, 149)
            p5.text(element.value, element.x, element.y)
            p5.textSize(this.symbolSize)
            element.rain()
        });
    }
}


export default class P5 extends Component {

    windowResized = p5 => {
        p5.resizeCanvas(p5.windowWidth / 12 * 7, p5.windowHeight)
    };

    setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.windowWidth / 12 * 7, p5.windowHeight).parent(canvasParentRef);
        //创建new ()里面要写上p5
        stream = new Stream(p5, 200, 200, 20)
        stream.generateSymbol()
    };



    draw = p5 => {
        p5.background(0, 150)
        stream.render()
    }

    render() {
        return <Sketch setup={this.setup} draw={this.draw} mousePressed={this.mousePressed} windowResized={this.windowResized} mouseReleased={this.mouseReleased} />
    }
}