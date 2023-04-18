export const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber -1) * pageSize;
    const endIndex = startIndex + pageSize;
    return items.slice(startIndex, endIndex);
}