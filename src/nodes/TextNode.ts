import { NodeType, type Node } from './types';

class TextNode implements Node {
    readonly type = NodeType.TEXT;
    readonly raw;

    public constructor(source: string) {
        this.raw = source;
    }
}

export default TextNode;

