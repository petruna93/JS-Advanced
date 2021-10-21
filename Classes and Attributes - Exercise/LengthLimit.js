class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = Number(innerLength);
    }

    increase(length) {
        return this.innerLength += length;
    }

    decrease(length) {
        if (this.innerLength - length < 0) {
            return this.innerLength = 0;
        }
        return this.innerLength -= length;
    }

    toString() {
        if (this.innerLength == 0) {
            return "...";
        } else if (this.innerString.length <= this.innerlength) {
            return this.innerString;
        } else {
            let result = this.innerString.slice(0, this.innerLength);
            return result += "...";
        }
    }
}