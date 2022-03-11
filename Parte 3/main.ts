import { factorial, pi } from "mathjs";
import {
    div_t,
    exp_t,
    power_t,
    sin_t,
    cos_t,
    tan_t,
    ln_t,
    log_t,
    sinh_t,
    cosh_t,
    tanh_t,
    sqrt_t,
    root_t,
    asin_t,
    atan_t
} from "./parte_1"

const numerador = root_t(sin_t(3 * div_t(7)) + ln_t(2), 3);
const denominador = sinh_t(sqrt_t(2));
const funcion = numerador * div_t(denominador) + atan_t(exp_t(-1));
console.log(funcion);
