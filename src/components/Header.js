import Hamburger from "../images/hamburger.png";
import Search from "../images/search.png";
import Youtube from "../images/youtube";
import UserIcon from "../images/user-icon.png";
import { toggleMenu } from "../utils/navSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SUGGESTION_API } from "../utils/config";
import { appendData } from "../utils/searchSlice";
import { useSelector } from "react-redux";
import { showSuggestions, hideSuggestions } from "../utils/suggestionSlice";

const Header = () => {
	const [searchText, setSearchText] = useState("");
	const [searchSuggestions, setSearchSuggestions] = useState([]);
	// const [showSuggestions, setShowSuggestions] = useState(false);

	const dispatch = useDispatch();
	const searchedData = useSelector((store) => store.search);
	const suggestions = useSelector((store) => store.suggestion.suggestions);

	const getSearchSuggestion = async () => {
		if (searchText === "") {
			return null;
		}
		// If data ia memoized then return memoized data else make an API call.
		if (searchText in searchedData) {
			setSearchSuggestions(searchedData[searchText]);
		} else {
			const data = await fetch(YOUTUBE_SUGGESTION_API + searchText);
			const json = await data.json();
			// console.log(json[0], json[1]);
			dispatch(appendData({ [searchText]: json[1] }));
			setSearchSuggestions(json[1]);
		}
	};

	useEffect(() => {
		const timer = setTimeout(() => getSearchSuggestion(), 200);

		return () => {
			clearTimeout(timer);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchText]);

	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
	};

	return (
		<header className="bg-black">
			<div className="my-container">
				<div className="flex justify-between py-3">
					<div className="flex col-span-1 items-center mr-4">
						<div className="menu-wrapper mr-4 cursor-pointer" onClick={toggleMenuHandler}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-white">
								<path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
							</svg>
						</div>
						<Link to="/" className=" cursor-pointer">
							<svg width="93" height="20" viewBox="0 0 93 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_50_6)">
									<path
										d="M14.4848 20C14.4848 20 23.5695 20 25.8229 19.4C27.0917 19.06 28.0459 18.08 28.3808 16.87C29 14.65 29 9.98 29 9.98C29 9.98 29 5.34 28.3808 3.14C28.0459 1.9 27.0917 0.94 25.8229 0.61C23.5695 0 14.4848 0 14.4848 0C14.4848 0 5.42037 0 3.17711 0.61C1.9286 0.94 0.954148 1.9 0.59888 3.14C0 5.34 0 9.98 0 9.98C0 9.98 0 14.65 0.59888 16.87C0.954148 18.08 1.9286 19.06 3.17711 19.4C5.42037 20 14.4848 20 14.4848 20Z"
										fill="#FF0033"
									/>
									<path d="M19 10L11.5 5.75V14.25L19 10Z" fill="white" />
									<path d="M37.1384 18.8996V13.4396L40.6084 2.09961H38.0184L36.6984 7.24961C36.3984 8.42961 36.1284 9.65961 35.9284 10.7996H35.7684C35.6584 9.79961 35.3384 8.48961 35.0184 7.22961L33.7384 2.09961H31.1484L34.5684 13.4396V18.8996H37.1384Z" fill="white" />
									<path
										d="M44.1003 6.2998C41.0703 6.2998 40.0303 8.0498 40.0303 11.8198V13.6098C40.0303 16.9898 40.6803 19.1098 44.0403 19.1098C47.3503 19.1098 48.0603 17.0898 48.0603 13.6098V11.8198C48.0603 8.4498 47.3803 6.2998 44.1003 6.2998ZM45.3903 14.7198C45.3903 16.3598 45.1003 17.3898 44.0503 17.3898C43.0203 17.3898 42.7303 16.3498 42.7303 14.7198V10.6798C42.7303 9.2798 42.9303 8.0298 44.0503 8.0298C45.2303 8.0298 45.3903 9.3498 45.3903 10.6798V14.7198Z"
										fill="white"
									/>
									<path
										d="M52.2714 19.089C53.7314 19.089 54.6413 18.479 55.3913 17.379H55.5014L55.6114 18.899H57.6012V6.53906H54.9613V16.469C54.6812 16.959 54.0312 17.319 53.4212 17.319C52.6512 17.319 52.4114 16.709 52.4114 15.689V6.53906H49.7812V15.809C49.7812 17.819 50.3614 19.089 52.2714 19.089Z"
										fill="white"
									/>
									<path d="M62.8263 18.8996V4.14961H65.8663V2.09961H57.1763V4.14961H60.2163V18.8996H62.8263Z" fill="white" />
									<path
										d="M67.8728 19.089C69.3328 19.089 70.2428 18.479 70.9928 17.379H71.1028L71.2128 18.899H73.2028V6.53906H70.5628V16.469C70.2828 16.959 69.6328 17.319 69.0228 17.319C68.2528 17.319 68.0128 16.709 68.0128 15.689V6.53906H65.3828V15.809C65.3828 17.819 65.9628 19.089 67.8728 19.089Z"
										fill="white"
									/>
									<path
										d="M80.6745 6.26945C79.3945 6.26945 78.4745 6.82945 77.8645 7.73945H77.7345C77.8145 6.53945 77.8745 5.51945 77.8745 4.70945V1.43945H75.3245L75.3145 12.1794L75.3245 18.8994H77.5445L77.7345 17.6994H77.8045C78.3945 18.5094 79.3045 19.0194 80.5145 19.0194C82.5245 19.0194 83.3845 17.2894 83.3845 13.6094V11.6994C83.3845 8.25945 82.9945 6.26945 80.6745 6.26945ZM80.7645 13.6094C80.7645 15.9094 80.4245 17.2794 79.3545 17.2794C78.8545 17.2794 78.1645 17.0394 77.8545 16.5894V9.23945C78.1245 8.53945 78.7245 8.02945 79.3945 8.02945C80.4745 8.02945 80.7645 9.33945 80.7645 11.7294V13.6094Z"
										fill="white"
									/>
									<path
										d="M92.6517 11.4995C92.6517 8.51957 92.3517 6.30957 88.9217 6.30957C85.6917 6.30957 84.9717 8.45957 84.9717 11.6195V13.7895C84.9717 16.8695 85.6317 19.1095 88.8417 19.1095C91.3817 19.1095 92.6917 17.8395 92.5417 15.3795L90.2917 15.2595C90.2617 16.7795 89.9117 17.3995 88.9017 17.3995C87.6317 17.3995 87.5717 16.1895 87.5717 14.3895V13.5495H92.6517V11.4995ZM88.8617 7.96957C90.0817 7.96957 90.1717 9.11957 90.1717 11.0695V12.0795H87.5717V11.0695C87.5717 9.13957 87.6517 7.96957 88.8617 7.96957Z"
										fill="white"
									/>
								</g>
								<defs>
									<clipPath id="clip0_50_6">
										<rect width="93" height="20" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</Link>
					</div>

					{/* Search Bar */}
					<div className="max-w-[350px] w-full mr-4 relative">
						<div className="input-wrapper relative border border-gray-500 border-solid rounded-full overflow-hidden">
							<input className="w-full h-full py-2 pl-4 pr-4 outline-0 bg-black text-white" type="text" placeholder="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)} onBlur={() => dispatch(hideSuggestions())} onFocus={() => dispatch(showSuggestions())} />
							<Link to={"/results/" + searchText} className="absolute top-0 right-0 z-10 h-full px-4 border-l-2  border-l-red-500">
								<button className="h-full">
									<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M7.4001 0.200195C3.64854 0.200195 0.600098 3.24863 0.600098 7.0002C0.600098 10.7518 3.64854 13.8002 7.4001 13.8002C8.88447 13.8002 10.2563 13.3221 11.3751 12.5127L16.6376 17.7627L17.7626 16.6377L12.5626 11.4252C13.5845 10.2346 14.2001 8.68926 14.2001 7.0002C14.2001 3.24863 11.1517 0.200195 7.4001 0.200195ZM7.4001 1.0002C10.7188 1.0002 13.4001 3.68145 13.4001 7.0002C13.4001 10.3189 10.7188 13.0002 7.4001 13.0002C4.08135 13.0002 1.4001 10.3189 1.4001 7.0002C1.4001 3.68145 4.08135 1.0002 7.4001 1.0002Z"
											fill="white"
										/>
									</svg>
								</button>
							</Link>
						</div>
						{/* Search Suggestions */}
						{searchSuggestions.length > 1 && (
							<div className="absolute left-0 top-10 z-20 bg-black rounded-lg w-full">
								<ul>
									{suggestions && searchSuggestions.map((suggestion) => {
										return (
											<li className="py-2 px-2 flex items-center border-b text-white rounded-xl hover:bg-gray-500 select-none cursor-pointer" key={suggestion} onClick={() => setSearchText(suggestion)}>
												<div className="icon-wrapper mr-2">
												<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M7.4001 0.200195C3.64854 0.200195 0.600098 3.24863 0.600098 7.0002C0.600098 10.7518 3.64854 13.8002 7.4001 13.8002C8.88447 13.8002 10.2563 13.3221 11.3751 12.5127L16.6376 17.7627L17.7626 16.6377L12.5626 11.4252C13.5845 10.2346 14.2001 8.68926 14.2001 7.0002C14.2001 3.24863 11.1517 0.200195 7.4001 0.200195ZM7.4001 1.0002C10.7188 1.0002 13.4001 3.68145 13.4001 7.0002C13.4001 10.3189 10.7188 13.0002 7.4001 13.0002C4.08135 13.0002 1.4001 10.3189 1.4001 7.0002C1.4001 3.68145 4.08135 1.0002 7.4001 1.0002Z"
														fill="white"
													/>
												</svg>
												</div>

												<span> {suggestion}</span>
											</li>
										);
									})}
								</ul>
							</div>
						)}
					</div>

					{/* Profile Section */}
					<div className="self-center">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0_52_34)">
								<rect width="20" height="20" fill="white" />
								<path
									d="M10 0C11.3542 0 12.6449 0.270182 13.8249 0.758463L13.8428 0.766602C15.0586 1.27279 16.154 2.01335 17.0703 2.93131C17.9915 3.85091 18.7337 4.9528 19.2415 6.17838C19.7314 7.35677 20 8.64909 20 10.0016C20 11.3558 19.7298 12.6465 19.2415 13.8265L19.2334 13.8444C18.7256 15.0602 17.9867 16.1556 17.0687 17.0719C16.1491 17.9932 15.0472 18.7354 13.8216 19.2432C12.6432 19.7331 11.3509 20.0016 9.99837 20.0016C8.64583 20.0016 7.35352 19.7314 6.1735 19.2432L6.1556 19.235C4.93978 18.7288 3.8444 17.9883 2.92806 17.0719L2.92969 17.0687C2.00846 16.1475 1.26628 15.0472 0.758464 13.8249C0.270182 12.6449 0 11.3542 0 10C0 8.64583 0.270182 7.35514 0.758464 6.17513L0.766602 6.15723C1.27279 4.94141 2.01335 3.84603 2.92969 2.92969H2.93132C3.85254 2.00846 4.9528 1.26628 6.17676 0.758463C7.35514 0.270182 8.64583 0 10 0ZM2.7653 15.376L2.80436 15.3532C3.76465 14.8177 6.26465 14.6403 7.30306 13.916C7.37956 13.8021 7.46094 13.6361 7.54069 13.4554C7.65951 13.1836 7.76856 12.8857 7.83691 12.6839C7.5472 12.3421 7.29818 11.9564 7.06055 11.5771L6.27441 10.3255C5.98796 9.89583 5.83822 9.50521 5.82845 9.18294C5.82357 9.03157 5.84961 8.89486 5.90658 8.77279C5.96517 8.64583 6.05469 8.54004 6.17676 8.45866C6.23372 8.4196 6.2972 8.38704 6.36719 8.36263C6.3151 7.68392 6.2972 6.82943 6.32975 6.11328C6.34603 5.94401 6.38021 5.77311 6.42578 5.60384C6.6276 4.88607 7.13053 4.30827 7.75391 3.91113C8.09733 3.69141 8.47494 3.52702 8.86719 3.41634C9.11784 3.34473 8.65397 2.5472 8.91276 2.51953C10.1611 2.39095 12.181 3.5319 13.0534 4.47428C13.4896 4.94629 13.7646 5.57292 13.8232 6.40137L13.7744 8.44238C13.9925 8.50911 14.1325 8.64746 14.1878 8.87044C14.2513 9.11947 14.1829 9.46777 13.9714 9.94466C13.9681 9.9528 13.9632 9.96256 13.9583 9.9707L13.0615 11.4469C12.7327 11.9889 12.3975 12.5342 11.9629 12.9622C12.0036 13.0208 12.0443 13.0778 12.0833 13.1348C12.2607 13.3952 12.4398 13.6556 12.6693 13.8883C12.6774 13.8965 12.6839 13.9046 12.6888 13.9128C13.7207 14.6419 16.2321 14.8193 17.1956 15.3564L17.2347 15.3792C18.3529 13.8786 19.0137 12.0182 19.0137 10.0033C19.0137 7.51465 18.0046 5.26042 16.3737 3.63118C14.7461 1.9987 12.4919 0.989583 10.0033 0.989583C7.51465 0.989583 5.26042 1.9987 3.63118 3.62956C1.99707 5.25716 0.987956 7.51139 0.987956 10C0.987956 12.015 1.64876 13.8753 2.7653 15.376Z"
									fill="black"
								/>
							</g>
							<defs>
								<clipPath id="clip0_52_34">
									<rect width="20" height="20" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
