import helloWorld from '../src/index';
import { describe, expect, it } from '@jest/globals';

describe('index', () => {
    it('should not return anything', () => {
        expect(helloWorld()).toBeUndefined();
    });
});

