import React from 'react'

export const ServicesCard = () => {
    const pricingOptions = [
        {
            title: "International Tax Advisory",
            features: [
                "Comprehensive global tax strategy optimization, reducing risk and enhancing compliance",
                "Advanced cross-border tax planning to support seamless international operations",
                "Corporate tax structuring tailored to multinational business objectives",
                "Proactive support in navigating international tax disputes and resolutions, safeguarding your interests",
            ],
        },
        {
            title: "Transfer Pricing Solutions",
            features: [
                "Customized transfer pricing documentation to meet regulatory standards across jurisdictions",
                "Robust benchmarking analysis ensuring arm’s length compliance and alignment with market expectations",
                "Strategic assistance with Advance Pricing Agreements (APAs) and dispute resolution processes",
                "Expert structuring of intercompany transactions to optimize global tax efficiency",
            ],
        },
        {
            title: "ESG Strategy & Compliance",
            features: [
                "Development of bespoke ESG strategies that align with both business goals and societal expectations",
                "Comprehensive ESG and sustainability reporting, harmonized with leading global frameworks",
                "Risk management solutions to address ESG-related compliance and resilience challenges",
                "Design and implementation of high-impact CSR initiatives, fostering meaningful stakeholder engagement and contributing to sustainable societal progress",
            ],
        },
    ];
    return (
        <div className="mt-10 md:p-20">
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 ">
                {pricingOptions.map((option, index) => (
                    <div key={index} className="w-full p-2 ">
                        <div className="p-10 border  rounded-xl glass-effect">
                            <p className="text-4xl mb-8 bg-gradient-to-r from-green-600 to-green-900 text-transparent bg-clip-text">
                                {option.title}
                            </p>
                            <ul>
                                {option.features.map((feature, index) => (
                                    <li key={index} className="mt-8 flex items-center tracking-wide">
                                        <span className="ml-2">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
