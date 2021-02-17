"use strict";
exports.__esModule = true;
exports.stdDeviation = exports.mean = exports.LinkedList = void 0;
var LinkedList = /** @class */ (function () {
    function LinkedList() {
    }
    LinkedList.prototype.isEmpty = function () {
        return !this.head;
    };
    LinkedList.prototype.append = function (value) {
        if (!this.head) {
            var newNode = { value: value };
            this.head = newNode;
            return;
        }
        var current = this.head;
        while (current.next) {
            current = current.next;
        }
        var tail = current;
        tail.next = { value: value };
    };
    LinkedList.prototype.get = function (index) {
        if (!this.head || index < 0)
            return undefined;
        var currentItem = this.head;
        var currentIndex = 0;
        do {
            if (currentIndex === index)
                return currentItem; // RETURN SELECTED NODE
            currentItem = currentItem.next;
            currentIndex += 1;
        } while (currentItem);
        return undefined;
    };
    LinkedList.prototype.fromArray = function (array) {
        var linkedList = new LinkedList();
        array.forEach(function (elem) { linkedList.append(elem); });
        return linkedList;
    };
    LinkedList.prototype.toArray = function () {
        var array = [];
        var current = this.head;
        while (current) {
            array.push(current.value);
            current = current.next;
        }
        return array;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
function mean(list) {
    var sum = 0;
    var count = 0;
    var current = list.head;
    while (current) {
        sum += current.value;
        count += 1;
        current = current.next;
    }
    if (count = 0)
        return 0;
    return sum / count;
}
exports.mean = mean;
function stdDeviation(list) {
    var avg = mean(list);
    var n = 0;
    var current = list.head;
    var diffSquaresSum = 0;
    while (current) {
        var diff = current.value - avg;
        diffSquaresSum += (diff ^ 2);
        current = current.next;
        n += 1;
    }
    return Math.sqrt(diffSquaresSum / (n + 1));
}
exports.stdDeviation = stdDeviation;