import "./Clients.css";
import Client1 from "../assets/Clients/1.png"
import Client2 from "../assets/Clients/2.png"
import Client3 from "../assets/Clients/3.png"
import Client4 from "../assets/Clients/4.png"
import Client5 from "../assets/Clients/5.png"
import Client6 from "../assets/Clients/6.png"
import Client7 from "../assets/Clients/7.png"
export function Clients(){
    return(
        <>
        
<section className="items-center pb-24">
    <div class="container brandsCarousel">
        <div class="flex flex-row carouselTrack">
            <div class="brandLogo">
                <img src={Client1} alt="" />
            </div>
            <div class="brandLogo">
                <img src={Client2} alt="" />
            </div>
            <div class="brandLogo">
                <img src={Client3} alt="" />
            </div>
            <div class="brandLogo">
                <img src={Client4} alt="" />
            </div>
            <div class="brandLogo">
                <img src={Client5} alt="" />
            </div>
            <div class="brandLogo">
                <img src={Client6} alt="" />
            </div>
            {/* <div class="brandLogo">
                <img src={Client7} alt="" />
            </div> */}
            <div class="brandLogo">
                <img src={Client1} alt="" />
            </div>
            <div class="brandLogo">
                <img src={Client2} alt="" />
            </div>
            <div class="brandLogo">
                <img src={Client3} alt="" />
            </div>
            <div class="brandLogo">
                <img src={Client4} alt="" />
            </div>
            <div class="brandLogo">
                <img src={Client5} alt="" />
            </div>
            <div class="brandLogo">
                <img src={Client6} alt="" />
            </div>
            {/* <div class="brandLogo">
                <img src={Client7} alt="" />
            </div> */}
            
            
        </div>
    </div>

</section>
        </>
    )
}