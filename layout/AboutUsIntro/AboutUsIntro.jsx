import '@styles/layout/AboutUsIntro.scss';
import Image from 'next/image';
import { images } from '@constants';
import { SubHeading } from '@components';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
const AboutUsIntro = () => {
	const t = useTranslations('about-us-intro');
	return (
		<section
			className='app-aboutus'
			style={{
				backgroundImage: `url(${images.bg.src})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'repeat',
				backgroundAttachment: 'fixed',
			}}
			id='about'>
			<div className='section__wrapper'>
				<div className='app-aboutus__left'>
					<SubHeading
						title={t('about-us-about-title')}
						align='flex-start'
						fontStyle='large_sub_heading'
					/>
					<p className='app-aboutus__left__p-text'>
						{t('about-us-about-desc')}
					</p>
					<Link href='/' type='button' className='gold__button'>
						{t('read-more')}
					</Link>
				</div>
				<div className='app-aboutus__middle'>
					<Image
						className='app-aboutus__middle__knife'
						src={images.knife}
						alt='Knife'
						as='image'
						placeholder='blur'
						loading='lazy'
						style={{
							width: '100%',
							height: 'auto',
						}}
						sizes='(max-width: 550px) 20rem, (max-width: 1200px) 20rem, 25rem'
					/>
					<Image
						className='app-aboutus__middle__g'
						src={images.G}
						alt='Letter G'
						as='image'
						placeholder='blur'
						loading='lazy'
					/>
				</div>
				<div className='app-aboutus__right'>
					<SubHeading
						title={t('about-us-history-title')}
						align='flex-end'
						fontStyle='large_sub_heading'
					/>
					<p className='app-aboutus__right__p-text'>
						{t('about-us-history-desc')}
					</p>
					<Link href='/' type='button' className='gold__button'>
						{t('read-more')}
					</Link>
				</div>
			</div>
		</section>
	);
};

export default AboutUsIntro;
