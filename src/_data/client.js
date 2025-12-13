module.exports = {
    "name": "The Icon Siam",
    "email": "theiconsiammassage@gmail.com",
    "phoneForTel": "+441707246616",
    "phoneFormatted": "01707 246 616",
    "openingHours": "Wed-Mon: 10am-9.30pm, Tue: 10am-8pm",
    "onlineBooking": "https://theiconsiam.setmore.com/",
    "address": {
        "lineOne": "10 Mutton Lane",
        "lineTwo": "Potters Bar",
        "city": "Hertfordshire",
        "state": "",
        "zip": "EN6 2PA",
        "country": "UK",
        "mapLink": "https://maps.app.goo.gl/c7sAnUSzcowjUqZW6"
    },
    "socials": {
        "facebook": "https://www.facebook.com/",
        "instagram": "https://www.instagram.com/",
        "googleReview": "https://g.page/r/CYFHCfw33mDGEBM/review",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    "domain": "https://theiconsiammassage.co.uk",
    "schema": {
        "business": {
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            "@id": "https://theiconsiammassage.co.uk/#business",
            "name": "The Icon Siam",
            "image": "https://theiconsiammassage.co.uk/assets/svgs/logo-gold.svg",
            "url": "https://theiconsiammassage.co.uk",
            "telephone": "+441707246616",
            "email": "theiconsiammassage@gmail.com",
            "priceRange": "££",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "10 Mutton Lane, Potters Bar",
                "addressLocality": "Hertfordshire",
                "postalCode": "EN6 2PA",
                "addressCountry": "GB"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "url": "https://maps.app.goo.gl/c7sAnUSzcowjUqZW6"
            },
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday"],
                    "opens": "10:00",
                    "closes": "21:30"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Tuesday",
                    "opens": "10:00",
                    "closes": "20:00"
                }
            ],
            "sameAs": [
                "https://g.page/r/CYFHCfw33mDGEBM/review"
            ]
        },
        "website": {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://theiconsiammassage.co.uk/#website",
            "url": "https://theiconsiammassage.co.uk",
            "name": "The Icon Siam",
            "publisher": {
                "@id": "https://theiconsiammassage.co.uk/#business"
            }
        }
    }
};
