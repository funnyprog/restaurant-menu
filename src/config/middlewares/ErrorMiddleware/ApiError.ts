export class ApiError extends Error {
    declare status: number;
    declare message: string;

    constructor(status: number, message: string) {
        super();
        this.status = status;
        this.message = message;
    }

    static unauthorized() {
        return new ApiError(401, 'Пользователь не авторизован');
    }

    static forbidden(message: string) {
        return new ApiError(403, message);
    }

    static badRequest(message: string) {
        return new ApiError(404, message);
    }

    static notFound(message: string) {
        return new ApiError(404, message);
    }

    static internal(message: string) {
        return new ApiError(500, message);
    }

    static unknown(status: number, message: string) {
        return new ApiError(status, message);
    }
}