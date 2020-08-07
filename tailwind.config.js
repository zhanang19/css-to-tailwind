// After adding new theme properties, please update the types that are used by the `classnames` module, otherwise
// Typescript type-checking will fail
// To update the types, run `yarn tw:generate-types`

module.exports = {
    purge: false,
    theme: {
        extend: {
            spacing: {
                '2px': '2px',
            },
            fontSize: {
                '2xs': '0.625rem',
            },
        },
        colors: {
            neutral: {
                '1000': '#000000',
                '900': '#1A1A1A',
                '800': '#333333',
                '700': '#4D4D4D',
                '600': '#666666',
                '500': '#808080',
                '400': '#999999',
                '300': '#B3B3B3',
                '200': '#CCCCCC',
                '150': '#D9D9D9',
                '100': '#E6E6E6',
                '50': '#F2F2F2',
                '30': '#F6F6F6',
                '10': '#FCFCFC',
                '0': '#FFFFFF',
            },
            teal: {
                '600': '#3C8079',
                '500': '#60A69F',
                '400': '#6EBEB6',
                '300': '#B6DEDA',
                '200': '#E2F2F0',
                '100': '#F1F8F8',
            },
            stix: {
                grouping: '#BA66CF',
                tool: '#958FD8',
                'malware-analysis': '#F9C0D7',
                malware: '#E092E1',
                'attack-pattern': '#61A3FF',
                'intrusion-set': '#82BCEF',
                campaign: '#2DA9C4',
                infrastructure: '#AED8C0',
                report: '#8CAE9F',
                'course-of-action': '#3CBA83',
                vulnerability: '#FCC269',
                indicator: '#FFB179',
                sighting: '#F38F8F',
                'threat-actor': '#EC3275',
                identity: '#9095A7',
                relationship: '#D4DEE8',
            },
            tlp: {
                green: '#D4FAD0',
                amber: '#FAEED8',
                red: '#FAD0D0',
            },
        },
    },
    variants: {},
    plugins: [],
};
