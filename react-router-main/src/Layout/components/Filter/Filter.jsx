import './Filter.css'
import Button from '../Buttons/Button/Button.jsx'
import { useState } from 'react'

function Filter({ activeCategory, setActiveCategory, sortPrice, setSortPrice }) {
    return (
        <div className="filter_section">
            <div className="filter_parameters">
                <div className="filter_parameters_left">
                    <Button
                        className={activeCategory === 'all' ? 'all_products btn_active' : 'all_products'}
                        text="ყველა პროდუქტი"
                        onClick={() => setActiveCategory('all')}
                    />
                    <Button
                        className={activeCategory === 'bags' ? 'bags btn_active' : 'bags'}
                        text="ჩანთები"
                        onClick={() => setActiveCategory('bags')}
                    />
                    <Button
                        className={activeCategory === 'tshirts' ? 't_shirts btn_active' : 't_shirts'}
                        text="მაისურები"
                        onClick={() => setActiveCategory('tshirts')}
                    />
                </div>
                <div className="filter_parameters_right">
                    <select
                        value={sortPrice}
                        onChange={(e) => setSortPrice(e.target.value)}
                        className='price_filter'
                    >
                        <option value="default" hidden>ფასის ფილტრი</option>
                        <option value="low-high">დაბლიდან მაღლა</option>
                        <option value="high-low">მაღლიდან დაბლა</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
export default Filter