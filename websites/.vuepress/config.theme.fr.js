module.exports = {
    selectText: '🇺🇳️',
    label: 'Français',
    ariaLabel: 'Langues',
    editLinkText: 'Modifier cette page sur GitHub',
    lastConfig: 'Dernière mise à jour',
    serviceWorker: {
        updatePopup: {
            message: "Le nouveau contenu est disponible.",
            buttonText: "Rafraîchir"
        }
    },
    sidebar: [
        {
            title: '<head>',
            collapsable: false,
            children: [
                'fr/examples/scrape-website-title',
                'fr/examples/scrape-header-tags',
                'fr/examples/scrape-meta-tags',
                'fr/examples/scrape-social-media-meta-tags',
            ],
        },
        {
            title: '<body>',
            collapsable: false,
            children: [
                'fr/examples/headings',
                'fr/examples/paragraphs',
                'fr/examples/lists',
                'fr/examples/outline',
                'fr/examples/extract-keywords',
                'fr/examples/scrape-images',
                'fr/examples/scrape-links',
                'fr/examples/navigation',
            ],
        },
        // {
        //     title: 'APIs',
        //     collapsable: false,
        //     children: [
        //         'fr/apis/alibaba',
        //         'fr/apis/amazon',
        //         'fr/apis/facebook',
        //         'fr/apis/instagram',
        //         'fr/apis/linkedin',
        //         'fr/apis/tiktok',
        //         'fr/apis/walmart',
        //         'fr/apis/zalando',
        //     ],
        // },
        {
            title: 'MISC',
            collapsable: true,
            children: [
                'fr/support/more-examples',
                'fr/support/support',
            ],
        },
    ]
}
