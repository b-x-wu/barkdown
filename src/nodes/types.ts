export enum NodeType {
    DOCUMENT,
    TEXT,
    PARAGRAPH,
    HEADER,
    BREAK,
}

export interface Node {
    type: NodeType;
    children?: Node[];
    raw: string;
}

