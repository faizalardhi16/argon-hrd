import { useLogin } from "@/store/loginStore";
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import NavbarComponent from "./NavbarComponent";
import axios from "axios";
import { GetServerSideProps } from "next";
import { accessTokenKey } from "@/constant/accessTokenKey";

export default function withAuth<P>(Component: any) {
    return (props: P) => {
        return (
            <div>
                <NavbarComponent />
                <Component {...props} />
            </div>
        )
    }
}

