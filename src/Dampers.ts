export interface Damper {
    bump: number,
    rebound: number 
 }

export function Dampers(mass: number, HZ: number, critdamp: number, ratio: number): Damper
{
    // Spring rate must be in N/m, weight in kg.
    // critdamp defaults to 0.8, go higher for overdamping, lower for under damping. 
    let base = (4 * Math.PI * HZ * (mass / 2) * critdamp) / 1000
    let total = base * 2
    let bump = total / ((1 / ratio) + 1 )
    let rebound = total - bump

    return {'bump': bump, 'rebound': rebound}

}