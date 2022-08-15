import './contact.css';

export default function ContactPage () {
    return (
        <>
        <div className="container" id="content">
        <div className="outer">
            <span className="close">&times;</span>

            <div className="contact">
                <h2 className="head">Contact Us</h2>
                <p className="txt">Let us know how we can help out. We will respond as soon as possible. </p>
            </div>
            <form className="action">
                <label for="fname">Full Name</label><br/>
                <input type="text" id="fname" name="fname" placeholder="Enter your first and last name" required/><br/>
                <label for="email">E-mail Address</label><br/>
                <input type="email" id="email" name="email" placeholder="Type your email here" required/><br/>
                <div className="msgbox">
                <label for="message">Message</label><br/>
                <textarea className="message" name="msg" placeholder="Type message here"></textarea>
                <button type="submit">Send Message</button>
                </div>
            </form>
        </div>
    </div>

        </>
    );
}
