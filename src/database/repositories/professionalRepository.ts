import { ProfessionalModel } from "../model/professionalModel";

interface Professional {
	id?: number;
	userid: number;
	speciality: string;
}

async function findProfessional(id: number): Promise<Professional> {
	return ProfessionalModel.professionals.find((el) => el.id === +id);
}

async function findProfessionals(): Promise<Professional[]> {
	return ProfessionalModel.professionals;
}

async function createProfessional(
	professional: Professional
): Promise<Professional> {
	const professionalTotal = ProfessionalModel.professionals.length;
	const newId = professionalTotal
		? ProfessionalModel.professionals[professionalTotal - 1].id + 1
		: 1;
	const newProfessional = { id: newId, ...professional };
	ProfessionalModel.professionals.push(newProfessional);
	return newProfessional;
}

async function updateProfessional(
	id: number,
	newProfessional: Professional
): Promise<Professional> {
	const professionalIndex = ProfessionalModel.professionals.findIndex(
		(el) => el.id === +id
	);
	if (professionalIndex === -1) return null;

	const professional = ProfessionalModel.professionals[professionalIndex];
	const changedProfessional = { ...professional, ...newProfessional };
	ProfessionalModel.professionals[professionalIndex] = changedProfessional;
	return changedProfessional;
}

async function deleteProfessional(id: number): Promise<void> {
	const professionalIndex = ProfessionalModel.professionals.findIndex(
		(el) => el.id === +id
	);
	if (professionalIndex > -1)
		ProfessionalModel.professionals.splice(professionalIndex, 1);
}
export default {
	findProfessional,
	findProfessionals,
	createProfessional,
	updateProfessional,
	deleteProfessional,
};
