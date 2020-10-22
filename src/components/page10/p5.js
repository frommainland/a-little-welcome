import { func } from "prop-types";
import React, { Component } from "react";
import Sketch from "react-p5";

let symbol
let stream
let symbolSize = 60

function Symbol(p5, x, y, speed) {
    this.x = x
    this.y = y
    this.value = 0
    this.speed = speed
    this.switchInteval = p5.round(p5.random(2, 10))

    this.setToRandomSymbol = function () {
        if (p5.frameCount % this.switchInteval === 0) {
            this.value = String.fromCharCode(
                0x30A0 + p5.round(p5.random(0, 96))
            )
        }

    }

    this.rain = function () {
        this.y = this.y < p5.windowHeight ? this.y += this.speed : 0

    }
}

function Stream(p5) {
    this.speed = p5.random(2, 5)
    this.symbolNumber = p5.round(p5.random(5, 10))
    this.totalSymbol = []

    this.generateSymbol = function () {
        let x = p5.width / 2
        let y = 0
        for (let index = 0; index < this.symbolNumber; index++) {
            symbol = new Symbol(p5, x, y, this.speed)
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
        stream = new Stream(p5)
        stream.generateSymbol()
        p5.textSize(symbolSize)
    };

    windowResized = p5 => {
        p5.resizeCanvas(p5.windowWidth / 12 * 7, p5.windowHeight)
    };

    draw = p5 => {
        p5.clear()
        stream.render()
    }

    render() {
        return <Sketch setup={this.setup} draw={this.draw} mousePressed={this.mousePressed} windowResized={this.windowResized} mouseReleased={this.mouseReleased} />
    }
}