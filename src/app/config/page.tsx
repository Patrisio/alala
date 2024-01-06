import {createPage, request, getWebsite} from '../../packages/website-builder/repository'
import {WebsiteBuilder} from '../../packages/website-builder';

import dynamic from 'next/dynamic';
import {useEffect} from 'react';

const WebsiteBuilderPage = async () => {
	// const WebsiteBuilder = dynamic(() => import('../../packages/website-builder').then((module) => module.WebsiteBuilder), { ssr: false });
	console.log('__ALOGA');
	// const res = await request();
	// console.log(res);

	const website = await getWebsite();
	console.log(website);
	
	return (
		<WebsiteBuilder />
	)
}

export default WebsiteBuilderPage;
