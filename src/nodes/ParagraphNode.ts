import TextNode from './TextNode';
import { NodeType, type Node } from './types';

class ParagraphNode implements Node {
    readonly type = NodeType.PARAGRAPH;
    readonly children: Node[] = [];
    readonly raw;

    public constructor(source: string) {
        this.raw = source;
        this.parseSource(source);
    }

    private parseSource(source: string) {
        this.children.push(
            new TextNode(source),
        );
    }
}

export default ParagraphNode;

