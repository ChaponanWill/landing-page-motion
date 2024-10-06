import React from "react";
import Image from "next/image";

function BackgroundRadialRight() {
    return (
        <div className="right-0 absolute -z-50 top-0  ">
            <Image src="/assets/background-floated-right.png" alt="Circle Right" width={850} height={650} />
            
        </div>
    );
}

export default BackgroundRadialRight;
