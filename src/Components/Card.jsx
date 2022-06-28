import React, { useEffect, useState } from 'react';
import './Card.css';

const Card = () => {
	const [dogImg, setDogImg] = useState(
		'https://images.dog.ceo/breeds/terrier-norwich/n02094258_880.jpg'
	);

	const [prevDog, setPrevDog] = useState('');
	const [dogData, setDogData] = useState({});

	const FetchDog = async () => {
		setPrevDog(dogImg);
		const dogReq = await fetch('https://dog.ceo/api/breeds/image/random');
		const dogRes = await dogReq.json();
		const dogImgRes = dogRes.message;
		console.log(dogImgRes);
		setDogImg(dogImgRes);
	};

	const FetchDogData = async () => {
		//setPrevDog(dogImg);
		const dogDataReq = await fetch(
			'https://jsonplaceholder.typicode.com/users'
		);
		const dogDataRes = await dogDataReq.json();
		const dogData = dogDataRes[Math.floor(Math.random() * 10)];
		console.log(dogData);
		setDogData(dogData);
		//setDogImg(dogImgRes);
	};

	const handleCLick = () => {
		FetchDog();
		FetchDogData();
	};

	const handleBack = () => {
		setDogImg(prevDog);
	};

	useEffect(() => {
		FetchDog();
		FetchDogData();
	}, [setDogImg]);

	return (
		<div className='Card'>
			<div
				className='doggo-img'
				style={{
					backgroundImage: `url(${dogImg})`,
				}}
			>
				<span className='doggo-name'>{dogData?.username}</span>
				<span className='doggo-motto'>{dogData.company?.catchPhrase}</span>
			</div>

			<div className='button-div'>
				<button className='return-button' onClick={handleBack}>
					Return
				</button>
				<button className='dislike-button' onClick={handleCLick}>
					Dislike
				</button>
				<button className='like-button' onClick={handleCLick}>
					Like
				</button>
			</div>
		</div>
	);
};

export default Card;

//https://dog.ceo/api/breeds/image/random Fetch!
//https://jsonplaceholder.typicode.com/users
