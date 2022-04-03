export interface Damper {
    bump: number,
    rebound: number 
 }

export function Dampers(mass: number, HZ: number, critdamp: number, ratio: number): Damper
{
    // Spring rate must be in N/m, weight in kg.
    // critdamp defaults to 0.8, go higher for overdamping, lower for under damping. 
    let base = ((2 * HZ * (mass / 2) * critdamp) / 100) * 2
    let bump = base / (1 + (1 / ratio))
    let rebound = base - bump

    return {'bump': bump, 'rebound': rebound}

}