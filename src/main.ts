import "./styles.scss"
import { Bump } from "./Bump";
import { SpringRate } from "./SpringRate";
import { Rebound } from "./Rebound";

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


function update(): void
{
    let mass: number = Number((document.getElementById('mass') as HTMLInputElement).value) * 0.453592370010035
    let pounds: number = Number((document.getElementById('mass') as HTMLInputElement).value)
    let dist: number = Number((document.getElementById('dist') as HTMLInputElement).value)
    let front: number = mass * dist/100
    let rear: number = mass - front 
    
    let frontHz: number = Number((document.getElementById('frontHz') as HTMLInputElement).value)
    let rearHz: number = Number((document.getElementById('rearHz') as HTMLInputElement).value)

    let frontSpringRate = SpringRate(front, frontHz)
    let rearSpringRate = SpringRate(rear, rearHz)

    let frontDamping = Number((document.getElementById('frontDampingRatio') as HTMLInputElement).value)
    let rearDamping = Number((document.getElementById('rearDampingRatio') as HTMLInputElement).value)
    let frontBump = Bump(front, frontSpringRate, frontDamping)
    let rearBump = Bump(rear, rearSpringRate, rearDamping)

    let frontReboundRatio = Number((document.getElementById('frontReboundRatio') as HTMLInputElement).value)
    let rearReboundRatio = Number((document.getElementById('rearReboundRatio') as HTMLInputElement).value)
    let frontRebound = frontBump / frontReboundRatio
    let rearRebound = rearBump / rearReboundRatio

    let arbCoef = Number((document.getElementById('arbCoef') as HTMLInputElement).value)
    let arbstiff = ((pounds/2) / (200 - 200 * arbCoef)) * 2
    let arbfront = 0
    let arbrear = 0
    if (dist > 50) 
    {
        arbfront = arbstiff * (((dist/100 - 0.5) * 1.5) + 0.5)
        arbrear = arbstiff - arbfront
    }
    else 
    {
        arbrear = arbstiff * ((((100 - dist)/100 - 0.5) * 1.5) + 0.5)
        arbfront = arbstiff - arbrear
    }

    document.getElementById('front').innerHTML = (pounds * (dist/100)).toFixed(2);
    document.getElementById('rear').innerHTML = (pounds - (pounds * (dist/100))).toFixed(2);
    document.getElementById('frontSpring').innerHTML = frontSpringRate.toFixed(1)
    document.getElementById('rearSpring').innerHTML = rearSpringRate.toFixed(1)
    document.getElementById('frontBump').innerHTML = frontBump.toFixed(1)
    document.getElementById('rearBump').innerHTML = rearBump.toFixed(1)
    document.getElementById('frontRebound').innerHTML = frontRebound.toFixed(1)
    document.getElementById('rearRebound').innerHTML = rearRebound.toFixed(1)
    document.getElementById('arbFront').innerHTML = arbfront.toFixed(2);
    document.getElementById('arbRear').innerHTML = arbrear.toFixed(2);
    (document.getElementById('arbfrontbar') as HTMLInputElement).value = arbfront.toFixed(2);
    (document.getElementById('arbrearbar') as HTMLInputElement).value = arbrear.toFixed(2);
}



document.getElementById('mass').addEventListener("change", update)
document.getElementById('dist').addEventListener("change", update)
document.getElementById('frontHz').addEventListener("change", update)
document.getElementById('rearHz').addEventListener("change", update)
document.getElementById('frontDampingRatio').addEventListener("change", update)
document.getElementById('rearDampingRatio').addEventListener("change", update)
document.getElementById('frontReboundRatio').addEventListener("change", update)
document.getElementById('rearReboundRatio').addEventListener("change", update)
document.getElementById('arbCoef').addEventListener("change", update)