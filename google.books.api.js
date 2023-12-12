// https://www.googleapis.com/books/v1/volumes?printType=books&q=harrypotter

export const getGoogleBooksMockData = () => {


  const data = {
    "kind": "books#volumes",
    "totalItems": 334,
    "items": [
      {
        "kind": "books#volume",
        "id": "GZAoAQAAIAAJ",
        "etag": "H9iqXZCEMhk",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/GZAoAQAAIAAJ",
        "volumeInfo": {
          "title": "Harry Potter and the Deathly Hallows",
          "authors": [
            "J. K. Rowling"
          ],
          "publishedDate": "2007",
          "description": "\"The final adventure in J.K. Rowling's phenomenal, best-selling Harry Potter book series\"--Provided by publisher.",
          "industryIdentifiers": [
            {
              "type": "OTHER",
              "identifier": "UCSC:32106019703807"
            }
          ],
          "readingModes": {
            "text": false,
            "image": false
          },
          "pageCount": 792,
          "printType": "BOOK",
          "categories": [
            "Bildungsromans"
          ],
          "averageRating": 4.5,
          "ratingsCount": 92,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "6.5.2.0.preview.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=GZAoAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=GZAoAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=GZAoAQAAIAAJ&q=harrypotter&dq=harrypotter&hl=&as_pt=BOOKS&cd=1&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=GZAoAQAAIAAJ&dq=harrypotter&hl=&as_pt=BOOKS&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_and_the_Deathly_Hallows.html?hl=&id=GZAoAQAAIAAJ"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=GZAoAQAAIAAJ&hl=&as_pt=BOOKS&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "&quot;The final adventure in J.K. Rowling&#39;s phenomenal, best-selling Harry Potter book series&quot;--Provided by publisher."
        }
      },
      {
        "kind": "books#volume",
        "id": "4mtauAEACAAJ",
        "etag": "5jAyZBPL894",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/4mtauAEACAAJ",
        "volumeInfo": {
          "title": "Harry Potter and the Prisoner of Azkaban",
          "authors": [
            "J. K. Rowling"
          ],
          "publisher": "Arthur A. Levine Books",
          "publishedDate": "2018-06-26",
          "description": "Harry Potter must confront the devious and dangerous wizard responsible for his parents' deaths.",
          "industryIdentifiers": [
            {
              "type": "ISBN_10",
              "identifier": "1536443743"
            },
            {
              "type": "ISBN_13",
              "identifier": "9781536443745"
            }
          ],
          "readingModes": {
            "text": false,
            "image": false
          },
          "pageCount": 734,
          "printType": "BOOK",
          "categories": [
            "Escaped prisoners"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "preview-1.0.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=4mtauAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=4mtauAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=4mtauAEACAAJ&dq=harrypotter&hl=&as_pt=BOOKS&cd=2&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=4mtauAEACAAJ&dq=harrypotter&hl=&as_pt=BOOKS&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_and_the_Prisoner_of_Azkaban.html?hl=&id=4mtauAEACAAJ"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=4mtauAEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "Harry Potter must confront the devious and dangerous wizard responsible for his parents&#39; deaths."
        }
      },
      {
        "kind": "books#volume",
        "id": "PRL-jg9aO7YC",
        "etag": "Ozi88/Xjfsg",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/PRL-jg9aO7YC",
        "volumeInfo": {
          "title": "Harry Potter, the Familiar Hero",
          "authors": [
            "Maximilian Horsthemke"
          ],
          "publisher": "GRIN Verlag",
          "publishedDate": "2011-05",
          "description": "Bachelor Thesis from the year 2010 in the subject English Language and Literature Studies - Literature, grade: 1,3, Ruhr-University of Bochum (Anglistik/Amerikanistik), language: English, abstract: Since the publication of the first book in the series in 1997, Harry Potter has become a worldwide phenomenon. One can think of several explanations for this lasting popularity. Maybe one reason for it lies in the use of certain archetypes and story arcs that can be found in popular tales. This thesis will examine in what way and to what extent Harry Potter can be added to the archetypal heroes the American mythologist Joseph Campbell has described in his book \"The Hero with a Thousand Faces\" in 1949, first by lining out the different stages Campbell laid out in his book and then by applying them to the Harry Potter novels. The analysis is divided according to the three stages Campbell uses (Departure - Initiation - Return).",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9783640903726"
            },
            {
              "type": "ISBN_10",
              "identifier": "3640903722"
            }
          ],
          "readingModes": {
            "text": false,
            "image": true
          },
          "pageCount": 77,
          "printType": "BOOK",
          "categories": [
            "Heroes in literature"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.3.4.0.preview.1",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=PRL-jg9aO7YC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=PRL-jg9aO7YC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=PRL-jg9aO7YC&printsec=frontcover&dq=harrypotter&hl=&as_pt=BOOKS&cd=3&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=PRL-jg9aO7YC&dq=harrypotter&hl=&as_pt=BOOKS&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_the_Familiar_Hero.html?hl=&id=PRL-jg9aO7YC"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com/books/download/Harry_Potter_the_Familiar_Hero-sample-pdf.acsm?id=PRL-jg9aO7YC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=PRL-jg9aO7YC&hl=&as_pt=BOOKS&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "Bachelor Thesis from the year 2010 in the subject English Language and Literature Studies - Literature, grade: 1,3, Ruhr-University of Bochum (Anglistik/Amerikanistik), language: English, abstract: Since the publication of the first book in ..."
        }
      },
      {
        "kind": "books#volume",
        "id": "DKcWE3WXoj8C",
        "etag": "q80bxFYZXiU",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/DKcWE3WXoj8C",
        "volumeInfo": {
          "title": "Harry Potter and International Relations",
          "authors": [
            "Daniel H. Nexon",
            "Iver B. Neumann"
          ],
          "publisher": "Rowman & Littlefield",
          "publishedDate": "2006",
          "description": "Drawing on a range of historical and sociological sources, this work shows how aspects of Harry's world contain aspects of our own. It also includes chapters on the political economy of the franchise, and on the problems of studying popular culture.",
          "industryIdentifiers": [
            {
              "type": "ISBN_10",
              "identifier": "0742539598"
            },
            {
              "type": "ISBN_13",
              "identifier": "9780742539594"
            }
          ],
          "readingModes": {
            "text": false,
            "image": true
          },
          "pageCount": 262,
          "printType": "BOOK",
          "categories": [
            "Political Science"
          ],
          "averageRating": 3.5,
          "ratingsCount": 8,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.2.2.0.preview.1",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=DKcWE3WXoj8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=DKcWE3WXoj8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=DKcWE3WXoj8C&printsec=frontcover&dq=harrypotter&hl=&as_pt=BOOKS&cd=4&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=DKcWE3WXoj8C&dq=harrypotter&hl=&as_pt=BOOKS&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_and_International_Relations.html?hl=&id=DKcWE3WXoj8C"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com/books/download/Harry_Potter_and_International_Relations-sample-pdf.acsm?id=DKcWE3WXoj8C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=DKcWE3WXoj8C&hl=&as_pt=BOOKS&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "Drawing on a range of historical and sociological sources, this work shows how aspects of Harry&#39;s world contain aspects of our own."
        }
      },
      {
        "kind": "books#volume",
        "id": "L18VBQAAQBAJ",
        "etag": "UEil3Tw96iI",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/L18VBQAAQBAJ",
        "volumeInfo": {
          "title": "The Psychology of Harry Potter",
          "subtitle": "An Unauthorized Examination Of The Boy Who Lived",
          "authors": [
            "Neil Mulholland"
          ],
          "publisher": "BenBella Books",
          "publishedDate": "2007-04-10",
          "description": "Harry Potter has provided a portal to the wizarding world for millions of readers, but an examination of Harry, his friends and his enemies will take us on yet another journey: through the psyche of the Muggle (and wizard!) mind. The twists and turns of the series, as well as the psychological depth and complexity of J. K. Rowling’s characters, have kept fans enthralled with and puzzling over the many mysteries that permeate Hogwarts and beyond: • Do the Harry Potter books encourage disobedience? • Why is everyone so fascinated by Professor Lupin? • What exactly will Harry and his friends do when they finally pass those N.E.W.T.s? • Do even wizards live by the ticking of the clock? • Is Harry destined to end up alone? And why did it take Ron and Hermione so long to get together? Now, in The Psychology of Harry Potter, leading psychologists delve into the ultimate Chamber of Secrets, analyzing human mind and motivation by examining the themes and characters that make the Harry Potter books the bestselling fantasy series of all time. Grab a spot on the nearest couch, and settle in for some fresh revelations about our favorite young wizard!",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781932100884"
            },
            {
              "type": "ISBN_10",
              "identifier": "1932100881"
            }
          ],
          "readingModes": {
            "text": false,
            "image": false
          },
          "pageCount": 338,
          "printType": "BOOK",
          "categories": [
            "Literary Criticism"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.1.2.0.preview.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=L18VBQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=L18VBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=L18VBQAAQBAJ&printsec=frontcover&dq=harrypotter&hl=&as_pt=BOOKS&cd=5&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=L18VBQAAQBAJ&dq=harrypotter&hl=&as_pt=BOOKS&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/The_Psychology_of_Harry_Potter.html?hl=&id=L18VBQAAQBAJ"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=L18VBQAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "Now, in The Psychology of Harry Potter, leading psychologists delve into the ultimate Chamber of Secrets, analyzing human mind and motivation by examining the themes and characters that make the Harry Potter books the bestselling fantasy ..."
        }
      },
      {
        "kind": "books#volume",
        "id": "FKziXsnqLTEC",
        "etag": "Ato30fTrBlM",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/FKziXsnqLTEC",
        "volumeInfo": {
        "title": "The Lord of the Rings: The Fellowship of the Ring, The Two Towers, The Return of the King",
        "authors": [
        "J. R. R. Tolkien"
        ],
        "publisher": "HarperCollins UK",
        "publishedDate": "2009-04-20",
        "description": "All three parts of the epic masterpiece The Lord of the Rings – The Fellowship of the Ring, The Two Towers & The Return of the King – available as one download, featuring the definitive edition of the text, hyperlinked footnotes and page references, and 3 maps including a detailed map of Middle-earth.",
        "industryIdentifiers": [
        {
        "type": "ISBN_13",
        "identifier": "9780007322596"
        },
        {
        "type": "ISBN_10",
        "identifier": "0007322593"
        }
        ],
        "readingModes": {
        "text": true,
        "image": false
        },
        "pageCount": 1221,
        "printType": "BOOK",
        "categories": [
        "Fiction"
        ],
        "averageRating": 4.5,
        "ratingsCount": 55,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "3.28.21.0.preview.2",
        "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
        },
        "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=FKziXsnqLTEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=FKziXsnqLTEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=FKziXsnqLTEC&printsec=frontcover&dq=lordoftherings&hl=&as_pt=BOOKS&cd=1&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=FKziXsnqLTEC&dq=lordoftherings&hl=&as_pt=BOOKS&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/The_Lord_of_the_Rings_The_Fellowship_of.html?hl=&id=FKziXsnqLTEC"
        },
        "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
        },
        "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
        "isAvailable": true,
        "acsTokenLink": "http://books.google.com/books/download/The_Lord_of_the_Rings_The_Fellowship_of-sample-epub.acsm?id=FKziXsnqLTEC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
        "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=FKziXsnqLTEC&hl=&as_pt=BOOKS&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
        },
        "searchInfo": {
        "textSnippet": "All three parts of the epic masterpiece The Lord of the Rings – The Fellowship of the Ring, The Two Towers &amp; The Return of the King – available as one download, featuring the definitive edition of the text, hyperlinked footnotes and ..."
        }
        },
        {
        "kind": "books#volume",
        "id": "GuLZAAAAMAAJ",
        "etag": "clPCFhfSnHw",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/GuLZAAAAMAAJ",
        "volumeInfo": {
        "title": "The Lord of the Rings",
        "authors": [
        "John Ronald Reuel Tolkien"
        ],
        "publisher": "William Morrow",
        "publishedDate": "2004",
        "description": "The Fellowship of the Ring, part one of J.R.R. Tolkien's",
        "industryIdentifiers": [
        {
        "type": "OTHER",
        "identifier": "PSU:000062491532"
        }
        ],
        "readingModes": {
        "text": false,
        "image": false
        },
        "pageCount": 1200,
        "printType": "BOOK",
        "categories": [
        "Baggins, Frodo (Fictitious character)"
        ],
        "averageRating": 4.5,
        "ratingsCount": 29,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "4.3.2.0.preview.0",
        "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
        },
        "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=GuLZAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=GuLZAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=GuLZAAAAMAAJ&q=lordoftherings&dq=lordoftherings&hl=&as_pt=BOOKS&cd=2&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=GuLZAAAAMAAJ&dq=lordoftherings&hl=&as_pt=BOOKS&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/The_Lord_of_the_Rings.html?hl=&id=GuLZAAAAMAAJ"
        },
        "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
        },
        "accessInfo": {
        "country": "IL",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
        "isAvailable": false
        },
        "pdf": {
        "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=GuLZAAAAMAAJ&hl=&as_pt=BOOKS&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
        },
        "searchInfo": {
        "textSnippet": "&quot; The text is fully correctedQunder the supervision of Christopher TolkienQto meet the author&#39;s exacting wishes, and includes two large-format fold-out maps, a ribbon placemarker, and exceptionally elegant packaging. 0-618-51765-0$100.00 / ..."
        }
        },
        {
        "kind": "books#volume",
        "id": "u18qAQAAIAAJ",
        "etag": "4KpBBHlPL/g",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/u18qAQAAIAAJ",
        "volumeInfo": {
        "title": "J.R.R. Tolkien's The Lord of the Rings",
        "authors": [
        "Harold Bloom"
        ],
        "publisher": "Chelsea House",
        "publishedDate": "2008",
        "description": "This book, a collection of contemporary criticism on J.R.R. Tolkien's",
        "industryIdentifiers": [
        {
        "type": "OTHER",
        "identifier": "UCSC:32106019989547"
        }
        ],
        "readingModes": {
        "text": false,
        "image": false
        },
        "pageCount": 224,
        "printType": "BOOK",
        "categories": [
        "Fantasy fiction, English"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.4.1.0.preview.0",
        "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
        },
        "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=u18qAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=u18qAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=u18qAQAAIAAJ&q=lordoftherings&dq=lordoftherings&hl=&as_pt=BOOKS&cd=3&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=u18qAQAAIAAJ&dq=lordoftherings&hl=&as_pt=BOOKS&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/J_R_R_Tolkien_s_The_Lord_of_the_Rings.html?hl=&id=u18qAQAAIAAJ"
        },
        "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
        },
        "accessInfo": {
        "country": "IL",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
        "isAvailable": false
        },
        "pdf": {
        "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=u18qAQAAIAAJ&hl=&as_pt=BOOKS&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
        },
        "searchInfo": {
        "textSnippet": "This book, a collection of contemporary criticism on J.R.R. Tolkien&#39;s &quot;The Lord of the Rings,&quot; contains essays by Michael Moorcock, Jane Chance, Michael N. Stanton, Mark T. Hooker, Jared Lobdell, Marjorie Burns, Andrew Lynch, Sue Zlosnik, ..."
        }
        },
        {
        "kind": "books#volume",
        "id": "Dw-NAgAAQBAJ",
        "etag": "4n0Xxz9MKr0",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/Dw-NAgAAQBAJ",
        "volumeInfo": {
        "title": "The Lord of the Rings and Philosophy",
        "subtitle": "One Book to Rule Them All",
        "authors": [
        "Gregory Bassham",
        "Eric Bronson"
        ],
        "publisher": "Open Court",
        "publishedDate": "2013-11-13",
        "description": "The Lord of the Rings is intended to be applicable to the real world of relationships, religion, pleasure, pain, and politics. Tolkien himself said that his grand tale of wizards, orcs, hobbits, and elves was aimed at truth and good morals in the actual world. Analysis of the popular appeal of The Lord of the Rings (on websites and elsewhere) shows that Tolkien fans are hungry for discussion of the urgent moral and cosmological issues arising out of this fantastic epic story. Can political power be wielded for good, or must it always corrupt? Does technology destroy the truly human? Is it morally wrong to give up hope? Can we find meaning in chance events? In The Lord of the Rings and Philosophy, seventeen young philosophy professors, all of them ardent Tolkien fans and most of them contributors to the four earlier volumes in the Popular Culture and Philosophy series, address some of these important issues and show how clues to their solutions may be found in the imaginary world of Middle-earth. The book is divided into five sections, concerned with Power and the Ring, the Quest for Happiness, Good and Evil in Middle-earth, Time and Mortality, and the Relevance",
        "industryIdentifiers": [
        {
        "type": "ISBN_13",
        "identifier": "9780812698060"
        },
        {
        "type": "ISBN_10",
        "identifier": "0812698061"
        }
        ],
        "readingModes": {
        "text": true,
        "image": true
        },
        "pageCount": 336,
        "printType": "BOOK",
        "categories": [
        "Philosophy"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "0.5.5.0.preview.3",
        "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
        },
        "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=Dw-NAgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=Dw-NAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=Dw-NAgAAQBAJ&printsec=frontcover&dq=lordoftherings&hl=&as_pt=BOOKS&cd=4&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=Dw-NAgAAQBAJ&dq=lordoftherings&hl=&as_pt=BOOKS&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/The_Lord_of_the_Rings_and_Philosophy.html?hl=&id=Dw-NAgAAQBAJ"
        },
        "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
        },
        "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
        "isAvailable": true,
        "acsTokenLink": "http://books.google.com/books/download/The_Lord_of_the_Rings_and_Philosophy-sample-epub.acsm?id=Dw-NAgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
        "isAvailable": true,
        "acsTokenLink": "http://books.google.com/books/download/The_Lord_of_the_Rings_and_Philosophy-sample-pdf.acsm?id=Dw-NAgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=Dw-NAgAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
        },
        "searchInfo": {
        "textSnippet": "The book is divided into five sections, concerned with Power and the Ring, the Quest for Happiness, Good and Evil in Middle-earth, Time and Mortality, and the Relevance"
        }
        },
        {
        "kind": "books#volume",
        "id": "8NjFAQAACAAJ",
        "etag": "1L0mCWctPVQ",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/8NjFAQAACAAJ",
        "volumeInfo": {
        "title": "The Lord of the Rings",
        "authors": [
        "J. R. R. Tolkien"
        ],
        "publisher": "Houghton Mifflin",
        "publishedDate": "2003-11",
        "industryIdentifiers": [
        {
        "type": "ISBN_10",
        "identifier": "0618433228"
        },
        {
        "type": "ISBN_13",
        "identifier": "9780618433223"
        }
        ],
        "readingModes": {
        "text": false,
        "image": false
        },
        "pageCount": 0,
        "printType": "BOOK",
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=8NjFAQAACAAJ&dq=lordoftherings&hl=&as_pt=BOOKS&cd=5&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=8NjFAQAACAAJ&dq=lordoftherings&hl=&as_pt=BOOKS&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/The_Lord_of_the_Rings.html?hl=&id=8NjFAQAACAAJ"
        },
        "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
        },
        "accessInfo": {
        "country": "IL",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
        "isAvailable": false
        },
        "pdf": {
        "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=8NjFAQAACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
        }
        },
        {
        "kind": "books#volume",
        "id": "xFr92V2k3PIC",
        "etag": "RMOBGgPbXIk",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/xFr92V2k3PIC",
        "volumeInfo": {
        "title": "The Fellowship of the Ring (The Lord of the Rings, Book 1)",
        "authors": [
        "J. R. R. Tolkien"
        ],
        "publisher": "HarperCollins UK",
        "publishedDate": "2009-04-20",
        "description": "The first part of J. R. R. Tolkien’s epic adventure THE LORD OF THE RINGS ‘A most remarkable feat’ Guardian",
        "industryIdentifiers": [
        {
        "type": "ISBN_13",
        "identifier": "9780007322497"
        },
        {
        "type": "ISBN_10",
        "identifier": "0007322496"
        }
        ],
        "readingModes": {
        "text": true,
        "image": false
        },
        "pageCount": 442,
        "printType": "BOOK",
        "categories": [
        "Fiction"
        ],
        "averageRating": 4.5,
        "ratingsCount": 13,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "2.20.22.0.preview.2",
        "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
        },
        "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=xFr92V2k3PIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=xFr92V2k3PIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=xFr92V2k3PIC&printsec=frontcover&dq=lordoftherings&hl=&as_pt=BOOKS&cd=6&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=xFr92V2k3PIC&dq=lordoftherings&hl=&as_pt=BOOKS&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/The_Fellowship_of_the_Ring_The_Lord_of_t.html?hl=&id=xFr92V2k3PIC"
        },
        "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
        },
        "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
        "isAvailable": true,
        "acsTokenLink": "http://books.google.com/books/download/The_Fellowship_of_the_Ring_The_Lord_of_t-sample-epub.acsm?id=xFr92V2k3PIC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
        "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=xFr92V2k3PIC&hl=&as_pt=BOOKS&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
        },
        "searchInfo": {
        "textSnippet": "The first part of J. R. R. Tolkien’s epic adventure THE LORD OF THE RINGS ‘A most remarkable feat’ Guardian"
        }
        },
    ]
  }

  
  return Promise.resolve(data)

}