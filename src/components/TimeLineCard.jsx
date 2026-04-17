import React from 'react';

const TimeLineCard = ({d}) => {
    return (
        <div>
            <div className='text-[#64748B] flex p-4 gap-4 shadow-sm rounded-md'>
                    <div>
                        <img src={d.icon} alt="" />
                    </div>
                    <div>
                        <h1> <span className='font-bold text-black'>{d.type.charAt(0).toUpperCase()+ d.type.slice(1)}</span> with {d.name}</h1>
                        <p>{d.date.toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        })}</p>
                    </div>
                    </div>
        </div>
    );
};

export default TimeLineCard;