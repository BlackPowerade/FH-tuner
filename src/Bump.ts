export function Bump(weight: number, HZ: number, rate: number): number
{
    let damp: number = ((2 * weight * HZ)/1000) * 2
    return damp * rate
}