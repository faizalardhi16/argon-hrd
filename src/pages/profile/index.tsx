import withAuth from '@/components/PrivateRoute'

import { IDataAbsence, IDataAbsenceResponse } from '@/interface/IDataAbsence'
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import TableUser from '@/components/TableUser'
import { IDataUser } from '@/interface/IDataUser'
import useGetAllUser from '@/api/useGetAllUser'


export interface IProfile {

}


const Profile: NextPage<IProfile> = () => {

    const [dataUser, setDataUser] = useState<IDataUser[]>([])

    useEffect(() => {
        async function fetch() {
            const res = await useGetAllUser()

            console.log(res.data)
            const modifyData = res.data.map((item: any, index: number) => {
                return {
                    ...item,
                    name: item.firstName + " " + item.lastName,
                    id: item.id
                }
            })
            setDataUser(modifyData)

        }

        fetch()
    }, []);



    return (
        <div className="max-w-screen-xl bg-rose-600 flex flex-col items-center justify-center mx-auto p-4">
            <div className="w-full mb-2">

            </div>
            <TableUser
                title={[
                    "Nama", "Email", "Phone"
                ]}
                isAction={true}
                data={
                    dataUser
                }
            />
        </div>
    )
}


export default withAuth(Profile)


