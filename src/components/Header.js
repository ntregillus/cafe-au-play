import react from 'react';
import {Link} from 'react-router-dom';
import {Sticky} from 'react-sticky';
const Header = () => (
    <header className="header" >
        <div className="container">
            <div className="header__wrapper">
                <img className="header__logo" />
                <div>
                    <h1>
                        <Link to="/" className="header__title">Cafe au Play</Link>
                    </h1>
                    <p>
                        Your extended family and support in raising kids
                    </p>
                </div>
            </div>
        </div>
    </header>
);

export default Header;