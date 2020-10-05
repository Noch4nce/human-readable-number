module.exports = function toReadable (number) {

    if (number === 9) {
        return number = 'nine';
    } else if (number === 8) {
        return number = 'eight';
    } else if (number === 7) {
        return number = 'seven';
    } else if (number === 6) {
        return number = 'six';
    } else if (number === 5) {
        return number = 'five';
    } else if (number === 4) {
        return number = 'four';
    } else if (number === 3) {
        return number = 'three';
    } else if (number === 2) {
        return number = 'two';
    } else if (number === 1) {
        return number = 'one';
    } else if (number === 0) {
        return number = 'zero';
    }

    let numEl = number.toString().split('');

    let res = '';

    for (let i = 0; i < numEl.length; i++) {
        switch (numEl[i]) {
            case '0':
                res+=' zero';
                break;
            case '1':
                res+=' one';
                break;
            case '2':
                res+=' two';
                break;
            case '3':
                res+=' three';
                break;
            case '4':
                res+=' four';
                break;
            case '5':
                res+=' five';
                break;
            case '6':
                res+=' six';
                break;
            case '7':
                res+=' seven';
                break;
            case '8':
                res+=' eight';
                break;
            case '9':
                res+=' nine';
                break;
        }
    }

    let hund = res.split(' ').slice(1);

    if (hund[2] == undefined && hund[1] == 'zero' && hund[0] == 'eight') {
        return hund = `${hund[0]}y`
    } else if (hund[2] == undefined && hund[0] == 'eight') {
        return hund = `${hund[0]}y ${hund[1]}`
    }

    if (hund[2] == undefined && hund[1] == 'zero' && hund[0] == 'five') {
        return hund = `${hund[0].slice(0, -2)}fty`
    } else if (hund[2] == undefined && hund[0] == 'five') {
        return hund = `${hund[0].slice(0, -2)}fty ${hund[1]}`
    }

    if (hund[2] == undefined && hund[1] == 'zero' && hund[0] == 'four') {
        return hund = `${hund[0].slice(0, -2)}rty`
    } else if (hund[2] == undefined && hund[0] == 'four') {
        return hund = `${hund[0].slice(0, -2)}rty ${hund[1]}`
    }

    if (hund[2] == undefined && hund[1] == 'zero' && hund[0] == 'three') {
        return hund = `${hund[0].slice(0, -3)}irty`
    } else if (hund[2] == undefined && hund[0] == 'three') {
        return hund = `${hund[0].slice(0, -3)}irty ${hund[1]}`
    }

    if (hund[2] == undefined && hund[1] == 'zero' && hund[0] == 'two') {
        return hund = `${hund[0].slice(0, -1)}enty`
    } else if (hund[2] == undefined && hund[0] == 'two') {
        return hund = `${hund[0].slice(0, -1)}enty ${hund[1]}`
    }

    if (hund[0] == 'one' && hund[2] == undefined) {
        if (hund[1] == 'zero') {
            return hund = `ten`
        } else if (hund[1] == 'one') {
            return hund = `eleven`
        } else if (hund[1] == 'eight') {
            return hund = `${hund[1]}een`
        } else if (hund[1] == 'five') {
            return hund = `${hund[1].slice(0, -2)}fteen`
        } else if (hund[1] == 'three') {
            return hund = `${hund[1].slice(0, -3)}irteen`
        } else if (hund[1] == 'two') {
            return hund = `${hund[1].slice(0, -1)}elve`
        } else {
            return hund = `${hund[1]}teen`
        }
    }

    if (hund[2] == undefined && hund[1] == 'zero') {
        return hund = `${hund[0]}ty`
    } else if (hund[2] == undefined) {
        return hund = `${hund[0]}ty ${hund[1]}`
    }

    if (hund[1] == 'one' && hund[2] == 'zero') {
        return hund = `${hund[0]} hundred ten`
    } else if (hund[1] == 'zero' && hund[2] == 'zero') {
        return hund = `${hund[0]} hundred`
    }

    if (hund[1] == 'one') {
        if (hund[2] == 'one') {
            return hund = `${hund[0]} hundred eleven`
        } else if (hund[2] == 'eight') {
            return hund = `${hund[0]} hundred ${hund[2]}een`
        } else if (hund[2] == 'five') {
            return hund = `${hund[0]} hundred ${hund[2].slice(0, -2)}fteen`
        } else if (hund[2] == 'three') {
            return hund = `${hund[0]} hundred ${hund[2].slice(0, -3)}irteen`
        } else if (hund[2] == 'two') {
            return hund = `${hund[0]} hundred ${hund[2].slice(0, -1)}elve`
        } else {
            return hund = `${hund[0]} hundred ${hund[2]}teen`
        }
    }

    if (hund[1] == 'two' && hund[2] == 'zero') {
        return hund = `${hund[0]} hundred ${hund[1].slice(0, -1)}enty`
    } else if (hund[1] == 'two') {
        return hund = `${hund[0]} hundred ${hund[1].slice(0, -1)}enty ${hund[2]}`
    }

    if (hund[1] == 'three' && hund[2] == 'zero') {
        return hund = `${hund[0]} hundred ${hund[1].slice(0, -3)}irty`
    } else if (hund[1] == 'three') {
        return hund = `${hund[0]} hundred ${hund[1].slice(0, -3)}irty ${hund[2]}`
    }

    if (hund[1] == 'four' && hund[2] == 'zero') {
        return hund = `${hund[0]} hundred ${hund[1].slice(0, -2)}rty`
    } else if (hund[1] == 'four') {
        return hund = `${hund[0]} hundred ${hund[1].slice(0, -2)}rty ${hund[2]}`
    }

    if (hund[1] == 'five' && hund[2] == 'zero') {
        return hund = `${hund[0]} hundred ${hund[1].slice(0, -2)}fty`
    } else if (hund[1] == 'five') {
        return hund = `${hund[0]} hundred ${hund[1].slice(0, -2)}fty ${hund[2]}`
    }

    if (hund[1] == 'eight' && hund[2] == 'zero') {
        return hund = `${hund[0]} hundred ${hund[1]}y`
    } else if (hund[1] == 'eight') {
        return hund = `${hund[0]} hundred ${hund[1]}y ${hund[2]}`
    }

    if  (hund[2] == 'zero') {
        return hund = `${hund[0]} hundred ${hund[1]}ty`
    } else if (hund[1] == 'zero') {
        return hund = `${hund[0]} hundred ${hund[2]}`
    } else if (hund) {
        return hund = `${hund[0]} hundred ${hund[1]}ty ${hund[2]}`
    }
}