import React, { useEffect } from 'react';
import NavbarProjects from './AllProjects-comps/NavbarProjects';

const AllProjectsPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<NavbarProjects />
		</>
	);
};

export default AllProjectsPage;
