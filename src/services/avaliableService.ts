import { avaliableRepository } from "../database/repositories";

interface Avaliable {
	id?: number;
	professionalid: number;
	date_avaliable: string;
	hour_start: string;
	hour_end: string;
	isAvaliable: boolean;
}

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

	async createAvaliable(avaliable: Avaliable) {
		return avaliableRepository.createAvaliable(avaliable);
	}

	async updateAvaliable(id: number, newAvaliable: Avaliable) {
		return avaliableRepository.updateAvaliable(id, newAvaliable);
	}

	async deleteAvaliable(id: number) {
		avaliableRepository.deleteAvaliable(id);
	}
}

export const avaliableService = new AvaliableService();
