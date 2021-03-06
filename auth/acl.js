/**
 * User roles
 */
const Roles = {
    GUEST: 'GUEST',
    USER: 'USER',
    ADMIN: 'ADMIN'
}

/**
 * Check for required allowed roles
 *
 * @param role
 * @returns {Function}
 */
const allowRoles = function(role) {
    return function(req, res, next) {
        const roles = [].concat(role);

        if(!req.user || !roles.includes(req.user.role)) {
            next( new Error('Permission denied') )
        }
        next()
    }
}

/**
 * Check for disallowed roles
 *
 * @param role
 * @returns {Function}
 */
const disallowRoles = function(role) {
    return function(req, res, next) {
        const roles = [].concat(role);

        if(!req.user || roles.includes(req.user.role)) {
            next( new Error('Permission denied') )
        }
        next()
    }
}

module.exports = { checkRole, Roles }