
import React, { Component } from "react";
import Sketch from "react-p5";

let streams = []
let symbolSize = 24

function Symbol(p5, x, y, speed) {
    this.x = x
    this.y = y
    this.value = 0
    this.speed = speed
    this.switchInteval = p5.round(p5.random(2, 10))

    this.setToRandomSymbol = function () {
        if (p5.frameCount % this.switchInteval === 0) {
            this.value = String.fromCharCode(
                0x300 + p5.round(p5.random(0, 96))
            )
        }

    }

    this.rain = function () {
        this.y = this.y < p5.windowHeight ? this.y += this.speed : 0

    }
}

function Stream(p5, x, y) {
    this.speed = p5.random(2, 20)
    this.symbolNumber = p5.round(p5.random(5, 10))
    this.totalSymbol = []

    this.generateSymbol = function () {
        for (let index = 0; index < this.symbolNumber; index++) {
            let symbol = new Symbol(p5, x, y, this.speed)
            symbol.setToRandomSymbol()
            this.totalSymbol.push(symbol)
            y -= symbolSize
        }
    }

    this.render = function () {
        this.totalSymbol.forEach(element => {
            p5.fill(0, 255, 70)
            p5.text(element.value, element.x, element.y)
            element.rain()
            element.setToRandomSymbol()
        });
    }


}

export default class P5 extends Component {

    setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.windowWidth / 12 * 7, p5.windowHeight).parent(canvasParentRef);
        //创建new ()里面要写上p5
        let x = 0
        let y = 0
        for (let index = 0; index < p5.width / symbolSize; index++) {
            let stream = new Stream(p5, x, y)
            stream.generateSymbol()
            streams.push(stream)
            x = x + symbolSize
        }
        p5.textSize(symbolSize)
    };

    windowResized = p5 => {
        p5.resizeCanvas(p5.windowWidth / 12 * 7, p5.windowHeight)
    };

    draw = p5 => {
        p5.background(0, 150)
        streams.forEach(element => {
            element.render()
        });
    }

    render() {
        return <Sketch setup={this.setup} draw={this.draw} mousePressed={this.mousePressed} windowResized={this.windowResized} mouseReleased={this.mouseReleased} />
    }
}