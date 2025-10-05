import { useState } from "react"
import HealthConData from "../Datas/HealthConData"
import "../Style/healthcon.css"
export default function HealthCon() {

    const [healthConData, setHealthConData] = useState(HealthConData);
    return (
        <div className="container health-section">
            <div className="max-w">
                <h2>Health Conditins</h2>
                <div className="health-card">
                    {healthConData.map((item, index) => (
                        <div key={index} className="health-card">
                            <img src={item.img} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}