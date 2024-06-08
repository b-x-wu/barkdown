import TextNode from '../../src/nodes/TextNode';
import { describe, it, expect } from '@jest/globals';

describe('TextNode', () => {
    it('should contain the correct source text', () => {
        const expectedText = 'abc';
        const textNode = new TextNode(expectedText);
        expect(textNode.raw).toBe(expectedText);
    });
});

