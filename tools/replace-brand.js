const fs = require('fs-extra');  // Using fs-extra for better file/folder copy operations
const path = require('path');
const copyRoot = require('./copy-root');

const templateName = process.argv[2] || "onion";
const outputDirectory = path.join(__dirname, 'output/ts');

// Define the file paths and text that needs to be replaced
const relativeTextFilesToModify = [
    'theme.config.tsx',
    'pages/index.mdx',
    'pages/navigation.mdx',
    'pages/routing/react.mdx',
    'pages/folder-structure.mdx',
    'pages/auth/amplify.mdx',
    'pages/auth/auth0.mdx',
    'pages/auth/firebase/nextjs.mdx',
    'pages/auth/firebase/react.mdx',
    'pages/auth/jwt/nextjs.mdx',
    'pages/auth/jwt/react.mdx',
    'pages/routing/react.mdx',
    'pages/theme/component-override.mdx',
];

const logoMaps = {
    'onion': [
        { old: 'public/favicon.ico', new: 'assets/onion/favicon.ico' },
        { old: 'public/logo.svg', new: 'assets/onion/logo.svg' }
    ],
    'quickframe': [
        { old: 'public/favicon.ico', new: 'assets/quickframe/favicon.ico' },
        { old: 'public/logo.svg', new: 'assets/quickframe/logo.svg' },
    ],
    'essence': [
        { old: 'public/favicon.ico', new: 'assets/essence/favicon.ico' },
        { old: 'public/logo.svg', new: 'assets/essence/logo.svg' },
    ],
    'uko': [
        { old: 'public/favicon.ico', new: 'assets/uko/favicon.ico' },
        { old: 'public/logo.svg', new: 'assets/uko/logo.svg' },
    ],
}

const textMaps = {
    'onion': [
        { old: 'docs.onionui.com', new: 'docs.onionui.com' },
        { old: 'Onion', new: 'Onion' },
        { old: 'onion', new: 'onion' },
        { old: 'ONION', new: 'ONION' },
    ],
    'quickframe': [
        { old: 'docs.onionui.com', new: 'quickframe-doc.vercel.app' },
        { old: 'onionui.com', new: 'quickframe-react.vercel.app' },
        { old: 'Onion', new: 'QuickFrame' },
        { old: 'onion', new: 'quickframe' },
        { old: 'ONION', new: 'QUICKFRAME' },
    ],
    'essence': [
        { old: 'docs.onionui.com', new: 'essence-doc.vercel.app' },
        { old: 'onionui.com', new: 'essence-ui-kit.vercel.app' },
        { old: 'Onion', new: 'Essence' },
        { old: 'onion', new: 'essence' },
        { old: 'ONION', new: 'ESSENCE' },
    ],
    'uko': [
        { old: 'docs.onionui.com', new: 'uko-doc.vercel.app' },
        { old: 'onionui.com', new: 'uko-react.vercel.app' },
        { old: 'https://ui-lib.com/downloads/onion-ui-kit/', new: 'https://mui.com/store/items/uko-client-admin-dashboard/' },
        { old: 'Onion', new: 'Uko' },
        { old: 'onion', new: 'uko' },
        { old: 'ONION', new: 'UKO' },
    ],
}

// Function to replace text in files
const replaceTextInFile = (filePath, oldText, newText) => {
    const data = fs.readFileSync(filePath, 'utf8');
    const updatedData = data.replace(new RegExp(oldText, 'g'), newText);
    fs.writeFileSync(filePath, updatedData, 'utf8');
};

// Function to replace image files
const replaceImageFile = (filePath, newImagePath) => {
    fs.copyFileSync(newImagePath, filePath);
};

// Main execution function
const main = async () => {
    const textMap = textMaps[templateName];
    const logoMap = logoMaps[templateName];

    if (!textMap || !logoMap) {
        console.error(`No text or logo map found for template ${templateName}`);
        return;
    }

    // COPY FILES
    await copyRoot("..", "output/ts");

    // REPLACE TEXT
    relativeTextFilesToModify.forEach((relativePath) => {
        const filePath = path.join(outputDirectory, relativePath);
        if (fs.existsSync(filePath)) {
            textMap.forEach((textMap) => {
                replaceTextInFile(filePath, textMap.old, textMap.new);
            });
            // replaceTextInFile(filePath, oldTextBrand, newTextBrand);
            console.log(`Replaced text in ${filePath}`);
        } else {
            console.error(`File does not exist: ${filePath}`);
        }
    });

    // REPLACE IMAGES
    logoMap.forEach((logoMap) => {
        const filePath = path.join(outputDirectory, logoMap.old);
        if (fs.existsSync(filePath)) {
            const newLogoPath = path.join(__dirname, logoMap.new);
            replaceImageFile(filePath, newLogoPath);
            console.log(`Replaced image in ${filePath}`);
        } else {
            console.error(`File does not exist: ${filePath}`);
        }
    });
};

main();