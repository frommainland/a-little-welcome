
import React, { Component } from "react";
import Sketch from "react-p5";


let stream
let allStream = []

function Symbol(p5, x, y, size) {
    this.x = x
    this.y = y
    this.size = size
    this.value = 0
    ////试试一共25个字母
    this.total = 25

    this.setToRandomSymbol = function () {
        this.value = p5.round(p5.random(0, 9))
    }
    this.setToRandomSymbol()
    this.render = function (index) {
        p5.textSize(this.size)
        if (index === 0) {
            p5.fill(242, 174, 20)
        } else {
            p5.fill(14, 69, 149, 255 - index * (255 / this.total))
        }
        p5.text(this.value, this.x, this.y)
    }

}

function Stream(p5, x, y, yspeed) {
    this.x = x
    this.y = y
    this.yspeed = yspeed
    this.totalSymbol = []
    this.size = this.yspeed * 2

    this.generateSymbol = function () {
        this.totalSymbol = []
        for (let index = 0; index < 25; index++) {
            let symbol = new Symbol(p5, this.x, this.y - index * this.size, this.size)
            this.totalSymbol.push(symbol)
        }
    }
    this.generateSymbol()


    this.render = function () {

        if (this.y >= this.totalSymbol[0].y + this.size) {
            this.totalSymbol.unshift(new Symbol(p5, this.x, this.y, this.size))
            this.totalSymbol.pop()
        }
        if (this.totalSymbol[this.totalSymbol.length - 1].y > p5.windowHeight) {
            this.y = 0
            this.generateSymbol()
        }
        this.totalSymbol.forEach((element, index) => {
            element.render(index)
        });
        if (p5.random(1, 100) < 20) {
            this.totalSymbol[p5.floor(p5.random(this.totalSymbol.length))].setToRandomSymbol()
        }

        this.y += (this.yspeed)
    }


}


export default class P5 extends Component {

    windowResized = p5 => {
        p5.resizeCanvas(p5.windowWidth / 12 * 7, p5.windowHeight)
    };

    setup = (p5, canvasParentRef) => {
        p5.frameRate(30)
        p5.createCanvas(p5.windowWidth / 12 * 7, p5.windowHeight).parent(canvasParentRef);
        //创建new ()里面要写上p5
        let totalStream = 80
        for (let index = 0; index < 80; index++) {
            allStream.push(new Stream(p5, index * (p5.width / totalStream), p5.random(0, p5.height), p5.random(3, 16)))
        }
        p5.noStroke()
        p5.textStyle(p5.BOLD)
    };

    draw = p5 => {
        p5.background(0)
        allStream.forEach(element => {
            element.render()
        });
    }

    render() {
        return <Sketch setup={this.setup} draw={this.draw} mousePressed={this.mousePressed} windowResized={this.windowResized} mouseReleased={this.mouseReleased} />
    }
}