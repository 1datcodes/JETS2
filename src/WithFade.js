import React, { useEffect, useState } from "react";

const WithFade = (WrappedComponent) => {
    return function WithFadeComponent(props) {
        const [fadeClass, setFadeClass] = useState('fade-in');

        useEffect(() => {
            setFadeClass('fade-in');
            return () => {
                setFadeClass('fade-out');
            };
        }, []);

        return (
            <div className={fadeClass}>
                <WrappedComponent {...props} />
            </div>
        );
    };
};

export default WithFade;