'use client';

import Link from 'next/link';
import {createWebsite, createEmptyWebsite, savePage, hello, updatePage, deleteWebsite} from '../../packages/website-builder/repository/createPage';

import {useState} from 'react';

export const WebsiteList = ({websiteList}) => {
	const [text, setText] = useState('');

    return (
        <>
            <button
                style={{marginLeft: 10}}
                onClick={() => createEmptyWebsite(text)}
            >
                create website
            </button>
            <input onChange={(e) => {setText(e.target.value)}} />
            {
                websiteList.map((website) => {
                    console.log(website)
                    return (
                        <Link href={`/config?websiteId=${website.id}`}>
                            <div style={{
                                border: '1px solid red',
                                padding: 20,
                            }}>
                                {website.name}
                                <button
                                    style={{marginLeft: 10}}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        deleteWebsite(website.id);
                                    }}
                                >
                                    delete
                                </button>
                            </div>
                        </Link>
                    );
                })
            }
        </>
    );
};
