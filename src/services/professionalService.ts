import { professionalRepository } from "../database/repositories";

interface Professional {
	id?: number;
	userid: number;
	speciality: string;
}

export class ProfessionalService {
	async findProfessional(id: number) {
		return professionalRepository.findProfessional(id);
	}

	async findProfessionals() {
		return professionalRepository.findProfessionals();
	}

	async createProfessional(professional: Professional) {
		return professionalRepository.createProfessional(professional);
	}

	async updateProfessional(id: number, newProfessional: Professional) {
		return professionalRepository.updateProfessional(id, newProfessional);
	}

	async deleteProfessional(id: number) {
		professionalRepository.deleteProfessional(id);
	}
}
export const professionalService = new ProfessionalService();
