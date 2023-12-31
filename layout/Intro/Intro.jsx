import '@styles/layout/Intro.scss';
import { VideoComponent } from '@components';

const Intro = () => {
	return (
		<section className='app__intro'>
			<VideoComponent videoSrc='/assets/meal.mp4' />
		</section>
	);
};

export default Intro;
