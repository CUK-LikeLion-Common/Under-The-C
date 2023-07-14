import { atom } from 'recoil';

export interface ILecture {
	id: number;
	title: string;
	professor: string;
	lecture: string;
	rating: number;
}

export const lectureListState = atom<ILecture []>({
	key: 'lectureList',
	default: [],
});