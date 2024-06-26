const countries = {
        Kyrgyzstan: {
        capital: "Bishkek",
        area: "199,951 sq km",
        population: "6,566,000",
        officialLanguage: "Kyrgyz",
        currency: "Kyrgyzstani Som",
        highestPeak: "Jengish Chokusu",
        lake: "Issyk-Kul",
        nationalDish: "Beshbarmak",
        nationalInstrument: "Khomus",
        historicalCity: "Osh",
        flagColors: "Red, Yellow, and Sun",
        independenceDay: "August 31",
        regions: [
            {
                name: 'Osh Region',
                capital: 'Osh',
                area: '28,400 sq km',
                population: '1,224,400',
                officialLanguage: 'Kyrgyz',
                currency: 'Kyrgyzstani Som',
                highestPeak: 'Lenin Peak',
                lake: 'Sary-Chelek Lake',
                nationalDish: 'Oromo',
                nationalInstrument: 'Komuz',
                historicalCity: 'Osh',
                flagColors: 'Red and Yellow',
                independenceDay: 'August 31',
                districts: [
                    {
                        name: 'Osh District',
                        area: '3,731 sq km',
                        population: '341,500',
                        officialLanguage: 'Kyrgyz',
                        currency: 'Kyrgyzstani Som',
                        famousPlaces: ['Uzgen Minaret', 'Aigul-Tash Cave'],
                    },
                    {
                        name: 'Kara-Suu District',
                        area: '1,549 sq km',
                        population: '110,300',
                        officialLanguage: 'Kyrgyz',
                        currency: 'Kyrgyzstani Som',
                        famousPlaces: ['Kara-Suu Bazaar', 'Shakhimardan'],
                    },
                ],

            },
            {
                name: 'Osh City',
                area: '162.7 sq km',
                population: '281,900',
                officialLanguage: 'Kyrgyz, Uzbek, Russian',
                currency: 'Kyrgyzstani Som',
                highestPeak: 'Suleiman Mountain',
                lake: 'None',
                nationalDish: 'Oshpaz',
                nationalInstrument: 'Khomus',
                historicalCity: 'Osh',
                flagColors: 'Red and Yellow',
                independenceDay: 'August 31',
                landmarks: ['Suleiman Mountain', 'Osh Bazaar', 'Ravat Abdulla Khan Mosque'],
                
            },
            {
                name: 'Chuy Region',
                capital: 'Bishkek',
                area: '20,200 sq km',
                population: '1,555,200',
                officialLanguage: 'Kyrgyz, Russian',
                currency: 'Kyrgyzstani Som',
                highestPeak: 'Peak Semenov-Tien-Shansky',
                lake: 'Issyk-Kul',
                nationalDish: 'Beshbarmak',
                nationalInstrument: 'Khomus',
                historicalCity: 'Bishkek',
                flagColors: 'Blue, Yellow, and White',
                independenceDay: 'August 31',
                districts: [
                    {
                        name: 'Bishkek District',
                        area: '127 sq km',
                        population: '1,028,000',
                        officialLanguage: 'Kyrgyz, Russian',
                        currency: 'Kyrgyzstani Som',
                        famousPlaces: ['Ala-Too Square', 'Osh Bazaar'],
                    },
                   
                ],
            },
            {
                name: 'Bishkek',
                area: '127 sq km',
                population: '1,028,000',
                officialLanguage: 'Kyrgyz, Russian',
                currency: 'Kyrgyzstani Som',
                highestPeak: 'Peak Semenov-Tien-Shansky',
                lake: 'Issyk-Kul',
                nationalDish: 'Beshbarmak',
                nationalInstrument: 'Khomus',
                historicalCity: 'Bishkek',
                flagColors: 'Blue, Yellow, and White',
                independenceDay: 'August 31',
                districts: [
                    {
                        name: 'Leninsky District',
                        area: '23 sq km',
                        population: '153,000',
                        officialLanguage: 'Kyrgyz, Russian',
                        currency: 'Kyrgyzstani Som',
                        famousPlaces: ['Ala-Too Square', 'Oak Park'],
                    },
                    {
                        name: 'Sverdlovsky District',
                        area: '36 sq km',
                        population: '216,000',
                        officialLanguage: 'Kyrgyz, Russian',
                        currency: 'Kyrgyzstani Som',
                        famousPlaces: ['Victory Square', 'Osh Bazaar'],
                    },
                    {
                        name: 'Pervomaisky District',
                        area: '31 sq km',
                        population: '219,000',
                        officialLanguage: 'Kyrgyz, Russian',
                        currency: 'Kyrgyzstani Som',
                        famousPlaces: ['Manas Square', 'Dordoi Market'],
                    },
                   
                ],
            },
            {
                name: 'Talas Region',
                capital: 'Talas',
                area: '13,400 sq km',
                population: '252,600',
                officialLanguage: 'Kyrgyz',
                currency: 'Kyrgyzstani Som',
                highestPeak: 'Khan Tengri',
                lake: 'Kol-Ukok Lake',
                nationalDish: 'Shorpo',
                nationalInstrument: 'Khomus',
                historicalCity: 'Talas',
                flagColors: 'Blue and White',
                independenceDay: 'August 31',
                districts: [
                    {
                        name: 'Talas District',
                        area: '4,200 sq km',
                        population: '96,200',
                        officialLanguage: 'Kyrgyz',
                        currency: 'Kyrgyzstani Som',
                        famousPlaces: ['Manas Ordo', 'Jambul Dobo', 'Tekturmas'],
                    },
                    {
                        name: 'Bakai-Ata District',
                        area: '3,600 sq km',
                        population: '75,300',
                        officialLanguage: 'Kyrgyz',
                        currency: 'Kyrgyzstani Som',
                        famousPlaces: ['Mausoleum of Manas', 'Suusamyr Valley'],
                    },
                    {
                        name: 'Manas District',
                        area: '3,600 sq km',
                        population: '81,100',
                        officialLanguage: 'Kyrgyz',
                        currency: 'Kyrgyzstani Som',
                        famousPlaces: ['Tash Rabat', 'Chatyr-Kul Lake'],
                    },
                   
                ],
            },
            {
                name: 'Jalal-Abad Region',
                capital: 'Jalal-Abad',
                area: '32,100 sq km',
                population: '1,122,100',
                officialLanguage: 'Kyrgyz',
                currency: 'Kyrgyzstani Som',
                highestPeak: 'Lenin Peak',
                lake: 'Kashka-Suu Lake',
                nationalDish: 'Oromo',
                nationalInstrument: 'Khomus',
                historicalCity: 'Jalal-Abad',
                flagColors: 'Green and Yellow',
                independenceDay: 'August 31',
                districts: [
                    {
                        name: 'Jalal-Abad District',
                        area: '4,900 sq km',
                        population: '245,800',
                        officialLanguage: 'Kyrgyz',
                        currency: 'Kyrgyzstani Som',
                        famousPlaces: ['Arslanbob', 'Saimaluu-Tash'],
                    },
                    {
                        name: 'Bazar-Korgon District',
                        area: '5,400 sq km',
                        population: '198,200',
                        officialLanguage: 'Kyrgyz',
                        currency: 'Kyrgyzstani Som',
                        famousPlaces: ['Bazar-Korgon', 'Toktogul Reservoir'],
                    },
                    {
                        name: 'Nooken District',
                        area: '6,800 sq km',
                        population: '278,100',
                        officialLanguage: 'Kyrgyz',
                        currency: 'Kyrgyzstani Som',
                        famousPlaces: ['Issyk-Kul Lake', 'Kashka-Suu Lake'],
                    },
                    
                ],
            },
            {
                name: 'Issyk-Kul Region',
                capital: 'Karakol',
                area: '43,100 sq km',
                population: '1,264,300',
                officialLanguage: 'Kyrgyz, Russian',
                currency: 'Kyrgyzstani Som',
                highestPeak: 'Khan Tengri',
                lake: 'Issyk-Kul',
                nationalDish: 'Beshbarmak',
                nationalInstrument: 'Khomus',
                historicalCity: 'Karakol',
                flagColors: 'Blue and White',
                independenceDay: 'August 31',
                districts: [
                    {
                        name: 'Karakol District',
                        area: '5,600 sq km',
                        population: '235,600',
                        officialLanguage: 'Kyrgyz, Russian',
                        currency: 'Kyrgyzstani Som',
                        famousPlaces: ['Lake Issyk-Kul', 'Altyn-Arashan'],
                    },
                    {
                        name: 'Cholpon-Ata District',
                        area: '6,900 sq km',
                        population: '207,400',
                        officialLanguage: 'Kyrgyz, Russian',
                        currency: 'Kyrgyzstani Som',
                        famousPlaces: ['Cholpon-Ata', 'Rukh Ordo Cultural Center'],
                    },
                    {
                        name: 'Tup District',
                        area: '8,400 sq km',
                        population: '276,300',
                        officialLanguage: 'Kyrgyz, Russian',
                        currency: 'Kyrgyzstani Som',
                        famousPlaces: ['Karakol Gorge', 'Jyrgalan'],
                    },
                   
                ],
            },
            {
            name: 'Naryn Region',
            capital: 'Naryn',
            area: '45,200 sq km',
            population: '272,300',
            officialLanguage: 'Kyrgyz',
            currency: 'Kyrgyzstani Som',
            highestPeak: 'Khan Tengri',
            lake: 'Song-Kul Lake',
            nationalDish: 'Naryn Shorpo',
            nationalInstrument: 'Khomus',
            historicalCity: 'Naryn',
            flagColors: 'Blue and White',
            independenceDay: 'August 31',
            districts: [
                {
                    name: 'Naryn District',
                    area: '8,500 sq km',
                    population: '117,900',
                    officialLanguage: 'Kyrgyz',
                    currency: 'Kyrgyzstani Som',
                    famousPlaces: ['Song-Kul Lake', 'Tash-Rabat Caravanserai'],
                },
                {
                    name: 'At-Bashy District',
                    area: '14,200 sq km',
                    population: '94,700',
                    officialLanguage: 'Kyrgyz',
                    currency: 'Kyrgyzstani Som',
                    famousPlaces: ['At-Bashy', 'At-Bashy Valley'],
                },
                {
                    name: 'Jumgal District',
                    area: '22,500 sq km',
                    population: '59,700',
                    officialLanguage: 'Kyrgyz',
                    currency: 'Kyrgyzstani Som',
                    famousPlaces: ['Kochkor', 'Son-Kul Lake'],
                },
                
            ],
        },
        
        {
            name: 'Batken Region',
            capital: 'Batken',
            area: '17,000 sq km',
            population: '479,300',
            officialLanguage: 'Kyrgyz, Uzbek',
            currency: 'Kyrgyzstani Som',
            highestPeak: 'Peak Lenin',
            lake: 'Isfana Lake',
            nationalDish: 'Plov',
            nationalInstrument: 'Khomus',
            historicalCity: 'Batken',
            flagColors: 'Red and White',
            independenceDay: 'August 31',
            districts: [
                {
                    name: 'Batken District',
                    area: '3,700 sq km',
                    population: '179,300',
                    officialLanguage: 'Kyrgyz, Uzbek',
                    currency: 'Kyrgyzstani Som',
                    famousPlaces: ['Isfana', 'Batken City'],
                },
                {
                    name: 'Leilek District',
                    area: '1,400 sq km',
                    population: '108,200',
                    officialLanguage: 'Kyrgyz, Uzbek',
                    currency: 'Kyrgyzstani Som',
                    famousPlaces: ['Leilek', 'Besh-Aral'],
                },
                {
                    name: 'Kyzyl-Kiya District',
                    area: '2,300 sq km',
                    population: '191,800',
                    officialLanguage: 'Kyrgyz, Uzbek',
                    currency: 'Kyrgyzstani Som',
                    famousPlaces: ['Kyzyl-Kiya', 'Chimgen Waterfall'],
                },
                
            ],
        },
            
            
        ],
    },

            
    
    Uzbekistan: {
        capital: "Tashkent",
        area: "448,978 sq km",
        population: "34,377,000",
        officialLanguage: "Uzbek",
        currency: "Uzbekistani Som",
        highestPeak: "Adelunga Toghi",
        lake: "Aral Sea",
        nationalDish: "Plov",
        nationalInstrument: "Dutar",
        historicalCity: "Samarkand",
        flagColors: "Blue, White, Green, Red",
        independenceDay: "September 1",
        famousPlaces: ["Registan", "Chorsu Bazaar", "Bukhara Old City", "Shah-i-Zinda"],
        regions: [
            {
                name: "Tashkent",
                capital: "Tashkent",
                area: "33,000 sq km",
                population: "2,485,900",
                language: "Uzbek, Russian",
                famousPlaces: ["Tashkent Metro", "Amir Timur Museum"],
            },
            {
                name: "Samarkand",
                capital: "Samarkand",
                area: "16,000 sq km",
                population: "1,234,500",
                language: "Uzbek, Tajik, Russian",
                famousPlaces: ["Registan", "Shah-i-Zinda"],
            },
            {
                name: "Bukhara",
                capital: "Bukhara",
                area: "39,400 sq km",
                population: "1,606,000",
                language: "Uzbek, Tajik, Russian",
                famousPlaces: ["Bukhara Old City", "Kalyan Minaret"],
            },
            {
                name: "Fergana",
                capital: "Fergana",
                area: "6,800 sq km",
                population: "3,682,100",
                language: "Uzbek, Kyrgyz, Tajik",
                famousPlaces: ["Fergana Valley", "Kokand Palace"],
            },
            {
                name: "Khorezm",
                capital: "Urgench",
                area: "6,300 sq km",
                population: "1,731,700",
                language: "Uzbek, Karakalpak, Russian",
                famousPlaces: ["Khiva Old City", "Urgench Historical Center"],
            },
            {
                name: "Navoiy",
                capital: "Navoiy",
                area: "110,800 sq km",
                population: "851,800",
                language: "Uzbek, Russian",
                famousPlaces: ["Navoiy Mining and Metallurgy Complex", "Karakalpakstan Desert"],
            },
            {
                name: "Surxondaryo",
                capital: "Termiz",
                area: "20,800 sq km",
                population: "2,039,900",
                language: "Uzbek, Tajik, Russian",
                famousPlaces: ["Termiz Archaeological Museum", "Kumkurgan Minaret"],
            }
        ]
    },
    Kazakhstan: {
        capital: "Nur-Sultan",
        area: "2,724,900 sq km",
        population: "18,994,962",
        officialLanguage: "Kazakh",
        currency: "Kazakhstani Tenge",
        highestPeak: "Khan Tengri",
        lake: "Balkhash",
        nationalDish: "Beshbarmak",
        nationalInstrument: "Dombra",
        historicalCity: "Almaty",
        flagColors: "Blue, Yellow, White",
        independenceDay: "December 16",
        famousPlaces: ["Charyn Canyon", "Medeu Skating Rink", "Astana Bayterek", "Kazakh Eli Monument"],
        regions: [
            {
                name: "Almaty",
                capital: "Almaty",
                area: "223,400 sq km",
                population: "1,968,800",
                language: "Kazakh, Russian",
                famousPlaces: ["Medeu Skating Rink", "Shymbulak Ski Resort"],
            },
            {
                name: "Karaganda",
                capital: "Karaganda",
                area: "428,000 sq km",
                population: "1,387,000",
                language: "Kazakh, Russian",
                famousPlaces: ["Temirtau Steel Plant", "Karaganda Ecological Museum"],
            },
            {
                name: "Astana",
                capital: "Nur-Sultan",
                area: "722,000 sq km",
                population: "1,136,000",
                language: "Kazakh, Russian",
                famousPlaces: ["Astana Bayterek", "Khan Shatyr Entertainment Center"],
            },
            {
                name: "Akmola",
                capital: "Kokshetau",
                area: "146,200 sq km",
                population: "688,500",
                language: "Kazakh, Russian",
                famousPlaces: ["Borovoe Nature Reserve", "Kokshetau Ski Resort"],
            },
            {
                name: "Atyrau",
                capital: "Atyrau",
                area: "118,600 sq km",
                population: "669,000",
                language: "Kazakh, Russian",
                famousPlaces: ["Atyrau Oil Refinery", "Atyrau City Mosque"],
            },
            {
                name: "West Kazakhstan",
                capital: "Oral",
                area: "151,300 sq km",
                population: "742,000",
                language: "Kazakh, Russian",
                famousPlaces: ["Aral Sea", "Oral History Museum"],
            },
            {
                name: "Pavlodar",
                capital: "Pavlodar",
                area: "124,800 sq km",
                population: "768,000",
                language: "Kazakh, Russian",
                famousPlaces: ["Irtysh River Embankment", "Pavlodar Drama Theater"],
            }
        ]
    },
    China:{
        capital: "Beijing",
        area: "9,596,961 sq km",
        population: "1,444,216,107",
        officialLanguage: "Chinese",
        currency: "Chinese Yuan (Renminbi)",
        highestPeak: "Mount Everest",
        lake: "Poyang Lake",
        nationalDish: "Peking Duck",
        nationalInstrument: "Erhu",
        historicalCity: "Xi'an",
        flagColors: "Red and Yellow",
        independenceDay: "October 1",
        famousPlaces: ["Great Wall of China", "Forbidden City", "Terracotta Army", "Shanghai Bund"],
        regions: [
            {
                name: "Beijing",
                capital: "Beijing",
                area: "16,410 sq km",
                population: "21,546,000",
                language: "Mandarin",
                famousPlaces: ["Forbidden City", "Tiananmen Square"],
            },
            {
                name: "Shanghai",
                capital: "Shanghai",
                area: "6,341 sq km",
                population: "26,317,104",
                language: "Mandarin, Shanghainese",
                famousPlaces: ["The Bund", "Yu Garden"],
            },
            {
                name: "Guangdong",
                capital: "Guangzhou",
                area: "179,800 sq km",
                population: "113,460,000",
                language: "Mandarin, Cantonese",
                famousPlaces: ["Canton Tower", "Shamian Island"],
            },
            {
                name: "Fujian",
                capital: "Fuzhou",
                area: "121,400 sq km",
                population: "39,800,000",
                language: "Mandarin, Min Nan",
                famousPlaces: ["Mount Wuyi", "Gulangyu Island"],
            },
            {
                name: "Zhejiang",
                capital: "Hangzhou",
                area: "101,800 sq km",
                population: "64,990,000",
                language: "Mandarin, Wu",
                famousPlaces: ["West Lake", "Lingyin Temple"],
            },
            {
                name: "Shandong",
                capital: "Jinan",
                area: "157,100 sq km",
                population: "99,470,000",
                language: "Mandarin",
                famousPlaces: ["Mount Tai", "Qufu"],
            },
            {
                name: "Tibet",
                capital: "Lhasa",
                area: "1,228,400 sq km",
                population: "3,683,000",
                language: "Tibetan, Mandarin",
                famousPlaces: ["Potala Palace", "Mount Kailash"],
            }
        ]
    },
Tajikistan:{
        capital: "Dushanbe",
        area: "143,100 sq km",
        population: "9,537,600",
        officialLanguage: "Tajik",
        currency: "Tajikistani Somoni",
        highestPeak: "Ismoil Somoni Peak",
        lake: "Karokul",
        nationalDish: "Plov",
        nationalInstrument: "Sato",
        historicalCity: "Khujand",
        flagColors: "Red, White, and Green",
        independenceDay: "September 9",
        famousPlaces: ["Ismoil Somoni Monument", "Hisor Fortress", "Pamir Highway", "Iskanderkul Lake"],
        regions: [
            {
                name: "Sughd",
                capital: "Khujand",
                area: "25,400 sq km",
                population: "2,132,100",
                language: "Tajik, Russian",
                famousPlaces: ["Khujand Fortress", "Panjshanbe Bazaar"],
            },
            {
                name: "Khatlon",
                capital: "Qurghonteppa",
                area: "24,800 sq km",
                population: "2,724,000",
                language: "Tajik, Russian",
                famousPlaces: ["Hisor Fortress", "Vose'kh", "Pamir Mountains"],
            },
            {
                name: "GBAO",
                capital: "Khorog",
                area: "64,200 sq km",
                population: "220,000",
                language: "Tajik, Russian",
                famousPlaces: ["Pamir Mountains", "Bulunkul Lake"],
            },
            {
                name: "Districts of Republican Subordination",
                capital: "Dushanbe",
                area: "28,000 sq km",
                population: "4,500,000",
                language: "Tajik, Russian",
                famousPlaces: ["Dushanbe Central Park", "National Museum of Tajikistan"],
            }
        ]
    },
    Russia:{
        capital: "Moscow",
        area: "17,125,191 sq km",
        population: "146,171,015",
        officialLanguage: "Russian",
        currency: "Russian Ruble",
        highestPeak: "Mount Elbrus",
        lake: "Lake Baikal",
        nationalDish: "Pelmeni",
        nationalInstrument: "Balalaika",
        historicalCity: "Saint Petersburg",
        flagColors: "White, Blue, and Red",
        independenceDay: "June 12",
        famousPlaces: ["Red Square", "Hermitage Museum", "Kremlin", "Trans-Siberian Railway"],
        regions: [
            {
                name: "Moscow",
                capital: "Moscow",
                area: "2,511 sq km",
                population: "12,678,000",
                language: "Russian",
                famousPlaces: ["Red Square", "Kremlin", "Bolshoi Theatre"],
            },
            {
                name: "Saint Petersburg",
                capital: "Saint Petersburg",
                area: "1,439 sq km",
                population: "5,398,064",
                language: "Russian",
                famousPlaces: ["Hermitage Museum", "Peterhof Palace", "Church of the Savior on Spilled Blood"],
            },
            {
                name: "Krasnodar Krai",
                capital: "Krasnodar",
                area: "76,000 sq km",
                population: "5,246,000",
                language: "Russian",
                famousPlaces: ["Sochi", "Krasnaya Polyana"],
            },
            {
                name: "Tatarstan",
                capital: "Kazan",
                area: "68,000 sq km",
                population: "3,897,000",
                language: "Tatar, Russian",
                famousPlaces: ["Kazan Kremlin", "Kul Sharif Mosque"],
            },
            {
                name: "Siberia",
                capital: "Novosibirsk",
                area: "13,100,000 sq km",
                population: "36,000,000",
                language: "Russian",
                famousPlaces: ["Lake Baikal", "Altai Mountains"],
            },
            {
                name: "Far East",
                capital: "Vladivostok",
                area: "6,992,700 sq km",
                population: "6,291,900",
                language: "Russian",
                famousPlaces: ["Kamchatka Peninsula", "Lake Baikal"],
            },
            {
                name: "Northern Caucasus",
                capital: "Pyatigorsk",
                area: "170,200 sq km",
                population: "10,043,000",
                language: "Russian",
                famousPlaces: ["Caucasus Mountains", "Elbrus"],
            }
        ]
    },
    
};
    

 
