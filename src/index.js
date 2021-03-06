import { getPrime, lcm, inverseMod, calcCoprime } from './utils'

/**
 * https://en.wikipedia.org/wiki/RSA_(cryptosystem)
 */
const keyGen = () => {
    // Choose 2 distinct prime numbers, p and q
    let p = getPrime()
    let q = getPrime()
    // compute n = pq
    let n = p * q
    // Compute and store totient = lcm(p - 1, q - 1) 
    let totient = lcm(p - 1, q - 1)
    // Choose an integer e, such that 1 < e < totient AND e is coprime with totient
    let e = calcCoprime(2, totient)
    // determine d as d = e-1 mod totient (mod multiplicative inverse of e)
    let d = inverseMod(e, totient)
    return {
        n,
        d,
        e,
    }
}

/**
 * Encrypts a given 'plaintext' number 
 * @param {number} m 
 * @param {number} e 
 m @param {number} n 
 */
const encryption = (m, e, n) => {
    return Math.pow(m, e) % n
}

/**
 * Decrypts a given 'plaintext' number 
 * @param {number} c 
 * @param {number} d 
 * @param {number} n 
 */
const decryption = (c, d, n) => {
    return Math.pow(c, d) % n
}

export {
    keyGen,
    encryption,
    decryption
}