export function Bump(mass: number, springrate: number, critdamp: number): number
{
    // Spring rate must be in N/m, weight in kg.
    // critdamp defaults to 1, go higher for overdamping, lower for under damping.
    springrate *= 0.112984829027923 // Convert ft/lb / inch to N/m / s
    let damp = critdamp * (2 * (Math.sqrt((mass * springrate))))
    return damp / 100 
}