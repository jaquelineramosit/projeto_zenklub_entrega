import { AvaliableModel } from "../model/avaliableModel";

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

async function findAvaliable(id: number): Promise<Avaliable> {
	return AvaliableModel.avaliables.find((el) => el.id === +id);
}

async function findAvaliables(): Promise<Avaliable[]> {
	return AvaliableModel.avaliables;
}

async function findAvaliableTimeSlot(
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

async function createAvaliable(avaliable: Avaliable): Promise<Avaliable> {
	const avaliableTotal = AvaliableModel.avaliables.length;
	const newId = avaliableTotal
		? AvaliableModel.avaliables[avaliableTotal - 1].id + 1
		: 1;
	const newAvaliable = { id: newId, ...avaliable };
	AvaliableModel.avaliables.push(newAvaliable);
	return newAvaliable;
}

async function updateAvaliable(
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

async function deleteAvaliable(id: number): Promise<void> {
	const avaliableIndex = AvaliableModel.avaliables.findIndex(
		(el) => el.id === +id
	);
	if (avaliableIndex > -1) AvaliableModel.avaliables.splice(avaliableIndex, 1);
}

export default {
	findAvaliable,
	findAvaliables,
	findAvaliableTimeSlot,
	createAvaliable,
	updateAvaliable,
	deleteAvaliable,
};
