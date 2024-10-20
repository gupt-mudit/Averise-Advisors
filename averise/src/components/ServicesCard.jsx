import React from 'react'

export const ServicesCard = () => {
    const pricingOptions = [
        {
            title: "International Tax Advisory",
            features: [
                "Global tax strategy optimization and risk mitigation",
                "Cross-border tax planning and compliance",
                "Corporate tax structuring for multinational operations",
                "Support with international tax disputes and resolution",
            ],
        },
        {
            title: "Transfer Pricing Solutions",

            features: [
                "Transfer pricing documentation and compliance",
                "Benchmarking analysis for arm’s length pricing",
                "Assistance with Advance Pricing Agreements (APAs) and dispute resolution",
                "Intercompany transaction structuring",
            ],
        },
        {
            title: "ESG Strategy & Compliance",
            features: [
                "Development of tailored ESG strategies",
                "ESG and sustainability reporting aligned with global standards",
                "ESG risk management and compliance",
                "Designing and implementing impactful CSR initiatives to engage stakeholders and contribute positively to society.",
            ],
        },
    ];
    return (
        <div className="mt-10 md:p-20">
            <div className="flex flex-wrap">
                {pricingOptions.map((option, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2 ">
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
