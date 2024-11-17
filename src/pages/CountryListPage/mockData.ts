import { CountryCallingCodeType, CountryByAbbreviationType, CountryDataListType } from './type'


// 国家名称 + 电话（calling_code）
const CountryCallingCode: CountryCallingCodeType[] = [
    {
        "country": "Afghanistan",
        "calling_code": 93
    },
    {
        "country": "Albania",
        "calling_code": 355
    },
    {
        "country": "Algeria",
        "calling_code": 213
    },
    {
        "country": "American Samoa",
        "calling_code": 1684
    },
    {
        "country": "Andorra",
        "calling_code": 376
    },
    {
        "country": "Angola",
        "calling_code": 244
    },
    {
        "country": "Anguilla",
        "calling_code": 1264
    },
    {
        "country": "Antarctica",
        "calling_code": 672
    },
    {
        "country": "Antigua and Barbuda",
        "calling_code": 1268
    },
    {
        "country": "Argentina",
        "calling_code": 54
    },
    {
        "country": "Armenia",
        "calling_code": 374
    },
    {
        "country": "Aruba",
        "calling_code": 297
    },
    {
        "country": "Australia",
        "calling_code": 61
    },
    {
        "country": "Austria",
        "calling_code": 43
    },
    {
        "country": "Azerbaijan",
        "calling_code": 994
    },
    {
        "country": "Bahamas",
        "calling_code": 1242
    },
    {
        "country": "Bahrain",
        "calling_code": 973
    },
    {
        "country": "Bangladesh",
        "calling_code": 880
    },
    {
        "country": "Barbados",
        "calling_code": 1246
    },
    {
        "country": "Belarus",
        "calling_code": 375
    },
    {
        "country": "Belgium",
        "calling_code": 32
    },
    {
        "country": "Belize",
        "calling_code": 501
    },
    {
        "country": "Benin",
        "calling_code": 229
    },
    {
        "country": "Bermuda",
        "calling_code": 1441
    },
    {
        "country": "Bhutan",
        "calling_code": 975
    },
    {
        "country": "Bolivia",
        "calling_code": 591
    },
    {
        "country": "Bosnia and Herzegovina",
        "calling_code": 387
    },
    {
        "country": "Botswana",
        "calling_code": 267
    },
    {
        "country": "Bouvet Island",
        "calling_code": 55
    },
    {
        "country": "Brazil",
        "calling_code": 55
    },
    {
        "country": "British Indian Ocean Territory",
        "calling_code": 246
    },
    {
        "country": "Brunei",
        "calling_code": 673
    },
    {
        "country": "Bulgaria",
        "calling_code": 359
    },
    {
        "country": "Burkina Faso",
        "calling_code": 226
    },
    {
        "country": "Burundi",
        "calling_code": 257
    },
    {
        "country": "Cambodia",
        "calling_code": 855
    },
    {
        "country": "Cameroon",
        "calling_code": 237
    },
    {
        "country": "Canada",
        "calling_code": 1
    },
    {
        "country": "Cape Verde",
        "calling_code": 238
    },
    {
        "country": "Cayman Islands",
        "calling_code": 1345
    },
    {
        "country": "Central African Republic",
        "calling_code": 236
    },
    {
        "country": "Chad",
        "calling_code": 235
    },
    {
        "country": "Chile",
        "calling_code": 56
    },
    {
        "country": "China",
        "calling_code": 86
    },
    {
        "country": "Christmas Island",
        "calling_code": 61
    },
    {
        "country": "Cocos (Keeling) Islands",
        "calling_code": 61
    },
    {
        "country": "Colombia",
        "calling_code": 57
    },
    {
        "country": "Comoros",
        "calling_code": 269
    },
    {
        "country": "Congo",
        "calling_code": 242
    },
    {
        "country": "Cook Islands",
        "calling_code": 682
    },
    {
        "country": "Costa Rica",
        "calling_code": 506
    },
    {
        "country": "Croatia",
        "calling_code": 385
    },
    {
        "country": "Cuba",
        "calling_code": 53
    },
    {
        "country": "Cyprus",
        "calling_code": 357
    },
    {
        "country": "Czech Republic",
        "calling_code": 420
    },
    {
        "country": "Denmark",
        "calling_code": 45
    },
    {
        "country": "Djibouti",
        "calling_code": 253
    },
    {
        "country": "Dominica",
        "calling_code": 1767
    },
    {
        "country": "Dominican Republic",
        "calling_code": 1849
    },
    {
        "country": "East Timor",
        "calling_code": 670
    },
    {
        "country": "Ecuador",
        "calling_code": 593
    },
    {
        "country": "Egypt",
        "calling_code": 20
    },
    {
        "country": "El Salvador",
        "calling_code": 503
    },
    {
        "country": "England",
        "calling_code": 44
    },
    {
        "country": "Equatorial Guinea",
        "calling_code": 240
    },
    {
        "country": "Eritrea",
        "calling_code": 291
    },
    {
        "country": "Estonia",
        "calling_code": 372
    },
    {
        "country": "Eswatini",
        "calling_code": 268
    },
    {
        "country": "Ethiopia",
        "calling_code": 251
    },
    {
        "country": "Falkland Islands",
        "calling_code": 500
    },
    {
        "country": "Faroe Islands",
        "calling_code": 298
    },
    {
        "country": "Fiji Islands",
        "calling_code": 679
    },
    {
        "country": "Finland",
        "calling_code": 358
    },
    {
        "country": "France",
        "calling_code": 33
    },
    {
        "country": "French Guiana",
        "calling_code": 594
    },
    {
        "country": "French Polynesia",
        "calling_code": 689
    },
    {
        "country": "French Southern territories",
        "calling_code": 262
    },
    {
        "country": "Gabon",
        "calling_code": 241
    },
    {
        "country": "Gambia",
        "calling_code": 220
    },
    {
        "country": "Georgia",
        "calling_code": 995
    },
    {
        "country": "Germany",
        "calling_code": 49
    },
    {
        "country": "Ghana",
        "calling_code": 233
    },
    {
        "country": "Gibraltar",
        "calling_code": 350
    },
    {
        "country": "Greece",
        "calling_code": 30
    },
    {
        "country": "Greenland",
        "calling_code": 299
    },
    {
        "country": "Grenada",
        "calling_code": 1473
    },
    {
        "country": "Guadeloupe",
        "calling_code": 590
    },
    {
        "country": "Guam",
        "calling_code": 1671
    },
    {
        "country": "Guatemala",
        "calling_code": 502
    },
    {
        "country": "Guinea",
        "calling_code": 224
    },
    {
        "country": "Guinea-Bissau",
        "calling_code": 245
    },
    {
        "country": "Guyana",
        "calling_code": 592
    },
    {
        "country": "Haiti",
        "calling_code": 509
    },
    {
        "country": "Heard Island and McDonald Islands",
        "calling_code": 672
    },
    {
        "country": "Holy See (Vatican City State)",
        "calling_code": 379
    },
    {
        "country": "Honduras",
        "calling_code": 504
    },
    {
        "country": "Hong Kong",
        "calling_code": 852
    },
    {
        "country": "Hungary",
        "calling_code": 36
    },
    {
        "country": "Iceland",
        "calling_code": 354
    },
    {
        "country": "India",
        "calling_code": 91
    },
    {
        "country": "Indonesia",
        "calling_code": 62
    },
    {
        "country": "Iran",
        "calling_code": 98
    },
    {
        "country": "Iraq",
        "calling_code": 964
    },
    {
        "country": "Ireland",
        "calling_code": 353
    },
    {
        "country": "Israel",
        "calling_code": 972
    },
    {
        "country": "Italy",
        "calling_code": 39
    },
    {
        "country": "Ivory Coast",
        "calling_code": 225
    },
    {
        "country": "Jamaica",
        "calling_code": 1876
    },
    {
        "country": "Japan",
        "calling_code": 81
    },
    {
        "country": "Jordan",
        "calling_code": 962
    },
    {
        "country": "Kazakhstan",
        "calling_code": 7
    },
    {
        "country": "Kenya",
        "calling_code": 254
    },
    {
        "country": "Kiribati",
        "calling_code": 686
    },
    {
        "country": "Kuwait",
        "calling_code": 965
    },
    {
        "country": "Kyrgyzstan",
        "calling_code": 996
    },
    {
        "country": "Laos",
        "calling_code": 856
    },
    {
        "country": "Latvia",
        "calling_code": 371
    },
    {
        "country": "Lebanon",
        "calling_code": 961
    },
    {
        "country": "Lesotho",
        "calling_code": 266
    },
    {
        "country": "Liberia",
        "calling_code": 231
    },
    {
        "country": "Libya",
        "calling_code": 218
    },
    {
        "country": "Liechtenstein",
        "calling_code": 423
    },
    {
        "country": "Lithuania",
        "calling_code": 370
    },
    {
        "country": "Luxembourg",
        "calling_code": 352
    },
    {
        "country": "Macao",
        "calling_code": 853
    },
    {
        "country": "North Macedonia",
        "calling_code": 389
    },
    {
        "country": "Madagascar",
        "calling_code": 261
    },
    {
        "country": "Malawi",
        "calling_code": 265
    },
    {
        "country": "Malaysia",
        "calling_code": 60
    },
    {
        "country": "Maldives",
        "calling_code": 960
    },
    {
        "country": "Mali",
        "calling_code": 223
    },
    {
        "country": "Malta",
        "calling_code": 356
    },
    {
        "country": "Marshall Islands",
        "calling_code": 692
    },
    {
        "country": "Martinique",
        "calling_code": 596
    },
    {
        "country": "Mauritania",
        "calling_code": 222
    },
    {
        "country": "Mauritius",
        "calling_code": 230
    },
    {
        "country": "Mayotte",
        "calling_code": 262
    },
    {
        "country": "Mexico",
        "calling_code": 52
    },
    {
        "country": "Micronesia, Federated States of",
        "calling_code": 691
    },
    {
        "country": "Moldova",
        "calling_code": 373
    },
    {
        "country": "Monaco",
        "calling_code": 377
    },
    {
        "country": "Mongolia",
        "calling_code": 976
    },
    {
        "country": "Montserrat",
        "calling_code": 1664
    },
    {
        "country": "Morocco",
        "calling_code": 212
    },
    {
        "country": "Mozambique",
        "calling_code": 258
    },
    {
        "country": "Myanmar",
        "calling_code": 95
    },
    {
        "country": "Namibia",
        "calling_code": 264
    },
    {
        "country": "Nauru",
        "calling_code": 674
    },
    {
        "country": "Nepal",
        "calling_code": 977
    },
    {
        "country": "Netherlands",
        "calling_code": 31
    },
    {
        "country": "Netherlands Antilles",
        "calling_code": 599
    },
    {
        "country": "New Caledonia",
        "calling_code": 687
    },
    {
        "country": "New Zealand",
        "calling_code": 64
    },
    {
        "country": "Nicaragua",
        "calling_code": 505
    },
    {
        "country": "Niger",
        "calling_code": 227
    },
    {
        "country": "Nigeria",
        "calling_code": 234
    },
    {
        "country": "Niue",
        "calling_code": 683
    },
    {
        "country": "Norfolk Island",
        "calling_code": 672
    },
    {
        "country": "North Korea",
        "calling_code": 850
    },
    {
        "country": "Northern Ireland",
        "calling_code": 44
    },
    {
        "country": "Northern Mariana Islands",
        "calling_code": 1670
    },
    {
        "country": "Norway",
        "calling_code": 47
    },
    {
        "country": "Oman",
        "calling_code": 968
    },
    {
        "country": "Pakistan",
        "calling_code": 92
    },
    {
        "country": "Palau",
        "calling_code": 680
    },
    {
        "country": "Palestine",
        "calling_code": 970
    },
    {
        "country": "Panama",
        "calling_code": 507
    },
    {
        "country": "Papua New Guinea",
        "calling_code": 675
    },
    {
        "country": "Paraguay",
        "calling_code": 595
    },
    {
        "country": "Peru",
        "calling_code": 51
    },
    {
        "country": "Philippines",
        "calling_code": 63
    },
    {
        "country": "Pitcairn",
        "calling_code": 64
    },
    {
        "country": "Poland",
        "calling_code": 48
    },
    {
        "country": "Portugal",
        "calling_code": 351
    },
    {
        "country": "Puerto Rico",
        "calling_code": 1939
    },
    {
        "country": "Qatar",
        "calling_code": 974
    },
    {
        "country": "Reunion",
        "calling_code": 262
    },
    {
        "country": "Romania",
        "calling_code": 40
    },
    {
        "country": "Russia",
        "calling_code": 7
    },
    {
        "country": "Rwanda",
        "calling_code": 250
    },
    {
        "country": "Saint Helena",
        "calling_code": 290
    },
    {
        "country": "Saint Kitts and Nevis",
        "calling_code": 1869
    },
    {
        "country": "Saint Lucia",
        "calling_code": 1758
    },
    {
        "country": "Saint Pierre and Miquelon",
        "calling_code": 508
    },
    {
        "country": "Saint Vincent and the Grenadines",
        "calling_code": 1784
    },
    {
        "country": "Samoa",
        "calling_code": 685
    },
    {
        "country": "San Marino",
        "calling_code": 378
    },
    {
        "country": "Sao Tome and Principe",
        "calling_code": 239
    },
    {
        "country": "Saudi Arabia",
        "calling_code": 966
    },
    {
        "country": "Scotland",
        "calling_code": 44
    },
    {
        "country": "Senegal",
        "calling_code": 221
    },
    {
        "country": "Serbia",
        "calling_code": 381
    },
    {
        "country": "Seychelles",
        "calling_code": 248
    },
    {
        "country": "Sierra Leone",
        "calling_code": 232
    },
    {
        "country": "Singapore",
        "calling_code": 65
    },
    {
        "country": "Slovakia",
        "calling_code": 421
    },
    {
        "country": "Slovenia",
        "calling_code": 386
    },
    {
        "country": "Solomon Islands",
        "calling_code": 677
    },
    {
        "country": "Somalia",
        "calling_code": 252
    },
    {
        "country": "South Africa",
        "calling_code": 27
    },
    {
        "country": "South Georgia and the South Sandwich Islands",
        "calling_code": 500
    },
    {
        "country": "South Korea",
        "calling_code": 82
    },
    {
        "country": "South Sudan",
        "calling_code": 211
    },
    {
        "country": "Spain",
        "calling_code": 34
    },
    {
        "country": "Sri Lanka",
        "calling_code": 94
    },
    {
        "country": "Sudan",
        "calling_code": 249
    },
    {
        "country": "Suriname",
        "calling_code": 597
    },
    {
        "country": "Svalbard and Jan Mayen",
        "calling_code": 47
    },
    {
        "country": "Sweden",
        "calling_code": 46
    },
    {
        "country": "Switzerland",
        "calling_code": 41
    },
    {
        "country": "Syria",
        "calling_code": 963
    },
    {
        "country": "Tajikistan",
        "calling_code": 992
    },
    {
        "country": "Tanzania",
        "calling_code": 255
    },
    {
        "country": "Thailand",
        "calling_code": 66
    },
    {
        "country": "The Democratic Republic of Congo",
        "calling_code": 243
    },
    {
        "country": "Togo",
        "calling_code": 228
    },
    {
        "country": "Tokelau",
        "calling_code": 690
    },
    {
        "country": "Tonga",
        "calling_code": 676
    },
    {
        "country": "Trinidad and Tobago",
        "calling_code": 1868
    },
    {
        "country": "Tunisia",
        "calling_code": 216
    },
    {
        "country": "Turkey",
        "calling_code": 90
    },
    {
        "country": "Turkmenistan",
        "calling_code": 993
    },
    {
        "country": "Turks and Caicos Islands",
        "calling_code": 1649
    },
    {
        "country": "Tuvalu",
        "calling_code": 688
    },
    {
        "country": "Uganda",
        "calling_code": 256
    },
    {
        "country": "Ukraine",
        "calling_code": 380
    },
    {
        "country": "United Arab Emirates",
        "calling_code": 971
    },
    {
        "country": "United Kingdom",
        "calling_code": 44
    },
    {
        "country": "United States",
        "calling_code": 1
    },
    {
        "country": "United States Minor Outlying Islands",
        "calling_code": 1
    },
    {
        "country": "Uruguay",
        "calling_code": 598
    },
    {
        "country": "Uzbekistan",
        "calling_code": 998
    },
    {
        "country": "Vanuatu",
        "calling_code": 678
    },
    {
        "country": "Venezuela",
        "calling_code": 58
    },
    {
        "country": "Vietnam",
        "calling_code": 84
    },
    {
        "country": "Virgin Islands, British",
        "calling_code": 1
    },
    {
        "country": "Virgin Islands, U.S.",
        "calling_code": 1
    },
    {
        "country": "Wales",
        "calling_code": 44
    },
    {
        "country": "Wallis and Futuna",
        "calling_code": 681
    },
    {
        "country": "Western Sahara",
        "calling_code": 212
    },
    {
        "country": "Yemen",
        "calling_code": 967
    },
    {
        "country": "Zambia",
        "calling_code": 260
    },
    {
        "country": "Zimbabwe",
        "calling_code": 263
    }
]


// 国家名称 + 缩写
const CountryByAbbreviation: CountryByAbbreviationType[] = [
    {
        "country": "Afghanistan",
        "abbreviation": "AF"
    },
    {
        "country": "Albania",
        "abbreviation": "AL"
    },
    {
        "country": "Algeria",
        "abbreviation": "DZ"
    },
    {
        "country": "American Samoa",
        "abbreviation": "AS"
    },
    {
        "country": "Andorra",
        "abbreviation": "AD"
    },
    {
        "country": "Angola",
        "abbreviation": "AO"
    },
    {
        "country": "Anguilla",
        "abbreviation": "AI"
    },
    {
        "country": "Antarctica",
        "abbreviation": "AQ"
    },
    {
        "country": "Antigua and Barbuda",
        "abbreviation": "AG"
    },
    {
        "country": "Argentina",
        "abbreviation": "AR"
    },
    {
        "country": "Armenia",
        "abbreviation": "AM"
    },
    {
        "country": "Aruba",
        "abbreviation": "AW"
    },
    {
        "country": "Australia",
        "abbreviation": "AU"
    },
    {
        "country": "Austria",
        "abbreviation": "AT"
    },
    {
        "country": "Azerbaijan",
        "abbreviation": "AZ"
    },
    {
        "country": "Bahamas",
        "abbreviation": "BS"
    },
    {
        "country": "Bahrain",
        "abbreviation": "BH"
    },
    {
        "country": "Bangladesh",
        "abbreviation": "BD"
    },
    {
        "country": "Barbados",
        "abbreviation": "BB"
    },
    {
        "country": "Belarus",
        "abbreviation": "BY"
    },
    {
        "country": "Belgium",
        "abbreviation": "BE"
    },
    {
        "country": "Belize",
        "abbreviation": "BZ"
    },
    {
        "country": "Benin",
        "abbreviation": "BJ"
    },
    {
        "country": "Bermuda",
        "abbreviation": "BM"
    },
    {
        "country": "Bhutan",
        "abbreviation": "BT"
    },
    {
        "country": "Bolivia",
        "abbreviation": "BO"
    },
    {
        "country": "Bosnia and Herzegovina",
        "abbreviation": "BA"
    },
    {
        "country": "Botswana",
        "abbreviation": "BW"
    },
    {
        "country": "Bouvet Island",
        "abbreviation": "BV"
    },
    {
        "country": "Brazil",
        "abbreviation": "BR"
    },
    {
        "country": "British Indian Ocean Territory",
        "abbreviation": "IO"
    },
    {
        "country": "Brunei",
        "abbreviation": "BN"
    },
    {
        "country": "Bulgaria",
        "abbreviation": "BG"
    },
    {
        "country": "Burkina Faso",
        "abbreviation": "BF"
    },
    {
        "country": "Burundi",
        "abbreviation": "BI"
    },
    {
        "country": "Cambodia",
        "abbreviation": "KH"
    },
    {
        "country": "Cameroon",
        "abbreviation": "CM"
    },
    {
        "country": "Canada",
        "abbreviation": "CA"
    },
    {
        "country": "Cape Verde",
        "abbreviation": "CV"
    },
    {
        "country": "Cayman Islands",
        "abbreviation": "KY"
    },
    {
        "country": "Central African Republic",
        "abbreviation": "CF"
    },
    {
        "country": "Chad",
        "abbreviation": "TD"
    },
    {
        "country": "Chile",
        "abbreviation": "CL"
    },
    {
        "country": "China",
        "abbreviation": "CN"
    },
    {
        "country": "Christmas Island",
        "abbreviation": "CX"
    },
    {
        "country": "Cocos (Keeling) Islands",
        "abbreviation": "CC"
    },
    {
        "country": "Colombia",
        "abbreviation": "CO"
    },
    {
        "country": "Comoros",
        "abbreviation": "KM"
    },
    {
        "country": "Congo",
        "abbreviation": "CG"
    },
    {
        "country": "Cook Islands",
        "abbreviation": "CK"
    },
    {
        "country": "Costa Rica",
        "abbreviation": "CR"
    },
    {
        "country": "Croatia",
        "abbreviation": "HR"
    },
    {
        "country": "Cuba",
        "abbreviation": "CU"
    },
    {
        "country": "Cyprus",
        "abbreviation": "CY"
    },
    {
        "country": "Czech Republic",
        "abbreviation": "CZ"
    },
    {
        "country": "Denmark",
        "abbreviation": "DK"
    },
    {
        "country": "Djibouti",
        "abbreviation": "DJ"
    },
    {
        "country": "Dominica",
        "abbreviation": "DM"
    },
    {
        "country": "Dominican Republic",
        "abbreviation": "DO"
    },
    {
        "country": "East Timor",
        "abbreviation": "TP"
    },
    {
        "country": "Ecuador",
        "abbreviation": "EC"
    },
    {
        "country": "Egypt",
        "abbreviation": "EG"
    },
    {
        "country": "El Salvador",
        "abbreviation": "SV"
    },
    {
        "country": "Equatorial Guinea",
        "abbreviation": "GQ"
    },
    {
        "country": "Eritrea",
        "abbreviation": "ER"
    },
    {
        "country": "Estonia",
        "abbreviation": "EE"
    },
    {
        "country": "Eswatini",
        "abbreviation": "SZ"
    },
    {
        "country": "Ethiopia",
        "abbreviation": "ET"
    },
    {
        "country": "Falkland Islands",
        "abbreviation": "FK"
    },
    {
        "country": "Faroe Islands",
        "abbreviation": "FO"
    },
    {
        "country": "Fiji Islands",
        "abbreviation": "FJ"
    },
    {
        "country": "Finland",
        "abbreviation": "FI"
    },
    {
        "country": "France",
        "abbreviation": "FR"
    },
    {
        "country": "French Guiana",
        "abbreviation": "GF"
    },
    {
        "country": "French Polynesia",
        "abbreviation": "PF"
    },
    {
        "country": "French Southern territories",
        "abbreviation": "TF"
    },
    {
        "country": "Gabon",
        "abbreviation": "GA"
    },
    {
        "country": "Gambia",
        "abbreviation": "GM"
    },
    {
        "country": "Georgia",
        "abbreviation": "GE"
    },
    {
        "country": "Germany",
        "abbreviation": "DE"
    },
    {
        "country": "Ghana",
        "abbreviation": "GH"
    },
    {
        "country": "Gibraltar",
        "abbreviation": "GI"
    },
    {
        "country": "Greece",
        "abbreviation": "GR"
    },
    {
        "country": "Greenland",
        "abbreviation": "GL"
    },
    {
        "country": "Grenada",
        "abbreviation": "GD"
    },
    {
        "country": "Guadeloupe",
        "abbreviation": "GP"
    },
    {
        "country": "Guam",
        "abbreviation": "GU"
    },
    {
        "country": "Guatemala",
        "abbreviation": "GT"
    },
    {
        "country": "Guernsey",
        "abbreviation": "GG"
    },
    {
        "country": "Guinea",
        "abbreviation": "GN"
    },
    {
        "country": "Guinea-Bissau",
        "abbreviation": "GW"
    },
    {
        "country": "Guyana",
        "abbreviation": "GY"
    },
    {
        "country": "Haiti",
        "abbreviation": "HT"
    },
    {
        "country": "Heard Island and McDonald Islands",
        "abbreviation": "HM"
    },
    {
        "country": "Holy See (Vatican City State)",
        "abbreviation": "VA"
    },
    {
        "country": "Honduras",
        "abbreviation": "HN"
    },
    {
        "country": "Hong Kong",
        "abbreviation": "HK"
    },
    {
        "country": "Hungary",
        "abbreviation": "HU"
    },
    {
        "country": "Iceland",
        "abbreviation": "IS"
    },
    {
        "country": "India",
        "abbreviation": "IN"
    },
    {
        "country": "Indonesia",
        "abbreviation": "ID"
    },
    {
        "country": "Iran",
        "abbreviation": "IR"
    },
    {
        "country": "Iraq",
        "abbreviation": "IQ"
    },
    {
        "country": "Ireland",
        "abbreviation": "IE"
    },
    {
        "country": "Isle of Man",
        "abbreviation": "IM"
    },
    {
        "country": "Israel",
        "abbreviation": "IL"
    },
    {
        "country": "Italy",
        "abbreviation": "IT"
    },
    {
        "country": "Ivory Coast",
        "abbreviation": "CI"
    },
    {
        "country": "Jamaica",
        "abbreviation": "JM"
    },
    {
        "country": "Japan",
        "abbreviation": "JP"
    },
    {
        "country": "Jersey",
        "abbreviation": "JE"
    },
    {
        "country": "Jordan",
        "abbreviation": "JO"
    },
    {
        "country": "Kazakhstan",
        "abbreviation": "KZ"
    },
    {
        "country": "Kenya",
        "abbreviation": "KE"
    },
    {
        "country": "Kiribati",
        "abbreviation": "KI"
    },
    {
        "country": "Kuwait",
        "abbreviation": "KW"
    },
    {
        "country": "Kyrgyzstan",
        "abbreviation": "KG"
    },
    {
        "country": "Laos",
        "abbreviation": "LA"
    },
    {
        "country": "Latvia",
        "abbreviation": "LV"
    },
    {
        "country": "Lebanon",
        "abbreviation": "LB"
    },
    {
        "country": "Lesotho",
        "abbreviation": "LS"
    },
    {
        "country": "Liberia",
        "abbreviation": "LR"
    },
    {
        "country": "Libya",
        "abbreviation": "LY"
    },
    {
        "country": "Liechtenstein",
        "abbreviation": "LI"
    },
    {
        "country": "Lithuania",
        "abbreviation": "LT"
    },
    {
        "country": "Luxembourg",
        "abbreviation": "LU"
    },
    {
        "country": "Macao",
        "abbreviation": "MO"
    },
    {
        "country": "North Macedonia",
        "abbreviation": "MK"
    },
    {
        "country": "Madagascar",
        "abbreviation": "MG"
    },
    {
        "country": "Malawi",
        "abbreviation": "MW"
    },
    {
        "country": "Malaysia",
        "abbreviation": "MY"
    },
    {
        "country": "Maldives",
        "abbreviation": "MV"
    },
    {
        "country": "Mali",
        "abbreviation": "ML"
    },
    {
        "country": "Malta",
        "abbreviation": "MT"
    },
    {
        "country": "Marshall Islands",
        "abbreviation": "MH"
    },
    {
        "country": "Martinique",
        "abbreviation": "MQ"
    },
    {
        "country": "Mauritania",
        "abbreviation": "MR"
    },
    {
        "country": "Mauritius",
        "abbreviation": "MU"
    },
    {
        "country": "Mayotte",
        "abbreviation": "YT"
    },
    {
        "country": "Mexico",
        "abbreviation": "MX"
    },
    {
        "country": "Micronesia, Federated States of",
        "abbreviation": "FM"
    },
    {
        "country": "Moldova",
        "abbreviation": "MD"
    },
    {
        "country": "Monaco",
        "abbreviation": "MC"
    },
    {
        "country": "Mongolia",
        "abbreviation": "MN"
    },
    {
        "country": "Montenegro",
        "abbreviation": "ME"
    },
    {
        "country": "Montserrat",
        "abbreviation": "MS"
    },
    {
        "country": "Morocco",
        "abbreviation": "MA"
    },
    {
        "country": "Mozambique",
        "abbreviation": "MZ"
    },
    {
        "country": "Myanmar",
        "abbreviation": "MM"
    },
    {
        "country": "Namibia",
        "abbreviation": "NA"
    },
    {
        "country": "Nauru",
        "abbreviation": "NR"
    },
    {
        "country": "Nepal",
        "abbreviation": "NP"
    },
    {
        "country": "Netherlands",
        "abbreviation": "NL"
    },
    {
        "country": "Netherlands Antilles",
        "abbreviation": "AN"
    },
    {
        "country": "New Caledonia",
        "abbreviation": "NC"
    },
    {
        "country": "New Zealand",
        "abbreviation": "NZ"
    },
    {
        "country": "Nicaragua",
        "abbreviation": "NI"
    },
    {
        "country": "Niger",
        "abbreviation": "NE"
    },
    {
        "country": "Nigeria",
        "abbreviation": "NG"
    },
    {
        "country": "Niue",
        "abbreviation": "NU"
    },
    {
        "country": "Norfolk Island",
        "abbreviation": "NF"
    },
    {
        "country": "North Korea",
        "abbreviation": "KP"
    },
    {
        "country": "Northern Ireland",
        "abbreviation": "GB"
    },
    {
        "country": "Northern Mariana Islands",
        "abbreviation": "MP"
    },
    {
        "country": "Norway",
        "abbreviation": "NO"
    },
    {
        "country": "Oman",
        "abbreviation": "OM"
    },
    {
        "country": "Pakistan",
        "abbreviation": "PK"
    },
    {
        "country": "Palau",
        "abbreviation": "PW"
    },
    {
        "country": "Palestine",
        "abbreviation": "PS"
    },
    {
        "country": "Panama",
        "abbreviation": "PA"
    },
    {
        "country": "Papua New Guinea",
        "abbreviation": "PG"
    },
    {
        "country": "Paraguay",
        "abbreviation": "PY"
    },
    {
        "country": "Peru",
        "abbreviation": "PE"
    },
    {
        "country": "Philippines",
        "abbreviation": "PH"
    },
    {
        "country": "Pitcairn",
        "abbreviation": "PN"
    },
    {
        "country": "Poland",
        "abbreviation": "PL"
    },
    {
        "country": "Portugal",
        "abbreviation": "PT"
    },
    {
        "country": "Puerto Rico",
        "abbreviation": "PR"
    },
    {
        "country": "Qatar",
        "abbreviation": "QA"
    },
    {
        "country": "Reunion",
        "abbreviation": "RE"
    },
    {
        "country": "Romania",
        "abbreviation": "RO"
    },
    {
        "country": "Russia",
        "abbreviation": "RU"
    },
    {
        "country": "Rwanda",
        "abbreviation": "RW"
    },
    {
        "country": "Saint Helena",
        "abbreviation": "SH"
    },
    {
        "country": "Saint Kitts and Nevis",
        "abbreviation": "KN"
    },
    {
        "country": "Saint Lucia",
        "abbreviation": "LC"
    },
    {
        "country": "Saint Pierre and Miquelon",
        "abbreviation": "PM"
    },
    {
        "country": "Saint Vincent and the Grenadines",
        "abbreviation": "VC"
    },
    {
        "country": "Samoa",
        "abbreviation": "WS"
    },
    {
        "country": "San Marino",
        "abbreviation": "SM"
    },
    {
        "country": "Sao Tome and Principe",
        "abbreviation": "ST"
    },
    {
        "country": "Saudi Arabia",
        "abbreviation": "SA"
    },
    {
        "country": "Senegal",
        "abbreviation": "SN"
    },
    {
        "country": "Serbia",
        "abbreviation": "RS"
    },
    {
        "country": "Seychelles",
        "abbreviation": "SC"
    },
    {
        "country": "Sierra Leone",
        "abbreviation": "SL"
    },
    {
        "country": "Singapore",
        "abbreviation": "SG"
    },
    {
        "country": "Slovakia",
        "abbreviation": "SK"
    },
    {
        "country": "Slovenia",
        "abbreviation": "SI"
    },
    {
        "country": "Solomon Islands",
        "abbreviation": "SB"
    },
    {
        "country": "Somalia",
        "abbreviation": "SO"
    },
    {
        "country": "South Africa",
        "abbreviation": "ZA"
    },
    {
        "country": "South Georgia and the South Sandwich Islands",
        "abbreviation": "GS"
    },
    {
        "country": "South Korea",
        "abbreviation": "KR"
    },
    {
        "country": "South Sudan",
        "abbreviation": "SS"
    },
    {
        "country": "Spain",
        "abbreviation": "ES"
    },
    {
        "country": "Sri Lanka",
        "abbreviation": "LK"
    },
    {
        "country": "Sudan",
        "abbreviation": "SD"
    },
    {
        "country": "Suriname",
        "abbreviation": "SR"
    },
    {
        "country": "Svalbard and Jan Mayen",
        "abbreviation": "SJ"
    },
    {
        "country": "Sweden",
        "abbreviation": "SE"
    },
    {
        "country": "Switzerland",
        "abbreviation": "CH"
    },
    {
        "country": "Syria",
        "abbreviation": "SY"
    },
    {
        "country": "Tajikistan",
        "abbreviation": "TJ"
    },
    {
        "country": "Tanzania",
        "abbreviation": "TZ"
    },
    {
        "country": "Thailand",
        "abbreviation": "TH"
    },
    {
        "country": "The Democratic Republic of Congo",
        "abbreviation": "CD"
    },
    {
        "country": "Timor-Leste",
        "abbreviation": "TL"
    },
    {
        "country": "Togo",
        "abbreviation": "TG"
    },
    {
        "country": "Tokelau",
        "abbreviation": "TK"
    },
    {
        "country": "Tonga",
        "abbreviation": "TO"
    },
    {
        "country": "Trinidad and Tobago",
        "abbreviation": "TT"
    },
    {
        "country": "Tunisia",
        "abbreviation": "TN"
    },
    {
        "country": "Turkey",
        "abbreviation": "TR"
    },
    {
        "country": "Turkmenistan",
        "abbreviation": "TM"
    },
    {
        "country": "Turks and Caicos Islands",
        "abbreviation": "TC"
    },
    {
        "country": "Tuvalu",
        "abbreviation": "TV"
    },
    {
        "country": "Uganda",
        "abbreviation": "UG"
    },
    {
        "country": "Ukraine",
        "abbreviation": "UA"
    },
    {
        "country": "United Arab Emirates",
        "abbreviation": "AE"
    },
    {
        "country": "United Kingdom",
        "abbreviation": "UK"
    },
    {
        "country": "United States",
        "abbreviation": "US"
    },
    {
        "country": "United States Minor Outlying Islands",
        "abbreviation": "UM"
    },
    {
        "country": "Uruguay",
        "abbreviation": "UY"
    },
    {
        "country": "Uzbekistan",
        "abbreviation": "UZ"
    },
    {
        "country": "Vanuatu",
        "abbreviation": "VU"
    },
    {
        "country": "Venezuela",
        "abbreviation": "VE"
    },
    {
        "country": "Vietnam",
        "abbreviation": "VN"
    },
    {
        "country": "Virgin Islands, British",
        "abbreviation": "VG"
    },
    {
        "country": "Virgin Islands, U.S.",
        "abbreviation": "VI"
    },
    {
        "country": "Wallis and Futuna",
        "abbreviation": "WF"
    },
    {
        "country": "Western Sahara",
        "abbreviation": "EH"
    },
    {
        "country": "Yemen",
        "abbreviation": "YE"
    },
    {
        "country": "Zambia",
        "abbreviation": "ZM"
    },
    {
        "country": "Zimbabwe",
        "abbreviation": "ZW"
    }
]


export const CountryDataList: CountryDataListType[] = CountryCallingCode.map(item => {
    return {
        countryName: item.country,
        calling_code: item.calling_code,
        abbreviation: CountryByAbbreviation.find(i => i.country === item.country)?.abbreviation
    }
})