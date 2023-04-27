
import { allUser } from "@/constant/url";

import axios from "axios";


export default async function uuseGetAllUser(){

    const response = await axios.get(allUser);

    return response.data

}