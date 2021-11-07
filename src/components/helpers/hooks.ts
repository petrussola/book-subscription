export const usePage = ({location}: any): string => {
    const page = location?.pathname.split("/")[1];
    return page
}