import { ProfessionalModel } from "../database/model/professionalModel";

interface Professional {
	id?: number;
	userid: number;
	speciality: string;
}

export class ProfessionalService {
	async findProfessional(id: number): Promise<Professional> {
		return ProfessionalModel.professionals.find((el) => el.id === +id);
	}

	async findProfessionals(): Promise<Professional[]> {
		return ProfessionalModel.professionals;
	}

	async createProfessional(
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

	async updateProfessional(
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

	async deleteProfessional(id: number): Promise<void> {
		const professionalIndex = ProfessionalModel.professionals.findIndex(
			(el) => el.id === +id
		);
		if (professionalIndex > -1)
			ProfessionalModel.professionals.splice(professionalIndex, 1);
	}
}

export const professionalService = new ProfessionalService();

// import { professionalRepository } from "../database/repositories";

// interface Professional {
// 	id?: number;
// 	userid: number;
// 	speciality: string;
// }

// export class ProfessionalService {
// 	async findProfessional(id: number) {
// 		return professionalRepository.findProfessional(id);
// 	}

// 	async findProfessionals() {
// 		return professionalRepository.findProfessionals();
// 	}

// 	async createProfessional(professional: Professional) {
// 		return professionalRepository.createProfessional(professional);
// 	}

// 	async updateProfessional(id: number, newProfessional: Professional) {
// 		return professionalRepository.updateProfessional(id, newProfessional);
// 	}

// 	async deleteProfessional(id: number) {
// 		professionalRepository.deleteProfessional(id);
// 	}
// }
// export const professionalService = new ProfessionalService();
