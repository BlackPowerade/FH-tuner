export function SpringRate(weight: number, HZ: number): number
{
    let rate = (4 * Math.pow(Math.PI, 2));
    rate *= (HZ**2)
    rate *= weight
    rate *= 0.0057101471627692 // Convert to N/m to lbs/in
    return rate
}