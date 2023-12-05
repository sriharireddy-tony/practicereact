// import { Button } from "@mui/material";

import { useState } from "react";

function Comp1() {

    const active = {
        borderBottom: '2px solid white',
        width: '80px',
        color: 'white'
    };

    const [tabClick, setTabClick] = useState('Cricket');


    return (
        <div>
            <div className="headerColor">
                <div className="row">
                    <div className="col-2">
                        logo
                    </div>
                    <div className="col-6">
                        Random
                    </div>
                    <div className="col-4">
                        logo
                    </div>
                </div>
                <div className="row1">
                    <div onClick={() => { setTabClick('Cricket') }} style={tabClick==='Cricket' ? active : {}}>
                        Cricket
                    </div>
                    <div onClick={() => { setTabClick('Kabaddi') }} style={tabClick==='Kabaddi' ? active : {}}>
                        Kabaddi
                    </div>
                    <div onClick={() => { setTabClick('Football') }} style={tabClick==='Football' ? active : {}}>
                        Football
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Comp1;