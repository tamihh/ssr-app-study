import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
	staticContext.notFound = true;
	
	return (
		<div>
			Ooops!
		</div>
	);
};

export default {
	component: NotFoundPage
};
