import createHttpError from "http-errors";

import { findSession, findUser } from "../services/auth.js";

export const authenticate = async (request, response, next) => {
    const authorization = request.get("Authorization");

    if (!authorization) {
        return next(createHttpError(401, "Authorization header missing"))
    }
    const [bearer, accessToken] = authorization.split(' ');
    if (bearer !== "Bearer") {
        return next(createHttpError(401, "Header must have type Bearer"));
    }

    const session = await findSession({ accessToken });

    if (!session) {

        return next(createHttpError(401, "Session not found"));
    }

    if (session.accessTokenValidUntil < Date.now()) {
        return next(createHttpError(401, "Access token exppired"));
    }

    const user = await findUser({ _id: session.userId });

    if (!user) {
        return next(createHttpError(401, "User not found"));
    }

    request.user = user;

    next();
}