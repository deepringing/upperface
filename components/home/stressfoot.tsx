import RightFoot from "@/components/home/RightFoot";
import LeftFoot from "@/components/home/LeftFoot";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

export default function Foot() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    })

    return (
        <>
            <div data-aos="fade-in"  data-aos-delay="100">
                <RightFoot
                    right={340}
                    top={0}
                />
            </div>
            <div data-aos="fade-in"  data-aos-delay="500">
                <LeftFoot
                    right={600}
                    top={120}
                />
            </div>
            <div data-aos="fade-in" data-aos-delay="1000">
                <RightFoot
                    right={460}
                    top={290}
                />
            </div>
            <div data-aos="fade-in" data-aos-delay="1500">
                <LeftFoot
                    right={730}
                    top={390}
                />
            </div>
            <div data-aos="fade-in" data-aos-delay="2000">
                <RightFoot
                    right={630}
                    top={600}
                />
            </div>
            <div data-aos="fade-in" data-aos-delay="2500">
                <LeftFoot
                    right={900}
                    top={730}
                />
            </div>
            <div data-aos="fade-in" data-aos-delay="3000">
                <RightFoot
                    right={800}
                    top={900}
                />
            </div>
        </>
    )
}
