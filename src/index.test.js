import {
	insertIntoStr,
	replaceInStr,
	stripTags,
	stripATags,
	buildUrlSearchForArray,
	buildUrlSearch,
	parseAllATags,
} from './index'

let str = '';

describe('string helper methods', () => {

	beforeAll(() => {
		str = 'test string';
	});

	it('should insert into string', () => {
		expect(insertIntoStr(str, 5, 'word ')).toEqual('test word string')
	});



});
