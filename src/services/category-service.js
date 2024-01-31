// import { myAxios } from "./helper";

export const categoriesData = [
    {
        categoryId: 1,
        categoryTitle:"JS",
        categoryDescription:"JS description here"
    },
    {
        categoryId: 2,
        categoryTitle:"JAVA",
        categoryDescription:"JAVA description here"
    }
];

export const loadAllCategories = () => {
    return categoriesData;
    
    // return myAxios.get(`/categories`).then(response=>{
    //     return response.data;
    // });
}