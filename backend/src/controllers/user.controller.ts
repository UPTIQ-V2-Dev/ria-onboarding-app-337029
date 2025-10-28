import { Role } from '../generated/prisma/index.js';
import { userService } from '../services/index.ts';
import ApiError from '../utils/ApiError.ts';
import catchAsyncWithAuth from '../utils/catchAsyncWithAuth.ts';
import exclude from '../utils/exclude.ts';
import pick from '../utils/pick.ts';
import httpStatus from 'http-status';

const createUser = catchAsyncWithAuth(async (req, res) => {
    const { email, password, name, role } = req.body;
    const user = await userService.createUser(email, password, name, role);
    // Exclude password from response
    const userWithoutPassword = exclude(user, ['password']);
    res.status(httpStatus.CREATED).send(userWithoutPassword);
});

const getUsers = catchAsyncWithAuth(async (req, res) => {
    const filter = pick(req.validatedQuery, ['name', 'role']);
    const options = pick(req.validatedQuery, ['sortBy', 'limit', 'page']);
    const result = await userService.queryUsers(filter, options, [
        'id',
        'email',
        'name',
        'role',
        'isEmailVerified',
        'createdAt',
        'updatedAt'
    ]);
    res.send(result);
});

const getUser = catchAsyncWithAuth(async (req, res) => {
    const userId = parseInt(req.params.userId);
    const requestingUser = req.user;

    // Check if user can access this resource (must be the same user or an admin)
    if (requestingUser.id !== userId && requestingUser.role !== Role.ADMIN) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden - can only access own data');
    }

    const user = await userService.getUserById(userId, [
        'id',
        'email',
        'name',
        'role',
        'isEmailVerified',
        'createdAt',
        'updatedAt'
    ]);
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    res.send(user);
});

const updateUser = catchAsyncWithAuth(async (req, res) => {
    const userId = parseInt(req.params.userId);
    const requestingUser = req.user;

    // Check if user can update this resource (must be the same user or an admin)
    if (requestingUser.id !== userId && requestingUser.role !== Role.ADMIN) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden - can only update own data');
    }

    const user = await userService.updateUserById(userId, req.body, [
        'id',
        'email',
        'name',
        'role',
        'isEmailVerified',
        'createdAt',
        'updatedAt'
    ]);
    res.send(user);
});

const deleteUser = catchAsyncWithAuth(async (req, res) => {
    const userId = parseInt(req.params.userId);
    const requestingUser = req.user;

    // Check if user can delete this resource (must be the same user or an admin)
    if (requestingUser.id !== userId && requestingUser.role !== Role.ADMIN) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden - can only delete own account');
    }

    await userService.deleteUserById(userId);
    res.status(httpStatus.NO_CONTENT).send();
});

export default {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
};
