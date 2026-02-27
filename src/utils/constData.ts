import ImageNames from "./imageNames"
import type { typeCommerce } from "./types"

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


export const AccordionData = [
    {
        title: "How does Adobe Commerce support multi-brand, multi-storefront operations?",
        content: "Adobe Commerce empowers businesses to support multiple storefronts for various brands, product lines, or geographic regions, all from a single platform and managed through a single administrative interface. Its robust, multisite architecture and advanced catalog service allow for rapid expansion into new markets while managing millions of SKUs across brands and regions. The platform enhances efficiency by enabling shared use of branding, catalogs, content, promotional offers, and other resources across stores. However, each store can also be completely customized to align with specific brand identities or regional demands, with native support for multiple languages, currencies, and tax regulations. Moreover, extensive APIs and integration starter kits streamline the customization of functionality and the integration of essential back-office systems across your organization, ensuring you can address a wide range of operational needs."
    },
    {
        title: "Can Adobe Commerce integrate with my existing ERP, CRM, and PIM systems?",
        content: "Adobe Commerce seamlessly connects with any back-office system, including enterprise resource planning (ERP), customer relationship management (CRM), product information management (PIM), warehouse management systems (WMS), and order management systems (OMS), ensuring smooth and efficient ecommerce experiences. To reduce the time it takes to integrate with back-office systems, Adobe Commerce provides an integration starter kit featuring a set of templates, onboarding scripts, and architectural best practices. This kit simplifies data synchronization for key objects like orders, customers, inventory, products, and shipping status between Adobe and third-party systems. Additionally, prebuilt connectors are available through Adobe Exchange to further accelerate integration with solutions, such as IBM Sterling Order Management, Microsoft Dynamics 365 ERP, SAP S4/HANA ERP, and more."
    },
    {
        title: "What AI and machine learning features does Adobe Commerce offer to enhance personalization?",
        content: "Adobe Commerce incorporates cutting-edge AI-powered merchandising tools designed to deliver personalized ecommerce experiences that significantly enhance sales and conversion rates. The platform uses AI to deliver fast and relevant search results tailored to customers’ on-site behavior and product popularity (most viewed, most added to cart, most purchased, trending, etc.). Additionally, AI organizes products on category pages to maximize sales to customers browsing the site. To enhance product discovery, Adobe Commerce includes 13 types of AI-powered product recommendations, using insights from customer history, frequently paired items, visual similarities, and trending products to drive conversion and boost average order values."
    },
    {
        title: "How does Adobe Commerce handle peak traffic volumes, especially during sales events?",
        content: "Adobe Commerce runs on an auto-scaling, highly available multicloud platform that can easily handle flash sales with over 200,000 orders per hour. The SaaS-based catalog service from Adobe helps to accelerate page load times on category, product detail, and search pages with 10x faster data retrieval and efficient synchronization with third-party systems, such as ERPs. Adobe Commerce also provides monitoring tools that track over 200 metrics to help maintain site health and performance."
    },
    {
        title: "What security measures does Adobe Commerce implement to protect my ecommerce site?",
        content: "Consumers and B2B buyers trust you with their sensitive data, and Adobe Commerce helps you maintain that trust with industry-leading security measures. Certified as a PCI (payment card industry) Level 1 Solution Provider, the platform undergoes regular security testing, including penetration tests and vulnerability assessments, verified by third-party vendors. Web application firewalls (WAF) use advanced AI-powered threat detection to provide comprehensive protection against a broad range of vulnerabilities. Adobe Commerce cloud-based solutions provide content delivery network (CDN) and distributed denial of service (DDoS) protection. An included security scan tool helps your teams proactively monitor their sites and receive alerts about known security risks, malware, and unauthorized access. If your business handles sensitive electronic personal health information, Adobe Commerce offers a HIPAA-ready solution for Adobe Commerce on Cloud with enhanced privacy, security, and governance controls."
    },
    {
        title: "How can I use Adobe Commerce to expand into new geographical markets?",
        content: "Adobe Commerce simplifies global expansion with a flexible multisite architecture and built-in localization features. Businesses can easily model their catalog for multiple markets and craft region-specific sites with native support for multiple languages, currencies, and tax regulations. Multiple inventory locations can be configured to maintain accurate stock levels across regions, and prebuilt extensions make it easy to integrate with local payment and shipping options. A global cloud infrastructure enables in-region hosting, while an extensive network of experts and developers provides reliable support to facilitate your expansion efforts."
    },
    {
        title: "What type of customer support does Adobe offer for Adobe Commerce users?",
        content: "Adobe delivers the highest level of support to equip your teams with the technical expertise and strategic guidance they need to drive business growth. With 24/7 access to expert assistance, teams can quickly troubleshoot and resolve issues. Account managers and advisory teams provide assistance with planning, best practices, and maximizing platform value. Your teams also have access to extensive resources — including comprehensive documentation, tutorials, code samples, a developer playground, and community forums available through Adobe Experience League and Adobe Developer to accelerate your time to market and optimize platform usage. An extensive network of experienced partners and developers further supports digital commerce strategy, implementation, and long-term maintenance."
    },
    {
        title: "What training and resources are available to help my team get started with Adobe Commerce?",
        content: "Adobe Digital Learning Services provides both instructor-led and on-demand courses designed to help your team quickly master the essentials. Courses cover key topics such as development fundamentals, building and managing online stores, and effectively managing catalogs and products within Adobe Commerce."
    },
]
export const AccordionTitle = "Questions? We have answers."

export const mainData = {
    details: "Adobe Commerce",
    title: "Exceptional commerce experiences.",
    content: "Adobe Commerce is a composable ecommerce solution that lets you quickly create global, multi-brand B2C and B2B experiences — all from one cloud-native platform. Use it to deliver personalized, high-performance storefront experiences that boost traffic, conversions, and GMV."
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
export const TabsTitle = "Explore the features and capabilities of Adobe Commerce.";