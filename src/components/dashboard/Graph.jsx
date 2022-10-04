import React from 'react';
import BotGraph from './BotGraph';
import ProxyGraph from './ProxyGraph';

const Graph = () => {
    return (
    <div className='flex max-w-lg gap-5 mt-6 '>
        <BotGraph/>
        <ProxyGraph/>

    </div>
    )
}

export default Graph;