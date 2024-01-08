import {createPage, request, getWebsite} from '../../packages/website-builder/repository'
import {WebsiteBuilder, WebsiteBuilderVM} from '../../packages/website-builder';
import {Converter} from '../../packages/page-editor';

import dynamic from 'next/dynamic';
import {useEffect, use, Suspense} from 'react';

const WebsiteBuilderPage = async () => {
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
	let page;

	const hello = getWebsite()
	console.log(hello, '__HELLO__6');

	// if (website) {
	// 	const pageList = website.pages;

	// 	page = new Converter(pageList[0]);
	// 	console.log(page);
	// }
	
	return (
		<Suspense fallback={<p>waiting for message...</p>}>
			<WebsiteBuilder website={hello}/>
		</Suspense>
	)
}

export default WebsiteBuilderPage;
