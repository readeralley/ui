/**
 * OpenLibrary API Wrapper
 * https://openlibrary.org/dev/docs/api/books
 */

import axios from 'axios';

export const baseURL = 'https://openlibrary.org/api';

export const Books = () => ({
	bibkeys: [], // { type, value }[]
	jscmd: 'data', // 'data | 'viewapi'

	ISBN: function (...ids) {
		this.bibkeys.push(...ids.map((id) => ({ type: 'ISBN', value: id })));
		return this;
	},

	URL: function () {
		return `${baseURL}/books?${[
			'format=json',
			`jscmd=${this.jscmd}`,
			`bibkeys=${this.bibkeys.map(({ type, value }) => `${type}:${value}`).join(',')}`
		].join('&')}`;
	},

	fetch: async function () {
		const res = await axios.get(this.URL());
		return Object.keys(res.data).map((key) => ({
			source: { type: key.split(':')[0], value: key.split(':')[1] },
			data: res.data[key]
		}));
	}
});

export const ISBN = async (id) => {
	const res = await Books().ISBN(id).fetch();
	return res[0].data;
};

export const random = async () => {
	const res = await axios.get('https://openlibrary.org/random');
	return res.data;
};
