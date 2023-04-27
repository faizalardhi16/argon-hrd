import { IDataUser } from '@/interface/IDataUser'
import React from 'react'
import Button from './Button'
import Link from 'next/link'



type TableUserProps = {
    title: string[],
    data: IDataUser[],
    isAction: boolean
}

const TableUser: React.FC<TableUserProps> = (props) => {


    return (
        <div className="relative overflow-x-auto w-full">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {props.isAction ? [...props.title, "Action"].map((item, index) => (
                            <th scope="col" className="px-6 py-3" key={index}>
                                {item}
                            </th>
                        )) : props.title.map((item, index) => (
                            <th scope="col" className="px-6 py-3" key={index}>
                                {item}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((item: IDataUser, index) => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                            <td className="px-6 py-4">
                                {item.name}
                            </td>
                            <td className="px-6 py-4">
                                {item.email}
                            </td>
                            <td className="px-6 py-4">
                                {item.phone ? item.phone : "-"}
                            </td>
                            {props.isAction ? <td className="px-6 py-4">
                                <Link href={`/profile/detail/${item.id}`}>
                                    <Button color="danger">
                                        Edit
                                    </Button>
                                </Link>
                            </td> : null}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableUser
