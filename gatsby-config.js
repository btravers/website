module.exports = {
    siteMetadata: {
        title: "Benoit Travers",
        description: "Benoit Travers - Développeur full stack freelance",
        siteUrl: "https://www.benoit-travers.fr",
        twitterUsername: "@Benoit_Travers",
    },
    plugins: [
        "gatsby-plugin-postcss",

        "gatsby-plugin-gatsby-cloud",

        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Benoit Travers",
                short_name: `Ben.it`,
                start_url: `/`,
                icon: "src/images/icon.svg",
                background_color: "#2B2D42",
                theme_color: "#2B2D42",
                lang: "fr",
                display: "standalone",
                legacy: true,
            },
        },
        "gatsby-plugin-offline",

        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },

        "gatsby-plugin-mdx",
        "gatsby-transformer-json",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "content",
                path: "./content/",
            },
            __key: "content",
        },

        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `roboto:100,300`
                ],
                display: 'swap'
            }
        },

    ],
};
