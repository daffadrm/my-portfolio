import { useEffect } from 'react';
import Navbar from './homepage-comps/Navbar';
import Home from './homepage-comps/Home';
import About from './homepage-comps/About';
import MyProjects from './homepage-comps/MyProjects';
import Techs from './homepage-comps/Techs';
import CertificateSlider from './homepage-comps/CertificateSlider';

const HomePage = () => {
	const certificates = [
		{ image: '/images/certificates/frontend-developer-hackerRank.webp' },
		{ image: '/images/certificates/javascript-basic-certificate.webp' },
		{ image: '/images/certificates/css_certificate.webp' },
		{ image: '/images/certificates/fullstack-node-js.webp' },
	];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Navbar />
			<Home />
			<About />
			<Techs />
			<MyProjects />
			<CertificateSlider certificates={certificates} />
		</>
	);
};

export default HomePage;
