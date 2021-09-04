export function Bump(weight, HZ) {
    let damp = ((2 * weight * HZ) / 1000) * 2;
    return damp;
}
