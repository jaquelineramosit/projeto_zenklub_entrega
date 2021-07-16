import { AvaliableModel } from "../database/model/avaliableModel";

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
	async findAvaliable(id: number): Promise<Avaliable> {
		return AvaliableModel.avaliables.find((el) => el.id === +id);
	}
	
	async findAvaliables(): Promise<Avaliable[]> {
		return AvaliableModel.avaliables;
	}
	
	async findAvaliableTimeSlot(
		params: ParamsDates
	): Promise<Avaliable[]> {
		return AvaliableModel.avaliables.filter(
			(el) =>
				el.date_avaliable >= params.dateStart &&
				el.date_avaliable <= params.dateEnd &&
				el.hour_start >= params.hourStart &&
				el.hour_end <= params.hourEnd &&
				el.isAvaliable
		);
	}
	
	async createAvaliable(avaliable: Avaliable): Promise<Avaliable> {
		const avaliableTotal = AvaliableModel.avaliables.length;
		const newId = avaliableTotal
			? AvaliableModel.avaliables[avaliableTotal - 1].id + 1
			: 1;
		const newAvaliable = { id: newId, ...avaliable };
		AvaliableModel.avaliables.push(newAvaliable);
		return newAvaliable;
	}
	
	async updateAvaliable(
		id: number,
		newAvaliable: Avaliable
	): Promise<Avaliable> {
		const avaliableIndex = AvaliableModel.avaliables.findIndex(
			(el) => el.id === +id
		);
		if (avaliableIndex === -1) return null;
	
		const Avaliable = AvaliableModel.avaliables[avaliableIndex];
		const changedAvaliable = { ...Avaliable, ...newAvaliable };
		AvaliableModel.avaliables[avaliableIndex] = changedAvaliable;
		return changedAvaliable;
	}
	
	async deleteAvaliable(id: number): Promise<void> {
		const avaliableIndex = AvaliableModel.avaliables.findIndex(
			(el) => el.id === +id
		);
		if (avaliableIndex > -1) AvaliableModel.avaliables.splice(avaliableIndex, 1);
	}
	
}


export const avaliableService = new AvaliableService;


// import { avaliableRepository } from "../database/repositories";

// interface Avaliable {
// 	id?: number;
// 	professionalid: number;
// 	date_avaliable: string;
// 	hour_start: string;
// 	hour_end: string;
// 	isAvaliable: boolean;
// }

// interface ParamsDates {
// 	dateStart: string;
// 	dateEnd: string;
// 	hourStart: string;
// 	hourEnd: string;
// }

// export class AvaliableService {
// 	async findAvaliable(id: number) {
// 		return await avaliableRepository.findAvaliable(id);
// 	}

// 	async findAvaliables() {
// 		return avaliableRepository.findAvaliables();
// 	}

// 	async findAvaliableTimeSlot(paramsDates: ParamsDates) {
// 		return avaliableRepository.findAvaliableTimeSlot(paramsDates);
// 	}

// 	async createAvaliable(avaliable: Avaliable) {
// 		return avaliableRepository.createAvaliable(avaliable);
// 	}

// 	async updateAvaliable(id: number, newAvaliable: Avaliable) {
// 		return avaliableRepository.updateAvaliable(id, newAvaliable);
// 	}

// 	async deleteAvaliable(id: number) {
// 		avaliableRepository.deleteAvaliable(id);
// 	}
// }

// export const avaliableService = new AvaliableService();
