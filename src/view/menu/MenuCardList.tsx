import React from 'react'
import { IMenuItem } from '../../store/menu/reducer'
import './menu.css'

interface MenuCardListProps {
    menu: IMenuItem[]
}

const MenuCardList: React.FC<MenuCardListProps> = ({ menu }) => {
	return (
		<div className='row'>
			{menu.map(f => <MenuCard item={f}/>)}
		</div>
	)
}

interface MenuCardProps {
    item: IMenuItem
}

export const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
    return (
        <div className="menuCard col-md-6 col-xl-4">
            <div className="menuCardInner">
                <div className="menuCardImage">
                </div>
                <div className="menuCardDetail">
                <h5 className="menuCardTitle">{item.name}</h5>
                <p><span>${item.price}</span></p>
                <p className="summary"><strong>Ingredients: </strong>{item.ingredients.map(i => i.name).join(', ')}</p>
                </div>
            </div>
        </div>
    )
}

export default MenuCardList