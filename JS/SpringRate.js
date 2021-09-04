export function SpringRate(weight, HZ) {
    let rate = (4 * Math.pow(Math.PI, 2));
    rate *= (Math.pow(HZ, 2));
    rate *= weight;
    rate *= 0.0057101471627692; // Convert to N/m to lbs/in
    return rate;
}
