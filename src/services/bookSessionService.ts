import { bookSessionRepository } from "../database/repositories";

interface BookSession {
	id?: number;
	professionalid: number;
	userid: number;
	date_session: string;
	hour_start: string;
	hour_end: string;
	iscompleted: boolean;
}

export class BookSessionService {
	async findBookSession(id: number) {
		return bookSessionRepository.findBookSession(id);
	}

	async findBookSessions() {
		return bookSessionRepository.findBookSessions();
	}

	async createBookSession(bookSession: BookSession) {
		return bookSessionRepository.createBookSession(bookSession);
	}

	async updateBookSession(id: number, newBookSession: BookSession) {
		return bookSessionRepository.updateBookSession(id, newBookSession);
	}

	async deleteBookSession(id: number) {
		bookSessionRepository.deleteBookSession(id);
	}
}

export const bookSessionService = new BookSessionService();
