import DocumentNode from '../../src/nodes/DocumentNode';
import { describe, it, expect } from '@jest/globals';
import { NodeType } from '../../src/nodes/types';

describe('DocumentNode', () => {
    it('should sanitize source strings', () => {
        const documentSource = 'line 1\r\n\r\n\r\nline 2';
        const documentNode = new DocumentNode(documentSource);
        const rawTexts = documentNode.children.map((textNode) => textNode.raw);

        expect(rawTexts).toHaveLength(2);
        expect(rawTexts.at(0)).toBe('line 1');
        expect(rawTexts.at(1)).toBe('line 2');
    });

    it('should render header and paragraph', () => {
        const documentSource = '# header\n\nline2';
        const documentNode = new DocumentNode(documentSource);
        const documentChildren = documentNode.children;

        expect(documentChildren).toHaveLength(2);
        expect(documentChildren.at(0)?.type).toBe(NodeType.HEADER);
        expect(documentChildren.at(1)?.type).toBe(NodeType.PARAGRAPH);
    });

});

