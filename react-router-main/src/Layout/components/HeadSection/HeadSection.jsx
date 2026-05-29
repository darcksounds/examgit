import './HeadSection.css'
import Logo2 from '../Logo/Logo2.jsx'
import Button from '../Buttons/Button/Button.jsx'

function HeadSection() {
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