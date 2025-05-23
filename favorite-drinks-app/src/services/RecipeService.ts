import axios from "axios";
import { categoriesAPIResponseSchema } from "../utils/recipes-schema";

export async function getCategories() {
    const URL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    const { data } = await axios(URL)
    const result = categoriesAPIResponseSchema.safeParse(data)

    console.log(result);
    if (result.success) {
        return result.data
    }

}