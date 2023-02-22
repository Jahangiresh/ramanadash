export default interface Gender {
    name: string,
    imagePath: string,
    categories?: string[],
    id: number,
    createdDate: string,
    deleteDate?: string
}