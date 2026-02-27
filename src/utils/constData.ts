import ImageNames from "./imageNames"
import type { typeCommerce } from "./types"

export const commerceData:Array<typeCommerce>  = [
  {
    tabItem:"Digital storefronts",
    title:"Lightning-fast storefronts.",
    smmary:`Create commerce experiences that drive sales with high-performing online storefronts 
            and generative AI-powered content creation tools.`,
    articleItems:[`Launch your site quickly using a prebuilt storefront with integrated commerce functionality — including product listing pages, product detail pages, cart, and checkout.`
                  ,`Increase organic traffic and conversion rates with a storefront architecture optimized to help you achieve top Google Lighthouse scores, backed by years of industry experience.`
                  ,`Empower marketers and merchandisers to create web content in minutes using a visual storefront editor and generative AI-powered experimentation.`
                  ,`Continually optimize your storefront with user-friendly native A/B testing tools.`],
    buttonTitle:'Learn about digital storefronts',
    picture:ImageNames.tab_0,
  },
  {
    tabItem:"Personalized commerce",
    title:"Real-time personalization for higher conversion rates.",
    smmary:`Activate your commerce data to personalize every customer interaction and deliver 
            seamless experiences that drive impact.`,
    articleItems:[`Match customers to products faster with personalized search, category merchandising, and product recommendations powered by AI.`
                  ,`Boost loyalty and sales with custom campaigns for each shopper using rich, real-time commerce data shared with other Adobe Experience Cloud solutions such as Adobe Real-Time CDP and Adobe Journey Optimizer.`
                  ,`Activate sophisticated audiences from Real-Time CDP in Adobe Commerce to further individualize your storefront experience.`
                  ,`Activate sophisticated audiences from Real-Time CDP in Adobe Commerce to further individualize your storefront experience.`],
    buttonTitle:'Learn about personalized commerce',
    picture:ImageNames.tab_1,
  },
  {
    tabItem:"Composable platform",
    title:"Simplified development. Faster time to market.",
    smmary:`Empower your development team to innovate faster and create unique experiences with an API-first composable platform that delivers new features without upgrades and is easy to extend, integrate, and maintain.`,
    articleItems:[`Launch quickly using a comprehensive suite of precomposed services that can be set up in minutes and are easily managed from a centralized, self-service console.`
                  ,`Build differentiated commerce experiences with comprehensive APIs, hundreds of application events, a library of high-quality apps, and extensibility for native features and user interfaces.`
                  ,`Extend Adobe Commerce easily with apps and services that can be installed, scaled, and updated without impacting the rest of your solution.`
                  ,`Deliver ultra-quick response times no matter where your users are by scaling and distributing your APIs globally with edge computing.`
                  ,'Improve developer efficiency with a low code development environment, accelerators for common use cases, and unified developer consoles, logging, and CLIs (command line interfaces).'
                ],
    buttonTitle:'Learn about composable development',
    picture:ImageNames.tab_2,
  },
  {
    tabItem:"B2B commerce",
    title:"Limitless growth with scaled operations.",
    smmary:`Operate confidently with an always up-to-date, secure, and cloud-native platform designed for enterprise scale and growth.`,
    articleItems:[`Ensure smooth peak sales events with a distributed architecture and auto-scaling capabilities that support unlimited traffic and can process over 200,000 orders per hour.`
                  ,`Grow your sales with a flexible catalog service that handles millions of SKUs, thousands of prices per SKU, and rapid price updates across a wide range of product types.`
                  ,`Efficiently expand to new markets, brands, and business models — including B2C and B2B — from a single platform.`
                  ,`Easily identify and execute new strategies for growth by analyzing commerce data using prebuilt dashboards and data visualization tools.`],
    buttonTitle:'Learn about personalized commerce',
    picture:ImageNames.tab_3,
  },
  {
    tabItem:"Composable platform",
    title:"A sales platform for accelerated B2B sales.",
    smmary:`Expand your B2B business and increase revenue and loyalty with an always-on digital sales portal and tools to enhance seller productivity.`,
    articleItems:[`Enable online B2B purchasing by supporting company accounts with multiple buyers, roles, and purchasing permissions.`
                  ,`Personalize buying experiences with customer-specific catalogs, pricing, payment options, and promotions.`
                  ,`Streamline purchasing through quick-ordering options and automated purchase approval processes while reducing your call volume with self-service account management.`
                  ,`Enable your sellers to negotiate quotes entirely online and directly assist customers with configuring and completing their digital transactions.`
                  ,'Operate a range of business models from a single platform — including B2B, direct-to-consumer, and B2B2C or B2B2B sales through channel partners.'
                ],
    buttonTitle:'Learn about composable development',
    picture:ImageNames.tab_4,
  },
]

export const useCardData = [
    {
        image: ImageNames.bucket,
        title: "Unify marketing and commerce",
        description: "Connect shopping journeys for seamless experiences and higher sales"
    },
    {
        image: ImageNames.screen,
        title: "Multi-site scalability",
        description: "Scale your storefronts to multiple sites,brand, and markets."
    },
    {
        image: ImageNames.analysis,
        title: "B2B self-sevice portal",
        description: "Simplify the B2B buying process and unlock new revenue streams."
    },
    {
        image: ImageNames.home,
        title: "Streamline commerce operations",
        description: "Improve operational efficiency with seamless back-office integration tools."
    }
]
export const BreadCrumbData = {
    home:"Home",
    products:"Products",
    adobe:"Adobe Comerce"
}

export const contactData = [
    {
        topic: 'Contact Us',
        item: [`Explore all products`]
    },
    {
        topic: 'Our solutions',
        item: [`Personalization at scale`,
            `Content supply chain`,
            `Unified customer experience`,
            `Creativity and production`,
            `B2B GTM orchestration`,
            `Generative AI`
        ]
    },
]
export const contentsData = [
    {
        topic: 'Large & medium business',
        item: [`Explore all products`,
            `Acrobat Pro`,
            `Acrobat Sign`,
            `Adobe Analytics`,
            `Adobe Express`,
            `Adobe Firefly solutions`,
            `Creative Cloud`,
            `Experience Manager`,
            `Frame.io`,
            `GenStudio for Performance Marketing`,
            `Real-Time CDP`]
    },
    {
        topic: 'Individuals & small business',
        item: [`Explore all products`,
            `Adobe Express`,
            `Adobe Firefly`,
            `Adobe Stock`,
            `Creative Cloud`,
            `Illustrator`,
            `Photoshop`,
            `Adobe Premiere`]
    },
    {
        topic: 'Resources & support',
        item: [`Resource center`,
            `Customer success stories`,
            `Adobe for Business blog`,
            `Experience Cloud support`,
            `Creative Cloud support`,
            `Community forums`,
            `Development resources`]
    },
    {
        topic: 'Adobe',
        item: [`About`,
            `AI Overview`,
            `Careers`,
            `Events`,
            `Newsroom`,
            `Corporate responsibility`,
            `Investor relations`,
            `Supply chain`,
            `Trust center`,
            `Adobe for All`]
    },
]
export const registerData = {
    title:"See the future of marketing, creativity and AI.",
    content:"Join us in Las Vegas, April 19-22. "
}
export const startedData = {
    image: ImageNames.b2b,
    width: 500,
    height: 375,
    title: "Let’s talk about what Adobe Commerce can do for your business.",
    buttontext: "Get started"
}
export const BrandData = [
    {
        image:ImageNames.mark1,
        title:"89%",
        description: "conversion rate among re-engaged shoppers"
    },
    {
        image:ImageNames.mark2,
        title:"41%",
        description: "conversion rate lift by applying personalization"
    },
    {
        image:ImageNames.mark3,
        title:"3x faster",
        description: "page load times."
    },
    {
        image:ImageNames.mark4,
        title:"44%",
        description: "increased site visits"
    }
]
export const integrationData = {
    image:ImageNames.integration,
    width:500,
    height:333,
    title:"Extend your Adobe Commerce capabilities even further.",
    content: "Integrate Adobe Commerce with your existing tech stack to enhance creativity, personalize experiences, and connect data across channels.",
    buttontext: "Go to Integrations"
}
export const reportData = {
    image: ImageNames.counter,
    width: 500,
    height: 296,
    title: 'Adobe named a Leader in the 2025 Gartner® Magic Quadrant™ for B2B Marketing Automation Platforms.',
    content: "We're honored to be recognized as a Leader based on Ability to Execute and Completeness of Vision.",
    buttontext: 'Read the report'
}
export const commerceItemData = [
    {
        icon:ImageNames.webniar,
        title:'Webinar',
        content:'Adobe Commerce: Building the Experience-Led Commerce Platform'
    },
    {
        icon:ImageNames.caseStudy,
        title:'Customer',
        content:`Signify increases net merchandized value by 55%.`
    },
    {
        icon:ImageNames.eventSession,
        title:'Event session',
        content:'Adobe Commerce 2025 product roadmap review.'
    },
    {
        icon:ImageNames.guide,
        title:'Guide',
        content:'Five must-haves for your B2B and B2C commerce platform.'
    },
    {
        icon:ImageNames.guide,
        title:'guide',
        content:'Getting started with Adobe Commerce.'
    },
    {
        icon:ImageNames.eventSession,
        title:'Event session',
        content:`HanesBrands creates the world's fastest storefront.`
    },
]
