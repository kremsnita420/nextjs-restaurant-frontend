import { MenuItem } from '@components';
import '@styles/components/MenuSection.scss';

const Menu = ({ title, menuData }) => {
	return (
		<div className='app__menu-page__section'>
			<h3 className='app__menu-page__section__title'>{title}</h3>
			{menuData &&
				menuData.map((cocktail, i) => (
					<MenuItem
						key={`cocktail-#${i}`}
						title={cocktail.title}
						price={cocktail.price}
						desc={cocktail.description}
					/>
				))}
		</div>
	);
};

export default Menu;
