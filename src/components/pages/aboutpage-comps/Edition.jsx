
const Edition = () => {
	return (
		<section
			name="Edition"
			className="relative text-white max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-16 md:py-24 lg:py-0 lg:flex-row lg:gap-8"
		>
			<div className="w-full text-white mt-2 flex flex-col border-opacity-70 border-primary-color rounded-bl-lg rounded-br-lg">
				<h3 className="text-xl font-semibold text-primary-color pb-1 inline border-b-4 border-primary-color/60 mb-6">
					{'Technical Skills'}
				</h3>
				<ul>
					<li>
						<span className="text-light-gray">Languages: </span>
						<span>{'Proficient in JavaScript, HTML/CSS'}</span>
					</li>

					<li>
						<span className="text-light-gray">Frameworks: </span>
						<span>{'React.js, React Native, Vue.js, Node.js'} </span>
					</li>
					<li>
						<span className="text-light-gray">Databases: </span>
						<span>{'PostgresSQL, MySQL'} </span>
					</li>
					<li>
						<span className="text-light-gray">Developer Tools: </span>
						<span>
							{
								'React Hook, React-Redux, React Context, Axios, Tailwind CSS, Vuetify, Postman, Git, Visual Studio, etc'
							}{' '}
						</span>
					</li>
					<li>
						<span className="text-light-gray">Relevant Skills: </span>
						<span>
							{'Web Performance, Clean Code, REST API, Graphql, UI Design, etc'}{' '}
						</span>
					</li>
				</ul>
				<h3 className="text-xl font-semibold text-primary-color pb-1 pt-2 inline border-b-4 border-primary-color/60 mb-6">
					{'Education'}
				</h3>
				<div className="flex justify-between gap-1 flex-col-reverse md:flex-row mb-6">
					<div>
						<div className="text-primary-color">
							STATE POLYTECHNIC OF JAKARTA
						</div>
						<div className="text-sm">Associate Degree of Engineering</div>
						<div className="text-sm text-light-gray">
							Major in Electrical Engineering
						</div>
					</div>
					<h1 className="text-xs">{'Jakarta, ID / Oct 2020'}</h1>
				</div>
				<h3 className="text-xl font-semibold text-primary-color pb-1 pt-2 inline border-b-4 border-primary-color/60 mb-6">
					{'Experience'}
				</h3>
				<div className="flex justify-between gap-1 flex-col-reverse md:flex-row mb-6">
					<div>
						<div>{'Freelance Web Developer'}</div>
						<div className="text-light-gray">{'Frontend Developer'}</div>
					</div>

					<h1 className="text-xs">{'Jakarta, ID / Jan 2024 - Present'}</h1>
				</div>
				<div className="flex justify-between gap-1 flex-col-reverse md:flex-row mb-6">
					<div>
						<div>{'PT. Code Development Indoensia'}</div>
						<div className="text-light-gray">{'Software Developer'}</div>
					</div>

					<h1 className="text-xs">{'Jakarta, ID / May 2021 - Dec 2023'}</h1>
				</div>
				<h3 className="text-xl font-semibold text-primary-color pb-1 pt-2 inline border-b-4 border-primary-color/60 mb-6">
					{'Course / Training'}
				</h3>
				<div className="flex justify-between gap-1 flex-col-reverse md:flex-row mb-6">
					<div>
						<div>{'Javascript (Basic)'}</div>
						<div className="text-sm text-light-gray">HackerRank</div>
					</div>
					<h1 className="text-xs">{'Jan 2024'}</h1>
				</div>
				<div className="flex justify-between gap-1 flex-col-reverse md:flex-row mb-6">
					<div>
						<div>{'Css (Basic)'}</div>
						<div className="text-sm text-light-gray">HackerRank</div>
					</div>
					<h1 className="text-xs">{'Jan 2024'}</h1>
				</div>
				<div className="flex justify-between gap-1 flex-col-reverse md:flex-row mb-6">
					<div>
						<div>{'Frontend Developer (React)'}</div>
						<div className="text-sm text-light-gray">HackerRank</div>
					</div>
					<h1 className="text-xs">{'Dec 2023'}</h1>
				</div>
				<div className="flex justify-between gap-1 flex-col-reverse md:flex-row mb-6">
					<div>
						<div>{'Bootcamp Full Stack Node JS'}</div>
						<div className="text-sm text-light-gray">
							Code Development Indonesia
						</div>
					</div>
					<h1 className="text-xs">{'Feb 2021'}</h1>
				</div>
			</div>
		</section>
	);
};

export default Edition;
