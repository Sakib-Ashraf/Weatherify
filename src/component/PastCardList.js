import React from 'react';
import Card from "../component/Card";

const PastCardList = ({weather, converter}) => {
    
    
    
    return (
        <div>
            {Object.values(weather).map((value, i) => {
                return (<Card key={i} converter={converter} weather={weather[i]}></Card>);
            })}
        </div>
    );
}

export default PastCardList;