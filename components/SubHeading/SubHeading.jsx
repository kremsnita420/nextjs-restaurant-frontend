import '@styles/components/SubHeading.scss';
import { images } from '@constants';
import Image from 'next/image';

const SubHeading = ({ title, align, fontStyle }) => (
	<div
		className={`sub-heading ${fontStyle}`}
		style={{ alignItems: `${align}` }}>
		<p>{title}</p>
		<div className='sub-heading__img'>
			<Image
				src={images.spoon}
				alt='Spoon'
				className='spoon__img'
				width={60}
				height={12}
				as='image'
				loading='lazy'
			/>
		</div>
	</div>
);

export default SubHeading;
