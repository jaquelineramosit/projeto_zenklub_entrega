import { UserModel } from "../database/model/userModel";

interface User {
	id?: number;
	name: string;
	username: string;
	email: string;
	password: string;
}

export class UserService {
	async findUser(id: number): Promise<User> {
		return UserModel.users.find((el) => el.id === +id);
	}

	async findUsers(): Promise<User[]> {
		return UserModel.users;
	}

	async createUser(user: User): Promise<User> {
		const userTotal = UserModel.users.length;
		const newId = userTotal ? UserModel.users[userTotal - 1].id + 1 : 1;
		const newUser = { id: newId, ...user };
		UserModel.users.push(newUser);
		return newUser;
	}

	async updateUser(id: number, newUser: User): Promise<User> {
		const userIndex = UserModel.users.findIndex((el) => el.id === +id);
		if (userIndex === -1) return null;

		const user = UserModel.users[userIndex];
		const changedUser = { ...user, ...newUser };
		UserModel.users[userIndex] = changedUser;
		return changedUser;
	}

	async deleteUser(id: number): Promise<void> {
		const userIndex = UserModel.users.findIndex((el) => el.id === +id);
		if (userIndex > -1) UserModel.users.splice(userIndex, 1);
	}
}
export const userService = new UserService();

// import { userRepository } from "../database/repositories";

// interface User {
// 	id?: number;
// 	name: string;
// 	username: string;
// 	email: string;
// 	password: string;
// }

// export class UserService {
// 	async findUser(id: number) {
// 		return userRepository.findUser(id);
// 	}

// 	async findUsers() {
// 		return userRepository.findUsers();
// 	}

// 	async createUser(user: User) {
// 		return userRepository.createUser(user);
// 	}

// 	async updateUser(id: number, newUser: User) {
// 		return userRepository.updateUser(id, newUser);
// 	}

// 	async deleteUser(id: number) {
// 		userRepository.deleteUser(id);
// 	}
// }
// export const userService = new UserService();
