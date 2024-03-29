import {createPage, request, getWebsite, getWebsiteList} from '../../packages/website-builder/repository'
import {WebsiteBuilder, WebsiteBuilderVM} from '../../packages/website-builder';
import {Converter} from '../../packages/page-editor';

import dynamic from 'next/dynamic';
import {useEffect, use, Suspense, useState} from 'react';
import {WebsiteList} from './WebsiteList';

const WebsitesPage = async () => {
	// const WebsiteBuilder = dynamic(() => import('../../packages/website-builder').then((module) => module.WebsiteBuilder), { ssr: false });
	console.log('__ALOGA,111');
	// const res = await request();
	// console.log(res);
	// const website = await getWebsite();
	// console.log(JSON.stringify(website));
	// useEffect(() => {
	// 	console.log('__GE__');

	// 	async function request() {
	// 		const website = await getWebsite();
	// 		console.log(website, '__website__')
	// 	}
	// 	request();
	// }, []);

	const websiteList = await getWebsiteList();
	console.log(websiteList, 'websiteList__');

	// if (website) {
	// 	const pageList = website.pages;

	// 	page = new Converter(pageList[0]);
	// 	console.log(page);
	// }
	
	return (
		<Suspense fallback={<p>waiting for message...</p>}>
			<WebsiteList websiteList={websiteList} />
		</Suspense>
	)
}

export default WebsitesPage;
