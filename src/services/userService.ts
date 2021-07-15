import { userRepository } from "../database/repositories";

interface User {
	id?: number;
	name: string;
	username: string;
	email: string;
	password: string;
}

export class UserService {
	async findUser(id: number) {
		return userRepository.findUser(id);
	}

	async findUsers() {
		return userRepository.findUsers();
	}

	async createUser(user: User) {
		return userRepository.createUser(user);
	}

	async updateUser(id: number, newUser: User) {
		return userRepository.updateUser(id, newUser);
	}

	async deleteUser(id: number) {
		userRepository.deleteUser(id);
	}
}
export const userService = new UserService();
