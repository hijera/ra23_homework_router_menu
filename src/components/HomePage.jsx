import React from 'react';
import PropTypes from 'prop-types';

HomePage.propTypes = {

};

function HomePage(props) {
    return (
        <article className="article">
            <h1 className="article__title">Гоночное такси</h1>
            <p className="article__paragraph">
                Гоночн​ое такси – отличная возможность насладиться скоростью и мастерством гонщика,
                сидя на месте штурмана, и стать свидетелем настоящего мастерства профессиональных
                инструкторов Сочи Автодрома, в полной мере ощутив крутые виражи на самой современной
                гоночной трассе России.
            </p>
        </article>
    )
}

export default HomePage;