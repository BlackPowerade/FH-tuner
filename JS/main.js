var _a, _b, _c, _d, _e;
function Bump(weight, HZ) {
    let damp = ((2 * weight * HZ) / 1000) * 2;
    return damp;
}
function SpringRate(weight, HZ) {
    let rate = (4 * Math.pow(Math.PI, 2));
    rate *= (Math.pow(HZ, 2));
    rate *= weight;
    rate *= 0.0057101471627692; // Convert to N/m to lbs/in
    return rate;
}

// class vehicle
// {
//     mass: number;
//     distribution: number;
//     front: number;
//     rear: number;
//     constructor(mass: number, distribution: number) 
//     {
//         this.mass = mass * 0.453592370010035 // convert lbs to kg
//         this.distribution = distribution
//         this.front = this.mass * (distribution/100);
//         this.rear = this.mass - this.front;
//     }
// }
// let mass: number = Number((document.getElementById('mass') as HTMLInputElement).value) * 0.453592370010035
// let dist: number = Number((document.getElementById('dist') as HTMLInputElement).value)
// let front: number = mass * dist/100
// let rear: number = mass - front
// let fronthz: number = Number((document.getElementById('fronthz') as HTMLInputElement).value)
// let rearhz: number = Number((document.getElementById('rearhz') as HTMLInputElement).value)
// let frontSpringRate = SpringRate(front, fronthz)
// let rearSpringRate = SpringRate(rear, rearhz)
// let frontBump = Bump(front, fronthz)
// let rearBump = Bump(rear, rearhz)
// document.getElementById('frontspring').innerHTML = String(frontSpringRate)
// document.getElementById('rearspring').innerHTML = String(rearSpringRate)
// document.getElementById('frontbump').innerHTML = String(frontBump)
// document.getElementById('rearbump').innerHTML = String(rearBump)
function update() {
    let mass = Number(document.getElementById('mass').value) * 0.453592370010035;
    let pounds = Number(document.getElementById('mass').value);
    let dist = Number(document.getElementById('dist').value);
    let front = mass * dist / 100;
    let rear = mass - front;
    let fronthz = Number(document.getElementById('fronthz').value);
    let rearhz = Number(document.getElementById('rearhz').value);
    let frontSpringRate = SpringRate(front, fronthz);
    let rearSpringRate = SpringRate(rear, rearhz);
    let frontBump = Bump(front, fronthz);
    let rearBump = Bump(rear, rearhz);
    let frontRebound = frontBump / 0.45;
    let rearRebound = rearBump / 0.45;
    let arbcoef = Number(document.getElementById('arbcoef').value);
    let arbstiff = ((pounds / 2) / (200 - 200 * arbcoef)) * 2;
    let arbfront = 0;
    let arbrear = 0;
    if (dist > 50) {
        arbfront = arbstiff * (((dist / 100 - 0.5) * 1.5) + 0.5);
        arbrear = arbstiff - arbfront;
    }
    else {
        arbrear = arbstiff * ((((100 - dist) / 100 - 0.5) * 1.5) + 0.5);
        arbfront = arbstiff - arbrear;
    }
    document.getElementById('front').innerHTML = front.toFixed(2);
    document.getElementById('rear').innerHTML = rear.toFixed(2);
    document.getElementById('frontspring').innerHTML = frontSpringRate.toFixed(1);
    document.getElementById('rearspring').innerHTML = rearSpringRate.toFixed(1);
    document.getElementById('frontbump').innerHTML = frontBump.toFixed(1);
    document.getElementById('rearbump').innerHTML = rearBump.toFixed(1);
    document.getElementById('frontrebound').innerHTML = frontRebound.toFixed(1);
    document.getElementById('rearrebound').innerHTML = rearRebound.toFixed(1);
    document.getElementById('arbfront').innerHTML = arbfront.toFixed(2);
    document.getElementById('arbrear').innerHTML = arbrear.toFixed(2);
}
(_a = document.getElementById('mass')) === null || _a === void 0 ? void 0 : _a.addEventListener("change", update);
(_b = document.getElementById('dist')) === null || _b === void 0 ? void 0 : _b.addEventListener("change", update);
(_c = document.getElementById('fronthz')) === null || _c === void 0 ? void 0 : _c.addEventListener("change", update);
(_d = document.getElementById('rearhz')) === null || _d === void 0 ? void 0 : _d.addEventListener("change", update);
(_e = document.getElementById('arbcoef')) === null || _e === void 0 ? void 0 : _e.addEventListener("change", update);
