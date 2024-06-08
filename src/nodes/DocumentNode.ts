import HeaderNode from './HeaderNode';
import ParagraphNode from './ParagraphNode';
import { NodeType, type Node } from './types';

class DocumentNode implements Node {
    readonly type = NodeType.DOCUMENT;
    readonly children: Node[] = [];
    readonly raw;

    public constructor(source: string) {
        this.raw = source;
        const sanitizedSource = DocumentNode.sanitizeSource(source);
        this.parseSource(sanitizedSource);
    }

    private parseSource(source: string) {
        const nodes = source.split('\n\n').map(DocumentNode.getNodeFromSource);
        this.children.push(...nodes);
    }

    private static getNodeFromSource(source: string): Node {
        if (HeaderNode.isHeaderSource(source)) {
            return new HeaderNode(source);
        }

        // default to paragraph node
        return new ParagraphNode(source);
    }

    private static sanitizeSource(source: string) {
        return source
            .replace(/\r\n/g, '\n')
            .replace(/\n{3,}/g, '\n\n');
    }
}

export default DocumentNode;
