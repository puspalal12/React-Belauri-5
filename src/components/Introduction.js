import React, { useEffect } from 'react'
import './Introduction.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Introduction = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section>
            <div className='intro'>
                <h3>
                    Brief Introduction
                </h3>
                <p data-aos="fade-up">
                    The city is situated at an altitude of 160 meters from sea level in the south to 1528 meters in the north. The east-west average length of the district is 44 km and the north-south average width is 34 Km. There are 10 ward committees in the municipality. The total area of the municipality is 123.4 sq km and the total population is 53,544. The population density of the municipality is 433 persons per km. Geographical Location and Characteristics: Province: Sudurpashchim (7) District: Kanchanpur Climate: Hot and Subtropical Boundary East: Punarbas Municipality West: Beldandi Gaupalika North: Laljhadi Gaupalika South: India Annual rainfall averages 1575 mm.

                </p>
            </div>

        </section>
    )
}

export default Introduction