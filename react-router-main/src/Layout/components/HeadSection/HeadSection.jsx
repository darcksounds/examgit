import './HeadSection.css'
import Logo from '../Logo/Logo'
import Logo2 from '../Logo/Logo2.jsx'
import { useEffect, useState } from 'react'
import { API_URL } from '../../../config.js'
import Button from '../Buttons/Button/Button.jsx'

function HeadSection() {
    const [menuData, setMenu] = useState([])
    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`${API_URL}/menu`)
            const data = await res.json()
            setMenu(data)
            console.log(data)
        }
        getData()
    }, [])

    return (
        <>
            <div className="Headsection_border">
                <div className="HeadSection">
                    <div className="HeadSection_left">
                        <div className="HeadSection_left_content">
                            <span>ახალი კოლექცია 2026</span>
                            <h1>Fashion Bags</h1>
                            <h2>& Style</h2>
                            <p>აღმოაჩინე შენი უნიკალური სტილი ჩვენთან ერთად</p>
                        </div>
                        <div className="buttons">

                        </div>
                        <div className="rusTavi">
                            <h3>მიწოდება ყველგან, მთელი საქართველოს მასშტაბით</h3>
                            <div className='button_div'>
                                <Button className='btnn' text="შეიძინეთ ეხლავე" to="/products" />
                                <Button className='gallery-cnob' text="გალერეა" to="/products" />
                            </div>

                        </div>
                    </div>

                    <div className="HeadSection_right">
                        <Logo2 />
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeadSection
