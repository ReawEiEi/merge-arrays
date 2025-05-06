export function merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[]
): number[] {
    const len1 = collection_1.length;
    const len2 = collection_2.length;
    const len3 = collection_3.length;
    const totalLength = len1 + len2 + len3;

    const result: number[] = new Array(totalLength);
    let idx = 0;

    let i = 0;
    let j = len2 - 1;
    let k = 0;

    while (i < len1 || j >= 0 || k < len3) {
        const has1 = i < len1;
        const has2 = j >= 0;
        const has3 = k < len3;

        if (
            has1 &&
            (!has2 || collection_1[i] <= collection_2[j]) &&
            (!has3 || collection_1[i] <= collection_3[k])
        ) {
            result[idx++] = collection_1[i++];
        } else if (has2 && (!has3 || collection_2[j] <= collection_3[k])) {
            result[idx++] = collection_2[j--];
        } else if (has3) {
            result[idx++] = collection_3[k++];
        }
    }

    return result;
}
