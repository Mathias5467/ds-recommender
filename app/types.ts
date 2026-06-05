import rawStructuresData from "@/data/structures_data.json";

export const structures: DataStructure[] = rawStructuresData as DataStructure[];

export interface DataStructure {
    id: string;
    lang: Language;
    name: string;
    size: SizeType;
    duplicates: boolean;
    keyValue: boolean;
    ordering: Ordering;
    bestFor: string;
    docUrl: string;
    complexities: {
        search: Complexity;
        insert: Complexity;
        delete: Complexity;
    };
    complexityNotes: string;
};

export type Language = "Python" | "Java" | "C++" | "C#" | "JavaScript";
export type SizeType = "Dynamic" | "Fixed";
export type Complexity = "O(1)" | "O(log n)" | "O(n)" | "N/A";
export type FilterComplexity = Complexity | "Any";
export type Ordering = "Unordered (Hash)" | "Insertion Order" | "Sorted (Tree)" | "Priority (Heap)" | "LIFO (Stack)" | "FIFO (Queue)";