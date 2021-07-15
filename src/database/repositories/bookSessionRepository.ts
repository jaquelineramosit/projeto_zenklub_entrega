import { BookSessionModel } from "../model/bookSessionModel";
import { AvaliableModel } from "../model/avaliableModel";
import { avaliableRepository } from "../repositories";
import AddMinutesToHour from "../../utils/AddMinutesToHour";

interface BookSession {
	id?: number;
	professionalid: number;
	userid: number;
	date_session: string;
	hour_start: string;
	hour_end: string;
	iscompleted: boolean;
}

async function findBookSession(id: number): Promise<BookSession> {
	return BookSessionModel.bookSessions.find((el) => el.id === +id);
}

async function findBookSessions(): Promise<BookSession[]> {
	return BookSessionModel.bookSessions;
}

async function createBookSession(
	bookSession: BookSession
): Promise<BookSession> {
	const bookSessionTotal = BookSessionModel.bookSessions.length;
	const newId = bookSessionTotal
		? BookSessionModel.bookSessions[bookSessionTotal - 1].id + 1
		: 1;
	const newBookSession = { id: newId, ...bookSession };

	const date_session = bookSession.date_session;
	const hour_start = bookSession.hour_start;
	const hour_end = bookSession.hour_end;

	const params = {
		hour: hour_start,
		minutesAdd: -30,
	};

	const avaliableBlock = AvaliableModel.avaliables.filter(
		(el) =>
			el.date_avaliable === date_session &&
			el.hour_start >= AddMinutesToHour(params) &&
			el.hour_end <= hour_end
	);

	avaliableBlock.map((avaliable) => {
		const avaliableNew = {
			id: avaliable.id,
			professionalid: avaliable.professionalid,
			date_avaliable: avaliable.date_avaliable,
			hour_start: avaliable.hour_start,
			hour_end: avaliable.hour_end,
			isAvaliable: false,
		};

		return avaliableRepository.updateAvaliable(avaliable.id, avaliableNew);
	});

	BookSessionModel.bookSessions.push(newBookSession);
	return newBookSession;
}

async function updateBookSession(
	id: number,
	newBookSession: BookSession
): Promise<BookSession> {
	const bookSessionIndex = BookSessionModel.bookSessions.findIndex(
		(el) => el.id === +id
	);
	if (bookSessionIndex === -1) return null;

	const BookSession = BookSessionModel.bookSessions[bookSessionIndex];
	const changedBookSession = { ...BookSession, ...newBookSession };
	BookSessionModel.bookSessions[bookSessionIndex] = changedBookSession;
	return changedBookSession;
}

async function deleteBookSession(id: number): Promise<void> {
	const bookSessionIndex = BookSessionModel.bookSessions.findIndex(
		(el) => el.id === +id
	);
	if (bookSessionIndex > -1)
		BookSessionModel.bookSessions.splice(bookSessionIndex, 1);
}

export default {
	findBookSession,
	findBookSessions,
	createBookSession,
	updateBookSession,
	deleteBookSession,
};
