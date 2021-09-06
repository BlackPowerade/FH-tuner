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
    
    let fronthz: number = Number((document.getElementById('fronthz') as HTMLInputElement).value)
    let rearhz: number = Number((document.getElementById('rearhz') as HTMLInputElement).value)

    let frontSpringRate = SpringRate(front, fronthz)
    let rearSpringRate = SpringRate(rear, rearhz)

    let frontCrit = Number((document.getElementById('frontcrit') as HTMLInputElement).value)
    let rearCrit = Number((document.getElementById('rearcrit') as HTMLInputElement).value)
    let frontBump = Bump(front, fronthz, frontCrit)
    let rearBump = Bump(rear, rearhz, rearCrit)

    let frontRebound = frontBump / 0.45
    let rearRebound = rearBump / 0.45

    let arbcoef = Number((document.getElementById('arbcoef') as HTMLInputElement).value)
    let arbstiff = ((pounds/2) / (200 - 200 * arbcoef)) * 2
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
    document.getElementById('frontspring').innerHTML = frontSpringRate.toFixed(1)
    document.getElementById('rearspring').innerHTML = rearSpringRate.toFixed(1)
    document.getElementById('frontbump').innerHTML = frontBump.toFixed(1)
    document.getElementById('rearbump').innerHTML = rearBump.toFixed(1)
    document.getElementById('frontrebound').innerHTML = frontRebound.toFixed(1)
    document.getElementById('rearrebound').innerHTML = rearRebound.toFixed(1)
    document.getElementById('arbfront').innerHTML = arbfront.toFixed(2);
    document.getElementById('arbrear').innerHTML = arbrear.toFixed(2);
    (document.getElementById('arbfrontbar') as HTMLInputElement).value = arbfront.toFixed(2);
    (document.getElementById('arbrearbar') as HTMLInputElement).value = arbrear.toFixed(2);
}



document.getElementById('mass').addEventListener("change", update)
document.getElementById('dist').addEventListener("change", update)
document.getElementById('fronthz').addEventListener("change", update)
document.getElementById('rearhz').addEventListener("change", update)
document.getElementById('frontcrit').addEventListener("change", update)
document.getElementById('rearcrit').addEventListener("change", update)
document.getElementById('arbcoef').addEventListener("change", update)