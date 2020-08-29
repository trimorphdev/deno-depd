import config from './config.ts';
import DeprecationError from './DeprecationError.ts';

/**
 * Initializes a deprecator.
 * @param name The name of the library to deprecate from.
 * @param opts Configuration for Depd.
 */
export function depd(name: string, opts: config = {}): Function {
    /**
     * Deprecates a function.
     * @param func The function to deprecate.
     * @param t The `this` object to use instead of `null`.
     */
    return function(func: Function, t: object = {}): Function {
        return function(...args: any) {
            if (opts.error)
                throw new DeprecationError(`Package ${name} deprecated '${func.name || 'function'}()'.`);
            else
                console.log(`[WARNING] Package ${name} deprecated '${func.name || 'function'}()'.`);

            return func.apply(t, args);
        }
    }
}

export default depd;