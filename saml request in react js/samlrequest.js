const { create } = require('xmlbuilder2');
const fs = require('fs');

const filePath = 'C:/Users/Asus/OneDrive/Desktop/SAML URLS IN REACT.txt';

// Read the contents of the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Log the contents of the file
    console.log('File contents:', data);
});

// Construct the SAML authentication request XML
const samlRequest = create({
    'samlp:AuthnRequest': {
        '@xmlns:samlp': 'urn:oasis:names:tc:SAML:2.0:protocol',
        '@xmlns:saml': 'urn:oasis:names:tc:SAML:2.0:assertion',
        '@ID': '_' + Math.random().toString(36).substr(2, 9),
        '@Version': '2.0',
        '@IssueInstant': new Date().toISOString(),
        '@Destination': 'https://dev-60700936.okta.com/app/dev-60700936_reactlandingpage_1/exkgp6mo8cMGlpeSu5d7/sso/saml',
        '@AssertionConsumerServiceURL': 'YOUR_ASSERTION_CONSUMER_SERVICE_URL',
        '@ProtocolBinding': 'urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST',
        'saml:Issuer': 'http://www.okta.com/${org.externalKey}',
    }
}).end({ prettyPrint: true });

console.log(samlRequest);