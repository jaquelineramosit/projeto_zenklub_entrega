import { avaliableRepository } from "../database/repositories";

interface ParamsDates {
	dateStart: string;
	dateEnd: string;
	hourStart: string;
	hourEnd: string;
}

export class AvaliableService {
	async findAvaliable(id: number) {
		return await avaliableRepository.findAvaliable(id);
	}

	async findAvaliables() {
		return avaliableRepository.findAvaliables();
	}

	async findAvaliableTimeSlot(paramsDates: ParamsDates) {
		return avaliableRepository.findAvaliableTimeSlot(paramsDates);
	}

	async createAvaliable(avaliable) {
		return avaliableRepository.createAvaliable(avaliable);
	}

	async updateAvaliable(id: number, newAvaliable) {
		return avaliableRepository.updateAvaliable(id, newAvaliable);
	}

	async deleteAvaliable(id: number) {
		avaliableRepository.deleteAvaliable(id);
	}
}

export const avaliableService = new AvaliableService();
