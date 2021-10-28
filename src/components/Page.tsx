import React from 'react';

const Page = (props: { children: React.ReactNode }) => {
    return <React.Fragment>{props.children}</React.Fragment>;
};
export default Page;
