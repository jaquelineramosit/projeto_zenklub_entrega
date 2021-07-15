import { UserModel } from "../model/userModel";

interface User {
	id?: number;
	name: string;
	username: string;
	email: string;
	password: string;
}

async function findUser(id: number): Promise<User> {
	return UserModel.users.find((el) => el.id === +id);
}

async function findUsers(): Promise<User[]> {
	return UserModel.users;
}

async function createUser(user: User): Promise<User> {
	const userTotal = UserModel.users.length;
	const newId = userTotal ? UserModel.users[userTotal - 1].id + 1 : 1;
	const newUser = { id: newId, ...user };
	UserModel.users.push(newUser);
	return newUser;
}

async function updateUser(id: number, newUser: User): Promise<User> {
	const userIndex = UserModel.users.findIndex((el) => el.id === +id);
	if (userIndex === -1) return null;

	const user = UserModel.users[userIndex];
	const changedUser = { ...user, ...newUser };
	UserModel.users[userIndex] = changedUser;
	return changedUser;
}

async function deleteUser(id: number): Promise<void> {
	const userIndex = UserModel.users.findIndex((el) => el.id === +id);
	if (userIndex > -1) UserModel.users.splice(userIndex, 1);
}

export default {
	findUser,
	findUsers,
	createUser,
	updateUser,
	deleteUser,
};
