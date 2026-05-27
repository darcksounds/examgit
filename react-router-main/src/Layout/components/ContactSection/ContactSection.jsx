import './ContactSection.css'

function ContactSection() {
    return (
        <div className='contact_section'>
            <h2>დაგვირეკეთ ტელეფონზე <span className='phone_text'>ან მოგვწერეთ</span> <span className='chat_text'>ჩატში</span></h2>
            <p>შეარჩიეთ თქვენთსის სასურველი სტილი და ზომა</p>

            <div className='contact_card'>
                <div className='contact_phone'>
                    📞 <span>79340646</span>
                </div>
                <div className='contact_buttons'>
                    <a href='tel:79340646' className='btn_call'>📞 Call Now</a>
                    <a href='https://wa.me/79340646' className='btn_whatsapp'>💬 WhatsApp</a>
                    <a href='viber://chat?number=79340646' className='btn_viber'>📲 Viber</a>
                </div>
                <p className='contact_available'>ვმუშაობთ კვირაში 7 დღე • სწრაფი პასუხი</p>
            </div>
        </div>
    )
}
export default ContactSection