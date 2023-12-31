'use client';
import '@styles/components/VideoComponent.scss';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { images } from '@constants';

const VideoComponent = ({ videoSrc }) => {
	const [playVideo, setPlayVideo] = useState(false);
	const vidRef = useRef();
	return (
		<div className='app__video'>
			<video
				autoPlay={false}
				muted
				paused='true'
				loop
				width={500}
				height={500}
				ref={vidRef}>
				<source src={videoSrc} type='video/mp4' />
				<Image src={images.welcome613} alt='Fallback video image' />
			</video>
			<div className='app__video-overlay'>
				<div
					className='app__video-overlay__circle'
					onClick={() => {
						setPlayVideo(!playVideo);
						if (playVideo) {
							vidRef.current.pause();
						} else {
							vidRef.current.play();
						}
					}}>
					{playVideo ? (
						<BsPauseFill color='#fff' fontSize={30} />
					) : (
						<BsFillPlayFill color='#fff' fontSize={30} />
					)}
				</div>
			</div>
		</div>
	);
};

export default VideoComponent;
