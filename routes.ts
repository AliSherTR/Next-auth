/**
 * An array of routes that are public
 * These routes do not require the user to login
 * @type {string[]}
 */
export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * An array of routes for authentication
 * These routes are used for authentication
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
    "/auth/reset",
];

/**
 * A routes for the api authentication
 * These routes are used for authentication
 * @type {string[]}
 */

export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/settings";
