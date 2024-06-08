import ParagraphNode from '../../src/nodes/ParagraphNode';
import { describe, it, expect } from '@jest/globals';

describe('ParagraphNode', () => {
    it('should add a text node as a child', () => {
        const paragraphSource = 'this is a paragraph';
        const paragraphNode = new ParagraphNode(paragraphSource);
        const paragraphTextNode = paragraphNode.children.at(0);

        expect(paragraphTextNode?.raw).toBe(paragraphSource);
    });
});

