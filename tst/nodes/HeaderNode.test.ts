import HeaderNode from '../../src/nodes/HeaderNode';
import { describe, it, expect } from '@jest/globals';

describe('HeaderNode', () => {
    it('should identify header nodes', () => {
        const headerSource = '### this is a header';
        const notHeaderSource = '#this is not a header';

        expect(HeaderNode.isHeaderSource(headerSource)).toBe(true);
        expect(HeaderNode.isHeaderSource(notHeaderSource)).toBe(false);
    });

    it('should contain the correct header attributes', () => {
        const headerSource = '### this is a header';
        const headerNode = new HeaderNode(headerSource);
        const headerTextNode = headerNode.children.at(0);

        expect(headerNode.children).toHaveLength(1);
        expect(headerNode.level).toBe(3);
        expect(headerTextNode?.raw).toBe('this is a header');
    });

    it('should sanitize line breaks', () => {
        const headerSource = '### this header \nhas a line break';
        const headerNode = new HeaderNode(headerSource);
        const headerTextNode = headerNode.children.at(0);

        expect(headerTextNode?.raw).toBe('this header has a line break');
    });

    it('should throw error for non headers', () => {
        const notHeaderSource = '#this is not a header';

        expect(() => new HeaderNode(notHeaderSource)).toThrow();
    });

});

