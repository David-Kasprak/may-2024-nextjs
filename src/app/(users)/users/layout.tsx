import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'UsersLayout metadata'
}

type Props = {children: React.ReactNode}

const UsersLayout = ({children}: Props) => {
    return (
        <>
            UsersLayout
            {children}
            UsersLayout
        </>
    );
};

export default UsersLayout;